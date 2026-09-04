const fs = require('fs');

function replaceStr(filePath, oldStr, newStr) {
  let c = fs.readFileSync(filePath, 'utf8');
  c = c.replace(oldStr, newStr);
  fs.writeFileSync(filePath, c);
}

replaceStr('src/app/ai/page.tsx', "canonical: '/ai/',", "canonical: '/ai',");
replaceStr('src/app/guides/page.tsx', "canonical: '/guides/',", "canonical: '/guides',");
replaceStr('src/app/vpn/page.tsx', "canonical: '/vpn/',", "canonical: '/vpn',");
replaceStr('src/app/guides/ai-network/page.tsx', "canonical: '/guides/ai-network/',", "canonical: '/guides/ai-network',");
replaceStr('src/app/vpn/weifeng/page.tsx', "canonical: '/vpn/weifeng/',", "canonical: '/vpn/weifeng',");

