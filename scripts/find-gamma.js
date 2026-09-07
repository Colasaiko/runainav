const fs = require('fs');
const c = fs.readFileSync('src/data/aiTools.ts', 'utf8');
const slugs = [...c.matchAll(/['"]?slug['"]?:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log(slugs.join(', '));
const gIdx = slugs.indexOf('gamma');
console.log('gamma is at index:', gIdx);
if (gIdx >= 0) console.log('next is:', slugs[gIdx + 1]);
