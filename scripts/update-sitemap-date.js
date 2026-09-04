const fs = require('fs');
const path = 'src/app/sitemap.ts';
let c = fs.readFileSync(path, 'utf8');
c = c.replace(/const lastModDate = new Date\('2026-09-02'\);/, "const lastModDate = new Date('2026-09-04');");
fs.writeFileSync(path, c);
