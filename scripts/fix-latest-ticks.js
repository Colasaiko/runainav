const fs = require('fs');
let c = fs.readFileSync('src/components/home/LatestArticles.tsx', 'utf8');
c = c.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/components/home/LatestArticles.tsx', c);
