const fs = require('fs');
const path = 'src/app/guides/perplexity-search-guide/page.tsx';
let c = fs.readFileSync(path, 'utf8');

if (!c.includes('第一次使用 Perplexity？先看基础使用指南')) {
  // Let's find a good spot. 
  // Probably right after the main <p> in the introductory section, before the first <section> or H2.
  const target = `            <p className="text-gray-600 text-lg leading-relaxed mb-10">`;
  const linkBlock = `
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-10 text-brand-900">
              <span className="font-bold">第一次使用 Perplexity？</span>先看 <Link href="/guides/perplexity" className="text-brand-600 hover:underline font-medium">Perplexity 基础使用指南</Link> 了解怎么注册、解决网络问题和基础功能。
            </div>
`;
  if (c.includes(target)) {
    c = c.replace(target, target + linkBlock);
    fs.writeFileSync(path, c);
    console.log('Added backlink to Perplexity guide!');
  } else {
    console.log('Could not find insertion point for backlink. Attempting alternate point.');
    const altTarget = `            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">`;
    if (c.includes(altTarget)) {
      c = c.replace(altTarget, linkBlock + altTarget);
      fs.writeFileSync(path, c);
      console.log('Added backlink to Perplexity guide (alt)!');
    }
  }
} else {
  console.log('Backlink already exists.');
}
