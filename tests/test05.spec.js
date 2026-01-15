// test para escribir textos
const { test, expect } = require('@playwright/test');

test('Test de escribir textos', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    console.log('Navegando a demoqa.com');
    await page.click('text=Forms');
    console.log('Haciendo clic en Forms');
    await page.click('text=Practice Form');
    console.log('Haciendo clic en Practice Form');
    await page.fill('#firstName', 'Enrique');
    console.log('Escribiendo el nombre');
    await page.fill('#lastName', 'Fema');
    console.log('Escribiendo el apellido');
    await page.fill('#userEmail', 'enrique.fema@example.com');
    console.log('Escribiendo el email');
    await page.click('text=Female');
    console.log('Seleccionando el género');
    await page.fill('#userNumber', '1234567890');
    console.log('Escribiendo el número de teléfono');
    await page.fill('#currentAddress', 'Calle Falsa 123, Ciudad Ejemplo');
    console.log('Escribiendo la dirección actual');
    await page.click('text=Music');
    console.log('Seleccionando la afición Music');
    // await page.setImputFiles('#uploadPicture', '/resources/vegeto.png');
    await page.setImputFiles('#uploadPicture', 'C:\\Users\\enriq\\Desktop\\Learning\\Cursos\\Playwright\\Proyecto Playwright\\resources\\vegeto.png');  
    console.log('Subiendo una imagen');
    await page.click('#submit');
    console.log('Enviando el formulario');
    await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
    console.log('Verificando el mensaje de éxito');
});

// npx playwright test tests/test05.spec.js --headed

// PENDIENTE DE TERMINAR LA SUBIDA DE ARCHIVOS
