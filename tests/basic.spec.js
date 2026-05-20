import { test, expect } from '@playwright/test';
import path from 'path';

test.skip('Validate title of the page', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    console.log(page.title());
    await expect(page).toHaveTitle('STORE');
})
test.skip('Enter data in text box diffrent ways', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//a[@class='nav-link'][@id='login2']").click();
    await page.locator('#loginusername').waitFor();
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true })
    await page.locator('#loginusername').fill("Donkey");
    await page.locator('#loginusername').type("Mama");
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true })

})

test('Pending -- Validate text in text boxn', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//a[@class='nav-link'][@id='login2']").click();
    await page.locator('#loginusername').waitFor();
    await page.locator('#loginusername').fill("Donkey");
   // await page.locator('#loginusername').type("Mama");
   page.waitForTimeout(2000)
    const enterText = await page.locator('#loginusername').textContent();
    console.log("Entered text is " + enterText)   
    expect(enterText).toContain("Donkey")
    expect(page.locator)
    //await page.locator('#loginusername').('Donkey')



})

test('Text Box Clear Text ', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//a[@class='nav-link'][@id='login2']").click();
    await page.locator('#loginusername').waitFor();
    await page.locator('#loginusername').fill("Donkey");
    await page.locator('#loginusername').type("Mama");
    await page.locator('#loginusername').clear();
    await page.locator('#loginusername').pressSequentially('Ind'); // auto populated text
      await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true })
})

test('Wait statements diffrent types ', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.waitForLoadState('domcontentloaded'); 
    await page.locator("//a[@class='nav-link'][@id='login2']").click();
    await page.locator('#loginusername').waitFor();//wait for element 
    await page.waitForTimeout(2000) //har coded wait
   // await page.locator("//div[@class='list-group']//a[4] ").click();
   // await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
   await page.locator('#loginusername').waitForLoadState('networkidle');
  
})

test('Paywright Locators ', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//div[@class='list-group']//a[4]").waitFor();//wait for element 
    //await page.locator("//a").nth(4).click()    //clicking on nth chidld
     await page.locator("//a").first().click()    //clicking on nth chidld
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
  
})

test('Xpath Different ways ', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("//div[@class='list-group']//a[4]").waitFor();//wait for element 
    //await page.locator("//div[@class='list-group']//a[4]").click(); //nth element added in xpath itselft
    await page.locator("//a").nth(4).click()

   // Css   input[value='female']
    

// find multiple elements and using xpath method only click on nth element
    //div[@class='form-check form-check-inline']//input[1]

//find multiple elments using xpath and then using playwright nth method click
        //await page.locator("//div[@class='form-check form-check-inline']//input").nth(0).click()
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
  
})

test('Radio Button ', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//div[@class='form-check form-check-inline']//input").nth(0).click()
     await page.locator("//div[@class='form-check form-check-inline']//input").nth(1).click()
    await page.locator("input[value='female']").click();
    await page.locator("input[value='female']").isChecked();
     await page.locator("input[value='male']").click();
   expect(await page.locator("input[value='female']").isChecked()).toBeFalsy()
 
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });
name="gender"
    
})

test('Java Dialogue ', async ({ page }) => {
    //to handle alert we have to add code bfore clickin the alert button
    //this way alert will get activate in advance and then we can perform operatioin on it
    //if u add it after click on alert then it will not work
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    
    await page.screenshot({path : 'screenshots/screenshot.png', fullPage: true });
    page.on('dialog', (dialog) => {
        console.log("Dialoge type is ", dialog.type())
        expect(dialog.type()).toContain('alert')
        console.log("text on the dialogue is ", dialog.message());
        expect(dialog.message()).toContain("Hello , share this practice page and share your knowledge")
        dialog.accept();
    });
    await page.locator("fieldset>[value='Alert']").click();
    await page.screenshot({path : 'screenshots/screenshot.png', fullPage: true });
    
})

test('check boxes ', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("#checkBoxOption1").check();
    await page.locator("#checkBoxOption1").isChecked();
    await page.locator("#checkBoxOption1").uncheck();
    await page.waitForTimeout(2000)
    //NOte Very Imp- no direct method to check uncheck option -- elow work around
    expect (await page.locator("#checkBoxOption1").isChecked()).toBeFalsy();
  
    await page.screenshot({path: 'screenshots/screenshot.png',fullPage:true})

    
})

test('Check Boxes', async ({ page }) => {
  

})

test('Check Attributes', async ({ page }) => {
 await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    expect(await page.locator("input[value='female']")).toHaveAttribute('name','gender');
    await page.screenshot({ path: 'screenshots/screenshot.png', fullPage: true });


})

test('Element is visible', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
    await page.locator("//input[@value='radio1']").isVisible();

})

test('screen shot', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.waitForLoadState('domcontentloaded');
   /* To take screen shot only on failure
   update belo in config file
   use :{
    screenshot : only-on-failure
   }

   */

})

