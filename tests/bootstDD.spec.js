//https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette

//  #comboTree424394DropDownContainer ul li span input

import { test, expect } from '@playwright/test';

test('bs dd', async ({ page }) => {
await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette');
await page.waitForTimeout(5000);
await page.locator('#justAnInputBox').click();
await page.waitForTimeout(2000);

  const options=page.locator('ul>li span input')
   await expect(options).toHaveCount(30);
   
   
   // $$ means everything will be returned as an array
   const options1=await page.$$('ul>li span input')
   expect(options1.length).toBe(30)

})


test('Boostrap dropdown ex 1', async ({page}) =>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette');
    await page.waitForTimeout(5000);
await page.locator('#justAnInputBox').click();
await page.waitForTimeout(2000);

const options = await page.$$('ul>li span input')

for(const option of options){
    const value = await option.textContent();
    console.log(value);
    if(value==='choice 2'){
        await option.click();
        break;
    }
}
page.screenshot({path:'screenshots/bsdd1.png',fullPage:true})


})