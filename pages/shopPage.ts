import { BasePage } from './basePage';
import { expect, Page } from '@playwright/test';

export class ShopPage extends BasePage {
    // Constructor initializes the ShopPage object
    // The page object is passed as an argument and forwarded to the BasePage constructor
    constructor(page: Page) {
        super(page);
    }

    // Method to hover over the 'Men' category
    // Uses Playwright's `getByRole` method to locate the 'Men' link and performs a hover action
    async hoverMenCategory() {
        await this.page.getByRole('link', { name: 'Men ', exact: true }).hover();
    }

    // Method to click on the 'T-Shirts' link
    // Uses Playwright's `getByRole` method to locate the 'T-Shirts' link and performs a click action
    async clickTShirts() {
        await this.page.getByRole('link', { name: 'T-Shirts' }).click();
    }

    // Method to select the Champion T-Shirt from the list
    // Uses a locator to filter list items and selects the first link that matches the specified text
    async selectChampionTShirt() {
        await this.page.locator('li').filter({ hasText: 'Men’s Champion T-Shirt $23.50 – $' }).getByRole('link').first().click();
    }

    // Method to add the selected item to the cart
    // Uses Playwright's `getByRole` method to locate the 'Add to cart' button and performs a click action
    async addToCart() {
        await this.page.getByRole('button', { name: 'Add to cart' }).click();
    }

    // Method to navigate to the cart page
    // Uses a locator to find the 'Cart' link within the specified area and performs a click action
    async navigateToCart() {
        await this.page.locator('#woofc-area').getByRole('link', { name: 'Cart' }).click();
    }

    // Method to verify the subtotal in the cart
    // Uses a locator to find the subtotal element and verifies its text content matches the expected value
    async verifySubtotal(expectedSubtotal: string) {
        const priceLocator = this.page.locator('tr.cart-subtotal td[data-title="Subtotal"] .woocommerce-Price-amount.amount');
        await expect(priceLocator).toHaveText(expectedSubtotal);
    }
}
