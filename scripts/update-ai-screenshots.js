const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const mapping = {
  'deepseek': 'DeepSeek官方聊天界面',
  'doubao': '豆包官方聊天界面',
  'kimi': 'Kimi官方聊天界面',
  'kling': '可灵AI官方产品界面',
  'chatgpt': 'ChatGPT官方聊天界面',
  'gemini': 'Gemini官方对话界面',
  'perplexity': 'Perplexity搜索与解答界面',
  'cursor': 'Cursor官方代码编辑器界面',
  'midjourney': 'Midjourney官方产品界面',
  'suno': 'Suno官方音乐生成界面'
};

for (const [slug, caption] of Object.entries(mapping)) {
  const screenshots = `screenshots: [
      {
        src: "/images/ai/screenshots/${slug}/chat.webp",
        alt: "${caption}",
        caption: "${caption}",
        source: "官方产品主界面"
      }
    ],
    overview:`;
  
  const regex = new RegExp(`(slug:\\s*['"]${slug}['"][\\s\\S]*?)overview:`);
  if (c.match(regex)) {
    c = c.replace(regex, `$1${screenshots}`);
    console.log(`Added screenshots to ${slug}`);
  } else {
    console.log(`Failed to match ${slug}`);
  }
}

fs.writeFileSync('src/data/aiTools.ts', c);
