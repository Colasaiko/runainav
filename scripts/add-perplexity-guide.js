const fs = require('fs');
const path = 'src/data/guideArticles.ts';
let c = fs.readFileSync(path, 'utf8');

const newArticle = `
  {
    slug: 'perplexity-search-guide',
    title: 'Perplexity搜索与引用核对教程',
    description: '从提问、搜索、引用核对到文件上传与深入研究，本文用实际流程教你使用Perplexity查资料，并说明如何判断来源是否可靠、什么时候需要继续查证。',
    type: 'tutorial',
    category: 'AI搜索',
    tags: ['Perplexity', 'AI搜索', '资料查询', '引用', 'Research'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },`;

c = c.replace(/export const guideArticles: GuideArticle\[\] = \[/, `export const guideArticles: GuideArticle[] = [${newArticle}`);

fs.writeFileSync(path, c);
