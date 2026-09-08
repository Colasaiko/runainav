const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

c = c.replace(
  /Midjourney \(<a href="\/guides\/midjourney" class="text-brand-600 hover:underline">查看 Midjourney 指南<\/a>\)/g,
  "Midjourney，详情可参考本站 Midjourney 指南"
);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Fixed Ideogram FAQ HTML bug');
