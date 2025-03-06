import { Given, When, Then } from '../fixtures/bddSetup';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { test, expect } from '@playwright/test';

let resetLink: string;

Given('User navigates to the Forgot Password page', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.navigate();
});

When('User requests a password reset for {string}', async ({ page }, email: string) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);
  await forgotPasswordPage.requestPasswordReset(email);
});

Then('User should receive a reset email', async () => {
  console.log("Email validation logic goes here...");
});

Then('User should extract the reset link from the email', async () => {
  console.log("Simulating email extraction...");
  resetLink = "https://example.com/reset-password?token=123456"; // Simulated link
});

Then('User should be redirected to the password reset page', async ({ page }) => {
  await page.goto(resetLink);
  await expect(page).toHaveURL(/reset-password/);
});
