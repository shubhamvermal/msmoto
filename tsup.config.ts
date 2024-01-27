import { defineConfig } from 'tsup';

// NOTE: paths are relative to the root of the project
export default defineConfig({
  entry: ['vite-plugin/src/index.ts'],
  splitting: false,
  sourcemap: false,
  outDir: 'dist',
  dts: true, // Generate .d.ts files for types
  format: ['esm'],
});
