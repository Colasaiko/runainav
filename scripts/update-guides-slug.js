const fs = require('fs');

let content = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

// Update canonical and json-ld urls
content = content.replace(/runainav\.com\/ai\/\$\{slug\}/g, 'runainav.com/guides/${slug}');
content = content.replace(/runainav\.com\/ai/g, 'runainav.com/guides');

// Update JSON-LD breadcrumb text
content = content.replace(/"name": "AI 工具",\s*"item": "https:\/\/runainav\.com\/guides"/g, '"name": "AI指南",\n        "item": "https://runainav.com/guides"');

// Update visual breadcrumb
content = content.replace(/<Link href="\/ai" className="hover:text-brand-600 transition-colors">AI 工具<\/Link>/g, '<Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>');

// Update CTA button text
content = content.replace(/前往官网 <ExternalLink className="w-4 h-4 ml-2" \/>/g, '前往官方 ↗');
content = content.replace(/<ExternalLink className="w-4 h-4 ml-2" \/>/g, ''); // Wait, the arrow is in the text now? Actually I'll keep the ExternalLink icon if it's there.

fs.writeFileSync('src/app/guides/[slug]/page.tsx', content);
console.log('Updated guides page.tsx');
