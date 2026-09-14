const fs = require('fs');

const data = {
  search: "想知道当前主流的AI搜索工具该怎么选吗？本文为你推荐并对比最热门的AI搜索引擎，如Perplexity、秘塔AI和Genspark等，带你彻底告别传统搜索引擎烦人的广告干扰。",
  image: "AI绘画与智能图像生成工具该怎么选？本文从最强大的Midjourney到最新的FLUX模型，再从即梦AI到Stable Diffusion生态，为你提供最详细的功能对比与零基础推荐指南。",
  video: "还在寻找真正好用且强大的AI视频生成工具吗？本文深度盘点Sora、Runway等海外巨头，以及可灵AI、海螺AI及HeyGen等国内顶尖的文生视频与智能数字人工具，助力你的创作。",
  productivity: "现代打工人和学生党必备的AI办公与学习效率工具怎么选？本文带你盘点Notion AI、Gamma幻灯片、Kimi长文档处理以及各类智能会议记录工具，让你的日常工作告别无意义的无效加班。",
  music: "AI音乐制作与歌曲生成工具究竟哪个更好用？本文详细对比Suno、Udio等当前最顶尖的AI音乐与声音生成引擎，让你即使完全不懂任何乐理基础，也能轻松写出火爆全网的流行单曲和高质量配乐。",
  audio: "想要寻找自然逼真、极具情感表达的AI配音工具吗？本文深度盘点ElevenLabs、Murf及Speechify等全球顶尖的AI语音合成、长文本转语音与一键声音克隆神器，满足多种配音需求。",
  china: "国内目前究竟有哪些真正好用且强大的AI工具？本文全面盘点DeepSeek、豆包、Kimi、可灵AI等国内普通用户必用的人工智能生产力神器，无需任何特殊网络配置即可随时随地流畅访问。",
  global: "带你探索当前全球最前沿的突破性AI技术。全面盘点并对比ChatGPT、Claude、Midjourney、Sora等海外最顶尖的AI大模型与效率工具，帮助你掌握世界级的顶级智能生产力。"
};

let c = fs.readFileSync('src/data/aiCategorySeo.ts', 'utf8');

// We use regex to replace the descriptions in aiCategorySeo.ts based on the filter.
for (const [filter, text] of Object.entries(data)) {
  const regex = new RegExp(`(filter: '${filter}',[\\s\\S]*?title: '.*?',\\s*description: )'.*?'`);
  c = c.replace(regex, `$1'${text}'`);
}

fs.writeFileSync('src/data/aiCategorySeo.ts', c);
console.log("Done");
