import{test,expect} from "@playwright/test";

test("Built in Locators", async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


//Get ByALt Text
const logo=await page.getByAltText("company-branding");
//const loginPageLogo=page.locator("div[class='orangehrm-login-logo-mobile'] img[alt='orangehrm-logo']");
//await page.waitForSelector();
await expect(logo).toBeVisible();

//GetByPlaceholder

await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");

await page.getByRole("button",{type:'submit'}).click();

const username=await page.locator("//p[@class='oxd-userdropdown-name']").textContent()
await expect(await page.getByText(username)).toBeVisible();







})