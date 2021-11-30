import { TokenPair } from "../types";
import { registerTokens } from '../utility';

const prefix = 'quadtree';
const names:TokenPair[] = [
	['points',100],
	['gaps',5],
	['maxObjects',8],
	['maxLevels',8]
];

export const quadtreeTokens: {[key:string]:any} = registerTokens(prefix, names);