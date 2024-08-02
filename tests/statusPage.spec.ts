import { expect, test } from '@playwright/test';
import { StatusPage } from '../pages/statusPage';

test('Verify search results and link visibility for "na" term', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Search for the term 'na'
  await statusPage.search('na');

  // Verify search result contains 'North American University'
  await statusPage.expectSearchResultText('North American University');

  // Verify the visibility of specific links
  await statusPage.expectLinkVisible('NA.Edu', true);
  await statusPage.expectLinkVisible('Portal.NA.Edu', true);
  await statusPage.expectLinkVisible('Shop.NA.Edu', true);
});

test('Verify search results and link visibility for "xyz" term', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Search for the term 'xyz'
  await statusPage.search('xyz');

  // Verify specific links are not visible
  await statusPage.expectLinkVisible('NA.Edu', false);
  await statusPage.expectLinkVisible('Portal.NA.Edu', false);
  await statusPage.expectLinkVisible('Shop.NA.Edu', false);
});

test('Verify title for NetAcad.com link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the NetAcad.com link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('NetAcad.com');
  await statusPage.expectPopupTitle(page3Promise, /Cisco Networking Academy/);
});

test('Verify title for NA.Edu link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the NA.Edu link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('NA.Edu');
  await statusPage.expectPopupTitle(page3Promise, /North American University/);
});

test('Verify title for Portal.NA.Edu link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the Portal.NA.Edu link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('Portal.NA.Edu');
  await statusPage.expectPopupTitle(page3Promise, /MyNAU/);
});

test('Verify title for Shop.NA.Edu link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the Shop.NA.Edu link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('Shop.NA.Edu');
  await statusPage.expectPopupTitle(page3Promise, /Stallion's Shop/);
});

test('Verify title for Office.com link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the Office.com link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('Office.com');
  await statusPage.expectPopupTitle(page3Promise, /Microsoft 365/);
});

test('Verify title for Outlook.Office.com link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the Outlook.Office.com link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('Outlook.Office.com');
  await statusPage.expectPopupTitle(page3Promise, /Outlook/);
});

test('Verify title for Bing.com link', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Click the Bing.com link and handle the popup
  const page3Promise = page.waitForEvent('popup');
  await statusPage.clickLink('Bing.com');
  await statusPage.expectPopupTitle(page3Promise, /Bing/);
});

test('Verify dark/light mode toggle functionality', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Verify the page is in light mode
  await statusPage.expectHtmlClass(/light/);

  // Toggle to dark mode and verify
  await statusPage.toggleDarkLightMode();
  await statusPage.expectHtmlClass(/dark/);

  // Toggle back to light mode and verify
  await statusPage.toggleDarkLightMode();
  await statusPage.expectHtmlClass(/light/);
});

test('Verify hover text for various elements', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Verify hover text for multiple elements
  await statusPage.checkHoverText('div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(4) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(4) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(5) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(5) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(6) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(6) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(7) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(7) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(8) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(8) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await statusPage.checkHoverText('div:nth-child(15) > .yellow', 'div:nth-child(9) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', '1 incident(s)');
});

test('Verify hover text for various links', async ({ page }) => {
  const statusPage = new StatusPage(page);

  // Navigate to the initial page
  await statusPage.goto('https://status.abdulisik.com/');

  // Define a reusable function to check hover text
  const checkHoverText = async (filterText: string | RegExp, popupText: string, exact = false) => {
    const linkLocator = page.locator('div').filter({ hasText: filterText }).getByRole('img');
    await linkLocator.hover();
    const popupLocator = exact ? page.getByText(popupText, { exact: true }) : page.getByText(popupText);
    await expect(popupLocator).toBeVisible();
  };
  // Verify hover text for multiple links
  await checkHoverText(/^North American UniversityNA\.Edu$/, 'North American University');
  await checkHoverText(/^MyNAU Student PortalPortal\.NA\.Edu$/, 'MyNAU Student Portal');
  await checkHoverText(/^NAU Shop \(ecommerce\)Shop\.NA\.Edu$/, 'NAU Shop (ecommerce)');
  await checkHoverText(/^Microsoft OfficeOffice\.com$/, 'Microsoft Office', true);
  await checkHoverText(/^Microsoft Office Outlook EmailOutlook\.Office\.com$/, 'Microsoft Office Outlook Email');
  await checkHoverText(/^Cisco Networking AcademyNetAcad\.com$/, 'Cisco Networking Academy');
  await checkHoverText(/^Bing Search EngineBing\.com$/, 'Bing Search Engine');
  await checkHoverText(/^NAU Shop \(ecommerce\)Shop\.NA\.Edu$/, 'NAU Shop (ecommerce)');
});
