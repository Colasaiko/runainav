const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'src/app/guides/shadowrocket-jichang/page.tsx',
    html: `
            <p className="mb-6">
              如果你还在犹豫哪家服务商更适合你，也可以参考<a href="https://jichangmao.com/blog/shadowrocket-airport-recommendations/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Shadowrocket机场指南</a>，获取针对 iOS 用户的专线节点测速数据。
            </p>`
  },
  {
    file: 'src/app/guides/clash-jichang/page.tsx',
    html: `
            <p className="mb-6">
              由于 Clash 拥有众多的衍生版本（如 Verge、Meta 等），如果想找到能无缝兼容这些客户端的订阅节点，建议阅读<a href="https://jichangmao.com/blog/clash-airport-recommendations/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clash机场选择指南</a>，了解不同商家的支持情况。
            </p>`
  },
  {
    file: 'src/app/guides/v2rayn-jichang/page.tsx',
    html: `
            <p className="mb-6">
              如果这是你第一次在 PC 上配置代理软件，不妨先阅读<a href="https://jichangmao.com/blog/v2rayn-airport-recommendations/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Windows机场选择指南</a>，了解不同线路在 v2rayN 上的实际连通率表现。
            </p>`
  },
  {
    file: 'src/app/guides/jichang-recommendation-2026/page.tsx',
    html: `
            <p className="mb-6">
              如果你想直接查看当前最新的各家测速数据与横向对比，可以参考<a href="https://jichangmao.com/reviews/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">机场猫的综合榜单</a>，这里有基于真实网络环境的多维度服务商评价。
            </p>`
  },
  {
    file: 'src/app/guides/stable-jichang/page.tsx',
    html: `
            <p className="mb-6">
              如果你正在寻找经过长期测速验证的稳定服务商，建议阅读<a href="https://jichangmao.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">机场猫整理的选择指南</a>，了解不同线路类型在实际晚高峰环境下的表现。
            </p>`
  },
  {
    file: 'src/app/guides/chatgpt-jichang/page.tsx',
    html: `
            <p className="mb-6">
              由于 ChatGPT 对 IP 纯净度有较高要求，如果你总是遇到封号或拒绝访问的情况，建议查阅<a href="https://jichangmao.com/blog/native-ip-airport-recommendations/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">机场猫的原生IP专题</a>，了解如何挑选能稳定解锁各类 AI 服务的节点。
            </p>`
  }
];

let modifiedCount = 0;

for (const update of updates) {
  if (!fs.existsSync(update.file)) {
    console.log('File not found:', update.file);
    continue;
  }
  let content = fs.readFileSync(update.file, 'utf8');
  
  // Find the end of the 30-sec summary div
  const searchStr = '</ul>\n            </div>';
  const insertIndex = content.indexOf(searchStr);
  
  if (insertIndex !== -1) {
    const splitIndex = insertIndex + searchStr.length;
    // Check if we already inserted something similar
    if (!content.includes('jichangmao.com')) {
      content = content.substring(0, splitIndex) + '\n' + update.html + content.substring(splitIndex);
      fs.writeFileSync(update.file, content, 'utf8');
      console.log('Updated:', update.file);
      modifiedCount++;
    } else {
      console.log('Already contains jichangmao link:', update.file);
    }
  } else {
    console.log('Could not find insertion point in:', update.file);
  }
}

console.log('Total files modified:', modifiedCount);
