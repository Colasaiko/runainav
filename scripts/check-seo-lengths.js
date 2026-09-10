const fs = require('fs');

let hasError = false;
let foundCount = 0;
let validatedCount = 0;
let guideFoundCount = 0;
let guideValidatedCount = 0;

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

// 1. Check aiTools.ts
const aiToolsContent = fs.readFileSync('src/data/aiTools.ts', 'utf-8');
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

// 2. Check guideArticles.ts
const guidesContent = fs.readFileSync('src/data/guideArticles.ts', 'utf-8');
const guideBlockRegex = /\{\s*['"]?slug['"]?:\s*['"]([^'"]+)['"]([\s\S]*?)(?=\{\s*['"]?slug['"]?:|\];)/g;

let guideMatch;
while ((guideMatch = guideBlockRegex.exec(guidesContent)) !== null) {
  const slug = guideMatch[1];
  const block = guideMatch[2];
  guideFoundCount++;
  
  const titleMatch = block.match(/['"]?title['"]?:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/['"]?description['"]?:\s*['"]([^'"]+)['"]/);
  const typeMatch = block.match(/['"]?type['"]?:\s*['"]([^'"]+)['"]/);
  const type = typeMatch ? typeMatch[1] : '';
  
  if (!titleMatch) {
    console.error(`[ERROR] Guide ${slug} - title is missing`);
    hasError = true;
  }
  
  if (!descMatch) {
    console.error(`[ERROR] Guide ${slug} - description is missing`);
    hasError = true;
  }
  
  if (titleMatch && descMatch) {
    // Only strictly enforce lengths for the new 'network' batch
    
      checkLength(`Guide: ${slug}`, 'Title', titleMatch[1], 20, 30);
      checkLength(`Guide: ${slug}`, 'Description', descMatch[1], 70, 80);
    
    guideValidatedCount++;
  }
}

// 3. Check specific static pages
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
extractAndCheck('/subscriptions', 'src/app/subscriptions/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/ai-network', 'src/app/guides/ai-network/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/cursor-build-blog', 'src/app/guides/cursor-build-blog/page.tsx', 20, 30, 70, 80);
extractAndCheck('/tests', 'src/app/tests/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/feimao', 'src/app/vpn/feimao/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/weifeng', 'src/app/vpn/weifeng/page.tsx', 20, 30, 70, 80);


// 4. Check aiTests metadata records
const aiTestsContent = fs.readFileSync('src/data/aiTests.ts', 'utf-8');
const aiTestsBlockRegex = /\{\s*['"]?slug['"]?:\s*['"]([^'"]+)['"]([\s\S]*?)(?=\{\s*['"]?slug['"]?:|\];)/g;

let testDetailsCount = 0;
let aiTestMatch;
while ((aiTestMatch = aiTestsBlockRegex.exec(aiTestsContent)) !== null) {
  const slug = aiTestMatch[1];
  const block = aiTestMatch[2];
  
  const titleMatch = block.match(/['"]?seoTitle['"]?:\s*['"]([^'"]+)['"]/);
  const descMatch = block.match(/['"]?seoDescription['"]?:\s*['"]([^'"]+)['"]/);
  
  if (!titleMatch) {
    console.error(`[ERROR] Test Detail ${slug} - seoTitle is missing`);
    hasError = true;
  }
  
  if (!descMatch) {
    console.error(`[ERROR] Test Detail ${slug} - seoDescription is missing`);
    hasError = true;
  }
  
  if (titleMatch && descMatch) {
    checkLength(`Test Detail: ${slug}`, 'Title', titleMatch[1], 20, 30);
    checkLength(`Test Detail: ${slug}`, 'Description', descMatch[1], 70, 80);
    testDetailsCount++;
  }
}

console.log(`Found ${testDetailsCount} Test Detail metadata records.`);
if (testDetailsCount !== 7) {
  console.error(`[ERROR] Expected 7 Test Detail metadata records, but found ${testDetailsCount}.`);
  hasError = true;
}


console.log(`\nFound ${foundCount} AI tool records.`);
console.log(`Found ${guideFoundCount} guide articles.`);
console.log(`Validated ${validatedCount} AI tool metadata records.`);
console.log(`Validated ${guideValidatedCount} guide metadata records.`);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All SEO lengths are perfectly valid!');
}
