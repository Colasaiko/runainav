const fs = require('fs');

let c = fs.readFileSync('src/components/home/LatestArticles.tsx', 'utf8');

const newArticles = `
const articles = [
  { tag: "实战教程", title: "如何用 Cursor 搭建个人博客？", date: "2026-09-04", isNetwork: false, href: "/guides/cursor-build-blog" },
  { tag: "网络指南", title: "AI 工具打不开怎么办？网络环境与常见问题排查", date: "2026-09-03", isNetwork: true, href: "/guides/ai-network" },
  { tag: "品牌实测", title: "微风网络怎么样？套餐、节点与 AI 使用体验", date: "2026-09-02", isNetwork: true, href: "/vpn/weifeng" },
];
`;

c = c.replace(/const articles = \[\s*\{ tag: "AI教程"[\s\S]*?\];/, newArticles.trim());
c = c.replace(/href="\/coming-soon"/g, 'href={article.href || "/coming-soon"}');

fs.writeFileSync('src/components/home/LatestArticles.tsx', c);
