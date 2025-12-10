import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const esmConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/polish-numeral-parser.mjs',
    format: 'esm',
    sourcemap: true,
    minifyInternalExports: true,
  },
  plugins: [typescript({ declaration: false }), terser()],
});

const cjsConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/polish-numeral-parser.cjs',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript({ declaration: false }), terser()],
});

const dtsConfig = defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/polish-numeral-parser.d.mts',
    format: 'esm',
  },
  plugins: [dts()],
});

export default [esmConfig, cjsConfig, dtsConfig];
