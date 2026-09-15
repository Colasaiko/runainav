const fs = require('fs');
let c = fs.readFileSync('src/app/guides/midjourney-realistic-portrait/page.tsx', 'utf8');
c = c.replace(/modifiedTime:\s*'2026-09-05'/, "modifiedTime: '2026-09-15'");
c = c.replace(/dateModified":\s*"2026-09-05"/, 'dateModified": "2026-09-15"');
fs.writeFileSync('src/app/guides/midjourney-realistic-portrait/page.tsx', c);
console.log("Updated modifiedTime");
