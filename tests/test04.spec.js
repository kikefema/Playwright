

// test para hacer clics
const { test, expect } = require('@playwright/test');

test('Test doble click', async ({ page }) => {
  await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
  await page.click('text=Elements');
    console.log('Haciendo clic en Elements');
  await page.click('text=Buttons');
    console.log('Haciendo clic en Buttons');
  await page.click('#doubleClickBtn', { button: 'left', clickCount: 2 });
    console.log('Realizando doble clic en el botón');
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
    console.log('Verificando el mensaje de doble clic');
});


test('Test clic derecho', async ({ page }) => {
  await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await page.click('text=Elements');
    console.log('Haciendo clic en Elements');
    await page.click('text=Buttons');
    console.log('Haciendo clic en Buttons');
  await page.click('#rightClickBtn', { button: 'right' });
    console.log('Realizando clic derecho en el botón');
  await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');
    console.log('Verificando el mensaje de clic derecho');
});

test('Test clic simple', async ({ page }) => {
  await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await page.click('text=Elements');
    console.log('Haciendo clic en Elements');
    await page.click('text=Buttons');
    console.log('Haciendo clic en Buttons');
    await page.mouse.wheel(0, 100);
    console.log('Desplazándose hacia abajo para ver el botón');
    await page.click('text=Click Me');
    console.log('Realizando clic simple en el botón');
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
    console.log('Verificando el mensaje de clic simple');
});

// npx playwright test tests/test04.spec.js --headed 