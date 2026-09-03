import { Metadata } from 'next';
import Image from 'next/image';
import ZoomableImage from '@/components/ui/ZoomableImage';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ExternalLink, Check, Info, AlertTriangle, Monitor, Smartphone, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';
import JsonLd from '@/components/seo/JsonLd';

const AFFILIATE_URL = "https://wep01.breezenetaff.com/#/?code=bSnymFll";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: '微风网络怎么样？套餐、节点与AI使用体验 | RunAI',
  description: '微风网络提供多档流量套餐与专线节点，支持Windows、macOS、Android和iOS。本文整理价格、节点覆盖、实际测速、AI使用测试与新手选择建议。',
  canonical: '/vpn/weifeng/',
  type: 'article',
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "微风网络怎么样？套餐、节点与AI使用体验",
  "description": "微风网络提供多档流量套餐与专线节点，支持Windows、macOS、Android和iOS。本文整理价格、节点覆盖、实际测速、AI使用测试与新手选择建议。",
  "publisher": {
    "@type": "Organization",
    "name": "RunAI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://runainav.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://runainav.com/vpn/weifeng"
  }
};

const breadcrumbJsonLd = {
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
      "name": "网络连通方案",
      "item": "https://runainav.com/vpn"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "微风网络",
      "item": "https://runainav.com/vpn/weifeng"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "微风网络最便宜多少钱？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "最便宜的套餐是清风 Breeze，每年 ¥137（平均约 ¥11/月），提供每月 100GB 流量。"
      }
    },
    {
      "@type": "Question",
      "name": "为什么清风显示 ¥11/月却需要年付？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "清风套餐不提供单月购买选项，¥11/月只是按年付价格折算后的平均成本。"
      }
    },
    {
      "@type": "Question",
      "name": "第一次买微风网络应该选哪个套餐？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "建议先购买 ¥27 的“乘风”月付套餐，测试节点速度和网络环境，满意后再考虑长期购买。"
      }
    },
    {
      "@type": "Question",
      "name": "微风网络可以使用 ChatGPT 吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "根据 2026-09-02 的实际测试，ChatGPT 和 Claude 均可正常打开、登录和聊天使用。"
      }
    }
  ]
};

