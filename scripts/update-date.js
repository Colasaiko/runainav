const fs = require('fs');
const path = 'src/data/guideArticles.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(
  /slug: 'ai-network',([\s\S]*?)updatedAt: '2026-09-03'/,
  "slug: 'ai-network',$1updatedAt: '2026-09-04'"
);
fs.writeFileSync(path, content);
