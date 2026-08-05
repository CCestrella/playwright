const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    //css, xpath
    await page.locator('#username').type('rahulshetty');
    await page.locator("[type='password']").type('learning');
    await page.locator('#signInBtn').click();
    await page.pause();
    //wait for the element to be visible
    await page.locator("[style*='block']").waitFor();
   console.log(await page.locator("[style*='block']").textContent());
});

// test('Page Playwright test', async ({page}) =>
// {
//        await page.goto('https://google.com/');
//     console.log(await page.title());
//       await expect(page).toHaveTitle("Google");
// });
  