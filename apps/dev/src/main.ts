import './style.css';
import 'css-paint-polyfill';
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

// Ignore type checking on experimental apis.
// @ts-ignore
CSS.paintWorklet.addModule(polygon);
// @ts-ignore
if (CSS['layoutWorklet']) {
	// @ts-ignore
	CSS.layoutWorklet.addModule(masonry);
	// @ts-ignore
	CSS.layoutWorklet.addModule(quadtree);
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