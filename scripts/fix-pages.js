const fs = require('fs');
const path = require('path');

const dirs = [
  'chatgpt-jichang',
  'jichang-recommendation-2026',
  'stable-jichang',
  'cheap-jichang',
  'value-jichang',
  'clash-jichang',
  'clash-verge-jichang',
  'shadowrocket-jichang',
  'v2rayn-jichang',
  'no-expiry-jichang'
];

dirs.forEach(d => {
  const p = path.join('src/app/guides', d, 'page.tsx');
  let c = fs.readFileSync(p, 'utf8');
  
  // 1. Rename tableOfContents to sections
  c = c.replace(/const tableOfContents = \[([\s\S]*?)\];/g, (match, inner) => {
    // Also shorten the navLabel if it's too long
    // Here we can do a naive shortening by taking everything before the first space or 6 chars
    let newInner = inner.replace(/navLabel: '([^']+)'/g, (m, label) => {
      let short = label;
      if (label.includes('真正需要看什么')) short = '看什么';
      else if (label.includes('与官方服务范围')) short = '节点地区';
      else if (label.includes('不同 AI 产品的政策差异')) short = '政策差异';
      else if (label.includes('与长连接的实际影响')) short = '延迟影响';
      else if (label.includes('常见问题 FAQ')) short = 'FAQ';
      else if (label.includes('2026 选择机场先看哪 6 个指标')) short = '6大指标';
      else if (label.includes('价格不是第一指标')) short = '价格指标';
      else if (label.includes('线路怎么看（直连/中转/专线）')) short = '看线路';
      else if (label.includes('已验证品牌样本')) short = '品牌样本';
      else if (label.includes('延迟、丢包与速度峰值')) short = '延迟丢包';
      else if (label.includes('晚高峰怎么看')) short = '晚高峰';
      else if (label.includes('低预算用户的真实需求')) short = '低预算需求';
      else if (label.includes('月费与年付折算')) short = '费用折算';
      else if (label.includes('设备限制与节点数')) short = '设备节点';
      else if (label.includes('价格与质量的平衡')) short = '价格质量';
      else if (label.includes('性价比评估表')) short = '性价比表';
      else if (label.includes('不同使用场景的取舍')) short = '使用场景';
      else if (label.includes('Clash 客户端与机场的区别')) short = '客户端区别';
      else if (label.includes('订阅兼容与节点更新')) short = '订阅兼容';
      else if (label.includes('当前活跃客户端差异')) short = '客户端差异';
      else if (label.includes('Windows 下的 Clash Verge')) short = 'Windows端';
      else if (label.includes('订阅格式兼容性')) short = '格式兼容';
      else if (label.includes('iPhone/iOS 用户的首选')) short = 'iOS首选';
      else if (label.includes('小火箭订阅怎么选')) short = '订阅选择';
      else if (label.includes('v2rayN 客户端简介')) short = '客户端简介';
      else if (label.includes('订阅与节点格式支持')) short = '格式支持';
      else if (label.includes('按量计费适合什么人')) short = '适用人群';
      else if (label.includes('不限时 ≠ 无限流量')) short = '流量说明';
      else if (label.includes('长期成本比较')) short = '长期成本';
      else if (label.includes('稳定的定义')) short = '定义';
      else if (label.length > 8 && label.indexOf(' ') > 0) short = label.split(' ')[0];
      return `navLabel: '${short}'`;
    });
    return `const sections = [${newInner}];`;
  });
  
  c = c.replace(/<ArticleStickyBar sections=\{tableOfContents\} \/>/g, '<ArticleStickyBar sections={sections} />');
  
  // Make sure it doesn't have the old format if my previous regex missed it
  c = c.replace(/<ArticleStickyBar title=".*?" toc=\{tableOfContents\} \/>/g, '<ArticleStickyBar sections={sections} />');

  // 2. Add id="article-sticky-trigger"
  // Place it before the first <h2
  if (!c.includes('id="article-sticky-trigger"')) {
    // Find the first <h2 and insert a div before it
    // Wait, some pages might have it in a better place. The <div className="bg-brand-50..." block is before the first h2.
    // Let's just put it right before the 30秒速读摘要, or right after the opening of the content container.
    // The content container starts with <div className="prose prose-lg max-w-none text-gray-700">
    c = c.replace(/<div className="prose prose-lg max-w-none text-gray-700">/, '<div className="prose prose-lg max-w-none text-gray-700">\n            <div id="article-sticky-trigger" />');
  }

  // 3. Add id="article-end-trigger"
  // Place it right before </main>
  if (!c.includes('id="article-end-trigger"')) {
    c = c.replace(/<\/main>/, '  <div id="article-end-trigger" />\n      </main>');
  }
  
  // Also ensure fallbackHref is used
  c = c.replace(/fallbackPath=/g, 'fallbackHref=');

  fs.writeFileSync(p, c);
});

console.log('Fixed pages with proper Props and Triggers.');
