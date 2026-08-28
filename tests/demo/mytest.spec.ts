//use key work Test for the function and Expect is for assertions
import {test, expect} from '@playwright/test'

//test fuction has tittle (description of the test) and body function
//page is the fixture that has built in function for testing 
test("Should load homepage with correct tittle", async ({page}) => {
    //go to home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/")

    //assert if tittle is correct
    await expect(page).toHaveTitle("CURA Healthcare Service")

    //assert if header text is correct
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")

})