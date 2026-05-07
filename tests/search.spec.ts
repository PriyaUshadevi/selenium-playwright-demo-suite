import { test, expect } from '@playwright/test';

test('Verify login page title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await expect(page).toHaveTitle(/Swag Labs/);
});