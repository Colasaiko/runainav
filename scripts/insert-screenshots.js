const fs = require('fs');
const path = require('path');
let content = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

if (!content.includes("import AIToolScreenshots")) {
  content = content.replace("import AIToolLogo from '@/components/ai/AIToolLogo';", "import AIToolLogo from '@/components/ai/AIToolLogo';\nimport AIToolScreenshots from '@/components/ai/AIToolScreenshots';");
}

if (!content.includes("<AIToolScreenshots tool={tool} />")) {
  content = content.replace('<div className="prose prose-gray max-w-none">', '<AIToolScreenshots tool={tool} />\n          <div className="prose prose-gray max-w-none">');
}

fs.writeFileSync('src/app/guides/[slug]/page.tsx', content);
