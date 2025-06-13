import { defineConfig } from "tsup";

/**
 * Node.js Build Configuration
 *
 * This configuration generates ESM and CJS formats suitable for Node.js environments
 * and bundlers. It produces both formats from a single configuration which
 * simplifies maintenance and ensures consistency across outputs.
 */
export default defineConfig((options) => {
  const isWatch = !!options.watch;

  return {
    clean: true, // Remove previous build files before each build
    dts: true, // Generate TypeScript declaration files (.d.ts)
    entry: ["src/index.ts"], // The entry points to your library. You can add more entry points if needed.
    format: ["esm", "cjs"], // Generates both ESM and CJS formats simultaneously
    minify: !isWatch, // Minifies the output to reduce bundle size
    outDir: "./dist", // Directory where build files will be output
    platform: "neutral", // Important: ensures compatibility with Node.js and browser
    sourcemap: true, // Generate source maps to make debugging easier
    treeshake: true, // Enables tree shaking to remove unused code and reduce bundle size
  };
});
