import { defineConfig } from "@playwright/test";

const PORT = 3300;

export default defineConfig({
  testDir: "tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: false,
  reporter: [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    channel: "chrome", // the Chrome already installed on the machine; no browser download
  },
  webServer: {
    command: `npm run start -- -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