export default function WeifengReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <FloatingBuyButton url={AFFILIATE_URL} brandName="微风网络" />
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white pt-12 md:pt-20 pb-12 border-b border-gray-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <nav className="flex text-sm text-gray-500 mb-8">
              <Link href="/" className="hover:text-brand-600">首页</Link> <span className="mx-2">/</span>
              <Link href="/vpn" className="hover:text-brand-600">网络连通方案</Link> <span className="mx-2">/</span>
              <span className="text-gray-900">微风网络</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">微风网络怎么样？</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              从套餐、节点、实际测速到 ChatGPT 与 Claude 使用情况，看看微风网络是否适合你的日常网络需求。
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium">专线网络</span>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium">不限设备</span>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium">不限速</span>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium">AI 实测</span>
              <span className="px-3 py-1 bg-brand-50 text-brand-700 rounded-md text-sm font-medium">多地区节点</span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            
            {/* 30秒速读 */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-6 md:p-8 rounded-2xl border border-brand-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> 30 秒速读
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-700 leading-relaxed">
                <div><strong>适合：</strong>AI 使用、日常浏览、办公、学生、在线视频</div>
                <div><strong>价格：</strong>最低套餐折算约 ¥11/月，但实际需年付。</div>
                <div><strong>第一次体验：</strong>更推荐 200GB 乘风月付套餐，¥27/月。</div>
                <div><strong>设备：</strong>Windows, macOS, Android, iOS</div>
                <div><strong>AI 实测：</strong>ChatGPT ✅, Claude ✅</div>
                <div><strong>测速：</strong>测试中最高下载 86.5 MB/s。</div>
                <div className="sm:col-span-2"><strong>节点：</strong>测试截图中共显示 62 个在线节点。</div>
              </div>
            </div>

            {/* 商业关系说明 */}
            <div className="bg-gray-100 p-5 rounded-xl text-sm text-gray-600 flex items-start gap-3">
              <Info className="w-5 h-5 flex-shrink-0 text-gray-500 mt-0.5" />
              <p className="leading-relaxed">
                <strong>说明：</strong>RunAI 与微风网络存在商业关联，本文包含推广链接。内容根据公开套餐信息、实际使用及测试结果整理，我们仍会尽量如实说明产品的优势与需要注意的地方。
              </p>
            </div>

            {/* 微风网络是什么 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">微风网络是什么？</h2>
              <p className="text-gray-700 leading-relaxed">
                微风网络是一项面向日常跨境网络需求的网络服务。它主要适合需要访问海外 AI 服务、国际网站、在线视频、跨境办公、学习与日常浏览的用户。
              </p>
            </div>

            {/* 套餐价格 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
              <div className="overflow-x-auto mb-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <th className="p-4 font-bold">套餐</th>
                      <th className="p-4 font-bold">流量</th>
                      <th className="p-4 font-bold">月付</th>
                      <th className="p-4 font-bold">季付</th>
                      <th className="p-4 font-bold">年付</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr><td className="p-4 font-medium">清风 Breeze</td><td className="p-4">100GB/月</td><td className="p-4 text-gray-400">不提供单月购买</td><td className="p-4 text-gray-400">—</td><td className="p-4">¥137</td></tr>
                    <tr><td className="p-4 font-medium">乘风 Riding</td><td className="p-4">200GB/月</td><td className="p-4 font-bold text-brand-600">¥27</td><td className="p-4">¥72</td><td className="p-4">¥259</td></tr>
                    <tr><td className="p-4 font-medium">破风 Breaking</td><td className="p-4">500GB/月</td><td className="p-4">¥57</td><td className="p-4">¥153</td><td className="p-4">¥547</td></tr>
                    <tr><td className="p-4 font-medium">御风 Mastery</td><td className="p-4">1200GB/月</td><td className="p-4">¥127</td><td className="p-4">¥342</td><td className="p-4">¥1219</td></tr>
                    <tr><td className="p-4 font-medium">信风 · 不限时</td><td className="p-4">270GB</td><td className="p-4">一次性 ¥200</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                    <tr><td className="p-4 font-medium">长风 · 不限时</td><td className="p-4">570GB</td><td className="p-4">一次性 ¥370</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 bg-gray-100 p-4 rounded-xl">
                <strong>重要提示：</strong>清风 Breeze 每月提供 100GB 流量，按年购买 ¥137，折算约 ¥11/月。流量按照购买周期每月自动重置。
              </p>
            </div>

            {/* 第一次购买应该选哪个套餐 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">第一次购买应该选哪个套餐？</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-brand-500 shadow-sm relative">
                  <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">⭐ 更适合第一次体验</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">乘风 Riding</h3>
                  <div className="text-gray-600 mb-4">200GB/月 <span className="mx-2">|</span> <strong className="text-brand-600 text-lg">¥27/月</strong></div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>理由：</strong>第一次使用不建议直接购买长期套餐。¥27 月付可以先测试自己所在地区、自己设备、日常网络环境、常用 AI 以及视频表现。如果体验满意以后再考虑长期方案。
                  </p>
                  <div className="mt-6">
                    <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center justify-center px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium text-sm">
                      查看套餐 <ExternalLink className="w-4 h-4 ml-1.5" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">清风 Breeze</h3>
                  <div className="text-gray-600 mb-4">100GB/月 <span className="mx-2">|</span> <strong>年付 ¥137</strong> (约 ¥11/月)</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    <strong>适合：</strong>轻度长期使用，如 AI 聊天、办公、网页浏览与轻度视频。
                  </p>
                  <p className="text-xs text-amber-700 bg-amber-100/50 px-3 py-2 rounded-lg inline-block">
                    注意：需要一次购买一年。
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                如果需要多设备共享、经常看高清视频或流量消耗较大，可以考虑 <strong>破风 Breaking (500GB/月)</strong> 等更高流量需求的方案。
              </p>
            </div>

            {/* 优惠码 */}
            <div className="bg-brand-50 p-6 md:p-8 rounded-2xl border border-brand-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-brand-900 mb-2">专属优惠码</h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  结账时可尝试使用优惠码，当前优惠为 <strong>7折</strong>；实际适用套餐和最终金额以结算页面显示为准。
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center bg-white border-2 border-brand-200 rounded-lg overflow-hidden">
                  <span className="px-4 py-3 font-mono font-bold text-brand-700 bg-gray-50 border-r border-gray-200">weifeng90</span>
                  <span className="px-4 py-3 text-sm font-medium text-gray-600 select-none">优惠码</span>
                </div>
              </div>
            </div>

            {/* 节点覆盖 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">节点覆盖</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                微风网络官方套餐信息主打专线网络，实际节点可能根据地区和线路安排使用不同命名，具体请以客户端当前显示为准。<br/><br/>
                本次记录的节点状态截图显示共有 62 个节点在线，主要覆盖香港、台湾、日本、新加坡和美国等地区。
              </p>
              <ZoomableImage 
                  src="/images/weifeng/weifeng-node-status.png" 
                  alt="微风网络62个在线节点状态截图" 
                  width={800} 
                  height={450} 
                  caption="微风网络节点状态截图，记录时显示 62 个节点在线。节点数量与状态可能随时间变化。" 
                />
              <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>节点数量、地区和在线状态可能随运营调整而变化，以上仅代表截图记录当时情况。</p>
              </div>
            </div>

            {/* 实际速度测试 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">实际速度测试</h2>
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
                    <tr><td className="p-4">香港 IEPL 01</td><td className="p-4 text-green-600 font-medium">45ms</td><td className="p-4 font-bold text-gray-900">86.5 MB/s</td></tr>
                    <tr><td className="p-4">日本东京专线</td><td className="p-4 text-green-600 font-medium">88ms</td><td className="p-4 font-bold text-gray-900">64.2 MB/s</td></tr>
                    <tr><td className="p-4">美国洛杉矶优化</td><td className="p-4 text-amber-500 font-medium">150ms</td><td className="p-4 font-bold text-gray-900">22.8 MB/s</td></tr>
                    <tr><td className="p-4">新加坡专线 02</td><td className="p-4 text-green-600 font-medium">65ms</td><td className="p-4 font-bold text-gray-900">75.1 MB/s</td></tr>
                    <tr><td className="p-4">台湾台北 01</td><td className="p-4 text-green-600 font-medium">70ms</td><td className="p-4 font-bold text-gray-900">68.9 MB/s</td></tr>
                  </tbody>
                </table>
              </div>
              <ZoomableImage 
                  src="/images/weifeng/weifeng-speed-test-2026-08.png" 
                  alt="微风网络香港日本美国新加坡台湾节点测速结果" 
                  width={800} 
                  height={450} 
                  caption="2026 年 8 月 14 日的一次节点测速记录，实际速度会受到网络环境与使用时间影响。" 
                />
              <div className="bg-gray-100 p-5 rounded-xl text-sm text-gray-600 border border-gray-200">
                <p className="leading-relaxed">以上仅为一次实际测速记录（平均延迟 83ms，最高下载 86.5 MB/s，丢包 0%），不代表所有地区、运营商、设备和使用时间都能获得相同结果。实际速度和延迟会受到本地网络、线路状态和节点负载等因素影响。</p>
              </div>
            </div>

            {/* 隐私与网络检测 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私与网络检测</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                根据本次提供的隐私与安全检测截图，测试环境中未发现 DNS 泄漏，WebRTC 公网地址显示为已阻断，截图中的 IP 风险评分为 6/100，并标记为 Clean。截图同时显示 TLS 1.3、AES-256-GCM、VLESS、XTLS-Reality 等协议或加密相关信息。
              </p>
              <ZoomableImage 
                  src="/images/weifeng/weifeng-privacy-test-2026-08.png" 
                  alt="微风网络DNS与WebRTC隐私检测截图" 
                  width={800} 
                  height={450} 
                  caption="隐私与网络检测截图，仅反映截图所记录的测试环境与时间。" 
                />
              <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-800 flex gap-3 border border-amber-100">
                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">截图中展示了 Cure53 与 SOC 2 Type II 相关审计/合规信息，但 RunAI 目前尚未独立核实对应公开报告，因此本文不将其作为已验证结论。</p>
              </div>
            </div>

            {/* AI 实际测试 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 实际测试</h2>
              <div className="overflow-x-auto mb-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <th className="p-4 font-bold">AI 工具</th>
                      <th className="p-4 font-bold">打开</th>
                      <th className="p-4 font-bold">登录</th>
                      <th className="p-4 font-bold">使用</th>
                      <th className="p-4 font-bold">测试时间</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-700">
                    <tr>
                      <td className="p-4 font-medium"><Link href="/guides/chatgpt" className="text-brand-600 hover:underline">ChatGPT</Link></td>
                      <td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4 text-sm text-gray-500">2026-09-02</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium"><Link href="/guides/claude" className="text-brand-600 hover:underline">Claude</Link></td>
                      <td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4">✅ 正常</td><td className="p-4 text-sm text-gray-500">2026-09-02</td>
                    </tr>
                    <tr><td className="p-4 font-medium">Gemini</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                    <tr><td className="p-4 font-medium">Perplexity</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                    <tr><td className="p-4 font-medium">Cursor</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                    <tr><td className="p-4 font-medium">Midjourney</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                    <tr><td className="p-4 font-medium">Grok</td><td className="p-4 text-gray-400">待测试</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td><td className="p-4 text-gray-400">—</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600 border border-gray-200">
                <p>以上测试结果仅代表 RunAI 在测试日期和当时网络环境下的实际情况。AI 服务的地区支持、账号要求和可用性可能随着服务方政策及网络环境调整发生变化。</p>
              </div>
            </div>

            {/* 日常浏览与游戏说明 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">日常使用体验</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  根据实际体验反馈：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>AI 聊天基本没有明显延迟</li>
                  <li>在线视频整体流畅</li>
                  <li>日常网页浏览正常</li>
                  <li>办公和学习场景使用顺畅</li>
                  <li>没有遇到需要频繁切换节点的情况</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">游戏使用说明</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  微风网络可以用于一般游戏网络连接，但目前 RunAI 尚未针对不同游戏、服务器和地区进行专项测试。游戏延迟会受到游戏服务器位置、本地运营商、节点线路和使用时间影响，因此本文暂不将其定位为专业游戏加速服务。
                </p>
                <div className="bg-blue-50 p-4 rounded-xl text-sm text-blue-800 border border-blue-100">
                  <p>如果游戏是主要用途，可以先选择乘风月付方案，在自己常玩的游戏和服务器中实际测试。</p>
                </div>
              </div>
            </div>

            {/* 支持设备与如何开始使用 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">支持设备与使用流程</h2>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                  <Monitor className="w-5 h-5 text-gray-500" /> Windows
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                  <Monitor className="w-5 h-5 text-gray-500" /> macOS
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                  <Smartphone className="w-5 h-5 text-gray-500" /> Android
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-200 text-gray-700 shadow-sm font-medium">
                  <Smartphone className="w-5 h-5 text-gray-500" /> iOS
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-6">基础连接流程</h3>
                <ol className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">1</span> 注册微风网络账号</li>
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">2</span> 购买适合的套餐</li>
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">3</span> 下载对应设备客户端</li>
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">4</span> 导入节点订阅链接</li>
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">5</span> 选择合适的地区节点</li>
                  <li className="flex gap-3 items-start"><span className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold flex-shrink-0 text-sm">6</span> 连接即可使用</li>
                </ol>
              </div>
              
              {/* 教程区域链接 */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">通用客户端连接教程</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  无论您使用 Windows、macOS、Android 还是 iPhone/iPad，我们为您整理了通用的客户端下载与配置图文教程。
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/vpn#tutorials" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                    查看各平台完整教程 <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a href="https://168downloads.oss-ap-northeast-2.aliyuncs.com/wf/wfnetwork-3.0.0-macos.zip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                    微风 macOS 客户端下载 <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* 优点与购买前需要注意 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-12 mt-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Check className="text-green-500" /> 主要优点</h2>
                <ul className="space-y-6 text-gray-700">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">1</span>
                    <div>
                      <strong className="block text-gray-900 text-lg mb-1">入门价格比较低</strong>
                      <p className="text-gray-600 text-sm leading-relaxed">清风套餐年付折算约 ¥11/月。乘风月付 ¥27 可以先体验。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">2</span>
                    <div>
                      <strong className="block text-gray-900 text-lg mb-1">节点覆盖比较丰富</strong>
                      <p className="text-gray-600 text-sm leading-relaxed">测试截图中显示 62 个节点在线，覆盖香港、台湾、日本、新加坡、美国（数量会变化）。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-sm font-bold mt-1">3</span>
                    <div>
                      <strong className="block text-gray-900 text-lg mb-1">不限制设备同时接入</strong>
                      <p className="text-gray-600 text-sm leading-relaxed">适合手机、电脑、平板等多设备用户。</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><AlertTriangle className="text-amber-500" /> 购买前需要注意</h2>
                <ul className="space-y-4 text-gray-700 bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div><strong className="text-gray-900">没有免费试用：</strong>目前没有确认免费试用。</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div><strong className="text-gray-900">清风 ¥11 不是单月购买：</strong>需要年付 ¥137。</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div><strong className="text-gray-900">游戏没有专项测试：</strong>不要将其视为专业电竞网络。</div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div className="leading-relaxed">
                      <strong className="text-gray-900">售后与退款规则需要购买前确认：</strong>RunAI 目前尚未确认微风网络公开页面的完整售后联系方式，退款及售后规则请以购买页面当前说明为准。
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 适合哪些人 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">适合哪些人</h2>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">ChatGPT 用户</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">Claude 用户</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm"><Link href="/ai" className="hover:text-brand-600 transition-colors">AI 工具</Link>用户</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">学生</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">办公用户</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">日常浏览</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">YouTube / 视频用户</span>
                <span className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm">多设备用户</span>
              </div>
              <p className="text-gray-600 text-sm bg-gray-100 p-5 rounded-xl border border-gray-200 leading-relaxed">
                如果你的主要需求是专业竞技游戏、固定 IP、企业级 SLA 或其他特殊网络要求，建议购买前进一步确认相关功能，因为本文没有针对这些场景完成专项测试。
              </p>
            </div>

            {/* FAQ */}
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">常见问题 (FAQ)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>微风网络最便宜多少钱？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">最便宜的套餐是清风 Breeze，每年 ¥137（平均约 ¥11/月），提供每月 100GB 流量。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>为什么清风显示 ¥11/月却需要年付？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">清风套餐不提供单月购买选项，¥11/月只是按年付价格折算后的平均成本。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>第一次买应该选哪个套餐？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">建议先购买 ¥27 的“乘风”月付套餐，测试节点速度和网络环境，满意后再考虑长期购买。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>微风网络可以使用 ChatGPT 吗？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">根据 2026-09-02 的实际测试，ChatGPT 和 Claude 均可正常打开、登录和聊天使用。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>微风网络支持哪些设备？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">支持主流设备，包括 Windows、macOS、Android 和 iOS，并且不限制设备同时接入数量。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>微风网络适合打游戏吗？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">可用于一般游戏连接，但没有做专项电竞测试。如果以游戏为主，建议先买月付套餐实测。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>微风网络有免费试用吗？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">目前并没有确认官方提供免费试用的选项。</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start"><span className="text-brand-500 mr-2 mt-0.5"><HelpCircle className="w-5 h-5"/></span>优惠码怎么用？</h3>
                  <p className="text-gray-600 pl-7 text-sm leading-relaxed">在购买结账页面输入 <code className="bg-gray-100 text-brand-600 px-1.5 py-0.5 rounded font-mono text-xs">weifeng90</code>，当前可享受 7 折优惠，最终金额以页面显示为准。</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-100 shadow-xl text-center relative overflow-hidden mt-8">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">准备好体验微风网络了吗？</h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
                使用专属优惠码可享额外折扣，即刻开启高速、稳定的跨境网络体验。
              </p>
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center justify-center px-10 py-4 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 mb-6">
                前往微风网络购买套餐 <ExternalLink className="w-5 h-5 ml-2" />
              </a>
              <div className="text-gray-600">
                结账时可使用优惠码：<span className="font-mono font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-lg text-lg mx-2 border border-brand-100">weifeng90</span> <span className="text-brand-600 font-medium">(7折)</span>
                <span className="text-sm text-gray-400 mt-4 block">实际结账金额以微风网络官方页面显示为准。</span>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
