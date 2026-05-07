# Selenium Playwright Demo Suite

Portfolio-ready UI automation project built with Playwright, TypeScript, and the Page Object Model pattern. The main suite validates real browser login workflows against the public SauceDemo application and is organized to demonstrate maintainable test design, reusable page classes, configurable environments, and professional test reporting.

## Project Status

Current status: **Passed for the main Playwright automation suite.**

Latest local validation on 07 May 2026:

```text
npm.cmd test
3 passed
```

The repository also contains `Sample_MavenProject/`, an optional Java/Maven learning project. It is separate from the Playwright automation framework and is not required to run the browser tests. Maven and the JDK were not available on this machine during the latest review, so the optional Java project could not be compiled locally in this session.

## Problem Statement

Manual regression testing for login workflows is repetitive, slow, and easy to miss when an application changes. A recruiter or client also needs to see more than a single automation script: they need a small, understandable framework that is easy to install, easy to configure, repeatable, and structured in a way that can grow into a larger test suite.

## Solution

This project provides an end-to-end Playwright automation suite for SauceDemo login scenarios. It uses a page object for login actions, isolated tests for positive and negative behavior, browser-level assertions, configurable target URLs, screenshots/videos/traces on failure, and an HTML report for evidence and review.

## Key Features

- Playwright browser automation with TypeScript.
- Page Object Model implementation in `pages/LoginPage.ts`.
- Positive login validation for a standard SauceDemo user.
- Negative login validation for a locked-out SauceDemo user.
- Page title, URL, and inventory page assertions.
- Configurable application URL through `BASE_URL`.
- HTML test report generation.
- Screenshots, videos, and traces retained on failure.
- CI-friendly Playwright configuration with retry support.
- Optional Java/Maven sample folder for core Java practice examples.

## Tech Stack

- Node.js 18 or later.
- npm.
- Playwright Test.
- TypeScript syntax supported by Playwright.
- Chromium browser installed through Playwright.
- Optional: JDK and Maven for `Sample_MavenProject/`.

## Project Structure

```text
selenium-playwright-demo-suite/
|-- pages/
|   `-- LoginPage.ts              # Reusable login page object
|-- tests/
|   `-- login.spec.ts             # Login workflow test scenarios
|-- playwright.config.ts          # Playwright configuration
|-- package.json                  # npm scripts and dependencies
|-- package-lock.json             # Locked dependency versions
|-- .gitignore                    # Generated files excluded from git
|-- README.md                     # Project documentation
`-- Sample_MavenProject/          # Optional Java/Maven practice project
```

## Prerequisites

Install these before running the Playwright suite:

- Node.js 18 or later.
- npm, included with Node.js.
- Git, if cloning from a remote repository.
- Internet access, because tests run against `https://www.saucedemo.com`.

Optional Java prerequisites:

- JDK 17 or later.
- Apache Maven 3.9 or later.

Maven and the JDK are only needed if you want to compile or explore `Sample_MavenProject/`. They are not needed for the Playwright tests.

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd selenium-playwright-demo-suite
```

Install npm dependencies:

```bash
npm install
```

Install the Chromium browser used by the suite:

```bash
npm run install:browsers
```

Equivalent direct Playwright command:

```bash
npx playwright install chromium
```

On Windows PowerShell, if `npm` is blocked by the local script execution policy, use:

```powershell
npm.cmd install
npm.cmd run install:browsers
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

Important configuration lives in `playwright.config.ts`:

- `testDir`: loads tests from `tests`.
- `baseURL`: defaults to SauceDemo and can be overridden with `BASE_URL`.
- `browserName`: runs on Chromium.
- `headless`: runs in headless mode by default.
- `screenshot`: captures screenshots on failure.
- `video`: keeps videos on failure.
- `trace`: keeps Playwright traces on failure.
- `retries`: retries once in CI.
- `reporter`: prints list output and generates an HTML report.

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

Windows PowerShell alternatives:

```powershell
npm.cmd test
npm.cmd run test:headed
npm.cmd run test:ui
npm.cmd run report
```

## Test Coverage

Current Playwright coverage includes:

- Login page title validation.
- Successful login using `standard_user`.
- Inventory page validation after successful login.
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
- `test-results/` for screenshots, videos, traces, and raw test results.

These folders are generated artifacts and are intentionally ignored by git.

## Optional Java/Maven Project

`Sample_MavenProject/` contains beginner-friendly Java examples for topics such as access modifiers, encapsulation, inheritance, polymorphism, abstraction, interfaces, loops, and simple programs.

To compile it on a machine with JDK and Maven installed:

```bash
cd Sample_MavenProject
mvn test
```

This optional folder is not part of the Playwright test execution path. If you are showcasing the automation framework specifically, the main evidence is the Playwright suite and report.

## Code Quality Notes

- Tests are grouped by workflow in `tests/login.spec.ts`.
- Reusable UI actions live in `pages/LoginPage.ts`.
- Selectors use accessible placeholders and roles where practical.
- The suite avoids hard-coded navigation URLs inside tests by using Playwright `baseURL`.
- Failure artifacts are enabled to support debugging and client-facing evidence.
- The test scope is intentionally compact so the framework remains easy to review in a portfolio setting.

## Review Summary

Latest review result:

- Playwright dependencies installed successfully.
- Chromium browser installed successfully.
- `npm.cmd test` completed successfully.
- 3 Playwright tests passed.
- No Playwright test failures were found.
- No npm vulnerabilities were reported by `npm install`.
- Optional Maven validation could not be completed because `mvn` and `javac` were not available on this machine.

## Recruiter and Client Showcase Notes

This project is suitable to present as a compact UI automation framework because it includes:

- A clear business problem and automation solution.
- Real browser execution against a public demo application.
- Page Object Model structure.
- Repeatable install and run commands.
- Configurable environment support.
- Test evidence through reports and failure artifacts.
- Honest separation between the production-style Playwright suite and the optional Java learning folder.

## Future Enhancements

- Add cross-browser projects for Firefox and WebKit.
- Add GitHub Actions CI execution.
- Add cart and checkout workflow coverage.
- Add API testing examples.
- Add Allure reporting if richer client reports are required.
- Add unit or lint checks if the codebase grows.
