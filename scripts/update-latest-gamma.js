const fs = require('fs');
const path = 'src/components/home/LatestArticles.tsx';
let c = fs.readFileSync(path, 'utf8');

const newArticlesArray = `const articles = [
  { tag: "AI办公", title: "Gamma做PPT教程：从生成到导出", date: "2026-09-05", isNetwork: false, href: "/guides/gamma-ppt-tutorial" },
  { tag: "AI搜索", title: "Perplexity搜索与引用核对教程", date: "2026-09-05", isNetwork: false, href: "/guides/perplexity-search-guide" },
  { tag: "AI绘图", title: "Midjourney人像提示词：构图光线教程", date: "2026-09-05", isNetwork: false, href: "/guides/midjourney-realistic-portrait" },
  { tag: "AI对比", title: "ChatGPT、Claude、Gemini怎么选？", date: "2026-09-04", isNetwork: false, href: "/guides/chatgpt-vs-claude-vs-gemini" },
  { tag: "实战教程", title: "如何用 Cursor 搭建个人博客？", date: "2026-09-04", isNetwork: false, href: "/guides/cursor-build-blog" },
  { tag: "网络指南", title: "为什么连接 VPN 后网速会变慢？", date: "2026-09-04", isNetwork: true, href: "/guides/vpn-slow-speed" },
];`;

c = c.replace(/const articles = \[[\s\S]*?\];/, newArticlesArray);

fs.writeFileSync(path, c);
