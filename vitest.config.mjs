import { defineConfig } from 'vitest/dist/config'

export default defineConfig({
  test: {
    onConsoleLog(log, type) {
      return false
    },
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.ts'],
      exclude: ['**/*.test.ts', '**/*.spec.ts', '**/*.d.ts'],
      dir: 'coverage'
    }
  }
})
