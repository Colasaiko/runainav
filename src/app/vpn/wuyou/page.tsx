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
  title: '无忧怎么样？套餐价格、线路与使用建议｜RunAI',
  description: '无忧怎么样？RunAI整理套餐价格、100GB流量、IPLC专线、AI与影音使用场景，并说明流量周期、设备支持与购买注意事项，帮助国内用户选择合适方案。',
  canonical: '/vpn/wuyou',
});

export default function WuyouPage() {
  const sections = [
    { id: 'overview', navLabel: '关键参数' },
    { id: 'pricing', navLabel: '套餐价格' },
    { id: 'traffic', navLabel: '流量说明' },
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
          name: '无忧怎么样？套餐价格、线路与使用建议｜RunAI',
          description: '无忧怎么样？RunAI整理套餐价格、100GB流量、IPLC专线、AI与影音使用场景，并说明流量周期、设备支持与购买注意事项，帮助国内用户选择合适方案。',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: '首页', item: 'https://runainav.com/' },
            { '@type': 'ListItem', position: 2, name: 'VPN', item: 'https://runainav.com/vpn' },
            { '@type': 'ListItem', position: 3, name: '无忧', item: 'https://runainav.com/vpn/wuyou' },
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
                    src="/images/vpn/无忧.png"
                    alt="无忧 Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">无忧怎么样？套餐、线路与使用建议</h1>
                  <p className="text-gray-600 text-lg mb-4">全IPLC专线，稳定支持全球AI与4K流媒体</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Tag className="w-4 h-4" /> ¥19 起步
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Server className="w-4 h-4" /> 100GB
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
                  href="https://wep01.worryfreeaff.com/#/?code=ydtFVWqU"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-52 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往无忧购买页面 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含无忧推广链接，购买前建议以当前购买页面展示信息为准。</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-8 space-y-8">

          {/* 关键参数 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              关键参数
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: '起步价格', value: '¥19', sub: '以官网为准' },
                { label: '起步流量', value: '100GB', sub: '具体档位见官网' },
                { label: '线路类型', value: 'IPLC', sub: '专线网络' },
                { label: '适用场景', value: 'AI · 影音', sub: '日常多场景' },
              ].map((card) => (
                <div key={card.label} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">{card.value}</div>
                  <div className="text-xs font-semibold text-gray-700 mb-1">{card.label}</div>
                  <div className="text-xs text-gray-400">{card.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              无忧 是一款主打 IPLC 专线的跨境网络服务，以 ¥19 的起步价格和 100GB 的基础流量在同类品牌中定位相对亲民，适合对网络质量有基本要求、同时注重性价比的日常用户。
            </p>
          </section>

          {/* 套餐价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-4 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据无忧公开资料整理。实际套餐以购买页面显示为准。
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
                    <td className="p-4 font-medium text-gray-900">基础套餐</td>
                    <td className="p-4 text-gray-600">100GB</td>
                    <td className="p-4 font-bold text-brand-600">¥19</td>
                    <td className="p-4 text-sm text-gray-500">IPLC 专线</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic">当前站内已确认起步方案为 ¥19 / 100GB，更多套餐以购买页面为准。</p>
          </section>

          {/* 100GB 流量说明 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="traffic">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">100GB 适合什么使用量？</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              无忧的基础套餐为 100GB 月流量，对于大多数日常用户来说已能覆盖常规需求。以下是几种常见场景的参考估算：
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  icon: <Cpu className="w-5 h-5 text-brand-500" />,
                  title: 'AI 工具日常使用',
                  desc: '文字对话类 AI（ChatGPT、Claude 等）每次请求流量极小，100GB 通常可支撑数月高频使用。',
                },
                {
                  icon: <Monitor className="w-5 h-5 text-brand-500" />,
                  title: '网页浏览与办公',
                  desc: '日常网页访问、Google 搜索、邮件收发，100GB 对大多数办公用户绰绰有余。',
                },
                {
                  icon: <PlayCircle className="w-5 h-5 text-brand-500" />,
                  title: '流媒体视频',
                  desc: '1080p 视频约 3GB/小时，100GB 可支持约 33 小时观看，需要每天长时间追剧的用户可考虑更大流量档。',
                },
                {
                  icon: <Shield className="w-5 h-5 text-brand-500" />,
                  title: '多设备轻量使用',
                  desc: '如果多台设备以网页与 AI 使用为主，100GB 通常足以支撑全家轻量日常需求。',
                },
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
            <div className="flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <p>如需观看大量 4K 视频或进行大文件传输，建议在购买前确认官网是否提供更大流量档位。</p>
            </div>
          </section>

          {/* 线路与使用场景 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">IPLC 线路与日常场景</h2>
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed space-y-4 mb-6">
              <p>
                无忧采用全 <strong>IPLC 专线网络</strong>，通过跨境专用通道传输数据，有效降低晚高峰期间公网拥堵的影响，适合对网络质量有一定要求的用户。
              </p>
              <p>
                RunAI 目前尚未发布无忧的独立节点测速报告，相关数据将在后续资源条件允许时补充。
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: <Cpu className="w-5 h-5 text-brand-500" />, title: 'AI 工具访问', desc: '专线连接对 ChatGPT、Claude 等 AI 平台的网络风控有更好的应对能力' },
                { icon: <PlayCircle className="w-5 h-5 text-brand-500" />, title: '影音播放', desc: '相较公网中转，IPLC 专线在晚高峰时期理论上提供更稳定的视频流播放体验' },
                { icon: <Monitor className="w-5 h-5 text-brand-500" />, title: '日常浏览与办公', desc: '低延迟专线适合 Google 搜索、邮件收发与海外 SaaS 工具的日常使用' },
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
                无忧在 RunAI 的品牌分类中属于 <strong>AI 使用场景</strong> 品牌，其 IPLC 专线配置理论上能够满足 ChatGPT、Claude、Gemini 等平台对网络质量的基本要求。
              </p>
              <p>
                目前 RunAI AI 实测中心尚未录入无忧的独立连通性测试记录，后续将根据资源安排逐步补充相关数据。
              </p>
            </div>
            <div className="mt-5 flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-100">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">AI 平台的封控策略会随时调整。遇到访问受限时，建议切换到其他地区节点（如从美国切换至日本或新加坡）。</p>
            </div>
          </section>

          {/* 适合哪些用户 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="suitable">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">无忧适合哪些用户？</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Tag className="w-5 h-5 text-gray-700" />,
                  title: '预算敏感的入门用户',
                  desc: '¥19 起步价格是同类 IPLC 品牌中较为亲民的选择，适合初次尝试高质量专线的新用户。',
                },
                {
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  title: 'AI 日常使用者',
                  desc: '以文字对话为主的 AI 工具用户，100GB 通常足够覆盖一整月的高频使用。',
                },
                {
                  icon: <PlayCircle className="w-5 h-5 text-gray-700" />,
                  title: '轻量影音爱好者',
                  desc: '偶尔观看海外流媒体内容，不需要每天长时间 4K 高清播放的用户。',
                },
                {
                  icon: <Monitor className="w-5 h-5 text-gray-700" />,
                  title: '个人日常跨境需求',
                  desc: '日常需要访问 Google、Gmail 或海外 SaaS 服务的个人用户。',
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

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 (FAQ)</h2>
            <div className="space-y-6">
              {[
                { q: '无忧最低多少钱？', a: '根据当前记录，无忧起步套餐为 ¥19，在同类 IPLC 品牌中属于较低门槛，具体价格以官网为准。' },
                { q: '无忧有多少流量？', a: '基础套餐起步流量为 100GB，是否提供更大流量档位请前往官网查看。' },
                { q: '无忧使用什么线路？', a: '无忧采用全 IPLC 专线网络，主打跨境专线传输，相比公网中转理论上拥有更低延迟和更高稳定性。' },
                { q: '100GB 适合哪些用户？', a: '100GB 适合以 AI 文字对话、网页浏览和轻量办公为主的用户。频繁观看 4K 视频的用户建议确认是否有更大流量套餐。' },
                { q: '无忧适合 AI 使用吗？', a: '无忧属于 RunAI 分类中的 AI 使用场景品牌，IPLC 专线理论上能较好支持主流 AI 工具访问。目前 RunAI 尚未发布无忧独立 AI 实测记录。' },
                { q: '无忧适合影音使用吗？', a: '无忧标注支持 4K 流媒体，基础 100GB 可支撑约 33 小时 1080p 视频。如需长期高清追剧建议核实官网是否提供大流量套餐。' },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验无忧？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              ¥19 起步，IPLC 专线，适合初次尝试优质网络服务的用户。
            </p>
            <a
              href="https://wep01.worryfreeaff.com/#/?code=ydtFVWqU"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-brand-500/30 text-lg"
            >
              前往无忧官网选购 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
