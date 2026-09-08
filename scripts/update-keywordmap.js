const fs = require('fs');
let content = fs.readFileSync('seo/keyword-map.txt', 'utf8');

const newClusters = `
# ============================================================
# AI Subscription Cluster
# ============================================================

ChatGPT Plus国内怎么购买 | ChatGPT Plus怎么订阅, ChatGPT Plus价格 | 购买型 | /guides/chatgpt-plus-buy | 购买型 | 已完成
Claude Pro国内怎么订阅 | Claude Pro价格, Claude Max | 购买型 | /guides/claude-pro-subscribe | 对比+购买型 | 已完成
Gemini付费版怎么购买 | Google AI Pro, Gemini价格 | 购买型 | /guides/gemini-subscribe | 方案型 | 已完成
Cursor Pro怎么购买 | Cursor价格, Cursor Pro+, Cursor Ultra | 购买型 | /guides/cursor-pro-buy | 开发者决策型 | 已完成
Midjourney怎么付费 | Midjourney价格, Midjourney订阅 | 购买型 | /guides/midjourney-subscribe | 购买型 | 已完成
Runway会员怎么购买 | Runway价格, Runway Credits | 购买型 | /guides/runway-subscribe | Credits决策型 | 已完成
Suno会员怎么购买 | Suno价格, Suno Pro, Suno商用 | 购买型 | /guides/suno-subscribe | 权益决策型 | 已完成
Perplexity Pro怎么订阅 | Perplexity价格, Perplexity Max | 购买型 | /guides/perplexity-pro-subscribe | 对比购买型 | 已完成

# ============================================================
# AI Pricing Cluster - Backlog
# ============================================================

AI订阅价格大全 | ChatGPT价格, Claude价格, Cursor价格 | 商业调查 | 待定 | 比较型 | 待开发
ChatGPT Plus多少钱 | ChatGPT价格 | 商业调查 | 由 chatgpt-plus-buy 覆盖 | 不新建 | Covered
Claude Pro价格 | Claude多少钱 | 商业调查 | 由 claude-pro-subscribe 覆盖 | 不新建 | Covered
`;

fs.writeFileSync('seo/keyword-map.txt', content + newClusters);
console.log('Appended keyword map');
