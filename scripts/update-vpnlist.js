const fs = require('fs');

let c = fs.readFileSync('src/components/vpn/VPNList.tsx', 'utf8');

const regexToReplace = /<div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0 overflow-hidden">([\s\S]*?)<\/div>/;

const newCode = `<div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0 overflow-hidden">
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
            ) : (
              brand.name.substring(0, 1)
            )}
          </div>`;

c = c.replace(regexToReplace, newCode);
fs.writeFileSync('src/components/vpn/VPNList.tsx', c);
console.log('Updated VPNList.tsx');
