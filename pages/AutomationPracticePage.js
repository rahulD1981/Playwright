export class AutomationPracticePage {
    constructor(page) {
        this.page = page;
        // Locators
        this.searchBox = page.locator('#search_query_top');
        this.searchButton = page.locator('button[name="submit_search"]');
        this.productList = page.locator('ul.product_list');
        this.fadedTShirtProduct = page.locator('a:has-text("Faded Short Sleeve T-shirt")');
    }

    /**
     * Navigate to the automation practice site
     */
    async navigateToSite() {
        await this.page.goto('http://www.automationpractice.pl/index.php');
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Search for a product by keyword
     * @param {string} searchTerm - The product to search for
     */
    async searchForProduct(searchTerm) {
        await this.searchBox.fill(searchTerm);
        await this.searchButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Verify if a specific product is visible in search results
     * @returns {Promise<boolean>} - True if product is visible
     */
    async isProductVisible() {
        return await this.fadedTShirtProduct.isVisible();
    }

    /**
     * Get the product name element
     * @returns {Locator} - The product name locator
     */
    getProductElement() {
        return this.fadedTShirtProduct;
    }

    /**
     * Get product count in search results
     * @returns {Promise<number>} - Count of products
     */
    async getProductCount() {
        const products = await this.page.locator('ul.product_list li.ajax_block_product').count();
        return products;
    }
}
