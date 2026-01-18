
// gestión de pop-ups y ventanas modales 
const { test, expect } = require('@playwright/test');
test('Test de gestión de pop-ups', async ({ page, context }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await expect(page).toHaveTitle('DEMOQA');
    console.log('Título verificado');

    await page.click('text=Alerts, Frame & Windows');
    console.log('Haciendo clic en Alerts, Frame & Windows');
    await expect(page).toHaveURL(/.*alertsWindows/);
    console.log('URL verificada');

    await page.getByText('Alerts', { exact: true}).click();
    console.log('Haciendo clic en Alerts');
    await expect(page).toHaveURL(/.*alerts/);
    console.log('URL verificada');
    
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#alertButton').click()
    ]);
    console.log('Pop-up abierto');

    await popup.waitForLoadState();
    console.log('Pop-up cargado');
});
// npx playwright test tests/test06-04.spec.js --headed
// no funciona ya que la página no tiene pop-ups reales sino modales, pero nos sirve de ejemplo

