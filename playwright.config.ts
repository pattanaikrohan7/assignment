import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./features",
  testMatch: ["**/*.feature"],
  timeout: 60000,
  retries: 1,
  workers: 2,
  use: {
    headless: true,
    browserName: "chromium",
    screenshot: "on",
    video: "retain-on-failure",
    trace: "on",
  },
  reporter: [
    ["list"],
    ["html", { outputFolder: "test-results/html-report" }],
    ["json", { outputFile: "test-results/report.json" }],
    ["junit", { outputFile: "test-results/junit-report.xml" }]
  ],
  outputDir: "test-results/",
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    }
  ],
});
