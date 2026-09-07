const fs = require('fs');
const path = 'src/app/guides/gamma-ppt-tutorial/page.tsx';
let c = fs.readFileSync(path, 'utf8');

if (!c.includes('第一次使用 Gamma？先看')) {
  const target = `            <p className="text-gray-600 text-lg leading-relaxed mb-10">`;
  const linkBlock = `            </p>
            
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-10 text-brand-900 flex items-center gap-2 text-sm">
              <span className="font-bold">第一次使用 Gamma？</span>先看 <Link href="/guides/gamma" className="text-brand-600 hover:underline font-bold">Gamma 基础使用指南</Link> 了解怎么登录、解决网络问题和基础功能。
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">`;
  
  if (c.includes(target)) {
    c = c.replace(target, linkBlock);
    fs.writeFileSync(path, c);
    console.log('Added reverse link to gamma-ppt-tutorial');
  } else {
    console.log('Target not found for reverse link. Searching for alternative...');
    const altTarget = `            </h1>`;
    if (c.includes(altTarget)) {
      const altLinkBlock = `            </h1>
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-6 mt-6 text-brand-900 flex items-center gap-2 text-sm">
              <span className="font-bold">第一次使用 Gamma？</span>先看 <Link href="/guides/gamma" className="text-brand-600 hover:underline font-bold">Gamma 基础使用指南</Link> 了解怎么登录、解决网络问题和基础功能。
            </div>`;
      c = c.replace(altTarget, altLinkBlock);
      fs.writeFileSync(path, c);
      console.log('Added reverse link to gamma-ppt-tutorial using alternative target');
    }
  }
} else {
  console.log('Reverse link already exists');
}
