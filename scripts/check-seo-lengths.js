const fs = require('fs');
const ts = require('typescript');

let hasError = false;
let foundCount = 0;
let validatedCount = 0;
let guideFoundCount = 0;
let guideValidatedCount = 0;

function checkLength(slug, type, text, min, max) {
  if (!text) {
    console.error(`[ERROR] ${slug} - ${type} is missing or undefined`);
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

// 1. Check aiTools.ts safely using TS compiler
const aiToolsContent = fs.readFileSync('src/data/aiTools.ts', 'utf-8');
const aiToolsJs = ts.transpile(aiToolsContent, { module: ts.ModuleKind.CommonJS });
const aiToolsExports = {};
const aiToolsModule = { exports: aiToolsExports };
(new Function('exports', 'module', 'require', aiToolsJs))(aiToolsExports, aiToolsModule, require);

const aiTools = aiToolsExports.aiTools || [];

for (const tool of aiTools) {
  foundCount++;
  if (!tool.seoTitle) {
    console.error(`[ERROR] ${tool.slug} - seoTitle is missing`);
    hasError = true;
  }
  if (!tool.seoDescription) {
    console.error(`[ERROR] ${tool.slug} - seoDescription is missing`);
    hasError = true;
  }
  if (tool.seoTitle && tool.seoDescription) {
    checkLength(tool.slug, 'Title', tool.seoTitle, 20, 30);
    checkLength(tool.slug, 'Description', tool.seoDescription, 70, 80);
    validatedCount++;
  }
}

// 2. Check guideArticles.ts safely
const guidesContent = fs.readFileSync('src/data/guideArticles.ts', 'utf-8');
const guidesJs = ts.transpile(guidesContent, { module: ts.ModuleKind.CommonJS });
const guidesExports = {};
const guidesModule = { exports: guidesExports };
(new Function('exports', 'module', 'require', guidesJs))(guidesExports, guidesModule, require);

const guideArticles = guidesExports.guideArticles || [];

for (const guide of guideArticles) {
  guideFoundCount++;
  if (!guide.title) {
    console.error(`[ERROR] Guide ${guide.slug} - title is missing`);
    hasError = true;
  }
  if (!guide.description) {
    console.error(`[ERROR] Guide ${guide.slug} - description is missing`);
    hasError = true;
  }
  if (guide.title && guide.description) {
    checkLength(`Guide: ${guide.slug}`, 'Title', guide.title, 20, 30);
    checkLength(`Guide: ${guide.slug}`, 'Description', guide.description, 70, 80);
    guideValidatedCount++;
  }
}

// Check aiCategorySeo.ts
const seoContent = fs.readFileSync('src/data/aiCategorySeo.ts', 'utf-8');
const seoJs = ts.transpile(seoContent, { module: ts.ModuleKind.CommonJS });
const seoExports = {};
const seoModule = { exports: seoExports };
new Function('exports', 'module', seoJs)(seoExports, seoModule);
const aiCategorySeo = seoExports.aiCategorySeo || seoModule.exports.aiCategorySeo;
if (aiCategorySeo) {
  Object.keys(aiCategorySeo).forEach(key => {
    const seo = aiCategorySeo[key];
    checkLength('Category: ' + key, 'Title', seo.title, 20, 30);
    checkLength('Category: ' + key, 'Description', seo.description, 70, 80);
  });
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
extractAndCheck('/guides/gpt-6-astra-guide', 'src/app/guides/gpt-6-astra-guide/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/chatgpt-images-2-5-guide', 'src/app/guides/chatgpt-images-2-5-guide/page.tsx', 20, 30, 70, 80);
extractAndCheck('/guides/cursor-build-blog', 'src/app/guides/cursor-build-blog/page.tsx', 20, 30, 70, 80);
extractAndCheck('/tests', 'src/app/tests/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/feimao', 'src/app/vpn/feimao/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/shanyue', 'src/app/vpn/shanyue/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/lingmao', 'src/app/vpn/lingmao/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/firefly', 'src/app/vpn/firefly/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/wuyou', 'src/app/vpn/wuyou/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/kuajie', 'src/app/vpn/kuajie/page.tsx', 20, 30, 70, 80);
extractAndCheck('/vpn/weifeng', 'src/app/vpn/weifeng/page.tsx', 20, 30, 70, 80);

// 4. Check aiTests metadata records safely
const aiTestsContent = fs.readFileSync('src/data/aiTests.ts', 'utf-8');
const aiTestsJs = ts.transpile(aiTestsContent, { module: ts.ModuleKind.CommonJS });
const aiTestsExports = {};
const aiTestsModule = { exports: aiTestsExports };
(new Function('exports', 'module', 'require', aiTestsJs))(aiTestsExports, aiTestsModule, require);

const testDetailsCount = (aiTestsExports.aiTests || []).length;

if (testDetailsCount !== 7) {
  console.error(`[ERROR] Expected 7 Test Detail metadata records, but found ${testDetailsCount}.`);
  hasError = true;
} else {
  for (const testDetail of aiTestsExports.aiTests) {
    const slug = testDetail.slug;
    if (!testDetail.seoTitle) {
      console.error(`[ERROR] Test Detail ${slug} - seoTitle is missing`);
      hasError = true;
    }
    if (!testDetail.seoDescription) {
      console.error(`[ERROR] Test Detail ${slug} - seoDescription is missing`);
      hasError = true;
    }
    if (testDetail.seoTitle && testDetail.seoDescription) {
      checkLength(`Test Detail: ${slug}`, 'Title', testDetail.seoTitle, 20, 30);
      checkLength(`Test Detail: ${slug}`, 'Description', testDetail.seoDescription, 70, 80);
    }
  }
}

console.log(`Found ${testDetailsCount} Test Detail metadata records.`);
console.log(`\nFound ${foundCount} AI tool records.`);
console.log(`Found ${guideFoundCount} guide articles.`);
console.log(`Validated ${validatedCount} AI tool metadata records.`);
console.log(`Validated ${guideValidatedCount} guide metadata records.`);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All SEO lengths are perfectly valid!');
}
