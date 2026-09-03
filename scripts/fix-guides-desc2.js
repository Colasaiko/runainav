const fs = require('fs');

let c = fs.readFileSync('src/app/guides/page.tsx', 'utf8');
c = c.replace(/description: '.*?'/g, "description: '不知道怎么用AI？RunAI收录全球热门的聊天、编程、绘图等AI神器的使用说明，提供详尽教程与国内连通方案。立即阅读AI使用指南，开启高效生产力无障碍之旅！'");
fs.writeFileSync('src/app/guides/page.tsx', c);
console.log('Fixed guides description');
