import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Check, AlertTriangle, Shield, PlayCircle, ArrowRight, HelpCircle, Server, Cpu, Monitor, Tag } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: '闪跃怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '闪跃怎么样？RunAI整理套餐价格、流量档位、IPLC线路、设备支持与购买建议，并说明AI与日常使用时需要关注的套餐周期、流量和服务信息，方便国内用户选择。',
  canonical: '/vpn/shanyue',
});

export default function ShanyuePage() {
  const sections = [
    { id: "overview", navLabel: "速读" },
    { id: "pricing", navLabel: "套餐价格" },
    { id: "network", navLabel: "线路" },
    { id: "ai-test", navLabel: "AI使用" },
    { id: "suitable", navLabel: "适合谁" },
    { id: "faq", navLabel: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "闪跃怎么样？套餐、线路与购买建议",
        "description": "闪跃怎么样？RunAI整理套餐价格、流量档位、IPLC线路、设备支持与购买建议，并说明AI与日常使用时需要关注的套餐周期、流量和服务信息，方便国内用户选择。"
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "首页",
            "item": "https://runainav.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "VPN",
            "item": "https://runainav.com/vpn"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "闪跃",
            "item": "https://runainav.com/vpn/shanyue"
          }
        ]
      }} />
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
                  <div className="text-3xl font-bold text-gray-900 bg-gray-50 w-full h-full flex items-center justify-center">闪</div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">闪跃怎么样？套餐、线路与购买建议</h1>
                  <p className="text-gray-600 text-lg mb-4">全IPLC专线网络，原生IP解锁流媒体与AI应用</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Tag className="w-4 h-4" /> ¥24 起步
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-sm font-medium">
                      <Server className="w-4 h-4" /> 150GB 流量
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-100">
                      <Check className="w-4 h-4" /> IPLC 专线
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-3">
                <a 
                  href="https://wep01.flashleapaff.com/#/?code=hCwClNUi"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-48 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往闪跃官网 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含闪跃推广链接，购买前建议以当前套餐页面显示信息为准。</p>
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
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步价格：¥24</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步流量：150GB</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 线路类型：IPLC 专线</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">适用场景</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 适合 AI 工具日常使用</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 适合影音流媒体解锁</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 适合多设备与日常办公</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              闪跃 是一款主打 IPLC 专线的高端跨境网络服务。其主要优势在于提供稳定且低延迟的专线连接，并且配备了原生 IP 以更好地支持解锁各大流媒体和 AI 平台。
            </p>
          </section>

          {/* 套餐与价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-6 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据闪跃官方页面核实。实际价格可能会因官方活动或策略调整而变动，请以最终官网显示为准。
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 font-semibold text-gray-900">套餐名称</th>
                    <th className="p-4 font-semibold text-gray-900">流量/周期</th>
                    <th className="p-4 font-semibold text-gray-900">起步价格</th>
                    <th className="p-4 font-semibold text-gray-900">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">标准套餐</td>
                    <td className="p-4 text-gray-600">150GB</td>
                    <td className="p-4 font-bold text-brand-600">¥24</td>
                    <td className="p-4 text-sm text-gray-500">IPLC 专线网络，原生 IP</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <p>官方可能还提供更多高级档位与大流量套餐，具体可前往闪跃购买页面确认。</p>
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
                  采用跨境专线传输，不受常规公网拥堵和屏蔽策略影响，确保晚高峰期间仍然拥有低延迟和高稳定性。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Shield className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">原生 IP 解锁</h3>
                <p className="text-sm text-gray-600">
                  配备优质的原生 IP 资源，降低在访问严格风控网站（如流媒体和特定 AI 平台）时的封控风险。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <PlayCircle className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">影音多端使用</h3>
                <p className="text-sm text-gray-600">
                  适合高带宽需求的场景，支持在各种主流客户端（Clash, Shadowrocket 等）上配置和使用。
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
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed">
              <p>
                闪跃在本站的定位中明确包含了 <strong>AI 工具日常使用</strong> 场景。其 IPLC 专线加上原生 IP 配置，理论上能够较好地应对 ChatGPT、Claude 等海外 AI 平台对网络环境的严格检测。
              </p>
              <p>
                由于目前 RunAI 的 AI 实测中心主要依靠人工抽样测试，暂未录入闪跃的持续连通性实测数据。未来我们将根据资源情况陆续补充相关记录。
              </p>
              <div className="mt-6 bg-gray-50 p-5 rounded-xl border border-gray-100 flex items-start gap-4">
                <Cpu className="w-6 h-6 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 m-0">关于 AI 网络环境提示</h3>
                  <p className="text-sm text-gray-600 m-0">
                    即使是优质专线，AI 官方的封控策略也可能随时变化。如果在某个节点遇到访问受限，建议尝试切换不同国家和地区的节点（如从美国切换至日本或新加坡）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 适合什么用户 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="suitable">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">闪跃适合哪些用户？</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Cpu className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">AI 重度用户</h3>
                  <p className="text-xs text-gray-500">依赖稳定网络进行代码开发、高频对话生成，对断线和封号零容忍的用户。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <PlayCircle className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">影音流媒体爱好者</h3>
                  <p className="text-xs text-gray-500">需要观看 4K 高清视频、解锁特定地区流媒体版权库的用户。</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Monitor className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">日常办公与科研</h3>
                  <p className="text-xs text-gray-500">需要长期稳定访问海外文献库、Google 服务，无法接受经常网络波动的场景。</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
                  <Shield className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">追求高质量网络者</h3>
                  <p className="text-xs text-gray-500">预算较为充足，愿意为晚高峰稳定性和低延迟体验买单的用户。</p>
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
                <p className="text-sm text-gray-700"><strong>合理选择周期：</strong>由于跨境网络行业的特殊性，初次购买建议先尝试月付或季付，验证本地网络环境的真实体验后再考虑长期续费。</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 bg-gray-100 p-1.5 rounded-full shrink-0">
                  <AlertTriangle className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm text-gray-700"><strong>节点体验差异：</strong>专线网络虽好，但从用户本地到国内接入点的这一段仍然取决于您的本地宽带运营商，不同地区可能会有微小差异。</p>
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
                  闪跃最低多少钱？
                </h3>
                <p className="text-gray-600 text-sm ml-7">根据当前记录，闪跃起步套餐为 ¥24。</p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  闪跃有多少流量？
                </h3>
                <p className="text-gray-600 text-sm ml-7">基础套餐通常提供约 150GB 流量，更多大流量套餐可前往官网查看。</p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  闪跃使用什么线路？
                </h3>
                <p className="text-gray-600 text-sm ml-7">闪跃主要采用全 IPLC 专线，并配备原生 IP 节点，主打低延迟和高流媒体解锁率。</p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  闪跃适合 AI 使用吗？
                </h3>
                <p className="text-gray-600 text-sm ml-7">适合。由于使用了优质专线和原生 IP，它能较好地满足 ChatGPT、Claude 等严格风控工具的日常访问需求。</p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  闪跃适合哪些用户？
                </h3>
                <p className="text-gray-600 text-sm ml-7">适合对网络质量要求较高、需要频繁使用 AI 服务、观看海外流媒体或进行远程办公的高阶用户。</p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-brand-50 rounded-2xl p-10 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验闪跃？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              建议根据您的实际流量需求选择对应的套餐。
            </p>
            <a
              href="https://wep01.flashleapaff.com/#/?code=hCwClNUi"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-brand-500/30 text-lg"
            >
              前往闪跃官网选购 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
