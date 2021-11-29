import { LayoutDefinition } from './types';
export function CSSLayout(name) {
    return function (type) {
        if (!type.prototype.layout || !type.prototype.intrinsicSizes) {
            type = LayoutDefinition;
        }
        // @ts-ignore
        registerLayout(name, type);
    };
}
