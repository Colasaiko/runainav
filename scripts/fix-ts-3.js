const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/as any\[\]\]\.map/g, 'as any[]).map');
c = c.replace(/}\n\s*\] as any\[\]\)\.map/g, '} as any]).map'); // wait, `[...].map` -> `([...] as any[]).map`
// Actually just replace the whole array block cast
c = c.replace(/}\n\s*\] as any\[\]\)\.map/g, '} ] as any[]).map');
fs.writeFileSync(path, c);
