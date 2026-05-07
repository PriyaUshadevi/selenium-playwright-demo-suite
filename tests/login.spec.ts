import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Functionality', () => {

  test('Verify login page title', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('Verify user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');
  });

  test('Verify login error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage()).toContainText('Sorry, this user has been locked out');
  });

});
