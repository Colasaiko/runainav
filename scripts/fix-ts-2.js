const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/ as any\]\.map/g, ' as any[]].map'); // wait, the current is `] as any].map`
// I'll just restore it to `] as any[]).map` but wait, it's `[...].map`, so `([...]) as any[]).map`
c = c.replace(/\] as any\]\.map/g, '] as any[]).map');
fs.writeFileSync(path, c);
