import { BasePage } from './basePage';
import { Page, expect } from '@playwright/test';

export class StatusPage extends BasePage {
    // Constructor initializes the StatusPage object
    // The page object is passed as an argument and forwarded to the BasePage constructor
    constructor(page: Page) {
        super(page);
    }

    // Method to perform a search using a given query
    // Locates the search input by its placeholder, clicks it, and fills it with the query
    async search(query: string) {
        const searchInput = this.page.getByPlaceholder("Tap '/' to search");
        await searchInput.click();
        await searchInput.fill(query);
    }

    // Method to verify that the search result contains the specified text
    // Locates the search result container and checks if it contains the expected text
    async expectSearchResultText(text: string) {
        const resultLocator = this.page.locator('[id="__flareact"]');
        await expect(resultLocator).toContainText(text);
    }

    // Method to verify the visibility of a link with the specified name
    // If isVisible is true, checks that the link is visible; otherwise, checks that it is not visible
    async expectLinkVisible(linkName: string, isVisible: boolean) {
        const link = this.page.getByRole("link", { name: linkName, exact: true });
        if (isVisible) {
            await expect(link).toBeVisible();
        } else {
            await expect(link).not.toBeVisible();
        }
    }

    // Method to click a link with the specified name
    // Locates the link by its name and performs a click action
    async clickLink(linkName: string) {
        const link = this.page.getByRole("link", { name: linkName, exact: true });
        await link.click();
    }

    // Method to verify the title of a popup page
    // Waits for the popup page and checks its title against the expected title (string or RegExp)
    async expectPopupTitle(pagePromise: Promise<Page>, expectedTitle: string | RegExp) {
        const popupPage = await pagePromise;
        await expect(popupPage).toHaveTitle(expectedTitle);
    }

    // Method to toggle between dark and light modes
    // Locates the button responsible for toggling and performs a click action
    async toggleDarkLightMode() {
        const button = this.page.getByRole('button');
        await button.click();
    }

    // Method to verify that the HTML element has the expected class
    // Locates the HTML element and checks if it has the expected class using a RegExp
    async expectHtmlClass(expectedClass: RegExp) {
        const html = this.page.locator('html');
        await expect(html).toHaveClass(expectedClass);
    }

    // Method to verify the hover text of an element
    // Hovers over the element specified by hoverSelector and checks the text of the element specified by textSelector
    async checkHoverText(hoverSelector: string, textSelector: string, expectedText: string) {
        await this.page.locator(hoverSelector).hover();
        await expect(this.page.locator(textSelector)).toHaveText(expectedText);
    }
}
