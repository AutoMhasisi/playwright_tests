import { test, expect } from "@playwright/test";

//Use test.describe to group tests
test.describe("Login functionality", () => {

  //hook to run before all tests in this login function
  //these are the common steps for the tests in this functionality
  test.beforeEach("Go to login page", async ({ page }) => {

    // launch url
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("h1")).toContainText("CURA Healthcare Service");

    //Click to make an appointment
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
  });

  test("Should login successfully", async ({ page }) => {
    //successful login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert test
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test("Should prevent login with incorrect credentials", async ({ page }) => {
    //failed login
    await page.getByLabel("Username").fill("John test");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    //Assert that when login fails error is displayed
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid.",
    );
  });
});
