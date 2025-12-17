import { BeforeAll, After, Status } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

const logsDir = path.join(__dirname, '../test-logs');

BeforeAll(() => {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
});

// After each scenario, log the result
After(async function (scenario) {
  const logFile = path.join(logsDir, 'test-log.txt');
  const status = scenario.result?.status || 'UNKNOWN';
  const name = scenario.pickle.name;
  const date = new Date().toISOString();
  fs.appendFileSync(logFile, `[${date}] Scenario: "${name}" Status: ${status}\n`);
});
