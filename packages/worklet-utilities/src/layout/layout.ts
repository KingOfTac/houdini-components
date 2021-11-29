import { LayoutDefinition } from './types';

export function CSSLayout(name: string) {
	return function(type: any) {
		if (!type.prototype.layout || !type.prototype.intrinsicSizes) {
			type = LayoutDefinition;
		}

		// @ts-ignore
		registerLayout(name, type);
	}
} 