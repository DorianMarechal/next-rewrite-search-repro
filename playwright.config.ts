import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: { baseURL: "http://localhost:3999" },
  webServer: { command: "npm run build && npm run start", url: "http://localhost:3999/public", reuseExistingServer: false, timeout: 180_000 },
});
