import { test, expect } from '@playwright/test';
//group tests
test.describe("Make appointment",() => {

  test.beforeEach("Login with valid credentials", async ({page})=>{
    // launch url
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("h1")).toContainText("CURA Healthcare Service");

    //Click to make an appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();

    //successful login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert appointment page
    await expect(page.locator('h2')).toContainText('Make Appointment');
  });

  test('Should make an appointment', async ({ page }) => {

  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
  await page.getByRole('radio', { name: 'Medicaid' }).check();
  await page.locator('span').click();
  await page.getByRole('cell', { name: '17' }).click();
  await page.locator('form').click();
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('Appointment to see a doctor');
  await page.getByRole('button', { name: 'Book Appointment' }).click();

  //Assert appointment confirmation
  await expect(page.getByRole('heading', { name: 'Appointment Confirmation' })).toBeVisible();
 });
});

