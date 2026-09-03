const fs = require('fs');

let c = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');
const addGuidesCheck = `
// 3.5 Check /guides
const guidesContent = fs.readFileSync('src/app/guides/page.tsx', 'utf-8');
const guidesTitle = guidesContent.match(/title:\\s*'([^']+)'/)[1];
const guidesDesc = guidesContent.match(/description:\\s*'([^']+)'/)[1];
checkLength('/guides', 'Title', guidesTitle, 20, 30);
checkLength('/guides', 'Description', guidesDesc, 70, 80);
`;

c = c.replace(/\/\/ 4\. Check \/vpn/g, addGuidesCheck + '\n// 4. Check /vpn');
fs.writeFileSync('scripts/check-seo-lengths.js', c);
console.log('Fixed SEO script');
