import { test, expect } from "@playwright/test";

test('test', async ({ page }) => {
    await page.goto('https://status.abdulisik.com/');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Shop.NA.Edu' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('link', { name: 'Men ', exact: true }).hover();
    await page1.getByRole('link', { name: 'T-Shirts' }).click();
    await page1.locator('li').filter({ hasText: 'Men’s Champion T-Shirt $23.50 – $' }).getByRole('link').first().click();
    await page1.waitForTimeout(1000);
    await page1.getByRole('button', { name: 'Add to cart' }).click();
    await page1.waitForTimeout(1000);
    await page1.locator('#woofc-area').getByRole('link', { name: 'Cart' }).click();
    await page1.waitForTimeout(4000);
    // Define a more specific locator for the price element within the cart subtotal row
    const priceLocator = page1.locator('tr.cart-subtotal td[data-title="Subtotal"] .woocommerce-Price-amount.amount');

    // Check if the price element contains the expected text
    await expect(priceLocator).toHaveText('$25.85');
    
  });