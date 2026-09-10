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
    untestedItems: ['注册新账号', '购买 Plus / Team', '高级语音 (Advanced Voice)', 'GPT-4o 极高频调用', 'API 稳定性', '长期封号风险监控'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10'
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
    untestedItems: ['注册新账号', '绑定海外手机号', '购买 Claude Pro', 'Artifacts 极高频生成', 'API 稳定性', '长期防封号验证'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10'
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
    untestedItems: ['注册新 Google 账号', '订阅 Google One AI Premium', 'Google Workspace 深度集成测试', 'Gemini Advanced 复杂代码生成', 'API 稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10'
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
    untestedItems: ['购买 Perplexity Pro', 'Pro Search 高频调用模式', '所有底层大模型切换', '文件/图片识别与深度理解', '长期使用连通率'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10'
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
    untestedItems: ['客户端直接下载速度', '购买 Cursor Pro / Ultra 订阅', 'Claude 3.5 Sonnet 模型极高频请求', '巨型代码库全量索引', '长期在线稳定性'],
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10'
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
