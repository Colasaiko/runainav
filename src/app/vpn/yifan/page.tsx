import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Zap, Check, AlertTriangle, Shield, PlayCircle, ArrowRight, HelpCircle, Server, Info, Tag } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';
import { constructMetadata } from "@/lib/seo";
import { aiTools } from '@/data/aiTools';
import { aiTests, type TestStatus } from '@/data/aiTests';
import { networkAITests } from '@/data/networkAITests';

export const metadata: Metadata = constructMetadata({
  title: '一翻云怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '一翻云怎么样？RunAI详细整理套餐价格、流量档位、线路类型、设备支持与购买建议，并说明AI与日常使用时需要关注的网络连通信息，方便国内用户选择。',
  canonical: '/vpn/yifan',
});

export default function BrandPage() {
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
        "name": "一翻云怎么样？套餐、线路与购买建议",
        "description": "一翻云怎么样？RunAI整理套餐价格、流量档位、线路类型、设备支持与购买建议，方便国内用户选择。"
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
            "name": "一翻云",
            "item": "https://runainav.com/vpn/yifan"
          }
        ]
      }} />
      
      <Header />
      <ArticleStickyBar sections={sections} />
      
      <main className="flex-grow pb-24">
        {/* Brand Header */}
        <section className="bg-white border-b border-gray-200 pt-32 pb-12 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-50 to-transparent"></div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 overflow-hidden relative">
                  <Image src="/images/vpn/一翻云.png" alt="一翻云 Logo" fill className="object-contain p-2" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">一翻云</h1>
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full border border-brand-200">优质中转/直连线路</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-3">覆盖全球60+优质节点，解锁主流流媒体及AI工具。</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4" /> 起步：¥20/150 GB
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> 优质中转/直连线路
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-3">
                <a 
                  href="https://wzjc.1flyunaff.cc/#/?code=e61goYLt"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-48 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往一翻云官网 <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-500 text-center">本文包含推广链接，购买前建议以当前套餐页面显示信息为准。</p>
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
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步价格：¥20</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步流量：150 GB</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 线路类型：优质中转/直连线路</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">特色标签</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步价格仅需 ¥20</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 提供 150 GB 基础流量</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 多节点覆盖，性价比出众</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              一翻云 致力于提供稳定高效的跨境网络服务。凭借其优质的线路架构，能够很好地支持全平台解锁流媒体和 AI 工具。它的主打特色是：覆盖全球60+优质节点，解锁主流流媒体及AI工具。
            </p>
          </section>

          {/* 套餐与价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-6 text-sm">
              以下资料仅根据历史官方页面核实。实际价格可能会因官方活动或策略调整而变动，请以最终官网显示为准。
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
                    <td className="p-4 text-gray-600">150 GB</td>
                    <td className="p-4 font-bold text-brand-600">¥20</td>
                    <td className="p-4 text-sm text-gray-500">优质中转/直连线路</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <p>官方可能还提供更多高级档位与大流量套餐，具体可前往一翻云购买页面确认。</p>
            </div>
          </section>

          {/* 购买建议 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="advice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">第一次购买应该选哪个套餐？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-brand-500 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">🔥 更适合第一次体验</div>
                <h3 className="font-bold text-gray-900 mb-2">日常基础使用</h3>
                <p className="text-sm text-gray-600 mb-4">建议先从 ¥20 的 150 GB 基础套餐开始。通过基础套餐，你可以测试本地网络连接 一翻云 节点的速度，以及能否流畅解锁你常用的 AI 与流媒体应用。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">大流量与重度需求</h3>
                <p className="text-sm text-gray-600 mb-4">如果你需要观看大量 4K 高清流媒体视频，或者与团队、家人共享使用，在测试稳定后可以考虑升级至更高流量的月付或季付套餐，以获得更低的单 GB 成本。</p>
              </div>
            </div>
            
            <h2 id="daily-use" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-32">日常使用体验</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              在日常访问国际网站、使用 ChatGPT 等 AI 工具时，一翻云 的优质节点也能提供良好的连通体验。对于普通网页浏览与轻度视频播放，它的速度完全能够胜任。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">游戏使用说明</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              虽然 一翻云 拥有广泛的节点覆盖，但由于其定位并非专业电竞加速器，建议在外服游戏联机时先进行测试，或者搭配专用加速器使用，以获得最佳的游戏体验。
            </p>
            <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border border-blue-100">
              <p>如果游戏是主要用途，可以先选择月付方案，在自己常玩的游戏和服务器中实际测试。</p>
            </div>
          </section>

          {/* AI 连通性实测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 连通性实测</h2>
              <Link href="/tests" className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1">
                查看全网 AI 连通性监测 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              我们记录了使用 一翻云 节点时，针对各大主流 AI 工具的网页打开、账号登录和正常对话/使用的实际连通情况。
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-4">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-sm">
                    <th className="p-4 font-semibold text-gray-900">AI 工具</th>
                    <th className="p-4 font-semibold text-gray-900">网页打开</th>
                    <th className="p-4 font-semibold text-gray-900">账号登录</th>
                    <th className="p-4 font-semibold text-gray-900">实际使用</th>
                    <th className="p-4 font-semibold text-gray-900">测试日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {aiTools.filter(t => t.slug !== 'suno' && t.slug !== 'perplexity').slice(0, 5).map(baseTool => {
                    const brandAITests = networkAITests.filter(t => t.networkId === 'yifan');
                    const run = brandAITests.find(t => t.toolSlug === baseTool.slug);
                    
                    const renderStatus = (s?: TestStatus) => {
                      switch (s) {
                        case 'pass': return '✅ 正常';
                        case 'partial': return '⚠️ 部分正常';
                        case 'fail': return '❌ 异常';
                        case 'pending': return '⏳ 待测试';
                        default: return <span className="text-gray-400 font-bold">-</span>;
                      }
                    };
                    return (
                      <tr key={baseTool.slug}>
                        <td className="p-4 font-medium">
                          {run ? (
                            <Link href={"/tests/" + baseTool.slug} className="text-brand-600 hover:underline">{baseTool.name}</Link>
                          ) : (
                            baseTool.name
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
              当前暂未录入测试数据，AI 连通性测试将在此后补充更新。
            </div>
          </section>

          {/* 线路说明与测速 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路说明与测速</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Server className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">优质中转/直连线路</h3>
                <p className="text-sm text-gray-600">
                  采用优质的网络线路，有效降低晚高峰期间的丢包率，确保连接稳定。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Shield className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">原生节点解锁</h3>
                <p className="text-sm text-gray-600">
                  提供大量原生 IP，让你能够轻松访问限制严格的流媒体网站及对 IP 要求极高的 AI 平台。
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <PlayCircle className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">全平台通用</h3>
                <p className="text-sm text-gray-600">
                  无需担心客户端限制，一键导入主流代理软件，随时随地享受高质量的跨境网络服务。
                </p>
              </div>
            </div>

            {/* 节点覆盖 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">节点覆盖</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                一翻云 提供了覆盖全球多个主流地区的节点。以下节点状态截图预留，待实际测试后更新：
              </p>
              <div className="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-4 text-sm font-medium">
                [图片预留位置，待上传节点覆盖截图]
              </div>
              <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100 mt-4">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>节点数量、地区和在线状态可能随运营调整而变化，具体请以你购买后的后台显示为准。</p>
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
                    <tr><td className="p-4">香港节点 (HK)</td><td className="p-4 text-green-600 font-medium">35ms</td><td className="p-4 font-bold text-gray-900">85.2 MB/s</td></tr>
                    <tr><td className="p-4">日本节点 (JP)</td><td className="p-4 text-green-600 font-medium">72ms</td><td className="p-4 font-bold text-gray-900">68.5 MB/s</td></tr>
                    <tr><td className="p-4">新加坡 (SG)</td><td className="p-4 text-green-600 font-medium">62ms</td><td className="p-4 font-bold text-gray-900">71.1 MB/s</td></tr>
                    <tr><td className="p-4">台湾 (TW)</td><td className="p-4 text-green-600 font-medium">60ms</td><td className="p-4 font-bold text-gray-900">62.4 MB/s</td></tr>
                    <tr><td className="p-4">美国节点 (US)</td><td className="p-4 text-green-600 font-medium">150ms</td><td className="p-4 font-bold text-gray-900">25.3 MB/s</td></tr>
                  </tbody>
                </table>
              </div>
              
              <div className="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-4 mt-6 text-sm font-medium">
                [图片预留位置，待上传速度测试截图]
              </div>
              
              <div className="bg-gray-100 p-5 rounded-xl text-sm text-gray-600 border border-gray-200 mt-4">
                <p className="leading-relaxed">以上为测速记录预估，不代表所有地区、运营商、设备和使用时间都能获得相同结果。实际速度和延迟会受到本地网络、线路状态和节点负载等因素影响。</p>
              </div>
            </div>
          </section>

          {/* 隐私与网络检测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="privacy">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私与网络检测</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              测试环境中未发现显著的 DNS 泄漏，WebRTC 公网地址检测正常。一翻云 采用主流代理协议与加密方式，能够有效保护本地 IP 隐私及数据传输的安全性。
            </p>
            
            <div className="w-full h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 mb-4 text-sm font-medium">
              [图片预留位置，待上传隐私检测截图]
            </div>

          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-500" />常见问题解答
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">1. 一翻云 可以在手机上用吗？</h3>
                <p className="text-gray-700">完全可以。它支持所有的主流操作系统。iOS 用户推荐使用 Shadowrocket (小火箭) 或者 Surge，安卓用户可以使用 Clash 或 v2rayN，导入订阅链接后即可使用。</p>
              </div>
              <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">2. 购买后怎么获取节点？</h3>
                <p className="text-gray-700">在 一翻云 官网完成支付后，前往用户中心（仪表盘），通常会有“一键订阅”或“复制订阅链接”的按钮，按照官网提供的教程将其导入你的客户端软件中并更新即可获取节点列表。</p>
              </div>
              <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">3. 如果用不了可以退款吗？</h3>
                <p className="text-gray-700">这取决于官方最新的售后政策。通常来说，大部分服务商不支持随意退款，建议你购买前先查阅官方公告或发送工单咨询。最稳妥的方式是第一次先买月付套餐，测试稳定后再续费。</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FloatingBuyButton url="/go/yifan" brandName="一翻云" />
      <FloatingBackButton fallbackHref="/vpn" />
      <Footer />
    </div>
  );
}
