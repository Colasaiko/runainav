const fs = require('fs');
const file = 'package.json';
let content = fs.readFileSync(file, 'utf8');

const checkLinksScript = '"check:links": "node scripts/check-links.mjs",\n    "check:site": "npm run check:seo && npm run lint && npm run build && npm run check:links",\n    "check:seo"';

content = content.replace(/"check:seo"/, checkLinksScript);

fs.writeFileSync(file, content);
console.log('Updated package.json');
