import { test, expect } from '@playwright/test';

test('@Sanity', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 console.log("Sanity")

});
test('@Regressoin', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 console.log("Sanity")

});

test('@Sanity@Regressoin', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 console.log("Sanity")

});

test('@Smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');
 console.log("smoke")

});