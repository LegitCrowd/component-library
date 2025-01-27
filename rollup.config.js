import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

const banner = "'use client';\n";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        banner,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        banner,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        modules: true
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: false,
      }),
      terser({
        format: {
          preamble: banner
        }
      }),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ 
      file: "dist/types.d.ts", 
      format: "es" 
    }],
    plugins: [dts()],
    external: [/\.css$/]
  },
];