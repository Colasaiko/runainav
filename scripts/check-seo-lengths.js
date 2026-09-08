const fs = require('fs');

let hasError = false;
let foundCount = 0;
let validatedCount = 0;

function checkLength(slug, type, text, min, max) {
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
  foundCount++;
  
  const titleMatch = block.match(/['"]?seoTitle['"]?:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/['"]?seoDescription['"]?:\s*['"]([^'"]+)['"]/);
  
  if (!titleMatch) {
    console.error(`[ERROR] ${slug} - seoTitle is missing`);
    hasError = true;
  }
  
  if (!descMatch) {
    console.error(`[ERROR] ${slug} - seoDescription is missing`);
    hasError = true;
  }
  
  if (titleMatch && descMatch) {
    checkLength(slug, 'Title', titleMatch[1], 20, 30);
    checkLength(slug, 'Description', descMatch[1], 70, 80);
    validatedCount++;
  }
}

// 2. Check Homepage
function extractAndCheck(label, contentRegexPath, minT, maxT, minD, maxD) {
  const content = fs.readFileSync(contentRegexPath, 'utf-8');
  const title = content.match(/title:\s*['"]([^'"]+)['"]/)?.[1] || content.match(/title:\s*`([^`]+)`/)?.[1] || content.match(/title:\s*'([^']+)'/)?.[1];
  const desc = content.match(/description:\s*['"]([^'"]+)['"]/)?.[1] || content.match(/description:\s*`([^`]+)`/)?.[1] || content.match(/description:\s*'([^']+)'/)?.[1];
  
  if (!title) {
    console.error(`[ERROR] ${label} - Title is missing`);
    hasError = true;
  } else {
    checkLength(label, 'Title', title, minT, maxT);
  }
  
  if (!desc) {
    console.error(`[ERROR] ${label} - Description is missing`);
    hasError = true;
  } else {
    checkLength(label, 'Description', desc, minD, maxD);
  }
}

extractAndCheck('Homepage', 'src/app/page.tsx', 20, 30, 70, 80);
extractAndCheck('/ai', 'src/app/ai/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides', 'src/app/guides/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn', 'src/app/vpn/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/ai-network', 'src/app/guides/ai-network/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/cursor-build-blog', 'src/app/guides/cursor-build-blog/page.tsx', 20, 30, 70, 80);

console.log(`\nFound ${foundCount} AI tool records.`);
console.log(`Validated ${validatedCount} AI tool metadata records.`);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All SEO lengths are perfectly valid!');
}
