const fs = require('fs');
const path = 'src/app/guides/suno-chinese-song-tutorial/page.tsx';
let c = fs.readFileSync(path, 'utf8');

if (!c.includes('第一次使用 Suno？先阅读')) {
  const target = `            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">`;

  const linkBlock = `            </p>
            
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-6 text-brand-900 flex items-center gap-2 text-sm">
              <span className="font-bold">第一次使用 Suno？</span>先阅读 <Link href="/guides/suno" className="text-brand-600 hover:underline font-bold">Suno 基础使用指南</Link> 了解怎么登录、解决网络问题、歌曲下载规则和商用版权。
            </div>

            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">`;
  
  if (c.includes(target)) {
    c = c.replace(target, linkBlock);
    
    // Make sure Link is imported
    if (!c.includes("import Link from 'next/link'") && !c.includes('import Link from "next/link"')) {
      c = c.replace("import { constructMetadata }", "import Link from 'next/link';\nimport { constructMetadata }");
    }
    
    fs.writeFileSync(path, c);
    console.log('Added reverse link to suno-chinese-song-tutorial');
  } else {
    console.log('Target not found for reverse link. Searching for alternative...');
    const altTarget = `            </h1>`;
    if (c.includes(altTarget)) {
      const altLinkBlock = `            </h1>
            <div className="bg-brand-50 border border-brand-100 p-4 rounded-xl mb-6 mt-6 text-brand-900 flex items-center gap-2 text-sm">
              <span className="font-bold">第一次使用 Suno？</span>先阅读 <Link href="/guides/suno" className="text-brand-600 hover:underline font-bold">Suno 基础使用指南</Link> 了解怎么登录、解决网络问题、歌曲下载规则和商用版权。
            </div>`;
      c = c.replace(altTarget, altLinkBlock);
      if (!c.includes("import Link from 'next/link'") && !c.includes('import Link from "next/link"')) {
        c = c.replace("import { constructMetadata }", "import Link from 'next/link';\nimport { constructMetadata }");
      }
      fs.writeFileSync(path, c);
      console.log('Added reverse link to suno-chinese-song-tutorial using alternative target');
    }
  }
} else {
  console.log('Reverse link already exists');
}
