const path = require('path');

(async () => {
  let chromium;
  try {
    ({ chromium } = require(path.resolve(__dirname, '../security/node_modules/playwright')));
  } catch (e) {
    console.error('Playwright no trobat a ../security/node_modules/playwright');
    console.error('Prova: cd ../security && npm install');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });

  const file = 'file:///' + path.resolve(__dirname, 'og-image-gen.html').replace(/\\/g, '/');
  await page.goto(file, { waitUntil: 'load' });

  const outPath = path.resolve(__dirname, 'og-image.png');
  await page.screenshot({ path: outPath, type: 'png' });
  await browser.close();

  console.log('✓ og-image.png generat a:', outPath);
})();
