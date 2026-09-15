import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aiToolsPath = path.join(__dirname, '../src/data/aiTools.ts');

const content = fs.readFileSync(aiToolsPath, 'utf8');
const js = ts.transpile(content, { module: ts.ModuleKind.CommonJS });

const aiToolsExports = {};
const aiToolsModule = { exports: aiToolsExports };
// eslint-disable-next-line no-new-func
(new Function('exports', 'module', 'require', js))(aiToolsExports, aiToolsModule, require);

const aiTools = aiToolsExports.aiTools || [];

const total = aiTools.length;
let configured = 0;
let validCount = 0;
let invalidCount = 0;
const missingConfig = [];
const invalidDetails = [];

for (const tool of aiTools) {
  if (!tool.logo) {
    missingConfig.push(tool.slug);
    continue;
  }
  
  configured++;
  const logoUrl = tool.logo;
  const logoPath = path.join(__dirname, '..', 'public', logoUrl);
  
  if (!fs.existsSync(logoPath)) {
    invalidCount++;
    invalidDetails.push({ slug: tool.slug, path: logoUrl, reason: 'File does not exist' });
    continue;
  }
  
  const buffer = fs.readFileSync(logoPath);
  
  if (buffer.length < 10) {
    invalidCount++;
    invalidDetails.push({ slug: tool.slug, path: logoUrl, reason: 'File too small' });
    continue;
  }
  
  const header = buffer.toString('hex', 0, 12).toUpperCase();
  const textContent = buffer.toString('utf8', 0, Math.min(buffer.length, 1000)).toLowerCase();
  
  let isValid = false;
  let reason = '';
  
  if (header.startsWith('89504E470D0A1A0A')) {
    isValid = true;
  } else if (header.startsWith('FFD8FF')) {
    isValid = true;
  } else if (header.startsWith('00000100') || header.startsWith('00000200')) {
    isValid = true;
  } else if (header.startsWith('52494646') && header.substring(16, 24) === '57454250') { // RIFF....WEBP
    isValid = true;
  } else if (textContent.includes('<svg') || textContent.includes('<?xml')) {
    // SVG validation
    if (textContent.includes('<!doctype html') || textContent.includes('<html') || textContent.includes('<body')) {
       isValid = false;
       reason = 'HTML masquerading as SVG';
    } else if (textContent.includes('<svg')) {
       isValid = true;
    } else {
       isValid = false;
       reason = 'Invalid SVG format';
    }
  } else {
    isValid = false;
    reason = 'Unknown magic bytes or format';
  }
  
  if (!isValid && !reason) {
    reason = 'Invalid format';
  }
  
  if (textContent.includes('<!doctype html') || textContent.includes('<html') || textContent.includes('<head') || textContent.includes('<body')) {
    isValid = false;
    reason = 'HTML content detected';
    if (textContent.includes('cloudflare') || textContent.includes('just a moment')) reason = 'Cloudflare Challenge';
    else if (textContent.includes('vercel')) reason = 'Vercel Challenge';
    else if (textContent.includes('404') || textContent.includes('not found') || textContent.includes('page not found')) reason = '404 HTML';
    else reason = 'Ordinary HTML page';
  }
  
  if (isValid) {
    validCount++;
  } else {
    invalidCount++;
    invalidDetails.push({ slug: tool.slug, path: logoUrl, reason });
  }
}

console.log(`\nAI tools: ${total}`);
console.log(`Logo configured: ${configured}`);
console.log(`Valid image files: ${validCount}`);
console.log(`Invalid image files: ${invalidCount}`);
console.log(`Missing logo configuration: ${missingConfig.length}`);

if (invalidDetails.length > 0) {
  console.log(`\nINVALID:`);
  invalidDetails.forEach(d => {
    console.log(`${d.slug} | ${d.path} | ${d.reason}`);
  });
}

if (missingConfig.length > 0) {
  console.log(`\nMISSING:\n${missingConfig.join(', ')}`);
}

if (invalidCount > 0 || configured !== validCount) {
  process.exit(1);
}
