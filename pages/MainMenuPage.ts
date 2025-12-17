import { expect, Page } from '@playwright/test';

export class MainMenuPage {
  constructor(private page: Page) {}

  async assertOnMainMenu() {
    // This is your "Basic Assertion"
    // It verifies the URL contains 'menu'
    await expect(this.page).toHaveURL(/.*menus/, { timeout: 10000 });
  }
}