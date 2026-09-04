const fs = require('fs');
let c = fs.readFileSync('src/app/guides/cursor-build-blog/page.tsx', 'utf8');
c = c.replace(/git commit -m "initial blog"/g, 'git commit -m &quot;initial blog&quot;');
fs.writeFileSync('src/app/guides/cursor-build-blog/page.tsx', c);
console.log("Fixed quotes.");
