const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.goto('http://localhost:8081');
    await page.waitForTimeout(1000);
    console.log("clicking start disk");
    await page.click('#start-disk');
    await page.waitForTimeout(2000);
    const gameState = await page.evaluate(() => gameState);
    console.log("gameState after click:", gameState);
    const display = await page.evaluate(() => document.getElementById('start-screen').style.display);
    console.log("start-screen display:", display);
    const opacity = await page.evaluate(() => document.getElementById('start-screen').style.opacity);
    console.log("start-screen opacity:", opacity);
    await browser.close();
})();
