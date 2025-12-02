import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'unit',
    include: ['test/*.test.ts'],
    globals: true,
    environment: 'node',
    watch: false,
  },
});
