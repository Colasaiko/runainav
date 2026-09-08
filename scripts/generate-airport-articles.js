const fs = require('fs');
const path = require('path');

const articles = [
  // 1
  {
    slug: 'chatgpt-jichang',
    title: 'ChatGPT机场推荐：2026年AI网络方案怎么选',
    description: '国内使用 ChatGPT 等海外 AI 工具时机场怎么选？本文从线路稳定性、节点地区、晚高峰、设备兼容和使用成本出发，整理选择 AI 网络方案时值得关注的因素。',
    h1: 'ChatGPT 机场推荐：国内使用 AI 工具怎么选网络方案？',
    category: '网络指南',
    tags: ['ChatGPT机场推荐', 'AI工具', '网络环境'],
    keyword: 'ChatGPT机场推荐'
  },
  // 2
  {
    slug: 'jichang-recommendation-2026',
    title: '2026机场推荐：稳定便宜与专线怎么选 | RunAI',
    description: '2026 年怎么选择稳定、便宜又适合长期使用的机场？本文从价格、流量、线路类型、晚高峰、设备兼容和节点数量出发，整理挑选机场时最值得比较的关键因素。',
    h1: '2026 机场推荐：稳定、便宜与专线机场怎么选？',
    category: '网络指南',
    tags: ['2026机场推荐', '专线', '指南'],
    keyword: '机场推荐'
  },
  // 3
  {
    slug: 'stable-jichang',
    title: '稳定机场推荐：晚高峰与线路怎么判断 | RunAI',
    description: '稳定机场应该怎么看？本文从晚高峰表现、线路类型、节点可用率、丢包、延迟、带宽波动和客户端兼容等角度，整理选择稳定机场时真正值得关注的指标，避免只看宣传参数。',
    h1: '稳定机场推荐：晚高峰、延迟和线路应该怎么看？',
    category: '网络指南',
    tags: ['稳定机场推荐', '延迟', '线路'],
    keyword: '稳定机场推荐'
  },
  // 4
  {
    slug: 'cheap-jichang',
    title: '便宜机场推荐：低预算怎么选更合适 | RunAI',
    description: '预算不高也想找能长期使用的机场？本文从月费、流量、线路、节点数量、设备限制、付款周期和实际使用需求出发，整理低预算用户选择便宜机场时应该优先比较的项目。',
    h1: '便宜机场推荐：低预算用户应该怎么选？',
    category: '网络指南',
    tags: ['便宜机场推荐', '低价', '学生党'],
    keyword: '便宜机场推荐'
  },
  // 5
  {
    slug: 'value-jichang',
    title: '高性价比机场推荐：价格流量线路怎么比 | RunAI',
    description: '高性价比机场不等于价格最低。本文从套餐价格、每月流量、线路质量、晚高峰表现、节点数量、设备限制和使用场景出发，整理判断机场性价比时更实用的比较方法。',
    h1: '高性价比机场推荐：价格、流量和线路怎么比较？',
    category: '网络指南',
    tags: ['高性价比机场推荐', '流量', '价格'],
    keyword: '高性价比机场推荐'
  },
  // 6
  {
    slug: 'clash-jichang',
    title: 'Clash机场推荐：2026年订阅怎么选 | RunAI',
    description: 'Clash 用户怎么选择机场订阅？本文从订阅兼容、线路稳定性、节点地区、流量套餐和更新方式出发，整理 2026 年选择 Clash 机场时值得关注的因素。',
    h1: 'Clash 机场推荐：2026 年订阅服务怎么选？',
    category: '网络指南',
    tags: ['Clash机场推荐', '订阅', '客户端'],
    keyword: 'Clash机场推荐'
  },
  // 7
  {
    slug: 'clash-verge-jichang',
    title: 'Clash Verge机场推荐：Windows订阅怎么选',
    description: 'Windows 使用 Clash Verge 时怎么选机场？本文从订阅格式、节点稳定性、线路类型和流量套餐出发，整理这类客户端用户挑选机场时值得关注的关键因素。',
    h1: 'Clash Verge 机场推荐：Windows 用户怎么选订阅？',
    category: '网络指南',
    tags: ['Clash Verge', 'Windows', '机场推荐'],
    keyword: 'Clash Verge机场推荐'
  },
  // 8
  {
    slug: 'shadowrocket-jichang',
    title: 'Shadowrocket机场推荐：小火箭订阅怎么选',
    description: 'Shadowrocket 用户怎么选机场？本文从订阅兼容、节点地区、线路稳定性和套餐流量出发，整理 iPhone 小火箭用户挑选机场时值得关注的关键因素。',
    h1: 'Shadowrocket 机场推荐：小火箭用户怎么选机场订阅？',
    category: '网络指南',
    tags: ['Shadowrocket', '小火箭', 'iOS'],
    keyword: 'Shadowrocket机场推荐'
  },
  // 9
  {
    slug: 'v2rayn-jichang',
    title: 'v2rayN机场推荐：Windows用户怎么选',
    description: 'Windows 使用 v2rayN 时怎么选机场？本文从订阅兼容、节点稳定性、线路类型和流量套餐出发，整理 v2rayN 用户挑选机场时值得关注的关键因素。',
    h1: 'v2rayN 机场推荐：Windows 用户怎么选择机场？',
    category: '网络指南',
    tags: ['v2rayN', 'Windows', '网络'],
    keyword: 'v2rayN机场推荐'
  },
  // 10
  {
    slug: 'no-expiry-jichang',
    title: '不限时机场推荐：按量计费与套餐怎么选 | RunAI',
    description: '不限时机场适合什么人？本文比较不限时流量包、按量计费与月付套餐的区别，并从有效期、流量消耗、线路稳定性、设备数量和长期成本出发，帮助低频用户判断哪种套餐更合适。',
    h1: '不限时机场推荐：按量计费和月付套餐怎么选？',
    category: '网络指南',
    tags: ['不限时机场推荐', '按量计费', '流量包'],
    keyword: '不限时机场推荐'
  }
];

