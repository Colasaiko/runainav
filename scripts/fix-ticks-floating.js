const fs = require('fs');
let c = fs.readFileSync('src/components/navigation/FloatingBackButton.tsx', 'utf8');
c = c.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/components/navigation/FloatingBackButton.tsx', c);
console.log("Fixed ticks.");
