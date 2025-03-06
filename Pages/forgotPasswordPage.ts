import { Page } from "@playwright/test";

export class ForgotPasswordPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://example.com/forgot-password");
  }

  async requestPasswordReset(email: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.click('button[type="submit"]');
  }
}
