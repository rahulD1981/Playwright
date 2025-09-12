import { test, expect } from '@playwright/test';

test('check boxes ', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#checkBoxOption1").check();
    await page.locator("#checkBoxOption1").isChecked();
    await page.locator("#checkBoxOption1").uncheck();
    await page.waitForTimeout(2000)
    //NOte Very Imp- no direct method to check uncheck option -- elow work around
    expect (await page.locator("#checkBoxOption1").isChecked()).toBeFalsy();
  
    await page.screenshot({path: 'screenshots/screenshot11.png',fullPage:true})

    
})