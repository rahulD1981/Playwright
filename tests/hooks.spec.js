import { test, expect } from '@playwright/test';
import path from 'path';

test.beforeAll('Hooks', async ({ page }) => {
    console.log("Before all tests")
})

test.afterAll('Hooks', async ({ page }) => {
    console.log("Before all tests")
})

test.beforeEach('Hooks', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
})

test.afterEach('Hooks', async ({ page }) => {
    await page.close();
})

test('test1', async ({ page }) => {
    console.log("Test case 1")
})

test('test2', async ({ page }) => {
    console.log("Test case 2")
})