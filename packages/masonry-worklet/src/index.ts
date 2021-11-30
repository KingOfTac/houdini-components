import {
	createProperties,
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

const prefix:string = 'masonry';
const props = createProperties(prefix, [
	{ name: 'gaps', type: 'number', default: 10 },
	{ name: 'columns', type: 'number', default: 3 },
]);

/**
 * CSS Layout Worklet to produce masonry columns
 * 
 * @remarks
 * 
 * @alpha
 */

@CSSLayout('masonry')
export class MasonryLayout {
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

	async intrinsicSizes() {  }

	async layout(
		children: LayoutChild[], 
		edges: LayoutEdges, 
		constraints: LayoutConstraintOptions, 
		styleMap: StylePropertyMapReadOnly, 
		breaktoken: BreakToken
	): Promise<FragmentResultOptions> {
		const config: any = {};
		const inlineSize = constraints.fixedInlineSize - edges.inline;

		props.propsMap.forEach((prop: any) => config[prop.name] = prop.value(styleMap.get(prop.variable)) || prop.default);

		console.log(config);

		const padding = config.gaps;
		let columns= config.columns

		const childInlineSize = (inlineSize - ((columns + 1) * padding)) / columns;
		const childFragments = await Promise.all(children.map(child => {
			return child.layoutNextFragment({ fixedInlineSize: childInlineSize });
		}));

		let autoBlockSize = 0;
		const columnOffsets = Array(columns).fill(0);
		for (let childFragment of childFragments) {
			const min = columnOffsets.reduce((acc, val, idx) => {
				if (!acc || val < acc.val) {
					return { idx, val };
				}

				return acc;
			}, { val: +Infinity, idx: -1 });

			childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
			childFragment.blockOffset = padding + min.val;

			columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
			autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
		}

		return { autoBlockSize, childFragments };
	}
}