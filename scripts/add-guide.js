const fs = require('fs');
let c = fs.readFileSync('src/data/guideArticles.ts', 'utf8');
const newArticle = `  {
    slug: 'vpn-slow-speed',
    title: '为什么连接VPN后网速会变慢？',
    description: '连接VPN后出现网速下降、延迟升高或视频卡顿，通常与节点距离、线路拥堵、加密开销、本地网络和运营商路由有关。本文用简单方法教你判断原因并逐步排查。',
    type: 'troubleshooting',
    category: '网络环境',
    tags: ['VPN', '网速测试', '延迟'],
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04'
  },
`;
c = c.replace('export const guideArticles: GuideArticle[] = [', 'export const guideArticles: GuideArticle[] = [\n' + newArticle);
fs.writeFileSync('src/data/guideArticles.ts', c);
console.log('done');
