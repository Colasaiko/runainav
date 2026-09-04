const fs = require('fs');
const path = 'src/app/guides/vpn-slow-speed/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  '<div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)]">',
  '<div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)] text-gray-900">'
);

fs.writeFileSync(path, c);
console.log('done fixing root wrapper');
