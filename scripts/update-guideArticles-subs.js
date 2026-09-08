const fs = require('fs');
let content = fs.readFileSync('src/data/guideArticles.ts', 'utf8');

// 1. Update GuideType
content = content.replace(
  /export type GuideType = 'tool' \| 'tutorial' \| 'troubleshooting' \| 'network';/,
  "export type GuideType = 'tool' | 'tutorial' | 'troubleshooting' | 'network' | 'subscription';"
);

// 2. Add 8 new articles
const newArticles = `  {
    slug: 'chatgpt-plus-buy',
    title: 'ChatGPT Plus国内怎么购买？订阅与付款指南',
    description: 'ChatGPT Plus 国内怎么购买？整理官方订阅入口、当前价格、Plus 与免费版差异，以及付款前需要确认的账号、服务地区和常见开通问题。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['ChatGPT', 'AI订阅', 'OpenAI'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'claude-pro-subscribe',
    title: 'Claude Pro国内怎么订阅？价格与付款指南',
    description: 'Claude Pro 国内怎么订阅？整理官方方案、当前价格、Pro 与免费版差异，以及付款前需要确认的账号、服务地区、功能权限和常见开通问题。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Claude', 'AI订阅', 'Anthropic'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'gemini-subscribe',
    title: 'Gemini付费版怎么购买？方案与订阅指南',
    description: 'Gemini 付费版怎么购买？整理 Google AI 当前个人方案、主要功能差异、订阅入口，以及付款前需要确认的账号地区、功能权限和开通条件。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Gemini', 'AI订阅', 'Google'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'cursor-pro-buy',
    title: 'Cursor Pro怎么购买？价格、额度与订阅指南',
    description: 'Cursor Pro 怎么购买？整理当前个人付费方案、价格、Agent 使用额度、订阅入口与付款事项，并比较 Pro、Pro+、Ultra 的适合人群。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Cursor', 'AI编程', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'midjourney-subscribe',
    title: 'Midjourney怎么付费？套餐与订阅购买指南',
    description: 'Midjourney 怎么付费？整理 Basic、Standard、Pro、Mega 当前价格、月付与年付区别，以及购买前需要确认的 GPU 用量和方案差异。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Midjourney', 'AI画图', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'runway-subscribe',
    title: 'Runway会员怎么购买？价格与订阅方案指南',
    description: 'Runway 会员怎么购买？整理 Free、Standard、Pro、Max 当前方案、Credits 使用方式、订阅入口与价格差异，并说明不同创作需求怎么选。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Runway', 'AI视频', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'suno-subscribe',
    title: 'Suno会员怎么购买？价格、额度与商用指南',
    description: 'Suno 会员怎么购买？整理 Free、Pro、Premier 当前方案、Credits、下载与商业使用权限，并说明月付、年付和创作者购买前要注意的事项。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Suno', 'AI音乐', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
  {
    slug: 'perplexity-pro-subscribe',
    title: 'Perplexity Pro怎么订阅？价格与付款指南',
    description: 'Perplexity Pro 怎么订阅？整理 Free、Pro、Max 当前方案、价格、研究与模型使用差异、订阅入口，并说明不同搜索需求适合哪一档。',
    type: 'subscription',
    category: 'AI订阅',
    tags: ['Perplexity', 'AI搜索', 'AI订阅'],
    publishedAt: '2026-09-08',
    updatedAt: '2026-09-08',
  },
`;

content = content.replace(
  /export const guideArticles: GuideArticle\[\] = \[/,
  "export const guideArticles: GuideArticle[] = [\n" + newArticles
);

fs.writeFileSync('src/data/guideArticles.ts', content);
console.log('Updated guideArticles.ts');
