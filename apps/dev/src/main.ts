import './style.css';
import 'css-paint-polyfill';
// import 'https://unpkg.com/css-paint-polyfill'
import polygon from '@kingoftac/polygon-worklet/dist/polygon-worklet?url';
import masonry from '@kingoftac/masonry-worklet/dist/masonry-worklet?url';
import quadtree from '@kingoftac/quadtree-worklet/dist/quadtree-worklet?url';
import Sunny from '@fluentui/svg-icons/icons/weather_sunny_24_filled.svg?raw';
import Moon from '@fluentui/svg-icons/icons/weather_moon_24_filled.svg?raw';

import { CheckableFormAssociatedElement, DesignSystem, DesignToken, FormAssociatedElement } from '@microsoft/fast-foundation';

import {
	allComponents,
	PaletteRGB,
	StandardLuminance,
	baseLayerLuminance,
	neutralPalette,
	accentPalette,
	controlCornerRadius,
} from '@microsoft/fast-components';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { shape, masonryTokens, quadtreeTokens } from './components';
import { shapeTokens } from './components/shape/shape.tokens';

function getBrowserName(): string { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
		//@ts-ignore
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'Internet Explorer';
    } else {
        return 'Not sure!';
    }
}

const browser: string = getBrowserName();
const shapeElement = document.getElementById('shape-1')!;
shapeElement.style.backgroundImage = `-moz-element(#paint-1-polygon) !important`;
shapeElement.dataset.cssPaint = (1).toString();

if (browser !== 'Firefox' && browser !== 'Chrome') {
	document.getElementById('shapes').innerHTML = 'Paint worklets using shadow DOM currently only work on chrome canary, edge canary or Firefox';
}

// Ignore type checking on experimental apis.
// @ts-ignore
CSS.paintWorklet.addModule(polygon);
// @ts-ignore
if (CSS['layoutWorklet']) {
	// @ts-ignore
	CSS.layoutWorklet.addModule(masonry);
	// @ts-ignore
	CSS.layoutWorklet.addModule(quadtree);
} else {
	document.getElementById('masonry').innerHTML = 'Layout worklets currently only work on chrome canary or edge canary with experimental platform features enabled.';
	document.getElementById('quadtree').innerHTML = 'Layout worklets currently only work on chrome canary or edge canary with experimental platform features enabled.';
}

const displayToggle = document.getElementById('mode-toggle');
displayToggle.innerHTML = Sunny;
displayToggle!.addEventListener('change', (event) => {
	if ((event.target as HTMLFormElement).checked) {
		(event.target as HTMLElement).innerHTML = Moon;
		baseLayerLuminance.withDefault(StandardLuminance.DarkMode);
	} else {
		(event.target as HTMLElement).innerHTML = Sunny;
		baseLayerLuminance.withDefault(StandardLuminance.LightMode);
	}
});

const masonryElement = (document.getElementById('masonry') as FormAssociatedElement)!;
const masonryGapsInput = (document.getElementById('masonry-gaps') as FormAssociatedElement)!;
const masonryColumnsInput = (document.getElementById('masonry-columns') as FormAssociatedElement)!;

masonryGapsInput.initialValue =
	(masonryTokens['gaps'] as DesignToken<number>)
		.getValueFor(masonryElement)
		.toString();

