import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ShopPage } from '../pages/shopPage';

test('Verify shopping flow', async ({ page }) => {
    const homePage = new HomePage(page);

    // Navigate to the initial page
    await homePage.goto('https://status.abdulisik.com/');

    // Click the Shop.NA.Edu link and get the popup page
    const page1 = await homePage.clickShopNaEdu();
    const shopPagePopup = new ShopPage(page1);

    // Hover over 'Men' category and click on 'T-Shirts'
    await shopPagePopup.hoverMenCategory();
    await shopPagePopup.clickTShirts();

    // Select the Champion T-Shirt from the list
    await shopPagePopup.selectChampionTShirt();

    // Wait for a second and add the item to the cart
    await shopPagePopup.waitForTimeout(1000);
    await shopPagePopup.addToCart();

    // Wait for a second and navigate to the cart
    await shopPagePopup.waitForTimeout(1000);
    await shopPagePopup.navigateToCart();

    // Wait for the cart page to load and verify the subtotal
    await shopPagePopup.waitForTimeout(2000);
    await shopPagePopup.verifySubtotal('$25.85');
});
