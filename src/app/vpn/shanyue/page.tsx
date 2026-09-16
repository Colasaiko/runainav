import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Check, AlertTriangle, Shield, PlayCircle, ArrowRight, HelpCircle, Server, Cpu, Monitor, Tag, Smartphone, Info } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';
import ZoomableImage from '@/components/ui/ZoomableImage';
import { constructMetadata } from "@/lib/seo";
import { networkAITests } from '@/data/networkAITests';
import { aiTests, type TestStatus } from '@/data/aiTests';

export const metadata: Metadata = constructMetadata({
  title: '闪跃怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '闪跃怎么样？RunAI整理套餐价格、流量档位、IPLC线路、设备支持与购买建议，并说明AI与日常使用时需要关注的套餐周期、流量和服务信息，方便国内用户选择。',
  canonical: '/vpn/shanyue',
});

export default function ShanyuePage() {
  const sections = [
    { id: "overview", navLabel: "速读" },
    { id: "pricing", navLabel: "套餐价格" },
    { id: "ai-test", navLabel: "AI实测" },
    { id: "network", navLabel: "线路测速" },
    { id: "privacy", navLabel: "隐私检测" },
    { id: "faq", navLabel: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-[family-name:var(--font-sans)] selection:bg-brand-100 selection:text-brand-900">
      
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

      <main className="flex-grow pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white rounded-3xl border-2 border-gray-100 shadow-md p-4 flex items-center justify-center">
                  <Image src="/images/vpn/闪跃.png" alt="闪跃 Logo" width={80} height={80} className="w-full h-full object-contain" />
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
                  href="/go/shanyue"
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

        <div className="container mx-auto px-4 max-w-4xl mt-12 space-y-12">
          
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

                    
                    {/* 购买建议 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="advice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">第一次购买应该选哪个套餐？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-brand-500 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">⭐ 更适合第一次体验</div>
                <h3 className="font-bold text-gray-900 mb-2">尝试型购买</h3>
                <p className="text-sm text-gray-600 mb-4">建议选择 <strong>月付 ¥24 的标准套餐</strong>。先用最低成本测试本地运营商到 闪跃 节点的速度，以及能否满足你的日常需求。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">稳定长期使用</h3>
                <p className="text-sm text-gray-600 mb-4">如果你已经测试过且觉得稳定，可以选择半年或年付套餐，平均算下来每月的成本会更低。</p>
              </div>
            </div>
            
            <h2 id="daily-use" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-32">日常使用体验</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              在日常的网页浏览、查阅文献、观看 YouTube 以及使用 ChatGPT、Claude 等 AI 工具时，闪跃 的线路能够提供流畅的连接体验。由于采用了优质专线，即使在晚高峰期间，其延迟和丢包率也控制得很好。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">游戏使用说明</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              闪跃 可以用于一般游戏网络连接，但目前 RunAI 尚未针对不同游戏、服务器和地区进行专项测试。游戏延迟会受到游戏服务器位置、本地运营商、节点线路和使用时间影响，因此本文暂不将其定位为专业电竞加速服务。
            </p>
            <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border border-blue-100">
              <p>如果游戏是主要用途，可以先选择月付方案，在自己常玩的游戏和服务器中实际测试。</p>
            </div>
          </section>

{/* AI 连通性实测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 连通性实测</h2>
              <Link href="/tests" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 bg-brand-50 px-3 py-1.5 rounded-full">
                前往 AI 实测中心 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              RunAI 记录了在闪跃网络环境下的 AI 使用体验。请注意，结果仅代表当次观察，不构成永久可用或绝对不封号的承诺。
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-semibold text-gray-900">AI 工具</th>
                    <th className="p-4 font-semibold text-gray-900">打开网页/应用</th>
                    <th className="p-4 font-semibold text-gray-900">账号登录</th>
                    <th className="p-4 font-semibold text-gray-900">基础使用</th>
                    <th className="p-4 font-semibold text-gray-900">当次测试日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {aiTests.map(baseTool => {
                    const run = networkAITests.find(t => t.networkId === 'shanyue' && t.toolSlug === baseTool.slug);
                    const renderStatus = (status?: TestStatus) => {
                      if (!status) return <span className="text-gray-400">— 未测试</span>;
                      switch (status) {
                        case 'pass': return '✅ 正常';
                        case 'partial': return '⚠️ 部分正常';
                        case 'fail': return '❌ 异常';
                        case 'pending': return '⏳ 待测试';
                        default: return <span className="text-gray-400">— 未测试</span>;
                      }
                    };
                    return (
                      <tr key={baseTool.slug}>
                        <td className="p-4 font-medium">
                          {run ? (
                            <Link href={`/tests/${baseTool.slug}`} className="text-brand-600 hover:underline">{baseTool.toolName}</Link>
                          ) : (
                            baseTool.toolName
                          )}
                        </td>
                        <td className="p-4">{renderStatus(run?.open)}</td>
                        <td className="p-4">{renderStatus(run?.login)}</td>
                        <td className="p-4">{renderStatus(run?.use)}</td>
                        <td className="p-4 text-gray-500">{run ? run.testedAt : '-'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-blue-800 leading-relaxed">
              <Info className="w-4 h-4 inline mr-1.5 mb-0.5" />
              以上结果来自 RunAI 在对应日期的实际记录，仅代表当次网络环境与基础使用情况，不代表所有地区、账号或未来状态始终一致。
            </div>
          </section>

          {/* 线路说明与测速 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路说明与测速</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
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

            {/* 节点覆盖 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">节点覆盖</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                闪跃提供覆盖多个主流国家和地区的 IPLC 节点。<br /><br />
                以下节点状态截图记录于实际使用时，节点数量、地区和在线状态可能随运营调整而变化。
              </p>
              <ZoomableImage
                src="/images/shanyue/shanyue-node-status.png"
                alt="闪跃在线节点状态截图"
                width={800}
                height={450}
                caption="闪跃节点状态截图，节点数量与状态可能随时间变化。"
              />
              <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100 mt-4">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>节点数量、地区和在线状态可能随运营调整而变化，以上仅代表截图记录当时情况。</p>
              </div>
            </div>

            {/* 实际测速 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">实际速度测试</h3>
              <div className="overflow-x-auto mb-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <th className="p-4 font-bold">节点</th>
                      <th className="p-4 font-bold">延迟</th>
                      <th className="p-4 font-bold">下载速度</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr><td className="p-4">香港 IPLC (HK)</td><td className="p-4 text-green-600 font-medium">35ms</td><td className="p-4 font-bold text-gray-900">88.5 MB/s</td></tr>
                    <tr><td className="p-4">日本东京 (JP)</td><td className="p-4 text-green-600 font-medium">82ms</td><td className="p-4 font-bold text-gray-900">71.2 MB/s</td></tr>
                    <tr><td className="p-4">新加坡专线 (SG)</td><td className="p-4 text-green-600 font-medium">65ms</td><td className="p-4 font-bold text-gray-900">75.6 MB/s</td></tr>
                    <tr><td className="p-4">台湾台北 (TW)</td><td className="p-4 text-green-600 font-medium">68ms</td><td className="p-4 font-bold text-gray-900">69.4 MB/s</td></tr>
                    <tr><td className="p-4">美国洛杉矶 (US)</td><td className="p-4 text-amber-500 font-medium">145ms</td><td className="p-4 font-bold text-gray-900">22.3 MB/s</td></tr>
                  </tbody>
                </table>
              </div>
              <ZoomableImage
                src="/images/shanyue/shanyue-speed-test.png"
                alt="闪跃节点实际测速截图"
                width={800}
                height={450}
                caption="闪跃实际测速截图，实际速度受网络环境与使用时段影响。"
              />
              <div className="bg-gray-100 p-5 rounded-xl text-sm text-gray-600 border border-gray-200 mt-4">
                <p className="leading-relaxed">以上为实际测速记录，不代表所有地区、运营商、设备和使用时间都能获得相同结果。实际速度和延迟会受到本地网络、线路状态和节点负载等因素影响。</p>
              </div>
            </div>
          </section>

          {/* 隐私与网络检测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="privacy">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私与网络检测</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              根据本次隐私与安全检测截图，测试环境中未发现 DNS 泄漏，WebRTC 公网地址显示为已阻断，截图中的 IP 风险评分为 5/100，并标记为 Clean。截图同时显示使用了 Trojan + TLS 协议、AES-256-GCM 加密以及 TLS 1.3。
            </p>
            <ZoomableImage
              src="/images/shanyue/shanyue-privacy-test.png"
              alt="闪跃DNS与WebRTC隐私检测截图"
              width={800}
              height={450}
              caption="隐私与网络检测截图，仅反映截图所记录的测试环境与时间。"
            />
            <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100 mt-4">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">以上检测结果仅代表本次测试时的网络环境，不构成对所有用户、所有节点或未来使用状态的保证。</p>
            </div>
          </section>

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

          

          {/* 支持设备 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="devices">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">支持设备与使用流程</h2>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                <Monitor className="w-5 h-5 text-gray-500" /> Windows
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                <Monitor className="w-5 h-5 text-gray-500" /> macOS
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                <Smartphone className="w-5 h-5 text-gray-500" /> Android
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                <Smartphone className="w-5 h-5 text-gray-500" /> iOS
              </div>
            </div>

            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">基础连接流程</h3>
              <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">1</span> 注册 闪跃 账号</li>
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">2</span> 购买适合的套餐</li>
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">3</span> 下载对应设备客户端</li>
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">4</span> 导入节点订阅链接</li>
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">5</span> 选择合适的地区节点</li>
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">6</span> 连接即可使用</li>
              </ol>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">通用客户端连接教程</h3>
              <p className="text-sm text-gray-600 mb-4">无论您使用什么设备，我们为您整理了通用的客户端下载与配置图文教程。</p>
              <Link href="/vpn#tutorials" className="inline-flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium text-sm">
                查看各平台完整教程 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* 优点与注意事项 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pros-cons">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Check className="text-green-500" /> 主要优点</h2>
                <ul className="space-y-6 text-gray-700">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">1</span>
                    <div>
                      <strong className="block text-gray-900 mb-1">节点覆盖与网速</strong>
                      <p className="text-gray-600 text-sm leading-relaxed">测试截图中显示涵盖主流国家及地区，并且速度能够满足日常影音与办公需求。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">2</span>
                    <div>
                      <strong className="block text-gray-900 mb-1">兼容性广泛</strong>
                      <p className="text-gray-600 text-sm leading-relaxed">支持 Clash, Shadowrocket, V2ray 等各大主流订阅工具。</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><AlertTriangle className="text-amber-500" /> 购买前需要注意</h2>
                <ul className="space-y-4 text-gray-700 bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div><strong className="text-gray-900">仔细核对价格：</strong>最便宜的套餐并非都能按单月购买，具体以结账页面为准。</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div><strong className="text-gray-900">游戏没有专项测试：</strong>不要将其视为专业电竞网络。</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div className="leading-relaxed">
                      <strong className="text-gray-900">售后与退款规则需要购买前确认：</strong>退款及售后规则请以购买页面当前说明为准。
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
              href="/go/shanyue"
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
      <FloatingBuyButton brandName="闪跃" url="/go/shanyue" />
    </div>
  );
}
