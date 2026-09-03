const fs = require('fs');

function refactorMetadata(filePath, canonicalPath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Extract title and description
  const titleMatch = c.match(/title:\s*['"](.+?)['"]/);
  const descMatch = c.match(/description:\s*['"](.+?)['"]/);
  
  if (!titleMatch || !descMatch) return;
  
  const title = titleMatch[1];
  const desc = descMatch[1];
  
  const metadataBlockRegex = /export const metadata(?:[\s\S]*?)=\s*\{[\s\S]*?\};/;
  
  const newMetadata = `import { constructMetadata } from "@/lib/seo";\n\nexport const metadata = constructMetadata({\n  title: '${title}',\n  description: '${desc}',\n  canonical: '${canonicalPath}',\n});`;
  
  if (c.includes('constructMetadata')) return;
  
  c = c.replace(metadataBlockRegex, newMetadata);
  
  // If it's already importing something at top, we need to handle import order, but let's just let it be replaced. 
  // Wait, if I replace the whole metadata block and put import right above it, it should work fine.
  
  fs.writeFileSync(filePath, c);
}

refactorMetadata('src/app/ai/page.tsx', '/ai/');
refactorMetadata('src/app/guides/page.tsx', '/guides/');
refactorMetadata('src/app/vpn/page.tsx', '/vpn/');

console.log('Refactored metadata in /ai, /guides, /vpn');
