const QRCode = require('qrcode');

async function generateWebsiteQRCode() {
    try {
        // URL del sitio web
        const websiteUrl = 'https://adderlinho.github.io/cv-profesional/';
        
        // Generar QR code para el sitio web
        await QRCode.toFile('QR_Website.png', websiteUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });
        
        console.log('QR Code del sitio web generado exitosamente: QR_Website.png');
        console.log('URL del sitio web:', websiteUrl);
    } catch (error) {
        console.error('Error generando QR:', error);
    }
}

generateWebsiteQRCode();