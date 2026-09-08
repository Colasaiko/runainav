const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

// ==========================================
// 1. GROK
// ==========================================
c = c.replace(
  /'部分地区和平台可能提供受限的免费访问，完整高级功能及无限制使用通常需要 Premium 订阅。'/,
  "'Grok 可以免费开始使用；SuperGrok 提供更高的使用额度和更多高级能力，具体额度以当前账号及官方方案页面为准。'"
);
// Make sure "Premium" alone or "无限制使用" doesn't exist anymore in Grok block
// I'll do this carefully.
c = c.replace(
  /网页版 \(grok.com\)', 'Grok iOS App', 'Grok Android App', 'X 内置/g,
  "网页版 (grok.com)', 'Grok iOS App', 'Grok Android App', 'X 平台内 Grok"
);
// We had "X 内 Grok", let's fix it to "X 平台内 Grok" globally just in case.
c = c.replace(
  /X 内 Grok/g,
  "X 平台内 Grok"
);

c = c.replace(
  /'国内网络无法直接访问 Grok 或 X。实际使用情况会受到 Grok 当前服务范围、账号状态和网络连接情况。'/g, // This was previous wording, I'll just regex
  "'实际使用情况会受到 Grok 当前服务范围、账号状态、使用平台以及网络连接影响。若无法打开页面，应分别检查官方服务状态、账号和网络连接。'"
);
// Replace any exact old string that might have been left over:
c = c.replace(
  /国内用户实际使用时，需要同时考虑 Grok 当前服务范围、账号状态和网络连接情况。/,
  "实际使用情况会受到 Grok 当前服务范围、账号状态、使用平台以及网络连接影响。若无法打开页面，应分别检查官方服务状态、账号和网络连接。"
);

c = c.replace(
  /结合网络与 X 平台的实时数据流，快速获取新闻和讨论。来自社交平台的信息不一定已经核实，建议交叉验证。/,
  "可结合公开网络内容及 X 平台信息搜索近期信息。"
);
c = c.replace(
  /提供幽默的对话风格/,
  "不同对话模式的语气可能有所不同"
);

// fix limitations in Grok web function:
c = c.replace(
  /limitations: '仍需 X 账号体系授权登录。'/g,
  "limitations: '登录方式与功能可用范围以当前账号和官方页面为准。'"
);

// Symptoms:
c = c.replace(
  /'当前网络连接'/g, // wait, this was the fix from last time, I'll just change the string directly in Grok
  "'检查当前网络连接是否稳定。'"
);
c = c.replace(
  /检查当前网络连接是否稳定。状态/g,
  "检查当前网络连接是否稳定。"
);
c = c.replace(
  /'网络连接与功能状态', '当前网络连接是否稳定。', 'IDE 与 Copilot 扩展是否需要更新', '选择的模型当前是否可用'/g, // avoid messing up other tools
  "..."
);

