import type { Page } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60000);

export class TableEntryPage {
  private page: Page;
  constructor( page: Page) {
    this.page = page;
  }
  

  tableNumberInput = () => this.page.getByRole('textbox', { name: 'Table number' });
  continueButton = () => this.page.getByRole('button', { name: 'Continue' });

  async navigate() {
    await this.page.goto('https://order.jdwetherspoon.com/venue/jdw/95/tables');
    await this.page.getByRole('checkbox', { name: 'Terms & conditions checkbox' }).click();
    await this.page.getByRole('checkbox', { name: 'Privacy policy checkbox' }).click();
    await this.page.getByRole('button', { name: 'Proceed' }).click();

  }

  async enterTableNumber(tableNumber: string) {
    const input = this.tableNumberInput();
    console.log("Waiting for table number input to be visible...");
    try {
      await input.waitFor({ state: 'visible', timeout: 15000 });
      console.log("Table number input is visible.");
      await input.click();
      await input.fill(tableNumber);
    } catch (e) {
      console.error("Table number input not found or not visible. Check selector or page state.");
      throw e;
    }
  }

  async clickContinue() {
    const button = this.continueButton();
    await button.waitFor({ state: 'visible', timeout: 15000 });
    await button.click();
  }
}

