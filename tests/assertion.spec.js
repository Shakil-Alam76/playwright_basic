import{test,expect} from "@playwright/test";

test("Assertion Practice", async({page})=>{

await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

await expect(page).toHaveTitle("nopCommerce demo store. Register");

// const logoElement=await page.locator("//img[@alt='nopCommerce demo store']");
const logoElement=await page.getByAltText("nopCommerce demo store");

await expect(logoElement).toBeVisible();


})