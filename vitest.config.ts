import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul' // or 'v8'
    },
    environment: 'jsdom',
    // browser: {
    //   enabled: true,
    //   name: 'chrome', // browser name is required
    // },
  },
})