import { test, expect } from '@playwright/test';

    test('Enter data in text box diffrent ways', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#country').selectOption('India');
        page.screenshot({path:'dropdown.png',fullPage:true});
        await page.locator('#country').selectOption({value:"uk"});
        page.screenshot({path:'dropdown1.png',fullPage:true});
        await page.locator('#country').selectOption({ label: 'India' });
        await page.locator('#country').selectOption({ index: 3 });
        await page.locator('#colors').selectOption(['Red', 'Green', 'Blue']);

        //count of options in dropdown
        const options = page.locator('#country > option'); // optio is usedto play with dropdown
        await expect(options).toHaveCount(10);

//Check If a Specific Option Exist
        const optionsText = await page.locator('#country > option').allTextContents();
        expect(optionsText).toContain('Japan');
//4. Print All Dropdown Options

const texts = await page.locator('#colors > option').allTextContents();
for (const text of texts) {
 console.log(text);
}


})