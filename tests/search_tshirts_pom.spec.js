import { test, expect } from '@playwright/test';
import { AutomationPractice   Page } from '../pages/AutomationPracticePage';

test.describe('Automation Practice - Search T-shirts', () => {
    let automationPage;

    test.beforeEach(async ({ page }) => {
        automationPage = new AutomationPracticePage(page);
    });

    test('Search for T-shirts and verify Faded Short Sleeve T-shirt is displayed', async () => {
        // Step 1: Navigate to the automation practice site
        await automationPage.navigateToSite();

        // Step 2: Search for 'T-shirts'
        await automationPage.searchForProduct('T-shirts');

        // Step 3: Verify the "Faded Short Sleeve T-shirts" is in the results
        const isProductVisible = await automationPage.isProductVisible();
        expect(isProductVisible).toBe(true);

        console.log('✓ Faded Short Sleeve T-shirt successfully found in search results');
    });

    test('Verify product count after searching for T-shirts', async () => {
        // Navigate to site
        await automationPage.navigateToSite();

        // Search for T-shirts
        await automationPage.searchForProduct('T-shirts');

        // Get product count
        const productCount = await automationPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);

        console.log(`✓ Found ${productCount} products in search results`);
    });

    test('Verify Faded Short Sleeve T-shirt element is accessible', async () => {
        // Navigate to site
        await automationPage.navigateToSite();

        // Search for T-shirts
        await automationPage.searchForProduct('T-shirts');

        // Get the product element and verify it exists
        const productElement = automationPage.getProductElement();
        await expect(productElement).toBeVisible();

        console.log('✓ Faded Short Sleeve T-shirt element is accessible');
    });
});
