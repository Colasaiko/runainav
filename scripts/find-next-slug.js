const fs = require('fs');
const c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// The file uses JSON-like format with "slug": "name" 
// Find the midjourney block and what comes after
const mjIdx = c.indexOf('"slug": "midjourney"');
const afterMj = c.indexOf('"slug":', mjIdx + 100);
console.log('Next slug block:', c.substring(afterMj, afterMj + 60));
