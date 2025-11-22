const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the HTML file
    const htmlPath = path.join(__dirname, 'index.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    
    // Generate PDF with optimized settings
    await page.pdf({
        path: 'Adderly_Sinay_CV_Professional.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        },
        displayHeaderFooter: false,
        preferCSSPageSize: true
    });
    
    await browser.close();
    console.log('PDF generado exitosamente: Adderly_Sinay_CV_Professional.pdf');
}

generatePDF().catch(console.error);