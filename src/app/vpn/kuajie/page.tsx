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
  Monitor, PlayCircle, Server, Shield, Tag, Zap,
} from 'lucide-react';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: '跨界云怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '跨界云怎么样？RunAI整理套餐价格、120GB流量、IPLC线路、不限设备和AI、影音使用场景，并说明套餐周期与购买注意事项，帮助国内用户了解当前方案。',
  canonical: '/vpn/kuajie',
});

export default function KuajiePage() {
  const sections = [
    { id: 'overview', navLabel: '核心参数' },
    { id: 'pricing', navLabel: '套餐价格' },
    { id: 'devices', navLabel: '不限设备' },
    { id: 'network', navLabel: '线路与场景' },
    { id: 'ai-test', navLabel: 'AI使用参考' },
    { id: 'suitable', navLabel: '适合谁' },
    { id: 'faq', navLabel: 'FAQ' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <JsonLd data={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '跨界云怎么样？套餐价格、线路与购买建议｜RunAI',
          description: '跨界云怎么样？RunAI整理套餐价格、120GB流量、IPLC线路、不限设备和AI、影音使用场景，并说明套餐周期与购买注意事项，帮助国内用户了解当前方案。',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://runainav.com/' },
            { '@type': 'ListItem', position: 2, name: 'VPN', item: 'https://runainav.com/vpn' },
            { '@type': 'ListItem', position: 3, name: '跨界云', item: 'https://runainav.com/vpn/kuajie' },
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
                    src="/images/vpn/跨界.png"
                    alt="跨界云 Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">跨界云怎么样？套餐、线路与购买建议</h1>
                  <p className="text-gray-600 text-lg mb-4">IPLC高端线路，全解锁流媒体，支持AI应用，不限设备数</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Tag className="w-4 h-4" /> ¥20 起步
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Server className="w-4 h-4" /> 120GB
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                      <Check className="w-4 h-4" /> IPLC 线路
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                      <Monitor className="w-4 h-4" /> 不限设备
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col gap-3">
                <a
                  href="https://vip02.kuajieaff.com/#/?code=HRzqSLrR"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-52 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往跨界云购买页面 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含跨界云推广链接，购买前建议以当前页面展示信息为准。</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-8 space-y-8">

          {/* 核心参数 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              核心参数
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: '起步价格', value: '¥20', sub: '官网核实' },
                { label: '基础流量', value: '120GB', sub: '入门方案' },
                { label: '线路类型', value: 'IPLC', sub: '专线网络' },
                { label: '设备连接', value: '不限设备', sub: '支持多端' },
              ].map((card) => (
                <div key={card.label} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">{card.value}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">{card.label}</div>
                  <div className="text-xs text-gray-400">{card.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              跨界云 是一款提供 IPLC 高端线路的跨境网络服务，其突出特点是在提供专线品质和 AI、影音全解锁的同时，不限制同时在线使用的设备数量，非常适合多设备或家庭共享场景。
            </p>
          </section>

          {/* 套餐价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-4 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据跨界云资料核实。实际价格与详细套餐可能随官方活动变化，请以最终官网显示为准。
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
                    <td className="p-4 font-medium text-gray-900">入门套餐</td>
                    <td className="p-4 text-gray-600">120GB</td>
                    <td className="p-4 font-bold text-brand-600">¥20</td>
                    <td className="p-4 text-sm text-gray-500">IPLC 线路</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic">当前站内已确认起步方案为 ¥20 / 120GB，更多大流量及长周期套餐以购买页面为准。</p>
          </section>

          {/* 不限设备使用 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="devices">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">不限设备数支持</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              跨界云的 <strong>不限设备数</strong> 政策为其在众多 IPLC 品牌中增加了极大的使用便利性，主要体现在：
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Monitor className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">个人多设备无缝切换</h3>
                <p className="text-sm text-gray-600">无论是手机、平板还是办公电脑，可全部配置并同时连接，无需担心触发设备上限而被强制挤下线或封号。</p>
              </div>
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <Shield className="w-7 h-7 text-brand-500 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">团队与家庭共享</h3>
                <p className="text-sm text-gray-600">配合路由器部署或分发订阅给家庭成员，一份套餐全家共用，极大地提升了套餐流量的利用率和性价比。</p>
              </div>
            </div>
          </section>

          {/* 线路与场景 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路与日常场景</h2>
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed space-y-4 mb-6">
              <p>
                跨界云配置了 <strong>IPLC 高端线路</strong>。作为跨境专线，IPLC 能够有效绕过公网高峰期拥堵，在晚间网络压力较大时理论上仍能提供较低的延迟。
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Cpu className="w-5 h-5 text-brand-500" />, title: 'AI 开发与应用', desc: '低延迟线路非常适合频繁调用 AI API 或进行对话交互的开发者与重度用户。' },
                { icon: <PlayCircle className="w-5 h-5 text-brand-500" />, title: '流媒体全解锁', desc: '节点针对流媒体进行了解锁优化，支持 Netflix、Disney+ 等主流平台的顺畅访问。' },
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
                跨界云在当前分类中属于 <strong>AI 使用场景</strong> 品牌。其 IPLC 专线能够满足包括 ChatGPT、Claude、Gemini 等平台在内的日常使用，有助于规避常见的网络封控导致的无法登录或断连问题。
              </p>
              <p>
                目前 RunAI 尚未发布跨界云的独立 AI 实测记录。后续如果有完整的连通性与节点测试，我们将第一时间更新至实测中心。
              </p>
            </div>
          </section>

          {/* 适合什么用户 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="suitable">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">跨界云适合哪些用户？</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Monitor className="w-5 h-5 text-gray-700" />,
                  title: '多设备刚需用户',
                  desc: '拥有多台手机、电脑，或需要在软路由上部署全屋网络的用户。',
                },
                {
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  title: 'AI 工具日常依赖者',
                  desc: '工作和学习中离不开 ChatGPT、Claude，对连接稳定性要求较高的用户。',
                },
                {
                  icon: <PlayCircle className="w-5 h-5 text-gray-700" />,
                  title: '流媒体重度观众',
                  desc: '需要解锁各地区 Netflix、Disney+ 库，希望在晚高峰也能流畅追剧的用户。',
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
                { title: '套餐与价格', desc: '实际价格与包含的流量请以购买跳转页为准。' },
                { title: '设备规则', desc: '不限设备通常指合理自用范围，请留意官方是否有针对恶意分享或商用的相关限制条款。' },
                { title: '本地网络影响', desc: '即便使用专线，从您的设备到专线入口段依然依赖本地宽带质量，建议先购买月付测试。' },
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
                { q: '跨界云最低多少钱？', a: '当前核实跨界云的入门套餐价格为 ¥20，请前往官网确认最新价格。' },
                { q: '跨界云有多少流量？', a: '基础套餐流量为 120GB，能满足常规的 AI 对话与网页浏览需求。' },
                { q: '跨界云使用什么线路？', a: '跨界云采用 IPLC 高端专线网络，相较普通公网线路，其在延迟和稳定性上有优势。' },
                { q: '跨界云限制设备数量吗？', a: '品牌官方资料显示，跨界云不限制同时在线的设备数量，适合多设备用户。' },
                { q: '跨界云适合 AI 使用吗？', a: '跨界云属于 AI 使用场景品牌，IPLC 线路可以应对绝大部分 AI 平台的网络要求。目前 RunAI 尚未发布其独立实测记录。' },
                { q: '跨界云适合影音场景吗？', a: '跨界云支持全解锁流媒体，且 IPLC 线路有助于在晚高峰流畅播放高清视频，适合影音爱好者。' },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验跨界云？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              ¥20 起步体验 IPLC 线路，全平台多设备无缝连接。
            </p>
            <a
              href="https://vip02.kuajieaff.com/#/?code=HRzqSLrR"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-brand-500/30 text-lg"
            >
              前往跨界云官网选购 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
