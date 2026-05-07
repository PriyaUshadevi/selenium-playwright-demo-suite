import { test, expect } from '@playwright/test';

test.describe('Login Functionality', () => {

  test('Verify login page title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Verify user can login successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

});