const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const replitRegex = /(slug:\s*'replit'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let replit = c.match(replitRegex)[1];

replit = replit.replace(
  /'核心的 Replit Agent 等高级 AI 能力需要订阅 Replit Core'/g,
  "'核心的 Replit Agent 体验与高级 AI 能力与当前订阅方案有关'"
);

replit = replit.replace(
  /'免费版适合学习基础编程或运行简单的公开项目。但如果要使用强大的 Replit Agent、开发私有项目或获得更高的云端算力，需要订阅 Replit Core。'/g,
  "'Starter 可学习基础编程或运行简单的公开项目并体验部分 Agent；如果要开发私有项目、获得更高的云端算力及更高 Agent 额度，需要订阅 Core 或 Pro 方案。'"
);

replit = replit.replace(
  /'当前是否订阅了包含 Agent 权限的 Core 方案'/g,
  "'当前账号是否包含 Agent 权限及剩余额度'"
);

replit = replit.replace(
  /'需订阅 Replit Core，生成极其复杂的系统时可能仍需人工干预。'/g,
  "'依赖当前方案及 Agent Credits 额度，生成极其复杂的系统时可能仍需人工干预。'"
);

c = c.replace(replitRegex, replit);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Fixed Core exclusivity in Replit');
