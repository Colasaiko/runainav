const fs = require('fs');

let hasError = false;
let checkedCount = 0;

function checkLength(slug, type, text, min, max) {
  if (!text) {
    console.error(`[${slug}] ${type} is missing!`);
    hasError = true;
    return;
  }
  const len = Array.from(text).length;
  if (len < min || len > max) {
    console.error(`[ERROR] ${slug} - ${type} length is ${len} (Expected ${min}-${max})`);
    console.error(`Current text: ${text}`);
    hasError = true;
  } else {
    console.log(`[OK] ${slug} ${type} = ${len}`);
  }
}

const aiToolsContent = fs.readFileSync('src/data/aiTools.ts', 'utf-8');

// Match block from slug to either next slug or end
const blockRegex = /\{\s*['"]?slug['"]?:\s*['"]([^'"]+)['"]([\s\S]*?)(?=\{\s*['"]?slug['"]?:|$)/g;

let match;
while ((match = blockRegex.exec(aiToolsContent)) !== null) {
  const slug = match[1];
  const block = match[2];
  
  const titleMatch = block.match(/['"]?seoTitle['"]?:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/['"]?seoDescription['"]?:\s*['"]([^'"]+)['"]/);
  
  if (titleMatch && descMatch) {
    checkLength(slug, 'Title', titleMatch[1], 20, 30);
    checkLength(slug, 'Description', descMatch[1], 70, 80);
    checkedCount++;
  }
}

// 2. Check Homepage
const homeContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
const homeTitle = homeContent.match(/title:\s*['"]([^'"]+)['"]/)?.[1] || homeContent.match(/title:\s*`([^`]+)`/)?.[1] || homeContent.match(/title:\s*'([^']+)'/)[1];
const homeDesc = homeContent.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || homeContent.match(/description:\s*`([^`]+)`/)?.[1] || homeContent.match(/description:\s*'([^']+)'/)[1];
checkLength('Homepage', 'Title', homeTitle, 20, 30);
checkLength('Homepage', 'Description', homeDesc, 70, 80);

// 3. Check /ai
const aiContent = fs.readFileSync('src/app/ai/page.tsx', 'utf-8');
const aiTitle = aiContent.match(/title:\s*['"]([^'"]+)['"]/)?.[1] || aiContent.match(/title:\s*'([^']+)'/)[1];
const aiDesc = aiContent.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || aiContent.match(/description:\s*'([^']+)'/)[1];
checkLength('/ai', 'Title', aiTitle, 20, 30);
checkLength('/ai', 'Description', aiDesc, 70, 80);

// 3.5 Check /guides
const guidesContent = fs.readFileSync('src/app/guides/page.tsx', 'utf-8');
const guidesTitle = guidesContent.match(/title:\s*['"]([^'"]+)['"]/)?.[1] || guidesContent.match(/title:\s*'([^']+)'/)[1];
const guidesDesc = guidesContent.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || guidesContent.match(/description:\s*'([^']+)'/)[1];
checkLength('/guides', 'Title', guidesTitle, 20, 30);
checkLength('/guides', 'Description', guidesDesc, 70, 80);

// 4. Check /vpn
const vpnContent = fs.readFileSync('src/app/vpn/page.tsx', 'utf-8');
const vpnTitle = vpnContent.match(/title:\s*['"]([^'"]+)['"]/)[1];
const vpnDesc = vpnContent.match(/description:\s*['"]([^'"]+)['"]/)[1];
checkLength('/vpn', 'Title', vpnTitle, 20, 30);
checkLength('/vpn', 'Description', vpnDesc, 70, 80);

// Check /guides/ai-network
const netContent = fs.readFileSync('src/app/guides/ai-network/page.tsx', 'utf-8');
const netTitle = netContent.match(/title:\s*['"]([^'"]+)['"]/)[1];
const netDesc = netContent.match(/description:\s*['"]([^'"]+)['"]/)[1];
checkLength('/guides/ai-network', 'Title', netTitle, 20, 30);
checkLength('/guides/ai-network', 'Description', netDesc, 70, 80);

// 6. Check /guides/cursor-build-blog
const cursorBlogContent = fs.readFileSync('src/app/guides/cursor-build-blog/page.tsx', 'utf-8');
const cursorBlogTitle = cursorBlogContent.match(/title:\s*['"]([^'"]+)['"]/)[1];
const cursorBlogDesc = cursorBlogContent.match(/description:\s*['"]([^'"]+)['"]/)[1];
checkLength('/guides/cursor-build-blog', 'Title', cursorBlogTitle, 20, 30);
checkLength('/guides/cursor-build-blog', 'Description', cursorBlogDesc, 70, 80);

console.log(`\nChecked ${checkedCount} AI tool pages.`);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All SEO lengths are perfectly valid!');
}
