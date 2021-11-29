import { createProperties } from '@kingoftac/worklet-utilities';

const prefix:string = 'masonry';
const props = createProperties(prefix, [
	{ name: 'color', type: 'string' },
	{ name: 'sides', type: 'number' },
	{ name: 'rotation', type: 'number' },
	{ name: 'radius', type: 'number' },
	{ name: 'rounded', type: 'boolean' }
]);

class MasonryLayout {
	static get inputProperties() {
		return ['--padding', '--columns'];
	}

	// @ts-ignore
	async intrinsicSizes() {  }
	async layout(children, edges, constraints, styleMap) {
		const inlineSize = constraints.fixedInlineSize - edges.inline;

		const padding = parseInt(styleMap.get('--padding').toString());
		const columnValue = styleMap.get('--columns').toString();

		let columns = parseInt(columnValue);
		if (columnValue == 'auto' || !columns) {
			columns = Math.ceil(inlineSize / 350);
		}

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

			// @ts-ignore
			childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
			// @ts-ignore
			childFragment.blockOffset = padding + min.val;

			// @ts-ignore
			columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
			autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
		}

		return { autoBlockSize, childFragments };
	}
}

// @ts-ignore
registerLayout('masonry', MasonryLayout);