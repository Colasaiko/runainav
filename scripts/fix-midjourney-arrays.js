const fs = require('fs');
let file = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/image:\s*["']\/images\/midjourney\/[^"']+["']/g, 'image: ""');
fs.writeFileSync(file, content);

console.log('Fixed midjourney arrays.');
