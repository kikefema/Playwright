const { test, expect } = require('@playwright/test');

let user = "standard_user";
let pass = "secret_sauce";

test('Test de login con Playwright', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const titulo = await page.title();
  console.log(titulo);

  await expect(page).toHaveTitle('Swag Labs');
    console.log("Web correcta");
  await page.fill('#user-name', user);
  await page.fill('#password', pass);
    console.log("Credenciales ingresadas");
  await page.click('#login-button');
    console.log("Login realizado");
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log("URL correcta");
});

// npx playwright test tests/test02.spec.js --headed