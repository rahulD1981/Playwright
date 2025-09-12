import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test.fail('has title', async ({ page }) => {
    //marks tests as expected to fail. if it passes plawrightwi highlight as unexpected success
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
test.fixme('has title', async ({ page }) => {
    //marks tests that need to be fixed. skipped auomatically
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test.slow('has title', async ({ page }) => {
    //rtakes 3x timeout
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});