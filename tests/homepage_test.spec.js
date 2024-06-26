import {test, expect} from '@playwright/test';

test ('Home Page', async({page})=>{
    await page.goto("https://www.demoblaze.com/");

    const pageTitle=await page.title();
    console.log("Page Title: ", pageTitle);

    await expect(page).toHaveTitle("STORE");

    //another line for git practice in main branch 

    const pageUrl=await page.url();
    console.log("Page url: ", pageUrl);

    await expect(page).toHaveURL("https://www.demoblaze.com/");

    //added this line for git conflict

    await page.close();




})