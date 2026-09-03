const fs = require('fs');
// read from src/data/aiTools.ts directly or just parse it manually
const aiToolsFile = fs.readFileSync('src/data/aiTools.ts', 'utf8');
const slugs = [];
const regex = /"slug":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(aiToolsFile)) !== null) {
  slugs.push(match[1]);
}

const redirects = slugs.map(slug => `/ai/${slug} /guides/${slug} 301`).join('\n');
fs.writeFileSync('public/_redirects', redirects + '\n');
console.log('Created _redirects with ' + slugs.length + ' rules');
