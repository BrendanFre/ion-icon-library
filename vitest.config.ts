import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
    environment: 'jsdom',
    reporters: [
      ['lcov', { 'projectRoot': './src' }],]
    // browser: {
    //   enabled: true,
    //   name: 'chrome', // browser name is required
    // },
  },

  })