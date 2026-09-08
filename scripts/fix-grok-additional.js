const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

const grokRegex = /(slug:\s*'grok'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let grok = c.match(grokRegex)[1];

grok = grok.replace(
  /'部分高级功能（如无限制图片生成）需要 X Premium 订阅'/g,
  "'部分高级功能与更高用量需要 SuperGrok 订阅'"
);

grok = grok.replace(
  /'根据最新政策，部分地区提供受限的免费体验额度，适合轻度查询。若需进行大量搜索、高频对话或图片生成，建议订阅 Premium。'/g,
  "'根据最新政策，Grok 提供免费基础体验，适合轻度查询。若需进行大量搜索、高频对话或高级生成，建议订阅 SuperGrok。'"
);

grok = grok.replace(
  /'图像生成可能属于 Premium 专属或灰度测试'/g,
  "'图像生成可能属于更高方案专属或灰度测试'"
);

grok = grok.replace(
  /'尝试换用简单的英文描述重试'/g,
  "'账号、方案、平台、功能 rollout、官方状态'"
);

grok = grok.replace(
  /'具体权限和生成数量可能受限于是否为 Premium 订阅账号。'/g,
  "'具体权限和生成数量受限于当前账号方案与功能权限。'"
);

c = c.replace(grokRegex, grok);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Fixed additional Grok traces!');
