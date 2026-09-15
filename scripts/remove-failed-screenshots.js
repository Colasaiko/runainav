const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

c = c.replace(/screenshots:\s*\[[\s\S]*?\/images\/ai\/screenshots\/claude\/chat\.webp[\s\S]*?\],\n\s*/g, '');
c = c.replace(/screenshots:\s*\[[\s\S]*?\/images\/ai\/screenshots\/jimeng\/chat\.webp[\s\S]*?\],\n\s*/g, '');

fs.writeFileSync('src/data/aiTools.ts', c);
