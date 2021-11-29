import { attr } from '@microsoft/fast-element';
import { FoundationElement } from "@microsoft/fast-foundation";
import { shapeTokens as tokens } from './shape.tokens';
import { shapeStyles as styles } from './shape.styles';
import { shapeTemplate as template } from './shape.template';

const moveToConverter = {
	toView(value:number[]) {
		return value.join(',');
	},
	fromView(value:string) {
		return value.split(',').map(item => {
			return `${item.trim()}px`;
		});
	}
};

export class Shape extends FoundationElement {
	@attr
	public color:string;
	public colorChanged(oldValue:string, newValue:string) {
		if (oldValue !== newValue) {
			tokens.color.setValueFor(this, newValue);
		}
	}

	@attr
	public sides:number;
	public sidesChanged(oldValue:string, newValue:string) {
		if (oldValue !== newValue) {
			tokens.sides.setValueFor(this, newValue);
		}
	}

	@attr({ mode: 'boolean' })
	public rounded:boolean
	public roundedChanged(oldValue:boolean, newValue:boolean) {
		if (oldValue !== newValue) {
			tokens.rounded.setValueFor(this, newValue);
		}
	}

	@attr
	public radius:number;
	public radiusChanged(oldValue:number, newValue:number) {
		if (oldValue !== newValue) {
			tokens.radius.setValueFor(this, newValue);
		}
	}

	@attr
	public rotation:number;
	public rotationChanged(oldValue:number, newValue:number) {
		if (oldValue !== newValue) {
			tokens.rotation.setValueFor(this, newValue);
		}
	}

	@attr
	public scale:number;
	public scaleChanged(oldValue:number, newValue:number) {
		if (oldValue !== newValue) {
			tokens.scale.setValueFor(this, newValue);
		}
	}

	@attr
	public shadow:string;
	public shadowChanged(oldValue:string, newValue:string) {
		if (oldValue !== newValue) {
			tokens.shadow.setValueFor(this, newValue);
		}
	}

	@attr({ attribute: 'move-to', converter: moveToConverter })
	public moveTo:string[];
	public moveToChanged(oldValue:string[], newValue:string[]) {
		if (oldValue !== newValue) {
			tokens.moveto.setValueFor(this, newValue.join(','));
		}
	}
}

export const shape = Shape.compose({
	baseName: 'shape',
	template,
	styles
});