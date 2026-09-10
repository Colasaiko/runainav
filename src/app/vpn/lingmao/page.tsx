import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap, Check, AlertTriangle, Shield, PlayCircle, ArrowRight,
  HelpCircle, Server, Cpu, Monitor, Tag,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: '灵猫怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '灵猫怎么样？RunAI整理套餐价格、流量档位、IPLC线路、设备支持和购买建议，并介绍AI、影音与日常使用场景，帮助国内用户了解当前方案并选择合适套餐。',
  canonical: '/vpn/lingmao',
});

export default function LingmaoPage() {
  const sections = [
    { id: 'overview', navLabel: '速读' },
    { id: 'pricing', navLabel: '套餐价格' },
    { id: 'network', navLabel: '线路' },
    { id: 'ai-test', navLabel: 'AI使用' },
    { id: 'suitable', navLabel: '适合谁' },
    { id: 'faq', navLabel: 'FAQ' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '灵猫怎么样？套餐价格、线路与购买建议｜RunAI',
          description: '灵猫怎么样？RunAI整理套餐价格、流量档位、IPLC线路、设备支持和购买建议，并介绍AI、影音与日常使用场景，帮助国内用户了解当前方案并选择合适套餐。',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://runainav.com/' },
            { '@type': 'ListItem', position: 2, name: 'VPN', item: 'https://runainav.com/vpn' },
            { '@type': 'ListItem', position: 3, name: '灵猫', item: 'https://runainav.com/vpn/lingmao' },
          ],
        },
      ]} />
      <Header />
      <ArticleStickyBar sections={sections} />
      <FloatingBackButton fallbackHref="/vpn" />

      <main className="pb-20">

        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center bg-white overflow-hidden shrink-0">
                  <Image
                    src="/images/vpn/灵猫.png"
                    alt="灵猫 Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">灵猫怎么样？套餐、线路与使用建议</h1>
                  <p className="text-gray-600 text-lg mb-4">全IPLC专线，不限客户端，解锁流媒体与AI应用</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Tag className="w-4 h-4" /> ¥25 起步
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Server className="w-4 h-4" /> 150GB 流量
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                      <Check className="w-4 h-4" /> IPLC 专线
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      AI · 影音
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-col gap-3">
                <a
                  href="https://edp01.civetaff.com/#/?code=2Ai6V6Ub"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-52 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往灵猫购买页面 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含灵猫推广链接，购买前建议以当前套餐页面显示信息为准。</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-8 space-y-8">

          {/* 30秒速读 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              30秒速读
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">核心信息</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步价格：¥25</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步流量：150GB</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 线路类型：IPLC 专线</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 不限制使用客户端</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">注意事项</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 价格可能随官方调整变动</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 建议先月付测试再长期续费</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 本站暂未录入完整 AI 实测数据</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              灵猫 是一款主打全 IPLC 专线的高端跨境网络服务，不限制客户端使用，支持解锁流媒体与 AI 应用。其专线架构在理论上能提供较低延迟和更稳定的连接体验，适合对网络质量有一定要求的用户。
            </p>
          </section>

          {/* 套餐价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-6 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据灵猫官方页面核实。实际价格可能因官方活动调整，请以最终官网显示为准。
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-semibold text-gray-900">套餐</th>
                    <th className="p-4 font-semibold text-gray-900">流量</th>
                    <th className="p-4 font-semibold text-gray-900">起步价格</th>
                    <th className="p-4 font-semibold text-gray-900">线路</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">标准套餐</td>
                    <td className="p-4 text-gray-600">150GB</td>
                    <td className="p-4 font-bold text-brand-600">¥25</td>
                    <td className="p-4 text-sm text-gray-500">IPLC 专线，原生 IP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <p>灵猫官方可能还提供其他流量档位或长期套餐，具体请前往购买页面确认。</p>
            </div>
          </section>

          {/* 线路与使用场景 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路与使用场景</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Server className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">全 IPLC 专线</h3>
                <p className="text-sm text-gray-600">
                  灵猫采用跨境专线传输，有效规避高峰拥堵和公网限速问题，为用户提供更低延迟、更稳定的连接体验。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Shield className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">不限客户端</h3>
                <p className="text-sm text-gray-600">
                  灵猫不限制使用的客户端软件，Clash、Shadowrocket、QuantumultX 等主流客户端均可直接配置使用。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <PlayCircle className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">流媒体解锁</h3>
                <p className="text-sm text-gray-600">
                  专线节点配备的原生 IP 资源，能够更好地支持 Netflix、YouTube 等主流流媒体平台的内容解锁需求。
                </p>
              </div>
            </div>
          </section>

          {/* AI 使用参考 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 使用参考</h2>
              <Link href="/tests" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 bg-brand-50 px-3 py-1.5 rounded-full">
                前往 AI 实测中心 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed space-y-4">
              <p>
                灵猫在 RunAI 的品牌定位中明确包含 <strong>AI 工具日常使用</strong> 场景。其全 IPLC 专线配合原生 IP 节点，理论上能较好地满足 ChatGPT、Claude、Gemini 等严格网络风控平台的访问需求。
              </p>
              <p>
                目前 RunAI AI 实测中心尚未录入灵猫的持续连通性实测数据。我们将根据资源情况在后续测试周期中逐步补充灵猫相关记录。
              </p>
              <div className="mt-2 bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                <Cpu className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 m-0">网络提示</h3>
                  <p className="text-sm text-gray-600 m-0">
                    AI 平台的网络封控策略会随时变化。如某节点出现访问受限，可尝试切换到其他地区节点（如从美国切至日本或新加坡）来规避临时封锁。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 适合哪些用户 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="suitable">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">灵猫适合哪些用户？</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Cpu className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">AI 日常重度用户</h3>
                  <p className="text-xs text-gray-500">频繁使用 ChatGPT、Claude 等工具进行创作或开发，要求稳定连接的用户。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <PlayCircle className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">影音流媒体爱好者</h3>
                  <p className="text-xs text-gray-500">需要流畅观看 4K 视频、解锁特定地区影视内容的用户。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Monitor className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">多客户端用户</h3>
                  <p className="text-xs text-gray-500">需要在手机、平板和电脑上同时使用不同客户端，不希望受到客户端限制的用户。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Shield className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">追求稳定质量的用户</h3>
                  <p className="text-xs text-gray-500">预算中等，希望在晚高峰依然保持低延迟体验，愿意为专线品质付费的用户。</p>
                </div>
              </div>
            </div>
          </section>

          {/* 购买前注意事项 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="notice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">购买前注意事项</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-gray-100 p-1.5 rounded-full shrink-0">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>价格与流量可能变动：</strong>请以访问官网时实际显示的套餐金额和流量配额为准。</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-gray-100 p-1.5 rounded-full shrink-0">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>建议先短期试用：</strong>初次购买建议选择月付周期，实测本地网络与体验后再考虑长期续费。</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-gray-100 p-1.5 rounded-full shrink-0">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>节点体验因地区而异：</strong>专线网络从本地到接入点的体验受宽带运营商影响，不同城市可能存在差异。</p>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  灵猫最低多少钱？
                </h3>
                <p className="text-gray-600 text-sm ml-7">根据当前记录，灵猫起步套餐为 ¥25。</p>
              </div>
              <div className="bg-gray-50 h-px w-full" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  灵猫起步流量多少？
                </h3>
                <p className="text-gray-600 text-sm ml-7">基础套餐起步流量约为 150GB，更多档位可前往官网查看。</p>
              </div>
              <div className="bg-gray-50 h-px w-full" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  灵猫使用什么线路？
                </h3>
                <p className="text-gray-600 text-sm ml-7">灵猫采用全 IPLC 专线架构，并配备原生 IP 节点，主打低延迟和高稳定性。</p>
              </div>
              <div className="bg-gray-50 h-px w-full" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  灵猫适合 AI 使用吗？
                </h3>
                <p className="text-gray-600 text-sm ml-7">灵猫的专线架构与原生 IP 组合能较好地应对 ChatGPT、Claude 等 AI 平台的网络风控，实测数据后续将在 RunAI 实测中心补充。</p>
              </div>
              <div className="bg-gray-50 h-px w-full" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  灵猫适合哪些用户？
                </h3>
                <p className="text-gray-600 text-sm ml-7">适合高频使用 AI 工具、有影音解锁需求，或希望在多设备上灵活使用不同客户端的用户。</p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-brand-50 rounded-2xl p-10 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验灵猫？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              建议根据您的实际流量需求选择对应套餐，初次使用可优先考虑短期方案。
            </p>
            <a
              href="https://edp01.civetaff.com/#/?code=2Ai6V6Ub"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-brand-500/30 text-lg"
            >
              前往灵猫官网选购 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
