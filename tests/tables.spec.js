import { test, expect } from '@playwright/test';


test('Creating Alias or object', async ({ page }) => {
    const table = await page.locator("#productTable");
    //////1) count total rows & columns
    const coloums= await table.locator('thead tr th')
    const rows = await table.locator("tbody tr ")
 
////// 2) Select check box for Product 4
    //Returns row where Product4 is exist
      const machedRow=rows.filter({ //everthing applied on rows
        has: page.locator('td'),
        hasText: 'Product 4'
       })
       await machedRow.locator('input').check()
})

test('Creating', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator("#productTable");
    //////1) count total rows & columns
    const coloums=  table.locator('thead tr th')
    const rows =  table.locator("tbody tr ")
 
const pageobj = page.locator('#pagination>>>li>>a') //counts total pages
  const totPages = await pageobj.count();
console.log("Total Number of Pages " + totPages); 

dataFound=false;
for(let i=1;i<totPages-1;i++)
{
    const machedRow=rows.filter({ //everthing applied on rows
        has: page.locator('td'),
        hasText: 'Fitness Tracker'
       })
       await machedRow.locator('input').check()  
    }


})

test('Pagination', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
const pageobj = page.locator('#pagination li a');
const totPages = await pageobj.count();
console.log("Total Number of Pages " + totPages);

for (let i = 1; i < totPages - 1; i++) {
  // Click the pagination link for the current page
  await pageobj.nth(i).click(); //using page object clicking element 1
  await page.waitForTimeout(500); // Wait for table to update (adjust as needed)

  // Re-locate rows after page change
  const rows = page.locator("#productTable tbody tr"); //everthing will be done on rows object
  const machedRow = rows.filter({
    has: page.locator('td'),
    hasText: 'Fitness Tracker'
  });

  if (await machedRow.count() > 0) { //id data exists then count will be > 0
    await machedRow.locator('input').check();
    console.log(`Checked Fitness Tracker on page ${i + 1}`);
    break; // Exit loop after finding and checking the item
  }
}
})