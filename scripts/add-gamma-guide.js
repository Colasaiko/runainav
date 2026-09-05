const fs = require('fs');
const path = 'src/data/guideArticles.ts';
let c = fs.readFileSync(path, 'utf8');

const newArticle = `
  {
    slug: 'gamma-ppt-tutorial',
    title: 'Gamma做PPT教程：从生成到导出',
    description: '从确定主题、起草大纲到排版优化与最终导出，本文用一个完整案例带你使用Gamma制作演示文稿，并教你如何避免AI常见排版错误，做出一份真正能用的PPT。',
    type: 'tutorial',
    category: 'AI办公',
    tags: ['Gamma', 'AI办公', 'PPT', '演示文稿', 'AI生成'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },`;

c = c.replace(/export const guideArticles: GuideArticle\[\] = \[/, `export const guideArticles: GuideArticle[] = [${newArticle}`);

fs.writeFileSync(path, c);
