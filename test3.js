const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

    await page.goto('http://localhost:8081');

    await page.evaluate(() => {
        const disk = document.getElementById('start-disk');
        disk.addEventListener('click', (e) => {
            console.log("EVENT FIRED! target:", e.target.id);
        });
        document.body.addEventListener('click', (e) => {
            console.log("BODY CLICK FIRED! target:", e.target.id || e.target.className);
        });
    });

    console.log("Waiting 1s...");
    await page.waitForTimeout(1000);

    console.log("Clicking #start-disk via page.click()...");
    await page.click('#start-disk');

    await page.waitForTimeout(1000);

    console.log("Clicking center of screen via page.mouse.click()...");
    await page.mouse.click(500, 500);

    await page.waitForTimeout(1000);

    const state = await page.evaluate(() => gameState);
    console.log("gameState is now:", state);

    await browser.close();
})();
