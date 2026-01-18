// Manejo de pestañas
const { test, expect } = require('@playwright/test');
test('Test de manejo de pestañas', async ({ page, context }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await expect(page).toHaveTitle('DEMOQA');
    console.log('Título verificado');

    console.log('Haciendo clic en IMAGEN');
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        await page.getByAltText('Selenium Online Training').click()
               
    ]);

    await expect(newPage).toHaveTitle('Tools QA - Selenium Training');
    console.log('Título verificado');

    await newPage.waitForLoadState();
    await newPage.close();
});
// npx playwright test tests/test06-02.spec.js --headed
