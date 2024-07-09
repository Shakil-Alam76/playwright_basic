import{test,expect} from "@playwright/test";

test("Codegentest", async({page})=>{
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
//   await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('Shanto3');
//   await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('123456');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
//   await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Shanto3');
//   await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();

  // ---------------------

})

