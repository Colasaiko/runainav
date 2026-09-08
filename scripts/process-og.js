const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure sharp is available for the script
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Installing sharp temporarily...');
  execSync('npm install --no-save sharp');
}

const sharp = require('sharp');

const inputFile = 'C:/Users/USER/.gemini/antigravity/brain/f62a873b-e821-4cac-924f-d4ae31cd51a6/.user_uploaded/media_1788851933780.png';
const outputDir = path.join(process.cwd(), 'public/images/og');
const outputFile = path.join(outputDir, 'default.webp');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sharp(inputFile)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .webp({ quality: 85 })
  .toFile(outputFile)
  .then(info => {
    console.log('Successfully created OG image:', info);
  })
  .catch(err => {
    console.error('Error creating OG image:', err);
  });
