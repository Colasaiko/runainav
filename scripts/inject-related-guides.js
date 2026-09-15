const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const chatgptGuides = `relatedGuides: [
      { title: 'ChatGPT能做什么？', url: '/guides/chatgpt-what-can-it-do' },
      { title: 'ChatGPT浏览器操作指南', url: '/guides/chatgpt-browser-guide' },
      { title: 'ChatGPT分析PDF教程', url: '/guides/chatgpt-pdf-guide' },
      { title: 'ChatGPT比较文件教程', url: '/guides/chatgpt-compare-files' }
    ],
    features:`;

c = c.replace(/(slug:\s*['"]chatgpt['"][\s\S]*?)features:/, `$1${chatgptGuides}`);

const sunoGuides = `relatedGuides: [
      { title: 'Suno中文歌曲高阶生成教程', url: '/guides/suno-chinese-song-tutorial' },
      { title: 'Suno生成后怎么改歌词？', url: '/guides/suno-edit-lyrics' }
    ],
    features:`;
c = c.replace(/(slug:\s*['"]suno['"][\s\S]*?)features:/, `$1${sunoGuides}`);

const midGuides = `relatedGuides: [
      { title: 'Midjourney人像提示词教程', url: '/guides/midjourney-realistic-portrait' }
    ],
    features:`;
c = c.replace(/(slug:\s*['"]midjourney['"][\s\S]*?)features:/, `$1${midGuides}`);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log("Updated aiTools.ts");
