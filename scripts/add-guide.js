const fs = require('fs');
const path = 'src/data/guideArticles.ts';
let c = fs.readFileSync(path, 'utf8');

const newArticle = `
  {
    slug: 'midjourney-realistic-portrait',
    title: 'Midjourney人像提示词：构图光线教程',
    description: '从人物主体、构图、光线、镜头、景深到皮肤质感，系统拆解Midjourney真实感人像提示词写法，并提供可直接参考的Prompt模板与常见失败排查方法。',
    type: 'tutorial',
    category: 'AI绘图',
    tags: ['Midjourney', 'AI绘图', '提示词', '人像', 'Prompt'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },`;

c = c.replace(/export const guideArticles: GuideArticle\[\] = \[/, `export const guideArticles: GuideArticle[] = [${newArticle}`);

fs.writeFileSync(path, c);
