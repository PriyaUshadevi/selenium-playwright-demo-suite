# Selenium Playwright Demo Suite

Portfolio-ready UI automation framework built with Playwright, TypeScript, and the Page Object Model pattern. The suite validates real browser workflows against the public SauceDemo application and is structured to demonstrate clean test design, reusable page classes, configurable environments, and professional reporting.

## Problem Statement

Manual regression testing for login workflows is repetitive, slow, and easy to miss when applications change. Recruiters and clients also need to see more than a single script: they need a small but complete automation framework that is readable, configurable, maintainable, and easy to run on another machine.

## Solution

This project provides an end-to-end Playwright automation suite for SauceDemo login scenarios. It uses a dedicated page object for login actions, isolated test cases for positive and negative behavior, browser-level assertions, screenshots/videos/traces on failure, and HTML reporting for review.

## Key Features

- Playwright browser automation with TypeScript.
- Page Object Model implementation in `pages/LoginPage.ts`.
- Positive login validation for a standard user.
- Negative login validation for a locked-out user.
- Page title and inventory page assertions.
- Configurable target URL through `BASE_URL`.
- HTML report, screenshots, videos, and traces for failed tests.
- CI-friendly Playwright configuration with retry support.

## Tech Stack

- Node.js 18 or later.
- npm.
- Playwright Test.
- TypeScript syntax supported by Playwright.
- Chromium browser, installed through Playwright.

## Project Structure

```text
selenium-playwright-demo-suite/
|-- pages/
|   `-- LoginPage.ts              # Reusable login page object
|-- tests/
|   `-- login.spec.ts             # Login workflow test scenarios
|-- playwright.config.ts          # Playwright test configuration
|-- package.json                  # npm scripts and dependencies
|-- package-lock.json             # Locked dependency versions
|-- .gitignore                    # Generated files excluded from git
`-- Sample_MavenProject/          # Optional Java/Maven practice project, separate from the Playwright suite
```

## Prerequisites

Install these before running the Playwright suite:

- Node.js 18 or later.
- npm, included with Node.js.
- Git, if cloning from a remote repository.
- Internet access, because tests run against `https://www.saucedemo.com`.

Optional:

- Maven, only if you want to compile or run the separate `Sample_MavenProject` Java practice folder. Maven is not required for the Playwright automation suite.

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd selenium-playwright-demo-suite
npm install
```

Install Playwright browsers if they are not already installed:

```bash
npx playwright install
```

On Windows PowerShell, if `npm` is blocked by the local script execution policy, use:

```bash
npm.cmd install
npm.cmd test
```

## Configuration

The default application under test is SauceDemo:

```text
https://www.saucedemo.com
```

To run against another compatible environment, set `BASE_URL`.

Windows PowerShell:

```powershell
$env:BASE_URL="https://www.saucedemo.com"
npm.cmd test
```

macOS/Linux:

```bash
BASE_URL=https://www.saucedemo.com npm test
```

Important configuration options are stored in `playwright.config.ts`:

- `testDir`: test files are loaded from `tests`.
- `baseURL`: defaults to SauceDemo and can be overridden with `BASE_URL`.
- `browserName`: runs on Chromium.
- `headless`: runs in headless mode by default.
- `screenshot`: captures screenshots on failure.
- `video`: keeps videos on failure.
- `trace`: keeps Playwright traces on failure.
- `reporter`: generates list output and an HTML report.

## How to Run

Run all tests:

```bash
npm test
```

Run tests in headed browser mode:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Open the latest HTML report:

```bash
npm run report
```

## Test Coverage

Current Playwright coverage includes:

- Login page title validation.
- Successful login using `standard_user`.
- Inventory page validation after login.
- Locked-out user error validation using `locked_out_user`.

## Test Data

SauceDemo public credentials used by this suite:

```text
standard_user / secret_sauce
locked_out_user / secret_sauce
```

## Reports and Artifacts

After a test run, Playwright can generate:

- `playwright-report/` for HTML reports.
- `test-results/` for screenshots, videos, traces, and raw results.

These folders are generated artifacts and are intentionally ignored by git.

## Code Quality Notes

- Tests are grouped by business workflow in `tests/login.spec.ts`.
- Reusable UI actions live in `pages/LoginPage.ts`.
- Selectors use accessible placeholders and roles where possible.
- The suite avoids hard-coded navigation URLs inside tests by using Playwright `baseURL`.
- Failure artifacts are enabled to support debugging and client-facing evidence.

## Current Status

The Playwright suite has been fixed, reviewed, and verified locally.

Latest validation:

```text
npm.cmd test
3 passed
```

The main Playwright project is in working condition and ready to showcase as a compact automation portfolio project.

## Future Enhancements

- Add cross-browser projects for Firefox and WebKit.
- Add GitHub Actions CI execution.
- Add API testing examples.
- Add Allure or custom reporting if client reporting needs grow.
- Add more Page Object Model coverage for cart and checkout workflows.
