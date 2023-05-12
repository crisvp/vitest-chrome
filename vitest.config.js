import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

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
})
