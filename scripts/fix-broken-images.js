const fs = require('fs');

function removeImages(filePath, imageNames) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const name of imageNames) {
    // Find Image component or img tag or markdown image
    const imgRegex1 = new RegExp(`<Image[^>]*src=["']\/images\/${name}["'][^>]*\\/?>`, 'g');
    const imgRegex2 = new RegExp(`<img[^>]*src=["']\/images\/${name}["'][^>]*\\/?>`, 'g');
    const imgRegex3 = new RegExp(`!\\[.*?\\]\\(\/images\/${name}\\)`, 'g');
    
    content = content.replace(imgRegex1, '');
    content = content.replace(imgRegex2, '');
    content = content.replace(imgRegex3, '');
  }
  fs.writeFileSync(filePath, content);
}

removeImages('src/app/guides/gamma-ppt-tutorial/page.tsx', [
  'gamma/gamma-generate.png',
  'gamma/gamma-edit-slide.png',
  'gamma/gamma-export.png'
]);

removeImages('src/app/guides/midjourney-realistic-portrait/page.tsx', [
  'midjourney/midjourney-portrait-window.jpg',
  'midjourney/midjourney-portrait-city.jpg',
  'midjourney/midjourney-portrait-professional.jpg',
  'midjourney/midjourney-portrait-bw.jpg',
  'midjourney/midjourney-portrait-golden-hour.jpg',
  'midjourney/midjourney-portrait-cafe.jpg',
  'midjourney/midjourney-portrait-studio.jpg',
  'midjourney/midjourney-portrait-neon.jpg'
]);

removeImages('src/app/guides/perplexity-search-guide/page.tsx', [
  'perplexity/perplexity-search.png',
  'perplexity/perplexity-citations.png',
  'perplexity/perplexity-source-open.png',
  'perplexity/perplexity-file-upload.png',
  'perplexity/perplexity-research.png'
]);

console.log('Removed broken image references.');
