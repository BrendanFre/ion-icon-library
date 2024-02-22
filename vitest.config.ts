import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: [
        'lcovonly'
      ],
    },
    environment: 'jsdom',    // browser: {
    //   enabled: true,
    //   name: 'chrome', // browser name is required
    // },
  },

  })