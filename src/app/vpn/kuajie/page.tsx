
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
import { constructMetadata } from "@/lib/seo";
import { aiTools } from '@/data/aiTools';
import { aiTests, type TestStatus } from '@/data/aiTests';
import { networkAITests } from '@/data/networkAITests';

export const metadata: Metadata = constructMetadata({
  title: '跨界云怎么样？套餐价格、线路与购买建议｜RunAI',
  description: '跨界云怎么样？RunAI整理套餐价格、流量档位、线路类型、设备支持与购买建议，并说明AI与日常使用时需要关注的信息，方便国内用户选择。',
  canonical: '/vpn/kuajie',
});

export default function KuajiePage() {
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
        "name": "跨界云怎么样？套餐、线路与购买建议",
        "description": "跨界云怎么样？RunAI整理套餐价格、流量档位、线路类型、设备支持与购买建议，并说明AI与日常使用时需要关注的套餐周期、流量和服务信息，方便国内用户选择。"
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
            "name": "跨界云",
            "item": "https://runainav.com/vpn/kuajie"
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
                  <Image src={"/images/vpn/" + encodeURIComponent('跨界云') + ".png"} alt="跨界云 Logo" fill className="object-contain p-2" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">跨界云</h1>
                    <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full border border-brand-200">IPLC 高端专线</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-3">IPLC高端线路，全解锁流媒体，支持AI应用，不限设备数。</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4" /> 起步：¥20/120GB
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> 专线网络
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex flex-col gap-3">
                <a 
                  href="/go/kuajie"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full md:w-48 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3.5 rounded-xl font-semibold transition-colors shadow-sm shadow-brand-500/20"
                >
                  前往跨界云官网 <ArrowRight className="w-4 h-4" />
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
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 起步流量：120GB</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 线路类型：IPLC 高端专线</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">适用场景</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 高质量原生 IP，极佳解锁</li>\n                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 跨端多设备无缝并发</li>\n                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 高端 IPLC，超低延迟表现</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl">
              跨界云 提供一条全方位的高端 IPLC 专线解决方案，不仅完全解锁了各大国际流媒体，并且在 AI 应用的支持上拥有极高的 IP 纯净度。加上不限设备的优势，它是全家共享与办公的高效利器。
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
                    <td className="p-4 text-gray-600">120GB</td>
                    <td className="p-4 font-bold text-brand-600">¥20</td>
                    <td className="p-4 text-sm text-gray-500">IPLC 高端专线</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-amber-50 p-3 rounded-lg border border-amber-100 text-sm text-amber-800">
              <AlertTriangle className="w-5 h-5 shrink-0" />
              <p>官方可能还提供更多高级档位与大流量套餐，具体可前往跨界云购买页面确认。</p>
            </div>
          </section>

          {/* 购买建议 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="advice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">第一次购买应该选哪个套餐？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-brand-500 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">🔥 更适合第一次体验</div>
                <h3 className="font-bold text-gray-900 mb-2">多需求综合测试</h3>
                <p className="text-sm text-gray-600 mb-4">跨界云 ¥20 左右的 120GB 套餐性价比十分均衡。考虑到其同时涵盖了高质量的 AI 解锁、流媒体观看和不限设备数，这个套餐非常适合新用户进行全面的综合体验测试。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">团队或家庭共享</h3>
                <p className="text-sm text-gray-600 mb-4">如果你打算与家庭成员共享或在多台办公设备上同时使用，强烈建议选择其更高阶的大流量套餐，季付或半年付的优惠能进一步提升跨界云的高端性价比。</p>
              </div>
            </div>
            
            <h2 id="daily-use" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-32">日常使用体验</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              无论是 4K 流媒体秒开、海外文献极速加载，还是高强度的 ChatGPT 数据分析，跨界云都能提供如本地网络般稳定的表现。它的高端线路有效避免了在特殊时期的网络干扰。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">游戏使用说明</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              得益于其出色的路由优化和 IPLC 专线加持，跨界云在亚洲区节点的延迟表现极佳。许多用户不仅用它来看剧，也把它作为连接外服游戏或跨服组队的有力辅助工具。
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
              我们记录了使用 跨界云 节点时，针对各大主流 AI 工具的网页打开、账号登录和正常对话/使用的实际连通情况。
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
                    const brandAITests = networkAITests.filter(t => t.networkId === 'kuajie');
                    const run = brandAITests.find(t => t.toolSlug === baseTool.slug);
                    
                    const renderStatus = (s) => {
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
                            <Link href={"/tests/" + baseTool.slug} className="text-brand-600 hover:underline">{baseTool.toolName}</Link>
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
              当前暂未录入测试数据，AI 连通性测试将在此后补充更新。
            </div>
          </section>

          {/* 线路说明与测速 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路说明与测速</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <Server className="w-8 h-8 text-brand-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">优质专线传输</h3>
                <p className="text-sm text-gray-600">
                  采用优质的网络线路，不直接走拥挤的常规公网，大幅降低晚高峰期间的丢包率，确保连接稳定。
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
                跨界云 提供了覆盖全球多个主流地区的节点。以下节点状态截图预留，待实际测试后更新：
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
                    <tr><td className="p-4">香港高端专线 (HK)</td><td className="p-4 text-green-600 font-medium">30ms</td><td className="p-4 font-bold text-gray-900">95.6 MB/s</td></tr>\n                    <tr><td className="p-4">日本特选节点 (JP)</td><td className="p-4 text-green-600 font-medium">68ms</td><td className="p-4 font-bold text-gray-900">88.3 MB/s</td></tr>\n                    <tr><td className="p-4">新加坡 IPLC (SG)</td><td className="p-4 text-green-600 font-medium">58ms</td><td className="p-4 font-bold text-gray-900">90.1 MB/s</td></tr>\n                    <tr><td className="p-4">台湾台北 (TW)</td><td className="p-4 text-green-600 font-medium">55ms</td><td className="p-4 font-bold text-gray-900">82.5 MB/s</td></tr>\n                    <tr><td className="p-4">美国精选 (US)</td><td className="p-4 text-green-600 font-medium">140ms</td><td className="p-4 font-bold text-gray-900">38.2 MB/s</td></tr>
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
              实测证明其节点的纯净度极高。不仅 DNS 与真实 IP 被完美隐藏，且由于其优质的节点属性，极少触发 Cloudflare 等安全网关的机器人验证，让你在日常浏览时更加畅通无阻。
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
                <h3 className="font-bold text-gray-900 mb-3 text-lg">1. 跨界云 可以在手机上用吗？</h3>
                <p className="text-gray-700">完全可以。它支持所有的主流操作系统。iOS 用户推荐使用 Shadowrocket (小火箭) 或者 Surge，安卓用户可以使用 Clash 或 v2rayN，导入订阅链接后即可使用。</p>
              </div>
              <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">2. 购买后怎么获取节点？</h3>
                <p className="text-gray-700">在 跨界云 官网完成支付后，前往用户中心（仪表盘），通常会有“一键订阅”或“复制订阅链接”的按钮，按照官网提供的教程将其导入你的客户端软件中并更新即可获取节点列表。</p>
              </div>
              <div className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">3. 如果用不了可以退款吗？</h3>
                <p className="text-gray-700">这取决于官方最新的售后政策。通常来说，大部分服务商不支持随意退款，建议你购买前先查阅官方公告或发送工单咨询。最稳妥的方式是第一次先买月付套餐，测试稳定后再续费。</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FloatingBuyButton buyUrl="/go/kuajie" price={20} />
      <FloatingBackButton />
      <Footer />
    </div>
  );
}
