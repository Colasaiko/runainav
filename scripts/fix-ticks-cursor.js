const fs = require('fs');

let c = fs.readFileSync('src/app/guides/cursor-build-blog/page.tsx', 'utf8');
c = c.replace(/\\`/g, '`');
fs.writeFileSync('src/app/guides/cursor-build-blog/page.tsx', c);
console.log("Fixed backticks.");
