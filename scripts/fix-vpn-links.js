const fs = require('fs');
const path1 = 'src/components/home/VPNProductSection.tsx';
const path2 = 'src/components/vpn/VPNList.tsx';

let c1 = fs.readFileSync(path1, 'utf8');
c1 = c1.replace(
  /<Link\s*href="\/coming-soon"\s*className="flex-1 py-2\.5 text-sm font-medium text-center text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"\s*>\s*详情\s*<\/Link>/g,
  `{brand.id === 'weifeng' ? (
                  <Link 
                    href={\`/vpn/\${brand.id}\`}
                    className="flex-1 py-2.5 text-sm font-medium text-center text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    详情
                  </Link>
                ) : null}`
);
fs.writeFileSync(path1, c1);

let c2 = fs.readFileSync(path2, 'utf8');
c2 = c2.replace(
  /<Link\s*href="\/coming-soon"\s*className="flex-1 px-4 py-2\.5 text-sm font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"\s*>\s*详情\s*<\/Link>/g,
  `{brand.id === 'weifeng' ? (
                    <Link 
                      href={\`/vpn/\${brand.id}\`}
                      className="flex-1 px-4 py-2.5 text-sm font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                    >
                      详情
                    </Link>
                  ) : null}`
);
fs.writeFileSync(path2, c2);
