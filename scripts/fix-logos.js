const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const failedSlugs = ['windsurf', 'notebooklm', 'wenxin'];

for (const slug of failedSlugs) {
  const regex = new RegExp(`logo:\\s*'\\/images\\/ai\\/${slug}\\.[^']+',\\s*logoSource:\\s*'[^']+',?`);
  c = c.replace(regex, '');
}

fs.writeFileSync('src/data/aiTools.ts', c);
