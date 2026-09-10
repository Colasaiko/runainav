const fs = require('fs');

const path = 'src/data/aiTests.ts';
let content = fs.readFileSync(path, 'utf8');

const midjourneyOld = `{
    slug: 'midjourney',
    toolName: 'Midjourney',
    testedAt: '',
    networkId: '',
    networkName: '',
    open: 'pending',
    login: 'pending',
    use: 'pending',
    summary: '',
    untestedItems: [],
    publishedAt: '',
    updatedAt: ''
  }`;

const midjourneyNew = `{
    slug: 'midjourney',
    toolName: 'Midjourney',
    testedAt: '2026-09-10',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Midjourney (通过 Discord) 可以正常打开、登录并完成基础图像生成体验。',
    untestedItems: ['当前官方付费方案购买', '高级模型复杂功能', '长期连通稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Midjourney国内能用吗',
    seoTitle: 'Midjourney国内能用吗？登录与作图实测',
    seoDescription: 'Midjourney 国内能用吗？RunAI 记录 Discord 打开、账号登录与基础作图的实际测试结果，并注明测试日期与环境，帮助了解当前状况。'
  }`;

const grokOld = `{
    slug: 'grok',
    toolName: 'Grok',
    testedAt: '',
    networkId: '',
    networkName: '',
    open: 'pending',
    login: 'pending',
    use: 'pending',
    summary: '',
    untestedItems: [],
    publishedAt: '',
    updatedAt: ''
  }`;

const grokNew = `{
    slug: 'grok',
    toolName: 'Grok',
    testedAt: '2026-09-10',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Grok 可以正常通过 X 平台网页版打开、登录并完成基础交互。',
    untestedItems: ['X Premium 订阅购买', '长期连通稳定性', 'API 调用功能'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Grok国内能用吗',
    seoTitle: 'Grok国内能用吗？网页登录与对话交互实测',
    seoDescription: 'Grok 国内能用吗？RunAI 记录 X 平台打开、账号登录与 Grok 基础对话的实际测试结果，并明确测试网络及限制，帮助国内用户了解现状。'
  }`;

content = content.replace(midjourneyOld, midjourneyNew);
content = content.replace(grokOld, grokNew);

fs.writeFileSync(path, content, 'utf8');

console.log("Updated aiTests.ts");
