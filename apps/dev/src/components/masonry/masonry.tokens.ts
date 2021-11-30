import { TokenPair } from "../types";
import { registerTokens } from '../utility';

const prefix = 'masonry';
const names:TokenPair[] = [
	['gaps',10],
	['columns',3]
];

export const masonryTokens: {[key:string]:any} = registerTokens(prefix, names);