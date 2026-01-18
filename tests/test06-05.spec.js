// gestión de descargas
const { test, expect } = require('@playwright/test');
test('Test de gestión de descargas', async ({ page, context }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await expect(page).toHaveTitle('DEMOQA');
    console.log('Título verificado');

    await page.click('text=Elements');
    console.log('Haciendo clic en Elements');
    await expect(page).toHaveURL(/.*elements/);
    console.log('URL verificada');

    await page.getByText('Upload and Download').click();
    console.log('Haciendo clic en Upload and Download');
    await expect(page).toHaveURL(/.*upload-download/);
    console.log('URL verificada');

    await page.getByText('Download', { exact: true}).click();
    console.log('Haciendo clic en Download');
    await expect(page).toHaveURL(/.*download/);
    console.log('URL verificada');

    // Hasta aqui la navegación a la web correcta
    
    const [ download ] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ]);
    await download.saveAs('test.jpg');
    console.log('Descarga iniciada');

});
// npx playwright test tests/test06-05.spec.js --headed



