  import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
  import { chromium } from 'playwright';
  import type { Browser, Page } from 'playwright';
  import { TableEntryPage } from '../pages/TableEntryPage.ts';
  import { MainMenuPage } from '../pages/MainMenuPage.ts';
 

  setDefaultTimeout(60000);

  let browser: Browser;
  let page: Page;
  let tableEntryPage: TableEntryPage;
  let mainMenuPage: MainMenuPage;
 

  Given('the user is on the table number entry page', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    tableEntryPage = new TableEntryPage(page);
    mainMenuPage = new MainMenuPage(page);
  

    await tableEntryPage.navigate();
  });

  When('the user enters a valid table number', async () => {
    await tableEntryPage.enterTableNumber('100');
  });

  When('the user clicks the Continue button', async () => {
    await tableEntryPage.clickContinue();
  });

  Then('the user should be on the main menu page', async () => {
    await mainMenuPage.assertOnMainMenu();
   
    await browser.close();
  });
