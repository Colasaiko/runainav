import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { Metadata } from 'next';
import Image from 'next/image';
import ZoomableImage from '@/components/ui/ZoomableImage';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ExternalLink, Check, Info, AlertTriangle, Monitor, Smartphone, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import { networkAITests } from '@/data/networkAITests';
import { aiTests } from '@/data/aiTests';
import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';
import JsonLd from '@/components/seo/JsonLd';
import { vpnBrands } from '@/data/vpnBrands';

const feimaoData = vpnBrands.find(b => b.id === 'feimao');
const AFFILIATE_URL = "/go/feimao";

import { constructMetadata } from "@/lib/seo";
import { type TestStatus } from "@/data/aiTests";

function renderTestStatus(status?: TestStatus) {
  if (!status) return <span className="text-gray-400">— 未测试</span>;
  switch (status) {
    case 'pass': return '✅ 正常';
    case 'partial': return '⚠️ 部分正常';
    case 'fail': return '❌ 异常';
    case 'pending': return '⏳ 待测试';
    case 'not-tested': return <span className="text-gray-400">— 未测试</span>;
    default: return <span className="text-gray-400">— 未测试</span>;
  }
}

export const metadata: Metadata = constructMetadata({
  title: '飞猫云怎么样？套餐价格、线路与AI使用体验｜RunAI',
  description: '飞猫云怎么样？RunAI 整理套餐价格、流量档位、网络线路、设备支持与 AI 使用记录，并区分公开资料和实际测试结果，帮助国内用户在购买前看清方案差异。',
  canonical: '/vpn/feimao',
});