function generatePageContent(a) {
  // Generate some unique H2s based on slug
  let sections = [];
  if (a.slug === 'chatgpt-jichang') {
    sections = [
      { id: 'need', title: 'AI 工具稳定使用真正需要看什么' },
      { id: 'region', title: '节点地区与官方服务范围' },
      { id: 'diff', title: '不同 AI 产品的政策差异' },
      { id: 'latency', title: '延迟与长连接的实际影响' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'jichang-recommendation-2026') {
    sections = [
      { id: 'metrics', title: '2026 选择机场先看哪 6 个指标' },
      { id: 'price', title: '价格不是第一指标' },
      { id: 'route', title: '线路怎么看（直连/中转/专线）' },
      { id: 'samples', title: '已验证品牌样本' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'stable-jichang') {
    sections = [
      { id: 'def', title: '稳定的定义' },
      { id: 'metrics', title: '延迟、丢包与速度峰值' },
      { id: 'night', title: '晚高峰怎么看' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'cheap-jichang') {
    sections = [
      { id: 'budget', title: '低预算用户的真实需求' },
      { id: 'calc', title: '月费与年付折算' },
      { id: 'limits', title: '设备限制与节点数' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'value-jichang') {
    sections = [
      { id: 'balance', title: '价格与质量的平衡' },
      { id: 'eval', title: '性价比评估表' },
      { id: 'scenario', title: '不同使用场景的取舍' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'clash-jichang') {
    sections = [
      { id: 'diff', title: 'Clash 客户端与机场的区别' },
      { id: 'sub', title: '订阅兼容与节点更新' },
      { id: 'clients', title: '当前活跃客户端差异' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'clash-verge-jichang') {
    sections = [
      { id: 'windows', title: 'Windows 下的 Clash Verge' },
      { id: 'sub', title: '订阅格式兼容性' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'shadowrocket-jichang') {
    sections = [
      { id: 'ios', title: 'iPhone/iOS 用户的首选' },
      { id: 'sub', title: '小火箭订阅怎么选' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'v2rayn-jichang') {
    sections = [
      { id: 'win', title: 'v2rayN 客户端简介' },
      { id: 'sub', title: '订阅与节点格式支持' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  } else if (a.slug === 'no-expiry-jichang') {
    sections = [
      { id: 'who', title: '按量计费适合什么人' },
      { id: 'diff', title: '不限时 ≠ 无限流量' },
      { id: 'cost', title: '长期成本比较' },
      { id: 'faq', title: '常见问题 FAQ' }
    ];
  }

  // Create FAQs
  let faqs = [
    { q: `${a.keyword}怎么选？`, a: `选择${a.keyword}时，首先要明确自己的实际需求（如流量、设备数、使用场景），然后结合公开的官方套餐、协议支持和线路稳定性来综合判断。不要只看表面宣传。` },
    { q: '速度越快越好吗？', a: '不一定。对于日常网页浏览和 AI 工具来说，稳定不丢包、晚高峰可用率高，比单纯的测速峰值更重要。' },
    { q: '有永久免费的吗？', a: '维护优质的网络线路需要巨大的带宽和服务器成本。如果遇到声称永久免费的服务，需警惕隐私泄露或暗藏限制，通常不适合作为主要生产力工具。' },
    { q: '如何判断线路质量？', a: '可以通过查看晚高峰时段的视频缓冲速度、网页打开延迟以及长连接（如 AI 对话）是否容易断开来评估。' },
    { q: '手机和电脑可以共用吗？', a: '绝大多数正规服务都支持多平台订阅，只要你的套餐设备数上限允许，就可以在手机和电脑上同时配置对应的客户端使用。' },
    { q: '什么是专线/中转？', a: '中转和专线是不同的数据跨境传输方式。专线通常指 IPLC/IEPL 等不过墙的物理或虚拟内网专线，延迟更低且晚高峰更稳定，但成本较高。' },
  ];

  return `import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: '${a.title}',
  description: '${a.description}',
  canonical: '/guides/${a.slug}'
});

export default function Page() {
  const tableOfContents = [
    ${sections.map(s => `{ id: '${s.id}', title: '${s.title}' }`).join(',\n    ')}
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      <ArticleStickyBar title="${a.keyword}" toc={tableOfContents} />
      
      <main className="flex-grow pb-24">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 pt-32 pb-4">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex items-center text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/guides" className="hover:text-gray-900 transition-colors">指南</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-gray-900 font-medium">${a.keyword}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              ${a.h1}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              ${a.description.replace('本文从', '在这篇文章中，我们将从')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-4xl mt-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 mb-12">
              <h3 className="text-brand-900 font-bold text-lg mb-3 mt-0">30 秒速读摘要</h3>
              <ul className="text-brand-800 text-sm space-y-2 m-0">
                <li>明确 <strong>${a.keyword}</strong> 的真实核心诉求，避免为了不存在的“完美”花冤枉钱。</li>
                <li>网络稳定性、晚高峰表现和客户端兼容性是影响体验的关键。</li>
                <li>对于特定应用场景，应结合官方资料进行针对性选择。</li>
              </ul>
            </div>

            ${sections.map(s => {
              if (s.id === 'faq') return ''; // rendered custom below
              return `
            <h2 id="${s.id}" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">${s.title}</h2>
            <p className="mb-6">
              在讨论 ${s.title} 时，最重要的是要基于真实的客观数据与日常使用体验。很多时候，表面的参数并不能完全反映晚高峰时段的真实连通率。
              我们建议结合具体场景（如 AI 工具对话、长连接等）来综合评估。
            </p>
            ${s.id === 'price' || s.id === 'cost' ? `
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-8">
              <h4 className="font-bold text-gray-900 mb-4 mt-0">成本计算参考</h4>
              <p className="text-sm text-gray-600 mb-0">
                无论是包月套餐还是按量计费，最终都应换算为“每 GB 成本”及“年化总支出”。例如，某些基础套餐（如清风套餐等）年付折算下来可能在十元左右，但实际购买时需确认是按年支付还是月付。
              </p>
            </div>
            ` : ''}
            ${s.id === 'samples' || s.id === 'eval' ? `
            <p className="mb-6">
              这里提供一个已验证的样本参考，数据基于公开服务资料及本站（RunAI）实测记录整理：
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm my-8">
              <h4 className="font-bold text-gray-900 mb-4 mt-0">参考品牌：微风网络 (Weifeng)</h4>
              <ul className="text-sm text-gray-600 space-y-2 m-0">
                <li><strong>状态：</strong>RunAI 当前有完整记录的样本。</li>
                <li><strong>套餐：</strong>包含信风（按量/不限时）等多种形式，满足低频或长期需求。</li>
                <li><strong>提示：</strong>更多服务将在获得真实测试资料后加入。</li>
              </ul>
            </div>
            <p className="text-xs text-gray-400"><em>商业披露：RunAI 与微风网络存在商业关联，相关页面包含推广内容。内容仍根据公开套餐信息、实际使用与测试结果整理。</em></p>
            ` : ''}
            `
            }).join('')}
            
            {/* CTA */}
            <div className="my-16 bg-gray-900 rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 mt-0">寻找更多合适的网络方案？</h3>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                查阅本站整理的完整网络工具推荐与选择指南，找到最适合你的工具环境。
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/vpn" className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand-500/30 flex items-center gap-2">
                  查看网络方案库 <ExternalLink className="w-4 h-4" />
                </Link>
                <Link href="/guides/jichang-recommendation-2026" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-xl transition-all">
                  阅读 2026 选购指南
                </Link>
              </div>
            </div>

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-16 mb-8 scroll-mt-24">常见问题 FAQ</h2>
            <div className="space-y-4 not-prose">
              ${faqs.map((f, i) => `
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:border-brand-200 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mb-2">${f.q}</h3>
                <p className="text-sm text-gray-600 m-0 leading-relaxed">${f.a}</p>
              </div>
              `).join('')}
            </div>

          </div>
        </div>
      </main>
      
      <FloatingBackButton fallbackPath="/guides" />
      <Footer />
    </div>
  );
}
`;
}

articles.forEach(a => {
  const dir = path.join('src', 'app', 'guides', a.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), generatePageContent(a));
});

console.log('Generated 10 articles!');
