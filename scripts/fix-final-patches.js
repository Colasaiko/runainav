const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// =====================================
// 1. GROK
// =====================================
const grokRegex = /(slug:\s*'grok'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let grok = c.match(grokRegex)[1];

// platforms
grok = grok.replace(
  /platforms:\s*\['网页版 \(grok\.com\)', 'Grok iOS App', 'Grok Android App', 'X 平台内 Grok'\]/,
  "platforms: ['网页端 (grok.com)', 'Grok iOS App', 'Grok Android App', 'X 平台内 Grok']"
);
// In case it wasn't matched properly before
grok = grok.replace(
  /platforms:\s*\['网页版 \(grok\.com\)', 'iOS App', 'Android App', 'X 平台内 Grok'\]/,
  "platforms: ['网页端 (grok.com)', 'Grok iOS App', 'Grok Android App', 'X 平台内 Grok']"
);
// general fix for platforms
grok = grok.replace(
  /platforms:\s*\[[^\]]+\]/,
  "platforms: ['网页端 (grok.com)', 'Grok iOS App', 'Grok Android App', 'X 平台内 Grok']"
);

// FAQ
grok = grok.replace(
  /目前你依然需要一个 X 账号来进行授权登录，甚至许多功能会引导你回到 X。/,
  "不是。Grok 可以通过独立的 grok.com 和官方 Grok App 使用。当前可用登录方式以官方页面实际提供为准，例如 Email、Google、Apple 或 X 等；X 账号不是使用 Grok 独立产品的唯一前提。"
);
// Or the previous fix if I applied it partially
grok = grok.replace(
  /不是。Grok 可以通过 grok\.com 独立使用，当前登录方式以官方页面实际提供为准，例如 Email、Google、Apple 或 X 等。X 账号主要用于连接 X 平台相关体验，不是使用 grok\.com 的唯一前提。/,
  "不是。Grok 可以通过独立的 grok.com 和官方 Grok App 使用。当前可用登录方式以官方页面实际提供为准，例如 Email、Google、Apple 或 X 等；X 账号不是使用 Grok 独立产品的唯一前提。"
);

// limitations
grok = grok.replace(
  /仍需 X 账号体系进行授权登录。/g,
  "登录方式与功能可用范围以当前账号和官方页面为准。"
);

// typo
grok = grok.replace(
  /是否稳定是否稳定/g,
  "是否稳定"
);

// Symptoms
grok = grok.replace(
  /当前账号是否满足使用资格（如是否需要 Premium）/g,
  "当前账号方案与功能权限"
);

c = c.replace(grokRegex, grok);

// =====================================
// 2. ADOBE FIREFLY
// =====================================
const fireflyRegex = /(slug:\s*'adobe-firefly'[\s\S]*?)$/;
let firefly = c.match(fireflyRegex)[1];

firefly = firefly.replace(
  /pricingType:\s*'[^']+'/,
  "pricingType: 'Firefly Free / Firefly Standard / Firefly Pro / Firefly Pro Plus / Firefly Premium'"
);

firefly = firefly.replace(
  /提供高度定制化的面板/,
  "支持调整画幅、风格、光影和材质等生成设置"
);
// just in case of different phrasing
firefly = firefly.replace(
  /高度定制化/g,
  "支持调整画幅、风格、光影和材质等生成设置"
);

firefly = firefly.replace(
  /广受好评的局部重绘/g,
  "支持局部重绘、背景替换和画面扩展"
);

firefly = firefly.replace(
  /深度集成于 PS、AI 之中，随时可用/g,
  "与 Photoshop、Illustrator、Premiere 等部分 Creative Cloud 工作流集成"
);
// just in case
firefly = firefly.replace(
  /深度集成/g,
  "集成"
);
firefly = firefly.replace(
  /随时可用/g,
  ""
);

// Video / Audio check
// Since we already replaced "逐步支持..." with Generate Video: ..., it should be fine.

c = c.replace(fireflyRegex, firefly);

// =====================================
// 3. RUNWAY
// =====================================
const runwayRegex = /(slug:\s*'runway'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let runway = c.match(runwayRegex)[1];

runway = runway.replace(
  /高级控制功能和无限制生成需要较高级别的订阅方案/g,
  "部分高级功能与更高生成用量需要更高级别的订阅方案。"
);
// wait, maybe there's a period at the end
runway = runway.replace(
  /高级控制功能和无限制生成需要较高级别的订阅方案。/g,
  "部分高级功能与更高生成用量需要更高级别的订阅方案。"
);

c = c.replace(runwayRegex, runway);


// =====================================
// 4. REPLIT
// =====================================
const replitRegex = /(slug:\s*'replit'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let replit = c.match(replitRegex)[1];

replit = replit.replace(
  /检查当前账号状态、Core 订阅权限及网络连接状况。/g,
  "检查当前账号状态、方案与 Agent Credits、项目状态以及网络连接。"
);

replit = replit.replace(
  /不懂复杂环境配置的用户快速从零搭建并上线一个全栈 Web 应用/g,
  "希望减少本地环境配置步骤，并用 Agent 快速验证 Web 应用想法的用户"
);

c = c.replace(replitRegex, replit);


fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Fix script done!');
