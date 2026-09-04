const fs = require('fs');
let c = fs.readFileSync('src/app/sitemap.ts', 'utf8');
c = c.replace(/changeFrequency: 'weekly',/g, "changeFrequency: 'weekly' as const,");
fs.writeFileSync('src/app/sitemap.ts', c);
