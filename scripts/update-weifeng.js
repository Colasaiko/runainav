const fs = require('fs');

let c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');

const regexToReplace = /<div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-gray-700 shrink-0 shadow-sm">([\s\S]*?)<\/div>/;

const newCode = `<div className="w-20 h-20 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-3xl font-bold text-gray-700 shrink-0 overflow-hidden shadow-sm">
                  {brand?.logo ? (
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                  ) : (
                    brand?.name.substring(0, 1)
                  )}
                </div>`;

c = c.replace(regexToReplace, newCode);
fs.writeFileSync('src/app/vpn/weifeng/page.tsx', c);
console.log('Updated weifeng/page.tsx');
