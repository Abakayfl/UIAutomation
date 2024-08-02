import { BasePage } from './basePage';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async clickShopNaEdu() {
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.getByRole('link', { name: 'Shop.NA.Edu' }).click();
        return await page1Promise;
    }
}