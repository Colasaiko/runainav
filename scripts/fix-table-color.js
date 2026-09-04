const fs = require('fs');
const path = 'src/app/guides/vpn-slow-speed/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  '<table className="min-w-full text-sm text-left whitespace-nowrap">',
  '<table className="min-w-full text-sm text-left whitespace-nowrap text-gray-900">'
);

fs.writeFileSync(path, c);
console.log('done');
