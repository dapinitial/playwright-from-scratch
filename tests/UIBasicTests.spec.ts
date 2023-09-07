import { test, expect } from '@playwright/test';

test('First Playwright test', async ({ browser, page }) => {
    /** for use with cookies, proxies, etc. otherwise page page as a fixture in the test() */
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    // css and xpath are selectors
    await userName.type('rahulshetty');
    await page.locator('[type="password"]').type('learning');
    await signIn.click();
    // webdriver await
    console.log(await page.locator('[style*="block"]').textContent());
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
    // type-fill
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = cardTitles.allTextContents();
    console.log(await allTitles);
});

test('Check that the title matches google correctly', async ({ page }) => {
    await page.goto('https://www.google.com');
    // get the title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});