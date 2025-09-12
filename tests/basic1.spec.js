import { test, expect } from '@playwright/test';
import path from 'path';

test('Creating Alias or object', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://www.demoblaze.com/index.html");
    await loginbtn.click();
})


test('Promise pending ', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://www.demoblaze.com/index.html");
    await loginbtn.click();
})

test('Locator using text and tag nam ', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('span:has-text("For Selenium, Cypress & Playwright")').isVisible();
})

test('visile and hiddn', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator('#show-textbox').isVisible();
  await page.locator('#hide-textbox').click();
  await page.locator('#displayed-text').isHidden();
  await page.screenshot({path: 'screenshots/screenshot10.png',fullPage:true})
})


test('Mouse Hover', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator('#mousehover').hover();
  await page.screenshot({path: 'screenshots/screenshot10.png',fullPage:true})

})

test('Screen shots', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator('#mousehover').hover();
  await page.screenshot({path: 'screenshots/screenshot10.png',fullPage:true})
  await page.locator('#mousehover').screenshot({path: 'screenshots/screenshot10_1.png'})

})

test('Converting json file to java file ', async ({ page }) => {
    const dataset = JSON.parse(JSON.stringify(require('../Testdata/data1.json')));
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await page.locator('#name').fill(dataset.status);
  await page.screenshot({path: 'screenshots/screenshot10.png',fullPage:true})


})


test('Forecefull click', async ({ page }) => {
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://www.demoblaze.com/index.html");
    await loginbtn.click({force : true});
})

test('Iverrde defaut timeout for expet and test case', async ({ page }) => {
    test.setTimeout(60000);
    const loginbtn = page.locator("//a[@class='nav-link'][@id='login2']");
    await page.goto("https://www.demoblaze.com/index.html");
    expect(page.loginbtn).tobevisible({timeout:30000});
})