import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  dts: {
    resolve: true,
  },
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    }
  },
  clean: true,
})
