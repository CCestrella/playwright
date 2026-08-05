//test() // do something
//expect() // verify something
const {test, expect} = require('@playwright/test');

//Creates a test named "Browser Context Playwright test".
//Playwright gives you the browser fixture automatically.
//async means you can use await.
test('Browser Context Playwright test', async ({browser}) =>
{
    const context = await browser.newContext(); //A Browser Context is like a fresh browser profile.
    const page = await context.newPage(); //Creates a browser tab.
    
    const userName = page.locator('#username'); //"Remember where the Username box is."
    const signInButton = page.locator('#signInBtn'); //"Remember where the Sign In button is."

    const cardTitles = page.locator('.card-body a'); //Remember where the card titles are.
    
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); //Loads the URL.
    //await page.pause();
    console.log(await page.title());
    //css, xpath
   await userName.fill('rahulshetty');
   await page.locator("[type='password']").type('Learning@830$3mK2');
   await signInButton.click();
//    await page.pause(); //Execution stops and Playwright Inspector opens.
    //wait for the element to be visible
 console.log(await page.locator("[style*='block']").textContent());
 await expect(page.locator("[style*='block']")).toContainText('Incorrect'); //This prints the error.
   //type - fill the input field
 await userName.fill(''); //Removes the current text.
 await userName.fill('rahulshettyacademy');
 await signInButton.click();
 console.log(await page.locator(".card-body a").nth(0).textContent());
 console.log(await page.locator(".card-body a").nth(1).textContent());
 const allTitles = await cardTitles.allTextContents(); //Returns an array of all the card titles.
 console.log(allTitles);
 await cardTitles.allTextContents().then(function(value){ //Returns an array of all the card titles.

});

// test('Page Playwright test', async ({page}) =>
// {
//        await page.goto('https://google.com/');
//     console.log(await page.title());
//       await expect(page).toHaveTitle("Google");
// });
});