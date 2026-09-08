const fs = require('fs');
const file = 'src/data/vpnBrands.ts';
let content = fs.readFileSync(file, 'utf8');

// Add detailPath to interface
if (!content.includes('detailPath?: string;')) {
  content = content.replace(/logo\?: string;/, 'logo?: string;\n  detailPath?: string;');
}

// Add detailPath: "/vpn/weifeng" to the weifeng brand
content = content.replace(/(id:\s*"weifeng",[\s\S]*?logo:\s*".*?",)/, '$1\n    detailPath: "/vpn/weifeng",');

fs.writeFileSync(file, content);
console.log('Added detailPath to vpnBrands.ts');
