const QRCode = require('qrcode');

async function generateQRCode() {
    try {
        // URL del PDF en GitHub Pages
        const pdfUrl = 'https://adderlinho.github.io/cv-profesional/Adderly_Sinay_CV_Professional.pdf';
        
        // Generar QR code
        await QRCode.toFile('QR_PDF_Download.png', pdfUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });
        
        console.log('QR Code generado exitosamente: QR_PDF_Download.png');
        console.log('URL del PDF:', pdfUrl);
    } catch (error) {
        console.error('Error generando QR:', error);
    }
}

generateQRCode();