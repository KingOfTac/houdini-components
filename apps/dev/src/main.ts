import './style.css';
import 'css-paint-polyfill';
// import 'https://unpkg.com/css-paint-polyfill'
import polygon from '@kingoftac/polygon-worklet/dist/polygon-worklet?url';
import masonry from '@kingoftac/masonry-worklet/dist/masonry-worklet?url';
import quadtree from '@kingoftac/quadtree-worklet/dist/quadtree-worklet?url';

import { DesignSystem } from '@microsoft/fast-foundation';

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
import { shape } from './components';

function getBrowserName(): string { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'Internet Explorer';
    } else {
        return 'Not sure!';
    }
}

const browser: string = getBrowserName();

if (browser !== 'Chrome') {
	const shapes = [
		document.getElementById('shape-1'),
		document.getElementById('shape-2'),
		document.getElementById('shape-3')
	]
	
	shapes.forEach((shape, idx) => {
		shape.style.backgroundImage = `-moz-element(#paint-${idx + 1}-polygon) !important`;
		shape.dataset.cssPaint = (idx + 1).toString();
	});
	// @ts-ignore
}

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

document.getElementById('mode-toggle')!.addEventListener('change', (event) => {
	if ((event.target as HTMLFormElement).checked) {
		baseLayerLuminance.withDefault(StandardLuminance.DarkMode);
	} else {
		baseLayerLuminance.withDefault(StandardLuminance.LightMode);
	}
});

const neutral = parseColorHexRGB('#4d525e')!;
neutralPalette.withDefault(PaletteRGB.from(neutral));

const accent = parseColorHexRGB('#6ac999')!;
accentPalette.withDefault(PaletteRGB.from(accent));

baseLayerLuminance.withDefault(StandardLuminance.LightMode);
controlCornerRadius.withDefault(14);

DesignSystem
	.getOrCreate()
	.withPrefix('houdini')
	.register(
		allComponents,
		shape()
	);