import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify Faded Short Sleeve T-shirts in results', async ({ page }) => {
    // Navigate to the automation practice site
    await page.goto('http://www.automationpractice.pl/index.php');
    
    // Wait for the page to load
    await page.waitForLoadState('domcontentloaded');
    
    // Click on the search box and enter 'T-shirts'
    await page.locator('#search_query_top').fill('T-shirts');
    
    // Click the search button or press Enter
    await page.locator('button[name="submit_search"]').click();
    
    // Wait for search results to load
    await page.waitForLoadState('networkidle');
    
    // Verify that "Faded Short Sleeve T-shirts" is visible in the results
    const productName = page.locator('a:has-text("Faded Short Sleeve T-shirt")');
    
    // Assert the product is present
    await expect(productName).toBeVisible();
    
    console.log('✓ Faded Short Sleeve T-shirt found in search results');
});
