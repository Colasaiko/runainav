const fs = require('fs');
const path = 'src/data/guideArticles.ts';
let c = fs.readFileSync(path, 'utf8');

const newArticle = `
  {
    slug: 'suno-chinese-song-tutorial',
    title: 'Suno中文歌曲生成教程：歌词与风格怎么写',
    description: '从中文歌词、歌曲结构、音乐风格到人声和排除项，本文用可复制示例教你使用Suno生成中文歌曲，并介绍Custom模式、修改方法与商用权限注意事项。',
    type: 'tutorial',
    category: 'AI音乐',
    tags: ['Suno', 'AI音乐', '中文歌曲', '歌词', '音乐生成'],
    publishedAt: '2026-09-05',
    updatedAt: '2026-09-05'
  },`;

c = c.replace(/export const guideArticles: GuideArticle\[\] = \[/, `export const guideArticles: GuideArticle[] = [${newArticle}`);

fs.writeFileSync(path, c);