masonryGapsInput.addEventListener('input', (event) => {
	(masonryTokens['gaps'] as DesignToken<number>)
		.setValueFor(
			masonryElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

masonryColumnsInput.initialValue =
	(masonryTokens['columns'] as DesignToken<number>)
		.getValueFor(masonryElement)
		.toString();

masonryColumnsInput.addEventListener('input', (event) => {
	(masonryTokens['columns'] as DesignToken<number>)
		.setValueFor(
			masonryElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

const quadtreeElement = (document.getElementById('quadtree') as FormAssociatedElement)!;
const quadtreePointsInput = (document.getElementById('quadtree-points') as FormAssociatedElement)!;
const quadtreeGapsInput = (document.getElementById('quadtree-gaps') as FormAssociatedElement)!;
const quadtreeObjectsInput = (document.getElementById('quadtree-objects') as FormAssociatedElement)!;
const quadtreeLevelsInput = (document.getElementById('quadtree-levels') as FormAssociatedElement)!;

quadtreePointsInput.initialValue =
	(quadtreeTokens['points'] as DesignToken<number>)
		.getValueFor(quadtreeElement)
		.toString();

quadtreePointsInput.addEventListener('change', (event) => {
	(quadtreeTokens['points'] as DesignToken<number>)
		.setValueFor(
			quadtreeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

quadtreeGapsInput.initialValue =
	(quadtreeTokens['gaps'] as DesignToken<number>)
		.getValueFor(quadtreeElement)
		.toString();

quadtreeGapsInput.addEventListener('input', (event) => {
	(quadtreeTokens['gaps'] as DesignToken<number>)
		.setValueFor(
			quadtreeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

quadtreeObjectsInput.initialValue =
	(quadtreeTokens['maxObjects'] as DesignToken<number>)
		.getValueFor(quadtreeElement)
		.toString();

quadtreeObjectsInput.addEventListener('input', (event) => {
	(quadtreeTokens['maxObjects'] as DesignToken<number>)
		.setValueFor(
			quadtreeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

quadtreeLevelsInput.initialValue =
	(quadtreeTokens['maxLevels'] as DesignToken<number>)
		.getValueFor(quadtreeElement)
		.toString();

quadtreeLevelsInput.addEventListener('input', (event) => {
	(quadtreeTokens['maxLevels'] as DesignToken<number>)
		.setValueFor(
			quadtreeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

const randomHeight = DesignToken.create<number>('random-height');
const masonryBlocks = document.querySelectorAll('.masonry .block');
masonryBlocks.forEach(element => randomHeight.setValueFor((element as HTMLElement), Math.random() * (400 - 100) + 100));

const neutral = parseColorHexRGB('#181818')!;
neutralPalette.withDefault(PaletteRGB.from(neutral));

const accent = parseColorHexRGB('#d6b57e')!;
accentPalette.withDefault(PaletteRGB.from(accent));

baseLayerLuminance.withDefault(StandardLuminance.LightMode);
controlCornerRadius.withDefault(10);

DesignSystem
	.getOrCreate()
	.withPrefix('houdini')
	.register(
		allComponents,
		shape()
	);

const shapeColorInput = (document.querySelector('#shape-color input') as FormAssociatedElement)!;
const shapeColorValueContainer = document.getElementById('shape-color-value')!;
const shapeRoundedInput = (document.getElementById('shape-rounded') as CheckableFormAssociatedElement)!;
const shapeSidesInput = (document.getElementById('shape-sides') as FormAssociatedElement)!;
const shapeScaleInput = (document.getElementById('shape-scale') as FormAssociatedElement)!;
const shapePosXInput = (document.getElementById('shape-position-x') as FormAssociatedElement)!;
const shapePosYInput = (document.getElementById('shape-position-y') as FormAssociatedElement)!;
const shapeRotationInput = (document.getElementById('shape-rotation') as FormAssociatedElement)!;
const shapeRadiusInput = (document.getElementById('shape-radius') as FormAssociatedElement)!;

shapeColorInput.value = (shapeTokens.color as DesignToken<string>).getValueFor(shapeElement);
shapeColorValueContainer.innerHTML = (shapeTokens.color as DesignToken<string>).getValueFor(shapeElement);
shapeColorInput.addEventListener('input', (event) => {
	(shapeTokens.color as DesignToken<string>)
		.setValueFor(
			shapeElement,
			(event.target as FormAssociatedElement).value
		);
	shapeColorValueContainer.innerHTML = (event.target as FormAssociatedElement).value;
});

shapeRoundedInput.checked = (shapeTokens.rounded as DesignToken<boolean>).getValueFor(shapeElement);
shapeRoundedInput.addEventListener('change', (event) => {
	(shapeTokens.rounded as DesignToken<boolean>)
		.setValueFor(
			shapeElement,
			(event.target as CheckableFormAssociatedElement).checked
		);
});

shapeSidesInput.initialValue = (shapeTokens.sides as DesignToken<number>).getValueFor(shapeElement).toString();
shapeSidesInput.addEventListener('input', (event) => {
	(shapeTokens.sides as DesignToken<number>)
		.setValueFor(
			shapeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

shapeScaleInput.initialValue = (shapeTokens.scale as DesignToken<number>).getValueFor(shapeElement).toString();
shapeScaleInput.addEventListener('input', (event) => {
	(shapeTokens.scale as DesignToken<number>)
		.setValueFor(
			shapeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

shapePosXInput.initialValue = (shapeTokens.moveto as DesignToken<string[]>).getValueFor(shapeElement)[0].toString();
shapePosXInput.addEventListener('input', (event) => {
	if (shapeElement.getAttribute('move-to') === undefined) {
		shapeElement.setAttribute('move-to', '0px,0px');
	}

	const currentPosY = (shapeTokens.moveto as DesignToken<string[]>).getValueFor(shapeElement)[1];

	(shapeTokens.moveto as DesignToken<string[]>)
		.setValueFor(
			shapeElement,
			[`${((event.target as FormAssociatedElement).value)}px`, currentPosY]
		);
});

shapePosYInput.initialValue = (shapeTokens.moveto as DesignToken<string[]>).getValueFor(shapeElement)[1].toString();
shapePosYInput.addEventListener('input', (event) => {
	const currentPosX = (shapeTokens.moveto as DesignToken<string[]>).getValueFor(shapeElement)[0];

	(shapeTokens.moveto as DesignToken<string[]>)
		.setValueFor(
			shapeElement,
			[currentPosX, `${((event.target as FormAssociatedElement).value)}px`]
		);
});

shapeRotationInput.initialValue = (shapeTokens.rotation as DesignToken<number>).getValueFor(shapeElement).toString();
shapeRotationInput.addEventListener('change', (event) => {
	(shapeTokens.rotation as DesignToken<number>)
		.setValueFor(
			shapeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});

shapeRadiusInput.initialValue = (shapeTokens.radius as DesignToken<number>).getValueFor(shapeElement).toString();
shapeRadiusInput.addEventListener('change', (event) => {
	(shapeTokens.radius as DesignToken<number>)
		.setValueFor(
			shapeElement,
			Number((event.target as FormAssociatedElement).value)
		);
});