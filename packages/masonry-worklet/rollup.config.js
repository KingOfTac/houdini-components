import commonJS from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import rollup from 'rollup';
rollup;
import transformTaggedTemplate from "rollup-plugin-transform-tagged-template";
import typescript from "rollup-plugin-typescript2";
import {
    transformCSSFragment,
    transformHTMLFragment,
} from "../../../build/transform-fragments";

const parserOptions = {
    sourceType: "module",
};

export default [
    {
        context: "this",
        input: "src/index-rollup.ts",
        output: [
            {
                file: "dist/masonry-worklet.js",
                format: "esm",
            },
            {
                file: "dist/masonry-worklet.min.js",
                format: "esm",
                plugins: [terser()],
            },
        ],
        plugins: [
            resolve(),
            commonJS(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                    },
                },
            }),
            transformTaggedTemplate({
                tagsToProcess: ["css"],
                transformer: transformCSSFragment,
                parserOptions,
            }),
            transformTaggedTemplate({
                tagsToProcess: ["html"],
                transformer: transformHTMLFragment,
                parserOptions,
            }),
            filesize({
                showMinifiedSize: true,
                showBrotliSize: true,
            }),
        ],
    },
];