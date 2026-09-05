const fs = require('fs');
const path = 'src/app/guides/midjourney-realistic-portrait/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/as any\[\]\]\.map/g, 'as any[]).map');
c = c.replace(/}\n\s*\] as any/g, '} ] as any'); // wait, the line before `as any[]].map` is `}` and `]`. So it is `}\n              ] as any[]).map`
fs.writeFileSync(path, c);
