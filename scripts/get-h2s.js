const fs = require('fs');
const c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');
const matches = c.match(/<h2 id="[^"]+"/g);
console.log(matches);
