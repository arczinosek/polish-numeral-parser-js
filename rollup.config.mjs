import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const jsConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.mjs',
    format: 'esm',
    sourcemap: true,
    minifyInternalExports: true,
  },
  plugins: [typescript({ declaration: false }), terser()],
});

const dtsConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.d.mts',
    format: 'esm',
  },
  plugins: [dts()],
});

export default [jsConfig, dtsConfig];
