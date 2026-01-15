const { test, expect } = require('@playwright/test');

let user = "standard_user";
let pass = "secret_sauce";
let firstName = "Kike";
let lastName = "Fema";
let zipCode = "08080";  

test('Test de compra con Playwright', async ({ page }) => {
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
  await page.click('#add-to-cart-sauce-labs-backpack');
    console.log("Producto agregado al carrito");
  await page.click('.shopping_cart_link');
    console.log("Ingresando al carrito");
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log("URL del carrito correcta");
  await page.click('#checkout');
    console.log("Iniciando checkout");
  await page.fill('#first-name', firstName);
  await page.fill('#last-name', lastName);
  await page.fill('#postal-code', zipCode);
    console.log("Datos de checkout ingresados");
  await page.click('#continue');
    console.log("Continuando con el checkout");
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    console.log("URL de checkout paso 2 correcta");
  await page.click('#finish');
    console.log("Finalizando compra");
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    console.log("Compra finalizada correctamente");
});

// npx playwright test tests/test02.spec.js --headed