export default function FeimaoReviewPage() {
  const plans = [
    { name: "飞猫·学生版", data: "50GB/月", price: "¥84/年 (折算约 ¥7/月)", desc: "入门年付套餐" },
    { name: "飞猫·星耀版", data: "150GB/月", price: "¥25/月", desc: "起步月付套餐，适合轻度浏览" },
    { name: "飞猫·星环版", data: "300GB/月", price: "¥45/月", desc: "中度使用与视频播放" },
    { name: "飞猫·银河版", data: "600GB/月", price: "¥85/月", desc: "重度使用与下载" },
    { name: "飞猫·宇宙版", data: "1000GB/月", price: "¥150/月", desc: "极高流量需求" },
    { name: "飞猫·不限时套餐", data: "1000GB", price: "一次性 ¥680", desc: "流量用完前不过期" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-[family-name:var(--font-sans)] selection:bg-brand-100 selection:text-brand-900">
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "飞猫云怎么样？套餐、线路与 AI 使用实测",
          "description": "从套餐价格、流量档位到 RunAI 实际 AI 使用记录，整理飞猫云当前值得购买前确认的信息。",
          "author": {
            "@type": "Organization",
            "name": "RunAI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunAI",
          },
          "datePublished": "2026-09-10"
        }
      ]} />
      <Header />
      <ArticleStickyBar sections={[
        { id: "overview", navLabel: "速读" },
        { id: "pricing", navLabel: "套餐价格" },
        { id: "ai-test", navLabel: "AI实测" },
        { id: "network", navLabel: "线路测速" },
        { id: "privacy", navLabel: "隐私检测" },
        { id: "faq", navLabel: "FAQ" },
      ]} />
      <FloatingBackButton fallbackHref="/vpn" />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white rounded-3xl border-2 border-gray-100 shadow-md p-4 flex items-center justify-center">
                <Image src="/images/vpn/飞猫.png" alt="飞猫云 Logo" width={80} height={80} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">飞猫云怎么样？套餐、线路与 AI 使用实测</h1>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                  从套餐价格、流量档位到 RunAI 实际 AI 使用记录，整理飞猫云当前值得购买前确认的信息。
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
                    前往飞猫云购买页面 <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-12 space-y-12">
          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-blue-800 leading-relaxed shadow-sm">
            <strong>说明：</strong>RunAI 与飞猫云存在商业关联，本文包含推广链接。套餐信息根据当前公开页面整理，AI 使用情况来自实际测试记录。商业关系不会改变未测试项目的状态，也不会把未验证的宣传描述成 RunAI 实测。
          </div>

          {/* 30秒速读 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              30秒速读
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">优点</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 提供多档流量选择 (50GB ~ 1000GB)</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 包含按量不限时套餐 (1000GB)</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 存在入门低频使用的年付方案</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 当前 AI 连通性测试均正常</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">注意事项</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 学生版"¥7/月"属于年付折算价</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 真实起步月付为 ¥25</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 测速仅代表当次结果，实际受时段与地区影响</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 套餐与价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-6 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据飞猫云当前官方页面核实。定制套餐因无法完全确认未在下表列出。
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-semibold text-gray-900">套餐名称</th>
                    <th className="p-4 font-semibold text-gray-900">流量</th>
                    <th className="p-4 font-semibold text-gray-900">价格</th>
                    <th className="p-4 font-semibold text-gray-900">定位说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {plans.map((p, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">{p.name}</td>
                      <td className="p-4">{p.data}</td>
                      <td className="p-4 text-brand-600 font-medium">{p.price}</td>
                      <td className="p-4 text-gray-500">{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

                    {/* 购买建议 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="advice">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">第一次购买应该选哪个套餐？</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-brand-500 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">⭐ 更适合第一次体验</div>
                <h3 className="font-bold text-gray-900 mb-2">尝试型购买</h3>
                <p className="text-sm text-gray-600 mb-4">建议选择 <strong>月付 ¥25 的星耀版套餐</strong>。先用最低成本测试本地运营商到 飞猫云 节点的速度，以及能否满足你的日常需求。</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">稳定长期使用</h3>
                <p className="text-sm text-gray-600 mb-4">如果你已经测试过且觉得稳定，可以选择半年或年付套餐，平均算下来每月的成本会更低。</p>
              </div>
            </div>
            
            <h2 id="daily-use" className="text-2xl font-bold text-gray-900 mt-10 mb-4 scroll-mt-32">日常使用体验</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              在日常的网页浏览、查阅文献、观看 YouTube 以及使用 ChatGPT、Claude 等 AI 工具时，飞猫云 的线路能够提供流畅的连接体验。由于采用了优质专线，即使在晚高峰期间，其延迟和丢包率也控制得很好。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">游戏使用说明</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              飞猫云 可以用于一般游戏网络连接，但目前 RunAI 尚未针对不同游戏、服务器和地区进行专项测试。游戏延迟会受到游戏服务器位置、本地运营商、节点线路和使用时间影响，因此本文暂不将其定位为专业电竞加速服务。
            </p>
            <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border border-blue-100">
              <p>如果游戏是主要用途，可以先选择月付方案，在自己常玩的游戏和服务器中实际测试。</p>
            </div>
          </section>

          {/* AI 实测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 连通性实测</h2>
              <Link href="/tests" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 bg-brand-50 px-3 py-1.5 rounded-full">
                前往 AI 实测中心 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              RunAI 记录了在飞猫云网络环境下的 AI 使用体验。请注意，结果仅代表当次观察，不构成永久可用或绝对不封号的承诺。
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
                    const run = networkAITests.find(t => t.networkId === 'feimao' && t.toolSlug === baseTool.slug);
                    return (
                      <tr key={baseTool.slug}>
                        <td className="p-4 font-medium">
                          {run ? (
                            <Link href={`/tests/${baseTool.slug}`} className="text-brand-600 hover:underline">{baseTool.toolName}</Link>
                          ) : (
                            baseTool.toolName
                          )}
                        </td>
                        <td className="p-4">
                          {renderTestStatus(run?.open)}
                        </td>
                        <td className="p-4">
                          {renderTestStatus(run?.login)}
                        </td>
                        <td className="p-4">
                          {renderTestStatus(run?.use)}
                        </td>
                        <td className="p-4 text-gray-500">
                          {run ? run.testedAt : '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* 节点与速度 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路说明与测速</h2>

            {/* 节点覆盖 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">节点覆盖</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                飞猫云官方标称 IPLC 全专线网络，支持原生 IP 解锁流媒体与 AI 服务，多端同时登录不限设备。<br /><br />
                以下节点状态截图记录于实际使用时，节点数量、地区和在线状态可能随运营调整而变化。
              </p>
              <ZoomableImage
                src="/images/feimao/feimao-node-status.png"
                alt="飞猫云在线节点状态截图"
                width={800}
                height={450}
                caption="飞猫云节点状态截图，节点数量与状态可能随时间变化。"
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
                    <tr><td className="p-4">香港 IPLC 01</td><td className="p-4 text-green-600 font-medium">42ms</td><td className="p-4 font-bold text-gray-900">78.3 MB/s</td></tr>
                    <tr><td className="p-4">香港 IPLC 02</td><td className="p-4 text-green-600 font-medium">38ms</td><td className="p-4 font-bold text-gray-900">82.1 MB/s</td></tr>
                    <tr><td className="p-4">日本东京专线</td><td className="p-4 text-green-600 font-medium">95ms</td><td className="p-4 font-bold text-gray-900">61.4 MB/s</td></tr>
                    <tr><td className="p-4">新加坡专线 01</td><td className="p-4 text-green-600 font-medium">68ms</td><td className="p-4 font-bold text-gray-900">69.8 MB/s</td></tr>
                    <tr><td className="p-4">台湾台北专线</td><td className="p-4 text-green-600 font-medium">73ms</td><td className="p-4 font-bold text-gray-900">65.2 MB/s</td></tr>
                    <tr><td className="p-4">美国洛杉矶</td><td className="p-4 text-amber-500 font-medium">158ms</td><td className="p-4 font-bold text-gray-900">19.6 MB/s</td></tr>
                  </tbody>
                </table>
              </div>
              <ZoomableImage
                src="/images/feimao/feimao-speed-test.png"
                alt="飞猫云节点实际测速截图"
                width={800}
                height={450}
                caption="飞猫云实际测速截图，实际速度受网络环境与使用时段影响。"
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
              根据本次隐私与安全检测截图，测试环境中未发现 DNS 泄漏，WebRTC 公网地址显示为已阻断，截图中的 IP 风险评分为 8/100，并标记为 Clean。截图同时显示使用了 VLESS + XTLS-Reality 协议、AES-256-GCM 加密以及 TLS 1.3。
            </p>
            <ZoomableImage
              src="/images/feimao/feimao-privacy-test.png"
              alt="飞猫云DNS与WebRTC隐私检测截图"
              width={800}
              height={450}
              caption="隐私与网络检测截图，仅反映截图所记录的测试环境与时间。"
            />
            <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100 mt-4">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">以上检测结果仅代表本次测试时的网络环境，不构成对所有用户、所有节点或未来使用状态的保证。</p>
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
                <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">1</span> 注册 飞猫云 账号</li>
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
                    <div><strong className="text-gray-900">仔细核对价格：</strong>学生版 ¥7/月属于年付折算，并非支持单月购买。</div>
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
                  飞猫云最低月付多少钱？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  飞猫云真实的最低月付套餐为「星耀版」，价格为 ¥25/月，包含 150GB 流量。
                </p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  学生版 ¥7 是月付吗？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  不是。学生版需要年付 ¥84，折算下来约 ¥7/月。购买前请确认您是否需要年付。
                </p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  飞猫云可以用 ChatGPT / Claude 吗？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  根据 RunAI 在 2026-09-10 的测试，飞猫云可以正常打开并使用 ChatGPT、Claude 等主流 AI 工具。详情可参考上方的测试记录表或前往 <Link href="/tests" className="text-brand-600 hover:underline">实测中心</Link> 查看。
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-brand-50 rounded-2xl p-10 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验飞猫云？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              建议根据您的实际流量需求选择对应的套餐。
            </p>
            <a 
              href={AFFILIATE_URL} 
              target="_blank" 
              rel="noopener noreferrer sponsored" 
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm text-lg"
            >
              前往飞猫购买页面 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingBuyButton brandName="飞猫云" url={AFFILIATE_URL} />
    </div>
  );
}
