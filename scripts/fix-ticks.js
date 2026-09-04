const fs = require('fs');

let c = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');
c = c.replace(/\\`/g, '`');
c = c.replace(/\\\$/g, '$');
fs.writeFileSync('src/app/guides/GuidesList.tsx', c);

let g = fs.readFileSync('src/components/guides/GuideCard.tsx', 'utf8');
g = g.replace(/\\`/g, '`');
g = g.replace(/\\\$/g, '$');
fs.writeFileSync('src/components/guides/GuideCard.tsx', g);

console.log("Fixed backticks.");
