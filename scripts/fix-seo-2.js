const fs = require('fs');

const data = {
  search: "想知道主流AI搜索工具怎么选吗？本文推荐并对比热门AI搜索引擎，如Perplexity、秘塔AI和Genspark等，带你彻底告别传统搜索引擎烦人的广告干扰。",
  image: "AI绘画工具怎么选？本文从Midjourney到FLUX，再从即梦AI到Stable Diffusion，为你提供最详细的功能对比与AI零基础选择指南。",
  video: "寻找真正好用的AI视频工具吗？深度盘点Sora、Runway等海外巨头，以及可灵AI、海螺AI及HeyGen等国内顶尖的文生视频与数字人工具。",
  productivity: "打工人和学生党必备的AI办公工具怎么选？本文盘点Notion AI、Gamma幻灯片、Kimi长文档处理及各类智能会议记录神器，让你的日常工作告别无意义加班。",
  music: "AI音乐制作与歌曲生成工具哪个更好用？本文详细对比Suno、Udio等顶尖AI音乐引擎，让你即使不懂乐理，也能轻松写出火爆全网的流行单曲和高质量配乐。",
  audio: "想要极具情感表达的AI配音工具吗？本文深度盘点ElevenLabs、Murf及Speechify等全球顶尖的AI语音合成与一键声音克隆神器，满足各种配音需求。",
  china: "国内究竟有哪些好用且强大的AI工具？全面盘点DeepSeek、豆包、Kimi、可灵AI等国内必用的神器，无需特殊网络配置即可随时随地畅快访问。",
  global: "带你探索全球最前沿的AI技术。全面盘点并对比ChatGPT、Claude、Midjourney、Sora等海外最顶尖大模型与效率工具，帮你掌握世界级智能生产力。"
};

let c = fs.readFileSync('src/data/aiCategorySeo.ts', 'utf8');

// We use regex to replace the descriptions in aiCategorySeo.ts based on the filter.
for (const [filter, text] of Object.entries(data)) {
  const regex = new RegExp(`(filter: '${filter}',[\\s\\S]*?title: '.*?',\\s*description: )'.*?'`);
  c = c.replace(regex, `$1'${text}'`);
}

fs.writeFileSync('src/data/aiCategorySeo.ts', c);
console.log("Done");
