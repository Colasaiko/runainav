import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import JsonLd from '@/components/seo/JsonLd';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle, ArrowRight, Check, Cpu, HelpCircle,
  Monitor, Server, Shield, Wifi, Zap,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Firefly怎么样？套餐价格、线路与使用建议｜RunAI',
  description: 'Firefly怎么样？RunAI整理套餐价格、150GB流量、IPLC专线、不限速与不限设备信息，并介绍AI、多设备和日常使用场景，帮助国内用户了解当前方案。',
  canonical: '/vpn/firefly',
});

export default function FireflyPage() {
  const sections = [
    { id: 'overview', navLabel: '参数速览' },
    { id: 'pricing', navLabel: '套餐' },
    { id: 'devices', navLabel: '多设备' },
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
          name: 'Firefly怎么样？套餐价格、线路与使用建议｜RunAI',
          description: 'Firefly怎么样？RunAI整理套餐价格、150GB流量、IPLC专线、不限速与不限设备信息，并介绍AI、多设备和日常使用场景，帮助国内用户了解当前方案。',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://runainav.com/' },
            { '@type': 'ListItem', position: 2, name: 'VPN', item: 'https://runainav.com/vpn' },
            { '@type': 'ListItem', position: 3, name: 'Firefly', item: 'https://runainav.com/vpn/firefly' },
          ],
        },
      ]} />
      <Header />
      <ArticleStickyBar sections={sections} />
      <FloatingBackButton fallbackHref="/vpn" />

      <main className="pb-20">

        {/* Hero */}
        <section className="bg-white border-b border-gray-200 pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center bg-white overflow-hidden shrink-0">
                  <Image
                    src="/images/vpn/Firefly.png"
                    alt="Firefly Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">Firefly怎么样？套餐、线路与使用建议</h1>
                  <p className="text-gray-600 text-lg mb-4">IPLC专线网络 · 不限速 · 不限设备数</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">¥25 起</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium"><Server className="w-4 h-4" /> 150GB</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100"><Check className="w-4 h-4" /> IPLC 专线</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100"><Wifi className="w-4 h-4" /> 不限速</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100"><Monitor className="w-4 h-4" /> 不限设备</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-3">
                <a
                  href="https://fly.fireflytttt.xyz/#/?code=mcYQUZxG"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-52 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往 Firefly 购买页面 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含 Firefly 推广链接，购买前建议以当前购买页面展示信息为准。</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-8 space-y-8">

          {/* 核心参数速览 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              核心参数速览
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: '起步价格', value: '¥25', sub: '以官网为准' },
                { label: '起步流量', value: '150GB', sub: '具体档位见官网' },
                { label: '线路类型', value: 'IPLC', sub: '专线网络' },
                { label: '设备限制', value: '不限设备', sub: '同时连接不受限' },
              ].map((card) => (
                <div key={card.label} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">{card.value}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">{card.label}</div>
                  <div className="text-xs text-gray-400">{card.sub}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              Firefly 是一款以 IPLC 专线为核心、主打不限速和不限设备数的跨境网络服务。其核心差异在于移除了大多数机场服务对同时在线设备数量的限制，让家庭或多设备场景下的用户无需担心额外配额问题。
            </p>
          </section>

          {/* 套餐价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-4 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 整理自 Firefly 公开资料。实际套餐以购买页面显示为准。
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
              <table className="w-full text-left border-collapse min-w-[520px]">
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
                    <td className="p-4 text-sm text-gray-500">IPLC 专线</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic">当前站内已确认起步方案为 ¥25 / 150GB，更多套餐以购买页面为准。</p>
          </section>

          {/* 不限速与多设备 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="devices">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">不限速与多设备使用</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Firefly 当前品牌资料明确标注 <strong>不限速</strong> 与 <strong>不限设备数</strong>，这在同价位 IPLC 专线品牌中并不多见。以下是这两个特性在实际场景中的意义：
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Wifi className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">不限速</h3>
                <p className="text-sm text-gray-600">不对单条连接带宽做主动限制，适合需要稳定大带宽的场景，如高清视频播放、远程协作与文件传输。</p>
                <p className="text-xs text-gray-400 mt-2">注：实际速度受本地网络运营商与服务器负载影响，官方承诺以购买页面说明为准。</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Monitor className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">不限设备数</h3>
                <p className="text-sm text-gray-600">一个账号可同时在多台设备上使用，适合电脑、手机、平板同时在线的用户，也适合家庭多人共享场景。</p>
                <p className="text-xs text-gray-400 mt-2">注：建议以购买页面当前描述为准，避免因规则更新产生误解。</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Cpu className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">AI 工具多端切换</h3>
                <p className="text-sm text-gray-600">同时在笔记本使用 ChatGPT、在手机访问 Claude，无需为设备数量担心，适合 AI 重度用户。</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Shield className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">办公多设备场景</h3>
                <p className="text-sm text-gray-600">一次购买覆盖多台工作设备，省去为每台设备单独购买或切换账号的麻烦，降低整体使用成本。</p>
              </div>
            </div>
          </section>

          {/* 线路与使用场景 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路与使用场景</h2>
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Firefly 采用 <strong>IPLC 专线网络</strong>，通过跨境专用传输通道连接国内外节点，有效规避高峰期的公网拥堵问题，在晚高峰等压力较大的时段理论上能维持更低的延迟和更稳定的连通性。
              </p>
              <p>
                RunAI 当前尚未发布 Firefly 的独立节点测速数据。我们不直接引用非经独立验证的公开测速截图，相关数据将在后续测试周期内补充。
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Cpu className="w-5 h-5 text-brand-500" />, title: 'AI 工具访问', desc: '适合 ChatGPT、Claude 等严格风控平台的稳定访问' },
                { icon: <Monitor className="w-5 h-5 text-brand-500" />, title: '日常网页浏览', desc: '低延迟专线带来更流畅的海外网页与搜索体验' },
                { icon: <Wifi className="w-5 h-5 text-brand-500" />, title: '远程办公协作', desc: '稳定带宽适合视频会议与云端文件同步场景' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI 使用参考 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 使用参考</h2>
              <Link href="/tests" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 bg-brand-50 px-3 py-1.5 rounded-full">
                查看 AI 实测中心 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                Firefly 在 RunAI 的品牌分类中属于 <strong>AI 使用场景</strong> 品牌，其 IPLC 专线与原生 IP 节点组合理论上能够满足 ChatGPT、Claude、Gemini 等主流 AI 平台对于网络质量的要求。
              </p>
              <p>
                目前 RunAI AI 实测中心尚未录入 Firefly 的独立连通性测试记录，后续将根据资源安排逐步补充相关数据，敬请关注。
              </p>
            </div>
            <div className="mt-5 flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">即使是 IPLC 专线，AI 平台的封控策略也可能随时调整。遇到访问受限时，建议尝试切换节点地区（如从美国切换至日本或欧洲节点）。</p>
            </div>
          </section>

          {/* 适合哪些用户 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="suitable">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">哪些用户适合 Firefly？</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Monitor className="w-5 h-5 text-gray-700" />,
                  title: '多设备同时在线用户',
                  desc: '家庭多台设备、或工作中同时使用手机和电脑，不想被设备数量限制困扰的用户。',
                },
                {
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  title: 'AI 工具重度用户',
                  desc: '每天频繁使用 ChatGPT、Claude 等工具，对网络断连或封号风险零容忍的用户。',
                },
                {
                  icon: <Shield className="w-5 h-5 text-gray-700" />,
                  title: '远程办公与协作',
                  desc: '需要长期稳定访问 Google Workspace、Notion、Slack 等海外协作工具的商务用户。',
                },
                {
                  icon: <Wifi className="w-5 h-5 text-gray-700" />,
                  title: '追求不限速体验',
                  desc: '对带宽有一定要求，不希望因为人工限速影响使用体验的进阶用户。',
                },
              ].map((card) => (
                <div key={card.title} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">{card.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-xs text-gray-500">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 购买前确认 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="notice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">购买前请确认</h2>
            <ul className="space-y-4">
              {[
                { title: '套餐价格与流量', desc: '实际价格和流量配额可能随官方活动调整，请以购买页面最新显示为准。' },
                { title: '付款周期与流量重置', desc: '月付、季付或年付周期及每月流量重置规则，请在购买前于官网核实。' },
                { title: '不限设备的具体规则', desc: '不限设备数的具体定义（如是否支持路由器或多账户共用）请以官方说明为准。' },
                { title: '节点覆盖与地区差异', desc: '专线从本地接入到服务器这段仍受本地宽带运营商影响，不同城市体验可能存在差异。' },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-gray-100 p-1.5 rounded-full shrink-0">
                    <AlertTriangle className="w-4 h-4 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-700"><strong>{item.title}：</strong>{item.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 (FAQ)</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Firefly 最低多少钱？',
                  a: '根据当前记录，Firefly 起步套餐为 ¥25，具体价格以官网购买页为准。',
                },
                {
                  q: 'Firefly 有多少流量？',
                  a: '基础套餐起步流量为 150GB，是否提供更多档位请前往官网查看。',
                },
                {
                  q: 'Firefly 使用什么线路？',
                  a: 'Firefly 采用全 IPLC 专线网络，主打跨境专线传输，相比公网中转理论上有更低延迟。',
                },
                {
                  q: 'Firefly 限速吗？',
                  a: '根据当前品牌资料，Firefly 标注不限速。具体带宽上限以购买页面描述为准。',
                },
                {
                  q: 'Firefly 限制设备数量吗？',
                  a: '根据当前品牌资料，Firefly 标注不限设备数，可同时在多台设备上使用同一账号。',
                },
                {
                  q: 'Firefly 适合 AI 使用吗？',
                  a: 'Firefly 属于 RunAI 分类中的 AI 使用场景品牌，其专线架构理论上较好地支持 ChatGPT、Claude 等平台的访问需求。目前 RunAI 尚未发布 Firefly 独立 AI 实测记录，后续将逐步补充。',
                },
              ].map((faq, idx) => (
                <div key={idx}>
                  {idx > 0 && <div className="bg-gray-50 h-px w-full mb-6" />}
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 text-sm ml-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-brand-50 rounded-2xl p-10 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验 Firefly？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              建议初次购买选择短期套餐，实测本地体验后再决定长期续费计划。
            </p>
            <a
              href="https://fly.fireflytttt.xyz/#/?code=mcYQUZxG"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-brand-500/30 text-lg"
            >
              前往 Firefly 官网选购 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
