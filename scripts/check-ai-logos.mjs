import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const aiToolsPath = path.join(__dirname, '../src/data/aiTools.ts');

const content = fs.readFileSync(aiToolsPath, 'utf8');

const regex = /slug:\s*'([^']+)'[\s\S]*?logo:\s*'([^']+)'/g;
let configured = 0;
let valid = 0;
let match;
const missingConfig = [];
let total = 0;

const totalRegex = /slug:\s*'([^']+)'/g;
while((match = totalRegex.exec(content)) !== null) {
  total++;
  const block = content.slice(match.index, match.index + 500);
  if(!block.includes('logo:')) {
    missingConfig.push(match[1]);
  }
}

while ((match = regex.exec(content)) !== null) {
  configured++;
  const logoPath = path.join(__dirname, '..', 'public', match[2]);
  if (fs.existsSync(logoPath)) {
    valid++;
  } else {
    console.error(`[FAIL] Logo file not found for ${match[1]}: ${match[2]}`);
  }
}

console.log(`\nAI tools: ${total}`);
console.log(`Logo files configured: ${configured}`);
console.log(`Logo files valid: ${valid}`);
console.log(`Missing official logos: ${missingConfig.length}`);

if (missingConfig.length > 0) {
  console.log(`\nMissing configuration for: \n${missingConfig.join(', ')}`);
}

if (configured !== valid) {
  process.exit(1);
}
