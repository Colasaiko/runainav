const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

c = c.replace(/seoKeywords:\s*\[([^\]]+)\]/g, (match, p1) => {
  const parts = p1.split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(s => s);
  return `seoKeywords: "${parts.join(',')}"`;
});

c = c.replace(/bestFor:\s*['"]([^'"]+)['"]/g, (match, p1) => {
  return `bestFor: ["${p1}"]`;
});

c = c.replace(/gettingStarted:\s*['"]([^'"]+)['"]/g, (match, p1) => {
  return `gettingStarted: ["${p1}"]`;
});

fs.writeFileSync('src/data/aiTools.ts', c);
