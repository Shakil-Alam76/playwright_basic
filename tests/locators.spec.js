import{test, expect}from '@playwright/test';


test ("locators", async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    await page.click('id=signin2');

    await page.fill('#sign-username', "Shanto")
    await page.locator('#sign-password').fill("12345");

    await page.click("//button[contains(text(),'Sign up')]");

  

    // Login 

    await page.click('id=login2')

await page.fill("id=loginusername", "Shanto");
await page.fill("id=loginpassword", "12345");

await page.click("//button[contains(text(),'Log in')]");

// verify logout button is present

const logOutButton=await page.locator("id=logout2");

await expect(logOutButton).toBeVisible();

await page.close();



})