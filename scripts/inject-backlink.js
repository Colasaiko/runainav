const fs = require('fs');
const path = 'src/app/guides/perplexity-search-guide/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const target = `            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">`;

const linkBlock = `            </p>
            
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-6 text-brand-900 flex items-center gap-2 text-sm">
              <span className="font-bold">第一次使用 Perplexity？</span>先看 <Link href="/guides/perplexity" className="text-brand-600 hover:underline font-bold">Perplexity 基础指南</Link> 了解怎么登录、解决网络问题和基础功能。
            </div>

            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">`;

if (c.includes(target)) {
  c = c.replace(target, linkBlock);
  fs.writeFileSync(path, c);
  console.log('Successfully injected backlink into perplexity-search-guide!');
} else {
  console.log('Still could not find target.');
}
