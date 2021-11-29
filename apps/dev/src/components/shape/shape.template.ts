import { html } from "@microsoft/fast-element";
import { Shape } from './shape';

export const shapeTemplate = html<Shape>`
	<template>
		<slot></slot>
	</template>
`;