const fs = require('fs');

let c = fs.readFileSync('src/data/guideArticles.ts', 'utf8');

c = c.replace(
  /(slug:\s*'midjourney-realistic-portrait'[\s\S]*?updatedAt:\s*')[^']+(')/,
  `$12026-09-15$2`
);

const newArticles = `  {
    slug: 'chatgpt-what-can-it-do',
    title: 'ChatGPT能做什么？常用功能、场景与实用技巧',
    description: '整理ChatGPT常见功能与实际使用场景，包括聊天问答、写作、文件分析、图片理解、搜索、学习和日常办公，并说明不同任务下应该怎么用才更方便。',
    type: 'tutorial',
    category: 'AI聊天',
    tags: ['ChatGPT', 'AI工具', 'AI办公', 'AI教程'],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15'
  },
  {
    slug: 'chatgpt-browser-guide',
    title: 'ChatGPT怎么操作浏览器？网页任务与使用方法指南',
    description: '介绍ChatGPT浏览器相关功能与常见网页任务用法，涵盖打开网页、查找信息、执行步骤和使用限制，并帮助判断哪些操作适合交给ChatGPT完成。',
    type: 'tutorial',
    category: 'AI聊天',
    tags: ['ChatGPT', 'Browser', 'AI浏览器', 'AI教程'],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15'
  },
  {
    slug: 'suno-edit-lyrics',
    title: 'Suno生成后怎么改歌词？歌曲修改与重新生成教程',
    description: '介绍Suno歌曲生成后修改歌词的方法，包括Extend、Reuse Prompt、重新生成和版本选择，帮助解决歌词不满意、段落调整和作品继续完善的问题。',
    type: 'tutorial',
    category: 'AI音乐',
    tags: ['Suno', 'AI音乐', 'AI歌曲', 'AI教程'],
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15'
  },
`;

if (!c.includes('chatgpt-what-can-it-do')) {
  c = c.replace('export const guideArticles: GuideArticle[] = [', 'export const guideArticles: GuideArticle[] = [\n' + newArticles);
}

fs.writeFileSync('src/data/guideArticles.ts', c);
console.log("Updated guideArticles.ts");
