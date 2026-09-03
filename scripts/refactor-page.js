const fs = require('fs');

let c = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace metadata
c = c.replace(/export const metadata = \{[\s\S]*?\n\}/, `import { constructMetadata } from "@/lib/seo";\n\nexport const metadata = constructMetadata({\n  title: 'AI工具大全与深度测评 | 网络连通指南 - RunAI',\n  description: '找不到好用的AI工具或因网络限制无从下手？RunAI快航为您精选ChatGPT等顶尖AI产品，提供国内稳定的网络配置与实战教程。点击开启全球AI无障碍之旅！',\n  canonical: '/',\n});`);

// Add JSON-LD import
if (!c.includes('JsonLd')) {
  c = c.replace('import Footer from "@/components/layout/Footer";', `import Footer from "@/components/layout/Footer";\nimport JsonLd, { generateWebSiteSchema, generateOrganizationSchema } from "@/components/seo/JsonLd";`);
}

// Inject JSON-LD in JSX
c = c.replace(/<div className="min-h-screen flex flex-col font-\[family-name:var\(--font-sans\)\]">/, `<div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)]">\n      <JsonLd data={[generateWebSiteSchema(), generateOrganizationSchema("https://runainav.com/images/logo.png")]} />`);

fs.writeFileSync('src/app/page.tsx', c);
console.log('Fixed page.tsx');
