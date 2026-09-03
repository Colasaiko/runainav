const fs = require('fs');

function replaceInFile(filepath, replacements) {
  let content = fs.readFileSync(filepath, 'utf-8');
  for (const [search, replace] of replacements) {
    // using regex with global flag if possible
    content = content.replace(search, replace);
  }
  fs.writeFileSync(filepath, content, 'utf-8');
}

const replacements = [
  [/2026最新/g, "权威"],
  [/2026稳定/g, "精选稳定"],
  [/防封锁/g, "网络连通"],
  [/防封/g, "网络连通"],
  [/最新节点状态/g, "网络环境配置"],
  [/最新节点/g, "网络配置"],
  [/国内直连方案/g, "国内连通方案"],
  [/永久可用/g, "长期有效"],
  [/100%解锁/g, "顺畅访问"],
  [/保证可用/g, "稳定运行"],
  [/翻墙/g, "网络连接"],
  [/墙内/g, "国内网络环境"],
  [/突破/g, "优化"],
  [/绕过限制/g, "解决访问限制"],
];

replaceInFile('src/data/aiTools.ts', replacements);
replaceInFile('src/app/page.tsx', replacements);
replaceInFile('src/app/ai/page.tsx', replacements);
replaceInFile('src/app/vpn/page.tsx', replacements);

console.log('Sanitized phrases across files');
