const fs = require('fs');

// Fix GuidesList
let g = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');
g = g.replace(/const EXTRA_TUTORIALS = \[[\s\S]*?\];/, `const EXTRA_TUTORIALS = [
  {
    slug: 'cursor-build-blog',
    name: 'Cursor实战：搭建个人博客',
    description: '从安装、创建项目到本地预览与部署，用新手能看懂的方式演示 AI 辅助建站完整工作流。',
    shortDescription: '新手友好：AI 辅助搭建个人博客。',
    categories: ['coding', 'all'],
    category: 'AI 编程',
    tags: ['Cursor', '实战教程'],
    lastUpdated: '2026-09-04',
    isNew: true
  },
  {
    slug: 'ai-network',
    name: 'AI工具打不开怎么办？',
    description: '排查网络环境与常见问题，解决海外 AI 工具加载缓慢或登录失败的情况。',
    shortDescription: '排查网络环境与解决 AI 无法登录情况。',
    categories: ['all'],
    category: '网络指南',
    tags: ['网络', '常见问题'],
    lastUpdated: '2026-09-03',
    isNew: false
  }
];`);

// Fix type error if any for tags map
// Wait, the error is also `Parameter 'tag' implicitly has an 'any' type.`
g = g.replace(/tool\.tags\.map\(\(tag, idx\)/g, "tool.tags?.map((tag: string, idx: number)");
fs.writeFileSync('src/app/guides/GuidesList.tsx', g);

// Fix LatestArticles
let l = fs.readFileSync('src/components/home/LatestArticles.tsx', 'utf8');
// Link href={article.href || "/coming-soon"} in the "阅读更多文章" button should be just "/guides"
l = l.replace(/<Link href=\{article\.href \|\| "\/coming-soon"\} className="inline-flex items-center justify-center px-6 py-3/, '<Link href="/guides" className="inline-flex items-center justify-center px-6 py-3');
fs.writeFileSync('src/components/home/LatestArticles.tsx', l);
