# Wetherspoon Automation Project

## Project Overview
This project automates user journeys in the Wetherspoon ordering app using **Playwright**, **Cucumber**, and **TypeScript**. 
It covers table number entry, main menu navigation. 
The project also includes logging and HTML reporting for each test run.

## Features Automated
- Accept **Terms & Conditions** and **Privacy Policy**
- Enter a valid **table number** and navigate to the main menu
- Logging and HTML report generation for test results

## Technology Stack
- **Playwright** – browser automation
- **Cucumber** – BDD framework
- **TypeScript** – strong typing and maintainable code
- **Node.js / npm** – package and script management
- **Page Object Model (POM)** – modular page design
- **HTML reports** – interactive test reports



## Implementation Details
- **Page Object Model (POM)** for all page interactions
- **Hooks** for logging and screenshots before/after each scenario
- **Dynamic page handling** to detect T&C page or table entry page
- **Waits & network idle detection** to ensure stable tests


## Running the Tests
1. Install dependencies:

```bash
npm install

2. Run the tests

npm test

3. Logs and reports are generated in test-logs/

test-logs/test-log.txt → scenario logs with timestamps

HTML report → test-logs/report.html

# User inputs

tableEntery.steps.ts "await tableEntryPage.enterTableNumber('n')" -> n is user input for number of tables
