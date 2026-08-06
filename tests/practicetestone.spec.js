const {test, expect} = require('@playwright/test');


test('Browser Context Playwright test', async ({browser}) =>
{
    const context = await browser.newContext(); //A Browser Context is like a fresh browser profile.
    const page = await context.newPage(); //Creates a browser tab.
    
    const firstName = page.locator('#firstName'); //"Remember where the First Name box is."
    const lastName = page.locator('#lastName'); //"Remember where the Last Name box is."
    const userEmail = page.locator('#userEmail'); //"Remember where the Email box is."
    const userMobile = page.locator('#userMobile'); //"Remember where the Mobile box is."
    const occupation = page.locator('#occupation'); //"Remember where the Occupation box is."
    const genderMale = page.locator("input[value='Male']"); //"Remember where the Male radio button is."
    const genderFemale = page.locator("input[value='Female']"); //"Remember where the Female radio button is."
    const password = page.locator('#password'); //"Remember where the Password box is."
    const confirmPassword = page.locator('#confirmPassword'); //"Remember where the Confirm Password box is."
    const checkbox = page.locator('#checkBox'); //"Remember where the Terms and Conditions checkbox is." 
    const login = page.locator('#login'); //"Remember where the register button is."

    const useremail = page.locator('#userEmail'); //"Remember where the Email box is."
    const userpassword = page.locator('#userPassword'); //"Remember where the Password box is."

    // const cardTitles = page.locator('.card-body a'); //Remember where the card titles are.
    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/register'); //Loads the URL.
    //await page.pause();
    console.log(await page.title());
    //css, xpath
  
   await firstName.fill('John');
   await lastName.fill('Doe');
   await userEmail.fill('john.doe@example.com');
   await userMobile.fill('1234567890');
   await occupation.selectOption('Engineer');
   await genderMale.click();
   await password.fill('Password123!');
   await confirmPassword.fill('Password123!');
   await checkbox.click();
   await login.click();
//    await page.pause(); //Execution stops and Playwright Inspector opens.
    //wait for the element to be visible
 console.log(await page.locator("[style*='block']").textContent());
 await expect(page.locator("[style*='block']")).toContainText('Incorrect'); //This prints the error.
   //type - fill the input field
  
 
//  console.log(await page.locator(".card-body a").nth(0).textContent());
//  console.log(await page.locator(".card-body a").nth(1).textContent());
//  const allTitles = await cardTitles.allTextContents(); //Returns an array of all the card titles.
//  console.log(allTitles);
//  await cardTitles.allTextContents().then(function(value){ //Returns an array of all the card titles.

});

// test('Page Playwright test', async ({page}) =>
// {
//        await page.goto('https://google.com/');
//     console.log(await page.title());
//       await expect(page).toHaveTitle("Google");
// });