const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const files = [
  'Cover Letter.html',
  'Rafael_Galazzi_CV_Portugues_Final.html',
  'Rafael_Galazzi_CV_SmallFont.html',
];

(async () => {
  const browser = await puppeteer.launch();

  for (const file of files) {
    const inputPath = path.resolve(__dirname, file);

    if (!fs.existsSync(inputPath)) {
      console.warn(`Skipping (not found): ${file}`);
      continue;
    }

    const outputName = path.basename(file, '.html') + '.pdf';
    const outputPath = path.resolve(__dirname, outputName);

    const page = await browser.newPage();
    await page.goto(`file:///${inputPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '15mm', bottom: '15mm', left: '15mm', right: '15mm' },
    });

    await page.close();
    console.log(`Created: ${outputName}`);
  }

  await browser.close();
  console.log('Done.');
})();
