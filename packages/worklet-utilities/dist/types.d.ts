/**
 * CSS Typed OM Definitions
 *
 * @remarks
*/
export declare class CSSStyleValue {
    static parse(property: string, cssText: string): CSSStyleValue;
    static parseAll(property: string, cssText: any): any;
}
export declare class CSSVariableReferenceValue {
    constructor(variable: string, fallback?: CSSUnparsedValue);
    variable: string;
    readonly fallbackx?: CSSUnparsedValue | undefined;
}
export declare type CSSUnparsedSegment = string | CSSVariableReferenceValue;
export declare class CSSUnparsedValue extends CSSStyleValue {
    constructor(members: CSSUnparsedSegment[]);
    [Symbol.iterator](): IterableIterator<CSSUnparsedSegment>;
    readonly length: number;
    [idx: number]: CSSUnparsedSegment;
}
export declare class CSSKeywordValue extends CSSStyleValue {
    constructor(value: string);
    value: string;
}
export declare type CSSNumberOrNumeric = number | CSSNumericValue;
export declare enum CSSNumericBaseType {
    'length' = 0,
    'angle' = 1,
    'time' = 2,
    'frequency' = 3,
    'resolution' = 4,
    'flex' = 5,
    'percent' = 6
}
export interface CSSNumericType {
    length: number;
    angle: number;
    time: number;
    frequency: number;
    resolution: number;
    flex: number;
    percent: number;
}
export declare class CSSNumericValue extends CSSStyleValue {
    add(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    sub(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    mul(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    div(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    min(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    max(...values: CSSNumberOrNumeric[]): CSSNumericValue;
    equals(...values: CSSNumberOrNumeric[]): boolean;
    to(unit: string): CSSUnitValue;
    toSum(...units: string[]): CSSMathSum;
    type(): CSSNumericType;
    static parse(cssText: string): CSSNumericValue;
}
export declare class CSSUnitValue extends CSSNumericValue {
    constructor(value: number, unit: string);
    value: number;
    readonly unit: string;
}
export declare class CSSMathValue extends CSSNumericValue {
    readonly operator: CSSMathOperator;
}
export declare class CSSMathSum extends CSSMathValue {
    constructor(...args: CSSNumberOrNumeric[]);
    readonly values: CSSNumericArray;
}
export declare class CSSMathProduct extends CSSMathValue {
    constructor(...args: CSSNumberOrNumeric[]);
    readonly values: CSSNumericArray;
}
export declare class CSSMathNegate extends CSSMathValue {
    constructor(arg: CSSNumberOrNumeric);
    readonly value: CSSNumericValue;
}
export declare class CSSMathInvert extends CSSMathValue {
    constructor(arg: CSSNumberOrNumeric);
    readonly value: CSSNumericValue;
}
export declare class CSSMathMin extends CSSMathValue {
    constructor(...args: CSSNumberOrNumeric[]);
    readonly values: CSSNumericArray;
}
export declare class CSSMathMax extends CSSMathValue {
    constructor(...args: CSSNumberOrNumeric[]);
    readonly values: CSSNumericArray;
}
export declare class CSSNumericArray {
    [Symbol.iterator](): IterableIterator<CSSNumericValue>;
    readonly length: number;
    readonly [index: number]: CSSNumericValue;
}
export declare enum CSSMathOperator {
    'sum' = 0,
    'product' = 1,
    'negate' = 2,
    'invert' = 3,
    'min' = 4,
    'max' = 5,
    'clamp' = 6
}
export declare class CSSTransformValue extends CSSStyleValue {
    constructor(transforms: CSSTransformComponent[]);
    [Symbol.iterator](): IterableIterator<CSSTransformComponent>;
    readonly length: number;
    [index: number]: CSSTransformComponent;
    readonly is2D: boolean;
    toMatrix(): DOMMatrix;
}
export declare class CSSTransformComponent {
    is2D: boolean;
    toMatrix(): DOMMatrix;
    toString(): string;
}
export declare class CSSTranslate extends CSSTransformComponent {
    constructor(x: CSSNumericValue, y: CSSNumericValue, z?: CSSNumericValue);
    x: CSSNumericValue;
    y: CSSNumericValue;
    z: CSSNumericValue;
}
export declare class CSSRotate extends CSSTransformComponent {
    constructor(angle: CSSNumericValue);
    constructor(x: CSSNumberOrNumeric, y: CSSNumberOrNumeric, z: CSSNumberOrNumeric, angle: CSSNumericValue);
    x: CSSNumberOrNumeric;
    y: CSSNumberOrNumeric;
    z: CSSNumberOrNumeric;
    angle: CSSNumericValue;
}
export declare class CSSScale extends CSSTransformComponent {
    constructor(x: CSSNumberOrNumeric, y: CSSNumberOrNumeric, z?: CSSNumberOrNumeric);
    x: CSSNumberOrNumeric;
    y: CSSNumberOrNumeric;
    z: CSSNumberOrNumeric;
}
export declare class CSSSkew extends CSSTransformComponent {
    constructor(ax: CSSNumericValue, ay: CSSNumericValue);
    ax: CSSNumericValue;
    ay: CSSNumericValue;
}
export declare class CSSSkewX extends CSSTransformComponent {
    constructor(ax: CSSNumericValue);
    ax: CSSNumericValue;
}
export declare class CSSSkewY extends CSSTransformComponent {
    constructor(ay: CSSNumericValue);
    ay: CSSNumericValue;
}
export declare class CSSPerspective extends CSSTransformComponent {
    constructor(length: CSSNumericValue);
    length: CSSNumericValue;
}
export declare class CSSMatrixComponent extends CSSTransformComponent {
    constructor(matrix: DOMMatrixReadOnly, options?: CSSMatrixComponentOptions);
    matrix: DOMMatrix;
}
export interface CSSMatrixComponentOptions {
    is2D: boolean;
}
export declare class CSSImageValue extends CSSStyleValue {
}
export declare class StylePropertyMapReadOnly {
    [Symbol.iterator](): IterableIterator<[string, CSSStyleValue[]]>;
    get(property: string): CSSStyleValue | undefined;
    getAll(property: string): CSSStyleValue[];
    has(property: string): boolean;
    readonly size: number;
}
export declare class StylePropertyMap extends StylePropertyMapReadOnly {
    set(property: string, ...values: Array<CSSStyleValue | string>): void;
    append(property: string, ...values: Array<CSSStyleValue | string>): void;
    delete(property: string): void;
    clear(): void;
}
export interface Element {
    computedStyleMap(): StylePropertyMapReadOnly;
}
export interface CSSStyleRule {
    readonly styleMap: StylePropertyMap;
}
export interface ElementCSSInlineStyle {
    readonly attributeStyleMap: StylePropertyMap;
}
/**
 * Paint Worklet Definitions
 *
 * @remarks
*/
export interface Vector {
    x: number;
    y: number;
    len: number;
    nx: number;
    ny: number;
    ang: number;
}
export interface Coords {
    x: number;
    y: number;
}
export interface PaintSize {
    width: number;
    height: number;
}
export interface Point extends Coords {
    radius: number;
}
/**
 * General Use Definitions
 *
 * @remarks
*/
export declare type FrozenArray<T> = readonly T[];
export interface Dictionary<T> {
    [key: string]: T;
}
export declare enum WorkletType {
    animation = "Animation",
    layout = "Layout",
    paint = "Paint"
}
