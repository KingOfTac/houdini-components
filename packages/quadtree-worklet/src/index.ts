import {
	createProperties,
	IntrinsicSizesResultOptions,
	FragmentResultOptions,
	LayoutOptions,
	ChildDisplayType,
	LayoutSizingMode,
	CSSLayout,
	BreakToken
} from '@kingoftac/worklet-utilities';
import type {
	StylePropertyMapReadOnly,
	LayoutEdges,
	LayoutChild,
	LayoutConstraintOptions
} from '@kingoftac/worklet-utilities';
import {
	Quadtree,
	randomBias,
	randomSnap,
	random
} from './quadtree/quadtree';

const prefix: string = 'quadtree';
const props = createProperties(prefix, [
	{ name: 'points', type: 'number', default: 100 },
	{ name: 'gaps', type: 'number', default: 5 },
	{ name: 'maxObjects', type: 'number', default: 10 },
	{ name: 'maxLevels', type: 'number', default: 4 }
]);

function getGridArea(bounds, colSize, rowSize) {
	return {
		col: {
			start: bounds.x / colSize,
			end: (bounds.x + bounds.width) / colSize
		},
		row: {
			start: bounds.y / rowSize,
			end: (bounds.y + bounds.height) / rowSize
		}
	};
}

function getNodes(node: any) {
	const nodes: any[] = [];

	(function r(node) {
		if (node.nodes.length === 0) {
			nodes.push(node);
		} else {
			node.nodes.forEach(n => r(n))
		}
	})(node);

	return nodes;
}

function stringToHash(string) {
	let hash = 0;

	if (string.length == 0) return hash;

	for (let i = 0; i < string.length; i++) {
		let char = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}

	return hash;
}

function createOrGetQuadtree(options) {
	let identHash = 0;
	// @ts-ignore
	Object.values(options).forEach(i => identHash += stringToHash(i.toString()));

	if (layouts.has(identHash)) {
		console.log(layouts.get(identHash), 'cache');

		return layouts.get(identHash);
	} else {
		const focus = {
			x: random(0, options.width),
			y: random(0, options.height)
		};

		const points = [...Array(options.points)].map(() => {
			return {
				x: randomBias(0, options.width, focus.x, 1),
				y: randomBias(0, options.height, focus.y, 1),
				width: 1,
				height: 1
			};
		});

		const qt = new Quadtree({
			x: 0,
			y: 0,
			width: options.width,
			height: options.height
		}, options.maxObjects, options.maxLevels);

		points.forEach(point => qt.insert(point));

		layouts.set(identHash, qt)

		console.log(qt, 'first');
		return qt;
	}
}

const layouts = new Map();

/**
 * CSS Layout Worklet to produce a grid-like layout based on Quadtrees
 * 
 * @remarks
 * 
 * @alpha
 */

@CSSLayout('quadtree')
export class QuadtreeLayout {
	static LayoutOptions: LayoutOptions = {
		childDisplay: ChildDisplayType.normal,
		sizing: LayoutSizingMode.blockLike
	}

	static get inputProperties() {
		return props.variableStrings;
	}

	static get childInputProperties() {
		return [];
	}

	async intrinsicSizes(children: LayoutChild[], edges: LayoutEdges, styleMap: StylePropertyMapReadOnly): Promise<IntrinsicSizesResultOptions> {
		const childrenSizes = await Promise.all(children.map(child => {
			return child.intrinsicSizes();
		}));

		const maxContentSize = childrenSizes.reduce((sum, childSizes) => {
			return sum + childSizes.maxContentSize;
		}, 0) + edges.inline;

		const minContentSize = childrenSizes.reduce((sum, childSizes) => {
			return sum + childSizes.minContentSize;
		}, 0) + edges.inline;

		return { minContentSize, maxContentSize };
	}

	async layout(
		children: LayoutChild[],
		edges: LayoutEdges,
		constraints: LayoutConstraintOptions,
		styleMap: StylePropertyMapReadOnly,
		breakToken: BreakToken
	): Promise<FragmentResultOptions> {
		const config: any = {};

		props.propsMap.forEach((prop: any) => config[prop.name] = prop.value(styleMap.get(prop.variable)) || prop.default);

		console.log(config);

		const availableInlineSize = constraints.fixedInlineSize! - edges.inline;
		const availableBlockSize = constraints.fixedBlockSize
			? constraints.fixedBlockSize - edges.block
			: availableInlineSize;

		const qt = createOrGetQuadtree({
			width: availableInlineSize,
			height: availableBlockSize,
			maxObjects: config.maxObjects,
			maxLevels: config.maxLevels,
			points: config.points
		});


		// TODO: move all grid code to other function above.
		const maxSubdivisions = Math.pow(2, config.maxLevels);
		const colSize = availableInlineSize / maxSubdivisions;
		const rowSize = availableBlockSize / maxSubdivisions;

		const grid = {
			width: availableInlineSize,
			height: availableBlockSize,
			cols: maxSubdivisions,
			rows: maxSubdivisions,
			areas: getNodes(qt).map(({ bounds }) => {
				return {
					x: bounds.x + config.gaps,
					y: bounds.y + config.gaps,
					width: bounds.width - config.gaps,
					height: bounds.height - config.gaps,
					...getGridArea(bounds, colSize, rowSize)
				}
			})
		}

		// const unconstrainedSizes: number[] = [];
		// const unconstrainedChildFragments = await Promise.all(
		// 	children.map(child =>
		// 		child.layoutNextFragment({
		// 			availableInlineSize,
		// 			availableBlockSize
		// 		})
		// 	)
		// );

		// const totalSize = unconstrainedChildFragments.reduce((sum, fragment, idx) => {
		// 	unconstrainedSizes[idx] = fragment.inlineSize;
		// 	return sum + fragment.inlineSize;
		// }, 0);

		// const remainingSpace = Math.max(0, availableInlineSize - totalSize);
		// const extraSpace = remainingSpace / children.length;

		const childFragments = await Promise.all(
			children.map((child, i) =>
				child.layoutNextFragment({
					fixedInlineSize: grid.areas[i].width,
					fixedBlockSize: grid.areas[i].height,
				})
			)
		);

		for (let fragment of childFragments) {
			const index = childFragments.indexOf(fragment);
			const area = grid.areas[index];

			fragment.inlineOffset = area.x;
			fragment.blockOffset = area.y;
		}

		return { autoBlockSize: 0, childFragments }
	}
}