import { DesignToken } from "@microsoft/fast-foundation";
import type { TokenPair } from "./types";

export function registerTokens(prefix: string, names: TokenPair[]) {
	const tokens: { [key: string]: any } = {};
	names.forEach(pair =>
		tokens[pair[0]] = DesignToken
			.create<string>(`${prefix}-${pair[0]}`)
			.withDefault(pair[1])
	);
	return tokens;
};

export function capitalize(str:string):string {
	return `${str.charAt(0).toUpperCase()}${str.toLowerCase().slice(1)}`;
};