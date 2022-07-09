import {resolve} from "path";
import {name} from "./package.json";
import {terser} from "rollup-plugin-terser";

export default {
  input: resolve("sources", "index.js"),
  plugins: [
    terser()
  ],
  output: [
    {
      file: resolve("build", "index.common.js"),
      format: "cjs"
    },
    {
      file: resolve("build", "index.module.js"),
      format: "esm"
    },
    {
      file: resolve("build", "index.browser.js"),
      format: "iife",
      name,
      extend: true
    }
  ]
}
