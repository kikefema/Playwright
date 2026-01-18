
// Esperas de navegación
const { test, expect } = require('@playwright/test');

test('Test de navegación avanzada con esperas', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await expect(page).toHaveTitle('DEMOQA');
    console.log('Título verificado');
    await page.click('text=Widgets');
    console.log('Haciendo clic en Widgets');
    await expect(page).toHaveURL(/.*widgets/);
    console.log('URL verificada');
});
// npx playwright test tests/test06-01.spec.js --headed
