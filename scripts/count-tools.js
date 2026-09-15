const fs = require('fs');
const content = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const chinaCount = (content.match(/region:\s*'china'/g) || []).length;
const globalCount = (content.match(/region:\s*'global'/g) || []).length;
console.log('Total:', chinaCount + globalCount);
console.log('China:', chinaCount);
console.log('Global:', globalCount);
