import type { FrozenArray, StylePropertyMapReadOnly } from '../types';
/**
 * Layout Worklet Definitions
 *
 * @remarks
*/
export declare enum ChildDisplayType {
    block = "block",
    normal = "normal"
}
export declare enum LayoutSizingMode {
    blockLike = "block-like",
    manual = "manual"
}
export declare enum BlockFragmentationType {
    none = "none",
    page = "page",
    column = "column",
    region = "region"
}
export declare enum BreakType {
    none = "none",
    line = "line",
    page = "page",
    column = "column",
    region = "region"
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
export declare class LayoutConstraintOptions {
    availableInlineSize?: number | null;
    availableBlockSize?: number | null;
    fixedInlineSize?: number | null;
    fixedBlockSize?: number | null;
    percentageInlineSize?: number | null;
    percentageBlockSize?: number | null;
    blockFragmentationOffset?: number | null;
    blockFragmentationType?: BlockFragmentationType;
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
export declare class BreakTokenOptions {
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
export declare type LayoutOptions = {
    childDisplay: ChildDisplayType;
    sizing: LayoutSizingMode;
};
export interface LayoutEdges {
    readonly inlineStart: number;
    readonly inlineEnd: number;
    readonly blockStart: number;
    readonly blockEnd: number;
    readonly inline: number;
    readonly block: number;
}
export declare class FragmentResultOptions {
    inlineSize?: number;
    blockSize?: number;
    autoBlockSize?: number;
    childFragments?: LayoutFragment[];
    data?: any | null;
    breakToken?: BreakTokenOptions | null;
}
export interface FragmentResult {
    constructor(options?: FragmentResultOptions | {}): any;
    readonly inlineSize: number;
    readonly blockSize: number;
}
export declare class IntrinsicSizesResultOptions {
    minContentSize: number;
    maxContentSize: number;
}
export interface LayoutDefinition {
    readonly inputProperties: DOMStringList;
    readonly childInputProperties: DOMStringList;
    layoutOptions?: LayoutOptions;
    layout(children: LayoutChild[], edges: LayoutEdges, constraints: LayoutConstraints, styleMap: StylePropertyMapReadOnly): Promise<FragmentResultOptions | FragmentResult>;
    intrinsicSizes(children: LayoutChild[], edges: LayoutEdges, styleMap: StylePropertyMapReadOnly): Promise<IntrinsicSizesResultOptions>;
}
export declare class LayoutDefinition {
    readonly inputProperties: DOMStringList;
    readonly childInputProperties: DOMStringList;
    layoutOptions?: LayoutOptions;
}
export interface DocumentLayoutDefinition {
    inputProperties: DOMStringList;
    childInputProperties: DOMStringList;
    layoutOptions: LayoutOptions;
}
