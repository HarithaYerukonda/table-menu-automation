import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://order.jdwetherspoon.com/venue/jdw/95/tables',
    headless: true,
    browserName: 'chromium'
  }
});
