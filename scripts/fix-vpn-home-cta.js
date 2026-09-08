const fs = require('fs');
const file = 'src/components/home/VPNProductSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="flex gap-3 mt-auto">[\s\S]*?<\/a>\s*<\/div>/;

const newCode = `<div className="flex gap-3 mt-auto">
                {brand.detailPath && (
                  <Link 
                    href={brand.detailPath}
                    className="flex-1 py-2.5 text-sm font-medium text-center text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    查看详情
                  </Link>
                )}
                <a 
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-[2] py-2.5 text-sm font-medium text-center text-white bg-gray-900 hover:bg-gray-800 rounded-xl transition-colors flex items-center justify-center"
                >
                  前往官网 <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
                </a>
              </div>`;

content = content.replace(regex, newCode);
fs.writeFileSync(file, content);
console.log('Updated VPNProductSection.tsx CTA');
