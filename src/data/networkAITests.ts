import { TestStatus } from './aiTests';

export interface NetworkAITestRun {
  toolSlug: string;
  networkId: string;
  networkName: string;
  networkDetailPath?: string;
  testedAt: string;
  open: TestStatus;
  login: TestStatus;
  use: TestStatus;
  summary: string;
}

export const networkAITests: NetworkAITestRun[] = [
  // 微风网络
  { toolSlug: 'chatgpt', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-02', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，ChatGPT 可以正常打开、登录并完成基础对话使用。' },
  { toolSlug: 'claude', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-02', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Claude 网页版可以正常打开、登录并完成基础对话。' },
  { toolSlug: 'gemini', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-07', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Gemini 网页版可以正常打开、通过 Google 账号登录并完成基础对话。' },
  { toolSlug: 'perplexity', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-07', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Perplexity 可以正常打开网页、完成登录并进行基础 AI 搜索与追问。' },
  { toolSlug: 'cursor', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-07', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Cursor 可以正常打开客户端服务、登录账号并完成基础 AI 辅助功能交互。' },
  { toolSlug: 'midjourney', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Midjourney (通过 Discord) 可以正常打开、登录并完成基础图像生成体验。' },
  { toolSlug: 'grok', networkId: 'weifeng', networkName: '微风网络', networkDetailPath: '/vpn/weifeng', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的测试环境中，Grok 可以正常通过 X 平台网页版打开、登录并完成基础交互。' },

  // 飞猫云
  { toolSlug: 'chatgpt', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，ChatGPT 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'claude', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Claude 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'gemini', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Gemini 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'perplexity', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Perplexity 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'cursor', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Cursor 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'midjourney', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Midjourney 可以正常打开、登录并完成基础使用。' },
  { toolSlug: 'grok', networkId: 'feimao', networkName: '飞猫云', networkDetailPath: '/vpn/feimao', testedAt: '2026-09-10', open: 'pass', login: 'pass', use: 'pass', summary: '在本次记录的飞猫云测试环境中，Grok 可以正常打开、登录并完成基础使用。' }
];
