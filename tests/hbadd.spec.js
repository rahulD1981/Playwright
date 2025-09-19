import { test, expect,locator } from '@playwright/test';

    test('Enter DD', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    //page.waitForTimeout(5000);
        await page.locator("//input[@name='q']").fill('smart');
        //const options = page.locator('ul>li');  
        //const count = await options.count();
        //console.log(count);


})