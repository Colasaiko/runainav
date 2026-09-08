const fs = require('fs');

let c = fs.readFileSync('src/components/home/VPNProductSection.tsx', 'utf8');

const regexToReplace = /<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0">([\s\S]*?)<\/div>/;

const newCode = `<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-lg font-bold text-gray-700 shrink-0 overflow-hidden">
                  {brand.logo ? (
                    <img src={brand.logo} alt={brand.name} className="w-full h-full object-cover" />
                  ) : (
                    brand.name.substring(0, 1)
                  )}
                </div>`;

c = c.replace(regexToReplace, newCode);
fs.writeFileSync('src/components/home/VPNProductSection.tsx', c);
console.log('Updated VPNProductSection.tsx');
