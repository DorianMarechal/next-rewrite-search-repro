import { expect, test } from "@playwright/test";

test("a prefetched link to the same rewritten URL with another query renders the new page", async ({ page }) => {
  const prefetched = page.waitForResponse((response) => response.url().includes("page=2") && response.request().headers()["next-router-prefetch"] === "1");
  await page.goto("/public");
  await expect(page.getByRole("heading", { name: "Page 1" })).toBeVisible();
  const response = await prefetched;
  console.log("x-nextjs-rewritten-query:", JSON.stringify(response.headers()["x-nextjs-rewritten-query"]));

  await page.getByRole("link", { name: "Next page" }).click();
  await expect(page).toHaveURL("/public?page=2");
  await expect(page.getByRole("heading", { name: "Page 2" })).toBeVisible();
});
