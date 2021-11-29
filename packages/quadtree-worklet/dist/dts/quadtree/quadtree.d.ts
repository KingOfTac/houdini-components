export declare function random(i: any, k: any, l?: any): any;
export declare function randomBias(min: any, max: any, bias: any, influence?: number): number;
export declare function randomSnap(min: any, max: any, snapInc: any): number;
declare type BoundingRect = {
    width: number;
    height: number;
    x: number;
    y: number;
};
export declare class Quadtree {
    bounds: BoundingRect;
    maxObjects: number;
    maxLevels: number;
    level: number;
    private objects;
    private nodes;
    constructor(bounds: BoundingRect, maxObjects?: number, maxLevels?: number, level?: number);
    split(): void;
    getIndex(pRect: BoundingRect): number[];
    insert(pRect: BoundingRect): void;
    retrieve(pRect: BoundingRect): BoundingRect[];
    clear(): void;
}
export {};
