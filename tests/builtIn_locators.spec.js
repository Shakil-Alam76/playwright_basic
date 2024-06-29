import{test,expect} from "@playwright/test";

test("Built in Locators", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


//Get ByALt Text
const logo=await page.getByAltText("company-branding");
//const loginPageLogo=page.locator("div[class='orangehrm-login-logo-mobile'] img[alt='orangehrm-logo']");
//await page.waitForSelector();
await expect(logo).toBeVisible();

//GetByPlaceholder




})