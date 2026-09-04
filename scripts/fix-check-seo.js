const fs = require('fs');

let c = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');

c = c.replace(/title:\s*"([^"]+)"/, "title:\\s*['\"]([^'\"]+)['\"]");
c = c.replace(/description:\s*"([^"]+)"/, "description:\\s*['\"]([^'\"]+)['\"]");

fs.writeFileSync('scripts/check-seo-lengths.js', c);
console.log('Fixed check-seo-lengths.js');
