import{test, expect} from "@playwright/test";

test ("locator Multiple Elements", async({page})=>{
  await page.goto("https://www.demoblaze.com/");


// ***********************Print All links from page*******************

  //   const links=await page.$$('a');

//   for(const link of links){
//   const linkText=  await link.textContent();
//   console.log(linkText);
//   }
await page.waitForSelector("//div[@id='tbodyid']//h4/a")
  const products=await page.$$("//div[@id='tbodyid']//h4/a");

  for(const product of products){
   const productNmae=await product.textContent();
   console.log(productNmae);
  }
  await page.close();
  
})