export type TestStatus = 'pass' | 'partial' | 'fail' | 'pending' | 'not-tested';

export interface AITestRecord {
  slug: string;
  toolName: string;
  testedAt: string;
  networkId: string;
  networkName: string;
  networkDetailPath?: string;

  open: TestStatus;
  login: TestStatus;
  use: TestStatus;

  summary: string;
  untestedItems: string[];

  publishedAt: string;
  updatedAt: string;

  primaryKeyword?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const aiTests: AITestRecord[] = [
  {
    slug: 'chatgpt',
    toolName: 'ChatGPT',
    testedAt: '2026-09-02',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，ChatGPT 可以正常打开、登录并完成基础对话使用。',
    untestedItems: ['注册新账号', '当前官方付费方案购买', '高级模型的高频使用', '复杂多模态功能', 'API 稳定性', '长期连续使用稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'ChatGPT国内能用吗',
    seoTitle: 'ChatGPT国内能用吗？打开登录与对话实测',
    seoDescription: 'ChatGPT 国内能用吗？RunAI 记录网页打开、账号登录与基础对话的实际测试结果，并注明测试日期、网络环境和适用范围，方便国内用户判断当前使用情况。'
  },
  {
    slug: 'claude',
    toolName: 'Claude',
    testedAt: '2026-09-02',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Claude 网页版可以正常打开、登录并完成基础对话。',
    untestedItems: ['注册新账号', '绑定海外手机号', '当前官方付费方案购买', '高级模型的复杂任务', '大规模项目资料处理', 'API 稳定性', '长期账号与服务可用性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Claude国内能用吗',
    seoTitle: 'Claude国内能用吗？网页登录与对话实测',
    seoDescription: 'Claude 国内能用吗？RunAI 记录网页打开、账号登录和基础对话的实际测试结果，并注明测试日期、网络环境与限制说明，帮助国内用户了解当前使用情况。'
  },
  {
    slug: 'gemini',
    toolName: 'Gemini',
    testedAt: '2026-09-07',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Gemini 网页版可以正常打开、通过 Google 账号登录并完成基础对话。',
    untestedItems: ['注册新 Google 账号', '当前官方付费方案购买', 'Google Workspace 深度整合', '高级模型复杂任务', 'API 稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Gemini国内能用吗',
    seoTitle: 'Gemini国内能用吗？网页登录与使用实测',
    seoDescription: 'Gemini 国内能用吗？RunAI 记录网页打开、账号登录和基础使用的实际测试结果，并注明测试日期、网络环境和服务地区说明，帮助国内用户了解当前使用情况。'
  },
  {
    slug: 'perplexity',
    toolName: 'Perplexity',
    testedAt: '2026-09-07',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Perplexity 可以正常打开网页、完成登录并进行基础 AI 搜索与追问。',
    untestedItems: ['当前官方付费方案购买', '高频调用模式', '所有底层大模型切换', '文件/图片识别与深度理解', '长期连通率'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Perplexity国内能用吗',
    seoTitle: 'Perplexity国内能用吗？搜索与登录实测',
    seoDescription: 'Perplexity 国内能用吗？RunAI 记录网页打开、账号登录与基础搜索的实际测试结果，并注明测试日期、网络环境和功能范围，方便国内用户了解当前使用情况。'
  },
  {
    slug: 'cursor',
    toolName: 'Cursor',
    testedAt: '2026-09-07',
    networkId: 'weifeng',
    networkName: '微风网络',
    networkDetailPath: '/vpn/weifeng',
    open: 'pass',
    login: 'pass',
    use: 'pass',
    summary: '在本次记录的测试环境中，Cursor 可以正常打开客户端服务、登录账号并完成基础 AI 辅助功能交互。',
    untestedItems: ['应用直接下载速度', '当前官方付费方案购买', '高级模型高频请求', '大型代码库索引', '长期在线稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    primaryKeyword: 'Cursor国内能用吗',
    seoTitle: 'Cursor国内能用吗？编辑器登录与AI功能实测',
    seoDescription: 'Cursor 国内能用吗？RunAI 记录应用打开、账号登录与基础 AI 功能的实际测试结果，并注明测试日期、网络环境和测试范围，帮助国内用户了解当前使用情况。'
  },
  {
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
  },
  {
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
  }
];

export function getAITestBySlug(slug: string): AITestRecord | undefined {
  return aiTests.find((t) => t.slug === slug);
}
