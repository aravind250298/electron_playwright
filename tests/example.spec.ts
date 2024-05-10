import { test, expect, Page, _electron as electron, ElectronApplication } from '@playwright/test';

let electronApp: ElectronApplication;
let page: Page;


test('has title', async () => {

  electronApp = await electron.launch({
    executablePath: "C:\\Users\\aravi\\AppData\\Local\\Postman\\app-10.21.0\\Postman.exe",
    recordHar: { path: "./harFiles/harfile.zip" }
  });
 
  page = await electronApp.firstWindow();


  await expect(page.locator("//span[text()='Home']")).toBeVisible({ timeout: 7000 });
  await page.waitForTimeout(2000);
  await page.locator("//span[text()='Home']").click();

  await expect(page.locator("//span[text()='lightweight API client.']")).toBeVisible({ timeout: 7000 });
  await page.locator("//span[text()='lightweight API client.']").click();

  await electronApp.close();

});

