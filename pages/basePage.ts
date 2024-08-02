import { Page } from '@playwright/test';

export class BasePage {
    protected page: Page;

    // Constructor initializes the page object
    constructor(page: Page) {
        this.page = page;
    }

    // Method to navigate to a specified URL
    async goto(url: string) {
        await this.page.goto(url);
    }

    // Method to pause the test execution for a specified timeout
    async waitForTimeout(timeout: number) {
        await this.page.waitForTimeout(timeout);
    }
}