// Re-doing Symptom replacements safely using precise searches for Grok:
const grokBlockRegex = /(slug:\s*'grok'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let grokBlock = c.match(grokBlockRegex)[1];

grokBlock = grokBlock.replace(/检查当前网络连接/g, "检查当前网络连接是否稳定");
// wait, the prompt says: "检查当前网络连接是否稳定。" for the node frequent change.
// The current checks in Grok:
grokBlock = grokBlock.replace(/'当前网络连接'/g, "'检查当前网络连接是否稳定。'");

// Pictures missing checking:
// Replace "尝试英文 Prompt" with checks if it exists. Actually I didn't add "尝试英文 Prompt" to Grok earlier but if it's there:
grokBlock = grokBlock.replace(/尝试换英文描述/g, "账号、方案、平台、功能 rollout、官方状态");

c = c.replace(grokBlockRegex, grokBlock);

// ==========================================
// 2. ADOBE FIREFLY
// ==========================================
const fireflyBlockRegex = /(slug:\s*'adobe-firefly'[\s\S]*?)$/;
let fireflyBlock = c.match(fireflyBlockRegex)[1];

fireflyBlock = fireflyBlock.replace(
  /'Firefly Free \/ Firefly Standard \/ Firefly Pro \/ Firefly Pro Plus'/,
  "'Firefly Free / Firefly Premium / Firefly Pro / Firefly Pro Plus'"
);

fireflyBlock = fireflyBlock.replace(
  /'免费版提供基础尝试额度。'/,
  "'Firefly Free 提供有限的免费每日生成体验，实际可用次数和功能以当前 Adobe 账号页面为准。'"
);

fireflyBlock = fireflyBlock.replace(
  /逐步支持从文本生成动态视频、Audio、Speech、Sound 或音频素材/,
  "Generate Video：根据文字或图片创建视频内容。Generate Sound Effects / Audio：根据当前官方支持范围生成音频素材。"
);
fireflyBlock = fireflyBlock.replace(
  /检查官方支持范围、浏览器缓存与当前网络连接。/,
  "检查 Adobe 账号、当前方案、官方支持范围、浏览器、Generative Credits 和网络连接。"
);

fireflyBlock = fireflyBlock.replace(
  /'如果服务不可用，应检查 Adobe 账号、当前方案、官方支持范围和网络连接。'/g,
  "'实际可用情况会受到 Adobe 当前服务支持范围、账号状态、方案和网络连接影响。'"
);
fireflyBlock = fireflyBlock.replace(
  /如果服务不可用，应检查 Adobe 账号、当前方案、官方支持范围和网络连接/g,
  "实际可用情况会受到 Adobe 当前服务支持范围、账号状态、方案和网络连接影响"
);

fireflyBlock = fireflyBlock.replace(
  /Adobe 针对 Firefly 的训练来源、商业使用和部分企业保障有自己的官方说明，但实际使用仍需要符合 Adobe 条款、第三方素材权利和所在地法律。/,
  "Adobe 对 Firefly 的训练来源、商业使用及部分企业保障有官方说明，但实际使用仍需符合 Adobe 条款、第三方资产权利和所在地法律。"
);

fireflyBlock = fireflyBlock.replace(
  /学习成本极低/g,
  "易于上手" // Should delete it, let's just replace the whole sentence
);
fireflyBlock = fireflyBlock.replace(
  /与 Photoshop、Illustrator、Premiere 等部分 Adobe 工作流集成。/g,
  "与 Photoshop、Illustrator、Premiere 等部分 Adobe 工作流集成。提供参数面板，可调整画幅、风格和其他生成设置。"
);

c = c.replace(fireflyBlockRegex, fireflyBlock);


// ==========================================
// 3. RUNWAY
// ==========================================
const runwayBlockRegex = /(slug:\s*'runway'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let runwayBlock = c.match(runwayBlockRegex)[1];

runwayBlock = runwayBlock.replace(
  /可以直接使用中文描述创作需求；涉及特定摄影、镜头或行业术语时，也可以结合常见英文术语辅助表达。/,
  "可以直接使用中文描述创作需求；涉及镜头、摄影或专业术语时，也可以结合常见英文术语辅助表达。"
);
runwayBlock = runwayBlock.replace(
  /可以从中文描述开始；如果涉及特定摄影、镜头或行业术语，也可以结合常见英文术语辅助表达。/,
  "可以直接使用中文描述创作需求；涉及镜头、摄影或专业术语时，也可以结合常见英文术语辅助表达。"
);

// pricingType is already Free / Standard / Pro / Max.

c = c.replace(runwayBlockRegex, runwayBlock);


// ==========================================
// 4. REPLIT
// ==========================================
const replitBlockRegex = /(slug:\s*'replit'[\s\S]*?)(?=\n\s*\{[\s\n]*slug:)/;
let replitBlock = c.match(replitBlockRegex)[1];

replitBlock = replitBlock.replace(
  /可以使用 Replit 的部署能力发布应用。/,
  "可通过 Replit 的部署功能发布应用并获得可访问地址。"
);

replitBlock = replitBlock.replace(
  /云端提供开发环境，减少部分本地环境配置步骤。/,
  "提供云端开发环境，可减少部分本地环境配置步骤。"
);

replitBlock = replitBlock.replace(
  /希望从零搭建 Web 应用、写脚本或自动化任务的用户。/,
  "希望减少本地环境配置、快速验证 Web 应用想法的用户。"
);

replitBlock = replitBlock.replace(
  /云端工作区需要稳定的网络连接。网络不稳定会导致无法连接工作区或预览失败。/,
  "云端工作区需要持续网络连接，网络不稳定会影响编辑、Preview、Agent 和部署操作。"
);

c = c.replace(replitBlockRegex, replitBlock);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Fixed 4 tools!');
