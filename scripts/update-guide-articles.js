const fs = require('fs');

let c = fs.readFileSync('src/data/guideArticles.ts', 'utf8');

c = c.replace(
  /export type GuideType = 'tool' \| 'tutorial' \| 'troubleshooting';/,
  "export type GuideType = 'tool' | 'tutorial' | 'troubleshooting' | 'network';"
);

// We need to inject the 10 articles into the guideArticles array.
// The array is `export const guideArticles: GuideArticle[] = [`

const articlesToAdd = `
  {
    slug: 'chatgpt-jichang',
    title: 'ChatGPT机场推荐：2026年AI网络方案怎么选',
    description: '国内使用 ChatGPT 等海外 AI 工具时机场怎么选？本文从线路稳定性、节点地区、晚高峰、设备兼容和使用成本出发，整理选择 AI 网络方案时值得关注的因素。',
    type: 'network',
    category: '网络指南',
    tags: ['ChatGPT', 'AI工具', '网络环境'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'jichang-recommendation-2026',
    title: '2026机场推荐：稳定便宜与专线怎么选 | RunAI',
    description: '2026 年怎么选择稳定、便宜又适合长期使用的机场？本文从价格、流量、线路类型、晚高峰、设备兼容和节点数量出发，整理挑选机场时最值得比较的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['机场推荐', '专线', '指南'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'stable-jichang',
    title: '稳定机场推荐：晚高峰与线路怎么判断 | RunAI',
    description: '稳定机场应该怎么看？本文从晚高峰表现、线路类型、节点可用率、丢包、延迟、带宽波动和客户端兼容等角度，整理选择稳定机场时真正值得关注的指标，避免只看宣传参数。',
    type: 'network',
    category: '网络指南',
    tags: ['稳定', '晚高峰', '延迟'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'cheap-jichang',
    title: '便宜机场推荐：低预算怎么选更合适 | RunAI',
    description: '预算不高也想找能长期使用的机场？本文从月费、流量、线路、节点数量、设备限制、付款周期和实际使用需求出发，整理低预算用户选择便宜机场时应该优先比较的项目。',
    type: 'network',
    category: '网络指南',
    tags: ['便宜', '低价', '预算'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'value-jichang',
    title: '高性价比机场推荐：价格流量线路怎么比 | RunAI',
    description: '高性价比机场不等于价格最低。本文从套餐价格、每月流量、线路质量、晚高峰表现、节点数量、设备限制和使用场景出发，整理判断机场性价比时更实用的比较方法。',
    type: 'network',
    category: '网络指南',
    tags: ['高性价比', '流量', '价格'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'clash-jichang',
    title: 'Clash机场推荐：2026年订阅怎么选 | RunAI',
    description: 'Clash 用户怎么选择机场订阅？本文从订阅兼容、线路稳定性、节点地区、流量套餐和更新方式出发，整理 2026 年选择 Clash 机场时值得关注的因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Clash', '订阅', '客户端'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'clash-verge-jichang',
    title: 'Clash Verge机场推荐：Windows订阅怎么选',
    description: 'Windows 使用 Clash Verge 时怎么选机场？本文从订阅格式、节点稳定性、线路类型和流量套餐出发，整理这类客户端用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Clash Verge', 'Windows', '订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'shadowrocket-jichang',
    title: 'Shadowrocket机场推荐：小火箭订阅怎么选',
    description: 'Shadowrocket 用户怎么选机场？本文从订阅兼容、节点地区、线路稳定性和套餐流量出发，整理 iPhone 小火箭用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['Shadowrocket', '小火箭', 'iOS'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'v2rayn-jichang',
    title: 'v2rayN机场推荐：Windows用户怎么选',
    description: 'Windows 使用 v2rayN 时怎么选机场？本文从订阅兼容、节点稳定性、线路类型和流量套餐出发，整理 v2rayN 用户挑选机场时值得关注的关键因素。',
    type: 'network',
    category: '网络指南',
    tags: ['v2rayN', 'Windows', '网络'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },
  {
    slug: 'no-expiry-jichang',
    title: '不限时机场推荐：按量计费与套餐怎么选 | RunAI',
    description: '不限时机场适合什么人？本文比较不限时流量包、按量计费与月付套餐的区别，并从有效期、流量消耗、线路稳定性、设备数量和长期成本出发，帮助低频用户判断哪种套餐更合适。',
    type: 'network',
    category: '网络指南',
    tags: ['不限时', '按量计费', '流量包'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08'
  },`;

c = c.replace(/export const guideArticles: GuideArticle\[\] = \[/, 'export const guideArticles: GuideArticle[] = [' + articlesToAdd);

fs.writeFileSync('src/data/guideArticles.ts', c);
console.log('Updated guideArticles.ts');
