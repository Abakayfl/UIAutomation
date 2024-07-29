import { test, expect } from "@playwright/test";

test("test1", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  await page.getByPlaceholder("Tap '/' to search").click();
  await page.getByPlaceholder("Tap '/' to search").fill("na");
  await expect(page.locator('[id="__flareact"]')).toContainText(
    "North American University"
  );
  await expect(
    page.getByRole("link", { name: "NA.Edu", exact: true })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Portal.NA.Edu" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Shop.NA.Edu" })).toBeVisible();
});

test("test2", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  await page.getByPlaceholder("Tap '/' to search").click();
  await page.getByPlaceholder("Tap '/' to search").fill("xyz");
  await expect(
    page.getByRole("link", { name: "NA.Edu", exact: true })
  ).not.toBeVisible();
  await expect(page.getByRole("link", { name: "Portal.NA.Edu" })).not.toBeVisible();
  await expect(page.getByRole("link", { name: "Shop.NA.Edu" })).not.toBeVisible();
});

test("test3", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "NetAcad.com" }).click();
  const page3 = await page3Promise;
  await page3.waitForTimeout(5000);
  await expect(page3).toHaveTitle(/Cisco/);
});

test("test4", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole('link', { name: 'NA.Edu', exact: true }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/North American University/);
});

test("test5", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Portal.NA.Edu" }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/MyNAU/);
});

test("test6", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Shop.NA.Edu" }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/Stallion's Shop/);
});

test("test7", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Office.com", exact: true }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/Microsoft 365/);
});

test("test8", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Outlook.Office.com" }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/Outlook/);
});

test("test9", async ({ page }) => {
  await page.goto("https://status.abdulisik.com/");
  const page3Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Bing.com" }).click();
  const page3 = await page3Promise;
  await expect(page3).toHaveTitle(/Bing/);
});

test('Dark/Light Mode Icon Functionality', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://status.abdulisik.com/');

  // Check if the page is in light mode
  await expect(page.locator('html')).toHaveClass(/light/);

  // Define the button selector
  const button = page.getByRole('button');

  // Toggle to dark mode
  await button.click();

  // Check if the page is in dark mode
  await expect(page.locator('html')).toHaveClass(/dark/);

  // Toggle to light mode
  await button.click();

  // Check if the page is in light mode
  await expect(page.locator('html')).toHaveClass(/light/);

});

test('test 11', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://status.abdulisik.com/');

  // Define a reusable function to check hover text
  const checkHoverText = async (hoverSelector, textSelector, expectedText) => {
      await page.locator(hoverSelector).hover();
      await expect(page.locator(textSelector)).toHaveText(expectedText);
  };

  // Check hover text for multiple elements
  await checkHoverText('div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(3) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(4) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(4) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(5) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(5) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(6) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(6) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(7) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(7) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(8) > div:nth-child(2) > div:nth-child(15) > .green', 'div:nth-child(8) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', 'All good');
  await checkHoverText('div:nth-child(15) > .yellow', 'div:nth-child(9) > div:nth-child(2) > div:nth-child(15) > .content > .font-semibold', '1 incident(s)');
});

test('test', async ({ page }) => {
  await page.goto('https://status.abdulisik.com/');

  const checkHoverText = async (filterText, popupText, exact = false) => {
    const linkLocator = page.locator('div').filter({ hasText: filterText }).getByRole('img');
    await linkLocator.hover();
    const popupLocator = exact ? page.getByText(popupText, { exact: true }) : page.getByText(popupText);
    await expect(popupLocator).toBeVisible();
  };

  await checkHoverText(/^North American UniversityNA\.Edu$/, 'North American University');
  await checkHoverText(/^MyNAU Student PortalPortal\.NA\.Edu$/, 'MyNAU Student Portal');
  await checkHoverText(/^NAU Shop \(ecommerce\)Shop\.NA\.Edu$/, 'NAU Shop (ecommerce)');
  await checkHoverText(/^Microsoft OfficeOffice\.com$/, 'Microsoft Office', true);
  await checkHoverText(/^Microsoft Office Outlook EmailOutlook\.Office\.com$/, 'Microsoft Office Outlook Email');
  await checkHoverText(/^Cisco Networking AcademyNetAcad\.com$/, 'Cisco Networking Academy');
  await checkHoverText(/^Bing Search EngineBing\.com$/, 'Bing Search Engine');
  await checkHoverText(/^NAU Shop \(ecommerce\)Shop\.NA\.Edu$/, 'NAU Shop (ecommerce)');
});
 




