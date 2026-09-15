import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ts from 'typescript';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
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

let toolsWithScreenshots = 0;
let configuredScreenshots = 0;
let validCount = 0;
let invalidCount = 0;

for (const tool of aiTools) {
  if (tool.screenshots && tool.screenshots.length > 0) {
    toolsWithScreenshots++;
    for (const shot of tool.screenshots) {
      configuredScreenshots++;
      const imgPath = path.join(__dirname, '..', 'public', shot.src);
      if (!fs.existsSync(imgPath)) {
        console.log(`[INVALID] ${tool.slug} - File does not exist: ${shot.src}`);
        invalidCount++;
        continue;
      }
      const buffer = fs.readFileSync(imgPath);
      if (buffer.length < 10) {
        console.log(`[INVALID] ${tool.slug} - File too small: ${shot.src}`);
        invalidCount++;
        continue;
      }
      const header = buffer.toString('hex', 0, 12).toUpperCase();
      const textContent = buffer.toString('utf8', 0, 1000).toLowerCase();
      
      let isValid = false;
      if (header.startsWith('89504E470D0A1A0A')) isValid = true;
      else if (header.startsWith('FFD8FF')) isValid = true;
      else if (header.startsWith('52494646') && header.substring(16, 24) === '57454250') isValid = true;
      else if (textContent.includes('<svg')) isValid = true;
      
      if (textContent.includes('<!doctype html') || textContent.includes('<html')) {
        isValid = false;
      }
      
      if (isValid) {
        validCount++;
      } else {
        console.log(`[INVALID] ${tool.slug} - Invalid magic bytes / HTML: ${shot.src}`);
        invalidCount++;
      }
    }
  }
}

console.log(`Tools with screenshots: ${toolsWithScreenshots}`);
console.log(`Screenshot files configured: ${configuredScreenshots}`);
console.log(`Valid screenshots: ${validCount}`);
console.log(`Invalid screenshots: ${invalidCount}`);

if (invalidCount > 0 || configuredScreenshots !== validCount) {
  process.exit(1);
}
