import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  minify: false,
  target: "es6",
  esbuildOptions(options, context) {
    if (context.format === "esm") {
      options.outExtension = { ".js": ".mjs" };
    } else {
      options.outExtension = { ".js": ".js" };
      // options.banner = {
      //   js: "module.exports = exports = module.exports.default || {};\nObject.assign(module.exports, exports.default);\ndelete module.exports.default;",
      // };
    }
  },
});
