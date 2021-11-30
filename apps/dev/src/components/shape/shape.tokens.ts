import { TokenPair } from "../types";
import { registerTokens } from '../utility';

const prefix = 'polygon';
const names:TokenPair[] = [
	['color','#000'],
	['sides',3],
	['rotation',0],
	['radius',0],
	['rounded',false],
	['scale',1],
	['shadow',JSON.stringify([])],
	['moveto',[0,0]]
];

export const shapeTokens: {[key:string]:any} = registerTokens(prefix, names);