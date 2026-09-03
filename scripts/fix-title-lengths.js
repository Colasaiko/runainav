const fs = require('fs');

let content = fs.readFileSync('src/data/aiTools.ts', 'utf-8');

const titleUpdates = {
  "chatgpt": "ChatGPT指南：AI聊天功能剖析 - RunAI", // 7+3+1+8+3+5 = 27
  "claude": "Claude进阶教程：长文本与编程辅助 - RunAI", // 6+5+1+7+3+5 = 27
  "gemini": "Gemini教程：谷歌多模态大模型 - RunAI", // 6+3+1+8+3+5 = 26
  "grok": "Grok深度测评：X平台AI与网络配置 - RunAI", // 4+5+1+10+3+5 = 28
  "perplexity": "Perplexity指南：AI智能搜索神器 - RunAI", // 10+3+1+8+3+5 = 30
  "cursor": "Cursor进阶教程：全栈代码生成工具 - RunAI", // 6+5+1+8+3+5 = 28
  "github-copilot": "Copilot教程：编程插件深度测评 - RunAI", // 7+3+1+8+3+5 = 27
  "midjourney": "Midjourney指南：AI绘画提示词 - RunAI", // 10+3+1+7+3+5 = 29
  "ideogram": "Ideogram测评：海报与文字排版 - RunAI", // 8+3+1+7+3+5 = 27
  "runway": "Runway教程：好莱坞级视频生成 - RunAI", // 6+3+1+8+3+5 = 26
  "canva-ai": "Canva AI测评：一键在线设计排版 - RunAI", // 8+3+1+8+3+5 = 28
  "gamma": "Gamma进阶教程：一键排版生成PPT - RunAI", // 5+5+1+9+3+5 = 28
  "suno": "Suno教程：零基础AI音乐自动生成 - RunAI", // 4+3+1+10+3+5 = 26
  "replit": "Replit测评：云端IDE与协作开发 - RunAI", // 6+3+1+9+3+5 = 27
  "v0": "v0进阶教程：前端代码一键自动生成 - RunAI", // 2+5+1+9+3+5 = 25
  "bolt": "Bolt深度测评：全栈Web应用构建方案 - RunAI", // 4+5+1+10+3+5 = 28
  "leonardo-ai": "Leonardo AI教程：免费绘画模型 - RunAI", // 11+3+1+6+3+5 = 29
  "adobe-firefly": "Firefly指南：商用版权无忧设计 - RunAI", // 7+3+1+8+3+5 = 27
  "pika": "Pika教程：3D动漫风格与视频运镜 - RunAI", // 4+3+1+10+3+5 = 26
  "luma-dream-machine": "Luma测评：超写实物理视频运镜 - RunAI" // 4+3+1+9+3+5 = 25
};

for (const [slug, title] of Object.entries(titleUpdates)) {
  const regex = new RegExp(`(\\"slug\\"\\s*:\\s*\\"${slug}\\"[\\s\\S]*?\\"seoTitle\\"\\s*:\\s*\\")[^"]+(\\")`);
  content = content.replace(regex, `$1${title}$2`);
}

fs.writeFileSync('src/data/aiTools.ts', content, 'utf-8');

const homeContent = fs.readFileSync('src/app/page.tsx', 'utf-8');
// 权威AI工具大全与深度测评 | 网络连通指南 - RunAI -> 25 chars? Wait, 2+8+1+7+1+5 = 24.
// Array.from("AI工具大全与深度测评 | 网络连通指南 - RunAI").length = 2+8+3+6+3+5 = 27
fs.writeFileSync('src/app/page.tsx', homeContent.replace(/title: '.*'/, "title: 'AI工具大全与深度测评 | 网络连通指南 - RunAI'").replace(/title: '.*'/g, "title: 'AI工具大全与深度测评 | 网络连通指南 - RunAI'"), 'utf-8');

const aiContent = fs.readFileSync('src/app/ai/page.tsx', 'utf-8');
// 权威AI工具大全与测评 | 高效生产力神器 - RunAI -> 2+7+3+7+3+5 = 27
fs.writeFileSync('src/app/ai/page.tsx', aiContent.replace(/title: '.*'/, "title: 'AI工具大全与测评 | 高效生产力神器 - RunAI'").replace(/title: '.*'/g, "title: 'AI工具大全与测评 | 高效生产力神器 - RunAI'"), 'utf-8');

const vpnContent = fs.readFileSync('src/app/vpn/page.tsx', 'utf-8');
// 精选稳定网络节点深度测评 | 海外AI连通指南 - RunAI -> 4+10+3+8+3+5 = 33 -> too long!
// 稳定网络节点深度测评 | 海外AI连通指南 - RunAI -> 10+3+8+3+5 = 29
fs.writeFileSync('src/app/vpn/page.tsx', vpnContent.replace(/title: ".*"/, 'title: "稳定网络节点深度测评 | 海外AI连通指南 - RunAI"').replace(/title: ".*"/g, 'title: "稳定网络节点深度测评 | 海外AI连通指南 - RunAI"'), 'utf-8');

console.log("Titles rewritten to fit 20-30 characters strict length.");
