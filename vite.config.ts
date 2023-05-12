import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  test: {
    include: ['**/*.test.js', '**/*.test.ts'],
    environment: 'jsdom',
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vitest-chrome',
      fileName: 'index',
    },
    minify: false,
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: 'src/index.ts',
      output: [
        {
          manualChunks: () => 'everything.js',
          entryFileNames: 'lib/[name].[format].js',
          format: 'cjs',
        },
        {
          manualChunks: () => 'everything.js',
          entryFileNames: 'lib/[name].[format].js',
          format: 'es',
        },
      ],
    },
  },
})
