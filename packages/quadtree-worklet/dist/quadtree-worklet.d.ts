import { BreakToken } from '@kingoftac/worklet-utilities';
import { FragmentResultOptions } from '@kingoftac/worklet-utilities';
import { IntrinsicSizesResultOptions } from '@kingoftac/worklet-utilities';
import type { LayoutChild } from '@kingoftac/worklet-utilities';
import type { LayoutConstraintOptions } from '@kingoftac/worklet-utilities';
import type { LayoutEdges } from '@kingoftac/worklet-utilities';
import { LayoutOptions } from '@kingoftac/worklet-utilities';
import type { StylePropertyMapReadOnly } from '@kingoftac/worklet-utilities';

/**
 * CSS Layout Worklet to produce a grid-like layout based on Quadtrees
 *
 * @remarks
 *
 * @alpha
 */
export declare class QuadtreeLayout {
    static LayoutOptions: LayoutOptions;
    static get inputProperties(): any;
    static get childInputProperties(): never[];
    intrinsicSizes(children: LayoutChild[], edges: LayoutEdges, styleMap: StylePropertyMapReadOnly): Promise<IntrinsicSizesResultOptions>;
    layout(children: LayoutChild[], edges: LayoutEdges, constraints: LayoutConstraintOptions, styleMap: StylePropertyMapReadOnly, breakToken: BreakToken): Promise<FragmentResultOptions>;
}

export { }
