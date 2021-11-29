import type { FrozenArray, StylePropertyMapReadOnly } from '../types';

/**
 * Layout Worklet Definitions
 * 
 * @remarks
*/
export enum ChildDisplayType {
	block = 'block',
	normal = 'normal'
}

export enum LayoutSizingMode {
	blockLike = 'block-like',
	manual = 'manual'
}

export enum BlockFragmentationType {
	none = 'none',
	page = 'page',
	column = 'column',
	region = 'region'
}

export enum BreakType {
	none = 'none',
	line = 'line',
	page = 'page',
	column = 'column',
	region = 'region'
}

export interface IntrinsicSizes {
	readonly minContentSize: number;
	readonly maxContentSize: number;
}

export interface LayoutFragment {
	readonly inlineSize: number;
	readonly blockSize: number;

	inlineOffset: number;
	blockOffset: number;

	readonly data: any;
	readonly breakToken?: ChildBreakToken;
}

export class LayoutConstraintOptions {
	availableInlineSize?: number | null;
	availableBlockSize?: number | null;
	fixedInlineSize?: number | null;
	fixedBlockSize?: number | null;
	percentageInlineSize?: number | null;
	percentageBlockSize?: number | null;
	blockFragmentationOffset?: number | null;
	blockFragmentationType?: BlockFragmentationType = BlockFragmentationType.none;
	data?: any;
}

export interface ChildBreakToken {
	readonly breakType: BreakType;
	readonly child: LayoutChild;
}

export interface BreakToken {
	readonly childBreakTokens: FrozenArray<ChildBreakToken>;
	data: any;
}

export class BreakTokenOptions {
	childBreakTokens?: ChildBreakToken[];
	data: any | null;
}

export interface LayoutConstraints {
	data: any;
	fixedBlockSize: number;
	fixedInlineSize: number;
}

export declare class LayoutChild {
	readonly styleMap: StylePropertyMapReadOnly;
	
	intrinsicSizes(): Promise<IntrinsicSizes>;
	layoutNextFragment(constraints: LayoutConstraintOptions, breakToken?: ChildBreakToken | null): Promise<LayoutFragment>;
}

export type LayoutOptions = {
	childDisplay: ChildDisplayType;
	sizing: LayoutSizingMode;
}

export interface LayoutEdges {
	readonly inlineStart: number;
	readonly inlineEnd: number;
	readonly blockStart: number;
	readonly blockEnd: number;

	readonly inline: number;
	readonly block: number;
}

export class FragmentResultOptions {
	inlineSize?: number;
	blockSize?: number;
	autoBlockSize?: number;
	childFragments?: LayoutFragment[];
	data?: any | null;
	breakToken?: BreakTokenOptions | null;
}

export interface FragmentResult {
	constructor(options?: FragmentResultOptions | {});
	readonly inlineSize: number;
	readonly blockSize: number;
}

export class IntrinsicSizesResultOptions {
	minContentSize: number;
	maxContentSize: number;
}

export interface LayoutDefinition {
	readonly inputProperties: DOMStringList;
	readonly childInputProperties: DOMStringList;
	layoutOptions?: LayoutOptions;

	layout(
		children: LayoutChild[],
		edges: LayoutEdges,
		constraints: LayoutConstraints,
		styleMap: StylePropertyMapReadOnly,
		breakToken: BreakToken
	): Promise<FragmentResultOptions | FragmentResult>;
	
	intrinsicSizes(
		children: LayoutChild[],
		edges: LayoutEdges,
		styleMap: StylePropertyMapReadOnly
	): Promise<IntrinsicSizesResultOptions>;
}

export class LayoutDefinition {
	readonly inputProperties: DOMStringList;
	readonly childInputProperties: DOMStringList;
	layoutOptions?: LayoutOptions;

	async layout(
		children: LayoutChild[],
		edges: LayoutEdges,
		constraints: LayoutConstraints,
		styleMap: StylePropertyMapReadOnly
	): Promise<FragmentResultOptions | FragmentResult> {
		return new FragmentResultOptions();
	}

	async intrinsicSizes(
		children: LayoutChild[],
		edges: LayoutEdges,
		styleMap: StylePropertyMapReadOnly
	): Promise<IntrinsicSizesResultOptions> {
		return new IntrinsicSizesResultOptions(); 
	}
}

export interface DocumentLayoutDefinition {
	inputProperties: DOMStringList;
	childInputProperties: DOMStringList;
	layoutOptions: LayoutOptions;
}