import { BeforeAll, After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';

// Directory for logs
const logsDir = path.join(__dirname, '../test-logs');
const screenshotsDir = path.join(logsDir, 'screenshots');

BeforeAll(() => {
  // Create logs and screenshots folders if they don't exist
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
});

// After each scenario
After(async function (scenario) {
  const logFile = path.join(logsDir, 'test-log.txt');
  const status = scenario.result?.status || 'UNKNOWN';
  const name = scenario.pickle.name;
  const date = new Date().toISOString();

  // Log the scenario result
  fs.appendFileSync(logFile, `[${date}] Scenario: "${name}" Status: ${status}\n`);

  // Capture screenshot if scenario failed
  if (status === Status.FAILED) {
    // Assuming 'page' is stored in world object
    if (this.page && typeof this.page.screenshot === 'function') {
      const screenshotPath = path.join(
        screenshotsDir,
        `${name.replace(/[^a-zA-Z0-9]/g, '_')}.png`
      );
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot captured: ${screenshotPath}`);
    }
  }
});
