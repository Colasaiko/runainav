const fs = require('fs');
const c = fs.readFileSync('src/data/aiTools.ts', 'utf8');
const slugs = [...c.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log(slugs.join('\n'));
