// Capitulo 6 Navegación avanzada y manejo de páginas

const { test, expect } = require('@playwright/test');

test('Test de navegación avanzada (atras, avanzar, recargar', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await expect(page).toHaveTitle('DEMOQA');
    console.log('Título verificado');
    await page.click('text=Elements');
    console.log('Haciendo clic en Elements');
    await expect(page).toHaveURL(/.*elements/);
    console.log('URL verificada');
    await page.goBack();
    console.log('Navegando hacia atrás');
    await expect(page).toHaveURL('https://demoqa.com/');
    console.log('URL verificada después de ir hacia atrás');
    await page.goForward();
    console.log('Navegando hacia adelante');
    await expect(page).toHaveURL(/.*elements/);
    console.log('URL verificada después de ir hacia adelante');
    await page.reload();
    console.log('Recargando la página');
    await expect(page).toHaveURL(/.*elements/);
    console.log('URL verificada después de recargar la página');
});
// npx playwright test tests/test06.spec.js --headed

