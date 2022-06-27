import { defineConfig } from 'tsup'
import config from './tsconfig.json'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm', 'iife'],
  tsconfig: './tsconfig.json',
  target: config.compilerOptions.target,
  treeshake: true,
})
