const fs = require('fs');

let hasError = false;

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
  }
}

// 1. Check aiTools.ts
const aiToolsContent = fs.readFileSync('src/data/aiTools.ts', 'utf-8');

const titleMatches = [...aiToolsContent.matchAll(/"seoTitle":\s*"([^"]+)"/g)];
const descMatches = [...aiToolsContent.matchAll(/"seoDescription":\s*"([^"]+)"/g)];
const slugMatches = [...aiToolsContent.matchAll(/"slug":\s*"([^"]+)"/g)];

slugMatches.forEach((slugMatch, i) => {
  const slug = slugMatch[1];
  const title = titleMatches[i] ? titleMatches[i][1] : '';
  const desc = descMatches[i] ? descMatches[i][1] : '';
  
  checkLength(slug, 'Title', title, 20, 30);
  checkLength(slug, 'Description', desc, 70, 80);
});

// 2. Check Homepage
const homeContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
const homeTitle = homeContent.match(/title:\s*'([^']+)'/)[1];
const homeDesc = homeContent.match(/description:\s*'([^']+)'/)[1];
checkLength('Homepage', 'Title', homeTitle, 20, 30);
checkLength('Homepage', 'Description', homeDesc, 70, 80);

// 3. Check /ai
const aiContent = fs.readFileSync('src/app/ai/page.tsx', 'utf-8');
const aiTitle = aiContent.match(/title:\s*'([^']+)'/)[1];
const aiDesc = aiContent.match(/description:\s*'([^']+)'/)[1];
checkLength('/ai', 'Title', aiTitle, 20, 30);
checkLength('/ai', 'Description', aiDesc, 70, 80);

// 4. Check /vpn
const vpnContent = fs.readFileSync('src/app/vpn/page.tsx', 'utf-8');
const vpnTitle = vpnContent.match(/title:\s*"([^"]+)"/)[1];
const vpnDesc = vpnContent.match(/description:\s*"([^"]+)"/)[1];
checkLength('/vpn', 'Title', vpnTitle, 20, 30);
checkLength('/vpn', 'Description', vpnDesc, 70, 80);

if (hasError) {
  process.exit(1);
} else {
  console.log('✅ All SEO lengths are perfectly valid!');
}
