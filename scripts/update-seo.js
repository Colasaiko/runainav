const fs = require('fs');
let sitemap = fs.readFileSync('src/app/sitemap.ts', 'utf8');
sitemap = sitemap.replace('url: `${baseUrl}/guides/cursor-build-blog`,', 'url: `${baseUrl}/guides/cursor-build-blog`,\n      lastModified: new Date(),\n      changeFrequency: \'weekly\',\n      priority: 0.8,\n    },\n    {\n      url: `${baseUrl}/guides/vpn-slow-speed`,');
fs.writeFileSync('src/app/sitemap.ts', sitemap);

let seo = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');
seo = seo.replace("const guides = [", "const guides = [\n  '/guides/vpn-slow-speed',");
fs.writeFileSync('scripts/check-seo-lengths.js', seo);
console.log('done updating seo scripts');
