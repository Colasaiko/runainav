const fs = require('fs');

let c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');

const metadataBlockRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
const newMetadata = `import { constructMetadata } from "@/lib/seo";\n\nexport const metadata: Metadata = constructMetadata({\n  title: '微风网络怎么样？套餐、节点与AI使用体验 | RunAI',\n  description: '微风网络提供多档流量套餐与专线节点，支持Windows、macOS、Android和iOS。本文整理价格、节点覆盖、实际测速、AI使用测试与新手选择建议。',\n  canonical: '/vpn/weifeng/',\n  type: 'article',\n});`;

c = c.replace(metadataBlockRegex, newMetadata);
fs.writeFileSync('src/app/vpn/weifeng/page.tsx', c);
console.log('Refactored weifeng metadata');
