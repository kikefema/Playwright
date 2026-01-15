const { test, expect } = require('@playwright/test');

test('Mi primer test con Playwright', async ({ page }) => {
  await page.goto('https://www.google.com');

  const titulo = await page.title();
  console.log(titulo);

  await expect(page).toHaveTitle('Google');
});


// este test lo unico que hace es validar que el titulo de la pagina es el que ponemos
// para correr este test usamos el comando npx playwright test  
// para ver el reporte usamos el comando npx playwright show-report   
// para generar el reporte en html automaticamente al correr los tests usamos el comando npx playwright test --reporter=html  
// para correr un test en especifico usamos el comando npx playwright test tests/primer-test.spec.js  
// para correr un test en especifico y en modo headful usamos el comando npx playwright test tests/primer-test.spec.js --headed  
// para correr un test en especifico y ver lo que hace el navegador usamos el comando npx playwright test tests/primer-test.spec.js --debug 

