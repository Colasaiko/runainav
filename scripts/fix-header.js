const fs = require('fs');
let c = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

c = c.replace(/<Link href="\/guides" className="hover:text-gray-900 transition-colors">使用教程<\/Link>/g, '<Link href="/coming-soon" className="hover:text-gray-900 transition-colors">使用教程</Link>');
c = c.replace(/<Link href="\/guides" className="hover:text-gray-900 transition-colors">海外资源<\/Link>/g, '<Link href="/coming-soon" className="hover:text-gray-900 transition-colors">海外资源</Link>');
c = c.replace(/<Link href="\/guides" className="hover:text-gray-900 transition-colors">VPN指南<\/Link>/g, '<Link href="/coming-soon" className="hover:text-gray-900 transition-colors">VPN指南</Link>');

c = c.replace(/<Link href="\/guides" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\} className="text-gray-700 font-medium py-2">使用教程<\/Link>/g, '<Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">使用教程</Link>');
c = c.replace(/<Link href="\/guides" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\} className="text-gray-700 font-medium py-2">海外资源<\/Link>/g, '<Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">海外资源</Link>');
c = c.replace(/<Link href="\/guides" onClick=\{\(\) => setIsMobileMenuOpen\(false\)\} className="text-gray-700 font-medium py-2">VPN指南<\/Link>/g, '<Link href="/coming-soon" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium py-2">VPN指南</Link>');

fs.writeFileSync('src/components/layout/Header.tsx', c);
console.log('Fixed Header');
