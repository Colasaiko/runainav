const fs = require('fs');

const path = 'scripts/check-seo-lengths.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("  if (slug === 'midjourney' || slug === 'grok') continue; // pending tests\n  \n", "");

fs.writeFileSync(path, content, 'utf8');

console.log("Removed midjourney/grok skip");
