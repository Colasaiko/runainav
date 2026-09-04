import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import { 
  Zap, Check, AlertTriangle, Info, Activity, ZapOff, 
  ArrowRight, Smartphone, Server, Globe, Wifi, User, 
  MessageSquare, Play, Gamepad2, XCircle, CheckCircle 
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: '为什么连接VPN后网速会变慢？原因与排查方法',
  description: '连接VPN后出现网速下降、延迟升高或视频卡顿，通常与节点距离、线路拥堵、加密开销、本地网络和运营商路由有关。本文用简单方法教你判断原因并逐步排查。',
  canonical: '/guides/vpn-slow-speed',
});

export default function VpnSlowSpeedPage() {
  const faqData = [
    { q: "为什么一连接 VPN 网速就下降？", a: "因为你的数据不再是直达网站，而是多走了一段路，需要先经过加密、发送到海外的节点服务器、再由节点转发给目标网站，这段额外路程和处理时间通常会导致测速变慢。" },
    { q: "VPN 会让 Ping 变高吗？", a: "通常会。Ping 反映的是数据往返的物理时间。你连接的节点越远（比如人在亚洲却连接美国节点），Ping 值自然会越高。" },
    { q: "为什么香港节点反而比日本慢？", a: "虽然香港距离近理论上 Ping 更低，但如果该节点当前使用人数过多（节点拥堵）或你的宽带运营商去往香港的路由较差，实际下载速度可能反而不如相对空闲的日本节点。" },
    { q: "为什么晚上比白天慢？", a: "晚上通常是国际出口带宽使用的高峰期，许多运营商的跨国线路在这个时段会出现严重拥挤，导致丢包和降速。优秀的网络服务商会花费更高成本购买专线或优化路由来缓解这一问题。" },
    { q: "为什么测速很快但 YouTube 还是卡？", a: "Speedtest 测速节点和 YouTube 服务器的位置、路由可能不同。测速软件通常会自动连接离节点最近的测试端，而真实的流媒体播放可能受到跨域 CDN 或多重分发的影响。" },
    { q: "为什么 ChatGPT 能用但 Cursor 经常超时？", a: "ChatGPT 是单次网页对话，对短暂卡顿不敏感；而 Cursor（AI 编程编辑器）需要频繁、持续地在后台与模型保持连接通信。如果你的网络丢包严重或延迟极高（比如超过 300ms 且波动大），Cursor 的请求就更容易直接失败。" },
    { q: "打游戏应该选下载速度最高的节点吗？", a: "不应该。游戏几乎不需要很高的下载速度（通常几 Mbps 就足够了），但对延迟（Ping）、抖动（Jitter）和丢包极其敏感。打游戏应该优先选择延迟低且稳定的节点（通常在 60ms 以内）。" },
    { q: "换 DNS 可以让 VPN 变快吗？", a: "DNS 只是将域名（如 google.com）翻译成 IP 地址的“指路牌”。换一个好 DNS 可以让网页在“刚开始加载”那一下变快（解析快），但它无法提升你正在下载文件或看视频时的实际带宽上限。" },
    { q: "Wi-Fi 会影响 VPN 速度吗？", a: "非常大。如果你隔着两堵墙连接 2.4GHz Wi-Fi，即使 VPN 节点再快，最终体验也一定很卡。建议在遇到问题时，先靠近路由器或使用网线直连进行对比测试。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "为什么连接 VPN 后网速会变慢？", "item": "https://runainav.com/guides/vpn-slow-speed" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "为什么连接VPN后网速会变慢？原因与排查方法",
    "description": "连接VPN后出现网速下降、延迟升高或视频卡顿，通常与节点距离、线路拥堵、加密开销、本地网络和运营商路由有关。本文用简单方法教你判断原因并逐步排查。",
    "author": { "@type": "Organization", "name": "RunAI" }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)]">
      <Header />
      <ArticleStickyBar sections={[
         { id: 'concept', navLabel: '先看结论' },
         { id: 'metrics', navLabel: '速度指标' },
         { id: 'reason1', navLabel: '节点距离' },
         { id: 'reason2', navLabel: '线路拥堵' },
         { id: 'reason3', navLabel: '本地网络' },
         { id: 'reason4', navLabel: '运营商路由' },
         { id: 'reason5', navLabel: '加密与负载' },
         { id: 'how-to-test', navLabel: '怎么测试' },
         { id: 'ai-and-video', navLabel: 'AI与视频' },
         { id: 'solution', navLabel: '怎么改善' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />
      <FloatingBackButton fallbackHref="/guides" />
      
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">VPN 网速排查</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">为什么连接 VPN 后网速会变慢？</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            从节点距离、线路拥堵、延迟、丢包到本地 Wi-Fi，一次看懂连接后速度下降最常见的原因。
          </p>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">网络环境</span>
            <span>更新于 2026-09-04</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-5xl py-12 relative">
        <div id="article-sticky-trigger" className="absolute top-0 w-full h-1 pointer-events-none opacity-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          <div className="lg:col-span-9">
            
            {/* Quick Read */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8 rounded-2xl border border-brand-100 shadow-sm mb-10 relative overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 m-0">
                <Zap className="w-5 h-5 text-brand-500" />
                30 秒速读
              </h2>
              <ul className="space-y-3 text-gray-700 m-0 p-0 list-none">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>连接 VPN 后速度下降一定程度上很常见，因为数据需要经过额外的网络路径加密和转发。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>速度下降不只取决于 VPN 本身，还受到本地宽带、Wi-Fi、运营商线路、节点距离和服务器负载影响。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>“下载速度快”绝对不等于“延迟低”。这是两个完全不同的指标。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>AI 聊天通常不需要特别高的带宽，更重要的是连接稳定。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>视频更依赖持续下载速度。游戏更看重 Ping、Jitter 和丢包。</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-brand max-w-none prose-h2:scroll-mt-32 prose-h3:scroll-mt-32 prose-h2:mt-10 prose-p:text-gray-600 prose-headings:text-gray-900">
              
              <h2 id="concept" className="mt-0 mb-4">为什么连接以后网络会多走一段路？</h2>
              <p>为了理解为什么网速会变化，我们需要用非常简单的比喻来看看数据到底去了哪。</p>
              
              <div className="flex flex-col gap-4 sm:gap-6 my-8 not-prose">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 mt-0 text-sm uppercase tracking-wider">普通连接</h4>
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium text-gray-700 shadow-sm flex items-center gap-2"><Smartphone className="w-4 h-4"/> 你的设备</div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg font-medium text-gray-700 shadow-sm flex items-center gap-2"><Server className="w-4 h-4"/> 网站服务器</div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 mb-0">数据直接前往目标服务。</p>
                </div>
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h4 className="font-bold text-brand-900 mb-4 mt-0 text-sm uppercase tracking-wider">通过网络节点</h4>
                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <div className="bg-white border border-brand-300 px-4 py-2 rounded-lg font-medium text-gray-700 shadow-sm flex items-center gap-2"><Smartphone className="w-4 h-4"/> 你的设备</div>
                    <ArrowRight className="w-5 h-5 text-brand-400" />
                    <div className="bg-brand-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2"><Globe className="w-4 h-4"/> 网络节点</div>
                    <ArrowRight className="w-5 h-5 text-brand-400" />
                    <div className="bg-white border border-brand-300 px-4 py-2 rounded-lg font-medium text-gray-700 shadow-sm flex items-center gap-2"><Server className="w-4 h-4"/> 网站服务器</div>
                  </div>
                  <p className="text-sm text-brand-700 mt-4 mb-0">为了建立加密连接并通过网络节点转发数据，通信会增加额外的网络路径和处理步骤，因此延迟和资源消耗可能增加。</p>
                </div>
              </div>

              <p>但这并不意味着连接后一定会慢得离谱，不同线路表现差异很大。</p>

              <h2 id="metrics" className="mb-4">速度到底看什么？</h2>
              <p>不要只讲 Mbps。评估网络体验需要看四个核心指标：</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-8 not-prose">
                <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500" /> 下载速度</div>
                  <p className="text-xs text-gray-500 font-mono mb-2 bg-gray-50 inline-block px-2 py-1 rounded">Mbps / MB/s</p>
                  <p className="text-sm text-gray-600 m-0">影响：视频缓冲、大文件下载、素材传输。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-green-500" /> 延迟 (Ping)</div>
                  <p className="text-xs text-gray-500 font-mono mb-2 bg-gray-50 inline-block px-2 py-1 rounded">ms (越低越好)</p>
                  <p className="text-sm text-gray-600 m-0">影响：网页响应速度、AI 对话反馈、游戏操作延迟。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-purple-500" /> 抖动 (Jitter)</div>
                  <p className="text-xs text-gray-500 font-mono mb-2 bg-gray-50 inline-block px-2 py-1 rounded">ms (波动幅度)</p>
                  <p className="text-sm text-gray-600 m-0">延迟是否稳定。一直稳定的 60ms 通常比在 30ms 到 240ms 之间跳动体验更好。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><ZapOff className="w-4 h-4 text-red-500" /> 丢包 (Loss)</div>
                  <p className="text-xs text-gray-500 font-mono mb-2 bg-gray-50 inline-block px-2 py-1 rounded">% (丢失比率)</p>
                  <p className="text-sm text-gray-600 m-0">数据有没有在路上丢失。高丢包易造成视频卡顿、断线重连、游戏瞬移、AI 请求失败。</p>
                </div>
              </div>

              <div className="bg-blue-50/50 border border-blue-100 p-5 sm:p-6 rounded-2xl my-8 flex items-start gap-4 not-prose shadow-sm">
                <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-900 mt-0 mb-2 text-base">新手提示：100 Mbps ≠ 100 MB/s</h4>
                  <p className="text-blue-800 text-sm m-0 leading-relaxed">
                    测速显示的 <code>Mbps</code> 中的 b 是小写的 bit（比特）。而下载文件显示的 <code>MB/s</code> 的 B 是大写的 Byte（字节）。<br/>
                    <strong>理论换算：8 bit ≈ 1 Byte。</strong> 即 <code>100 Mbps ≈ 12.5 MB/s</code>。<br/>
                    实际速度仍会受到协议、网络拥堵状态和服务器性能影响而打折。
                  </p>
                </div>
              </div>

              <h2 id="reason1" className="mb-4">节点距离为什么会影响速度？</h2>
              <p>光纤传输数据是物理过程。例如你人在亚洲，却选择连接位于美国或欧洲的节点，数据需要在海底光缆里跑更远，这通常直接导致延迟 (Ping) 飙升。</p>

              <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 my-8 text-white relative overflow-hidden not-prose shadow-lg">
                <div className="flex flex-col items-start gap-4">
                  <div className="bg-brand-500 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 relative z-10 text-sm shadow-sm">你的位置</div>
                  
                  <div className="flex items-center gap-3 relative z-10 ml-8">
                    <div className="w-8 border-t-2 border-dashed border-gray-600"></div>
                    <div className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-sm text-gray-200">香港 (较近)</div>
                  </div>
                  
                  <div className="flex items-center gap-3 relative z-10 ml-8">
                    <div className="w-16 border-t-2 border-dashed border-gray-600"></div>
                    <div className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-sm text-gray-200">日本 (中等)</div>
                  </div>
                  
                  <div className="flex items-center gap-3 relative z-10 ml-8">
                    <div className="w-24 border-t-2 border-dashed border-gray-600"></div>
                    <div className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-sm text-gray-200">新加坡 (中等)</div>
                  </div>
                  
                  <div className="flex items-center gap-3 relative z-10 ml-8">
                    <div className="w-48 border-t-2 border-dashed border-gray-600"></div>
                    <div className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-sm text-gray-200">美国 (较远)</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-800 mb-0 leading-relaxed">免责声明：距离只是影响延迟的因素之一。实际表现还取决于运营商路由、节点负载、线路质量和服务器状态。请先从相对近的地区开始测试，再根据实际结果选择，不要误以为距离最近一定最快。</p>
              </div>

              <h2 id="reason2" className="mb-4">节点拥堵</h2>
              <p>很多用户同时使用同一个节点时，服务器带宽和出口资源可能变得紧张。白天正常，晚上变慢，测速忽高忽低，换另一个同地区节点立刻恢复，这是典型的拥堵表现。高峰期表现才是判断线路质量的重要指标。</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                <div className="bg-green-50 border border-green-200 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-green-800 mt-0 mb-4 text-base">低负载节点</h4>
                  <div className="flex gap-2 mb-4">
                    <User className="w-5 h-5 text-green-600"/><User className="w-5 h-5 text-green-600"/><User className="w-5 h-5 text-green-600"/>
                  </div>
                  <div className="w-full bg-green-200 rounded-full h-3 mb-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <p className="text-sm font-medium text-green-800 mb-1">体验：通常较稳定</p>
                  <p className="text-xs text-green-700 m-0">出口带宽宽裕，请求处理迅速，鲜有丢包。</p>
                </div>
                
                <div className="bg-red-50 border border-red-200 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-red-800 mt-0 mb-4 text-base">高峰期拥堵节点</h4>
                  <div className="flex gap-1 flex-wrap mb-4">
                    {[...Array(8)].map((_, i) => <User key={i} className="w-5 h-5 text-red-600"/>)}
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-3 mb-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-sm font-medium text-red-800 mb-1">体验：波动、缓冲、延迟增加</p>
                  <p className="text-xs text-red-700 m-0">出口资源高度紧张，易出现排队挤占和高丢包。</p>
                </div>
              </div>

              <h2 id="reason3" className="mb-4">本地网络本身已经有问题</h2>
              <p>很多用户容易忽略，哪怕买了顶级节点，基础网络不行依然体验极差。</p>
              
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 my-8 shadow-sm not-prose">
                <h4 className="font-bold text-gray-900 mt-0 mb-6 flex items-center gap-2 text-lg"><Wifi className="w-6 h-6 text-gray-500" /> 先别急着怪节点</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    "断开节点后原始网络正常吗？",
                    "Wi-Fi 信号是否满格且在 5GHz 频段？",
                    "是否正在后台下载其他大文件？",
                    "手机热点是否出现信号波动？",
                    "路由器是否距离太远或隔墙太多？",
                    "其他设备是否正在大量占用带宽？"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded border border-gray-300 flex-shrink-0 mt-0.5 bg-gray-50 flex items-center justify-center"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-6 mb-0 pt-4 border-t border-gray-100">强烈建议：先断开连接测一次基础网络。</p>
              </div>

              <h2 id="reason4" className="mb-4">运营商与国际路由</h2>
              <p>不同网络运营商前往海外服务器的路径可能完全不同。同一个节点，用户 A 很快，用户 B 比较慢，不一定代表节点造假，可能是本地运营商、所在地区、国际出口和路由路径不同导致。</p>

              <h2 id="reason5" className="mb-4">协议和加密开销及节点负载</h2>
              <p>网络连接需要对数据加密、封装、转发，这会带来一定资源消耗。现代电脑和手机通常可以较好处理，但性能较低的路由器或老设备仍可能受影响。同时，看到节点在线不等于服务器完全没有负载，CPU 和内存压力都会影响体验。</p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-10 not-prose">
                <h3 className="font-bold text-gray-900 text-lg mb-6 text-center">快速判断：你遇到的是哪一种？</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "一连接速度马上明显下降", check: "原始网络 / 节点距离 / 负载", advice: "先测未连接状态，再测试相同条件下的节点。" },
                    { title: "白天正常，晚上明显变慢", check: "高峰拥堵", advice: "同时间测试其他地区的节点。" },
                    { title: "Speedtest 很快，网页还是慢", check: "目标网站 / DNS / CDN / 路由", advice: "不要只依赖 Speedtest，它只代表理论上限。" },
                    { title: "ChatGPT 正常，Cursor 超时", check: "连接稳定性 / 丢包 / 持续连接", advice: "稳定比单纯高下载速度更重要。" },
                    { title: "视频正常，但游戏延迟很高", check: "Ping / Jitter / 路由", advice: "游戏需求与视频完全不同，看重延迟。" },
                    { title: "所有节点都慢", check: "本地网络 / ISP / 客户端设备", advice: "先断开节点，彻查基础宽带网络。" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h5 className="font-bold text-gray-900 mt-0 mb-3 text-sm">{item.title}</h5>
                      <p className="text-xs text-gray-500 mb-3"><strong>优先检查：</strong>{item.check}</p>
                      <p className="text-xs text-brand-700 m-0 bg-brand-50 p-2.5 rounded-lg leading-relaxed">{item.advice}</p>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="how-to-test" className="mb-6">怎么判断到底哪里变慢？（测速方法）</h2>
              
              <div className="not-prose my-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { num: "01", title: "断开节点", desc: "测试 Download、Upload、Ping" },
                    { num: "02", title: "连接目标节点", desc: "连接海外节点" },
                    { num: "03", title: "同测速服务器", desc: "使用完全相同的测速点再测" },
                    { num: "04", title: "重复测试 3 次", desc: "避免单次测试误差太大" },
                    { num: "05", title: "测试不同节点", desc: "对比香港、日本、美国等" },
                    { num: "06", title: "实际场景测试", desc: "YouTube / ChatGPT / Cursor" }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col gap-2 relative">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0 border-2 border-white shadow-sm z-10">{step.num}</div>
                        {i !== 5 && <div className="hidden md:block absolute top-4 left-10 w-full border-t-2 border-dashed border-gray-100"></div>}
                      </div>
                      <div className="mt-1">
                        <h5 className="font-bold text-gray-900 m-0 text-sm mb-1">{step.title}</h5>
                        <p className="text-gray-500 text-xs m-0 leading-relaxed pr-2">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-8 mb-4">自己测速时，可以记录这些数据</h3>
              <p>自己测速时，可以重点记录下面这些指标：<strong>Ping</strong> 看响应速度，<strong>Download / Upload</strong> 看传输能力，<strong>丢包</strong>看连接稳定性，最后再结合实际使用体验一起判断。</p>
              
              <div className="overflow-x-auto my-6 not-prose rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-5 py-3.5 font-bold">节点状态</th>
                      <th className="px-5 py-3.5 font-bold">Ping</th>
                      <th className="px-5 py-3.5 font-bold">Download</th>
                      <th className="px-5 py-3.5 font-bold">Upload</th>
                      <th className="px-5 py-3.5 font-bold">丢包</th>
                      <th className="px-5 py-3.5 font-bold">实际体验</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-medium">未连接</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-medium">香港节点</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-medium">日本节点</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td></tr>
                    <tr className="hover:bg-gray-50"><td className="px-5 py-3 font-medium">美国节点</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td><td className="px-5 py-3 text-gray-400">—</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-8 italic">建议在相同设备、相同网络和相同测速服务器下测试 2～3 次，再比较不同节点，避免只看一次结果下结论。</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                <div className="bg-white border border-red-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 bg-red-100 text-red-700 px-3 py-1 text-xs font-bold rounded-bl-lg">❌ 不推荐测法</div>
                  <ul className="space-y-3 m-0 mt-4 p-0 list-none text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-red-400">•</span> 只测一次就下结论</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">•</span> 每次测速都随机换测试服务器</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">•</span> 一边下载大文件一边测速</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">•</span> 拿白天和晚上直接作对比</li>
                    <li className="flex items-start gap-2"><span className="text-red-400">•</span> 只看下载速度，不看 Ping 延迟</li>
                  </ul>
                </div>
                <div className="bg-white border border-green-100 p-5 sm:p-6 rounded-2xl relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 bg-green-100 text-green-800 px-3 py-1 text-xs font-bold rounded-bl-lg">✅ 更合理测法</div>
                  <ul className="space-y-3 m-0 mt-4 p-0 list-none text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span> 保持相同测试条件（控制变量）</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span> 每个节点至少重复测试 3 次</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span> 手动锁定同一个目标测速服务器</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span> 综合记录 Ping、Download、丢包</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span> 结合真实的网站/软件应用实测</li>
                  </ul>
                </div>
              </div>

              <h2 id="ai-and-video" className="mb-6">场景差异：使用 AI / 视频 / 游戏时该看什么？</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 my-8 not-prose">
                <div className="bg-white border border-gray-200 p-5 xl:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-5"><MessageSquare className="w-6 h-6"/></div>
                  <h4 className="font-bold text-gray-900 m-0 mb-3 text-base">AI 聊天与编程</h4>
                  <div className="text-xs font-medium text-gray-600 mb-4 bg-gray-100 inline-block px-2.5 py-1.5 rounded border border-gray-200">重点：稳定性 / 丢包 / 持续连接</div>
                  <p className="text-sm text-gray-600 m-0 leading-relaxed">文字对话不需要极高带宽，更重要的是稳定和少丢包。连接不稳定容易导致 Cursor 等频繁通信请求失败、超时或 Agent 中断。</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 xl:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center mb-5"><Play className="w-6 h-6"/></div>
                  <h4 className="font-bold text-gray-900 m-0 mb-3 text-base">在线视频</h4>
                  <div className="text-xs font-medium text-gray-600 mb-4 bg-gray-100 inline-block px-2.5 py-1.5 rounded border border-gray-200">重点：持续下载速度 / 稳定性</div>
                  <p className="text-sm text-gray-600 m-0 leading-relaxed">视频更依赖源源不断的持续带宽，只要下载速度能跑满视频码率且不经常断流，一定的 Ping 延迟也可以被视频缓冲掩盖。</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 xl:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center mb-5"><Gamepad2 className="w-6 h-6"/></div>
                  <h4 className="font-bold text-gray-900 m-0 mb-3 text-base">在线竞技游戏</h4>
                  <div className="text-xs font-medium text-gray-600 mb-4 bg-gray-100 inline-block px-2.5 py-1.5 rounded border border-gray-200">重点：Ping / Jitter / 0 丢包</div>
                  <p className="text-sm text-gray-600 m-0 leading-relaxed">高带宽不代表低延迟。500Mbps+180ms 体验远不如 100Mbps+稳定 40ms。游戏极度依赖低延迟、低抖动和 0 丢包路由。</p>
                </div>
              </div>

              <h2 id="solution" className="mb-6">连接后变慢，可以先做什么？</h2>
              <p>排除法永远是排错的真理，按以下顺序：</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8 not-prose">
                {[
                  "1 先测基础网络", "2 试同地区节点", "3 测较近节点", "4 避开拥堵节点",
                  "5 检查 Wi-Fi", "6 关大流量任务", "7 比较时间段", "8 联系服务商"
                ].map((text, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center text-center gap-2 hover:bg-white hover:border-gray-300 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center">{text.split(" ")[0]}</div>
                    <span className="text-xs sm:text-sm font-medium text-gray-800">{text.split(" ").slice(1).join(" ")}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50/80 p-5 sm:p-6 rounded-2xl my-8 border border-amber-100 flex items-start gap-4 shadow-sm not-prose">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mt-0 mb-2 text-base">排错大忌：疯狂乱换</h4>
                  <p className="text-amber-800 text-sm m-0 leading-relaxed">一次只改变一个变量（例如先只换节点）。如果你同时换节点、换 DNS、换浏览器，还顺手重启路由器，将很难判断真正原因。</p>
                </div>
              </div>

              <h3 className="mt-12 mb-6">新手常见的错误判断</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 not-prose">
                {[
                  { m: "Ping 低就一定最快", a: "低 Ping 只代表握手快，如果该节点带宽被挤爆，下载速度照样惨不忍睹。" },
                  { m: "Speedtest 快就一定稳定", a: "瞬时的测速高峰掩盖不了常态化断流或隐性高丢包等稳定性问题。" },
                  { m: "美国节点最适合所有 AI", a: "多数 AI 已部署全球 CDN，亚洲用户连日本或新加坡响应往往更迅速。" },
                  { m: "贵的套餐一定低延迟", a: "物理距离的下限无法靠金钱突破，专线跨洋也至少要几十到上百毫秒。" },
                  { m: "所有人同节点体验一样", a: "不同城市、不同运营商（电信/联通/移动）去同一节点的本地路由千差万别。" }
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-red-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="font-bold text-red-800 text-sm mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> {item.m}</div>
                    <p className="text-gray-600 text-xs m-0 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-gray-500 text-sm">
                如果想看一份包含不同地区节点延迟和下载速度的实际测试案例，可以<Link href="/vpn/weifeng">查看微风网络实测记录</Link>。
              </p>

              <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 mt-12 mb-10 shadow-lg not-prose">
                <h3 className="text-xl font-bold mt-0 mb-6 flex items-center gap-3"><CheckCircle className="w-6 h-6 text-brand-400"/> 一句话判断</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-sm">
                  <div className="flex border-b border-gray-800 pb-3"><span className="text-gray-400 w-24 shrink-0">网页慢：</span><span className="text-gray-200">看延迟与目标网站</span></div>
                  <div className="flex border-b border-gray-800 pb-3"><span className="text-gray-400 w-24 shrink-0">视频卡：</span><span className="text-gray-200">看持续下载速度</span></div>
                  <div className="flex border-b border-gray-800 pb-3"><span className="text-gray-400 w-24 shrink-0">游戏延迟：</span><span className="text-gray-200">看 Ping / Jitter / 丢包</span></div>
                  <div className="flex border-b border-gray-800 pb-3"><span className="text-gray-400 w-24 shrink-0">AI 经常断：</span><span className="text-gray-200">看稳定性和防丢包</span></div>
                  <div className="flex sm:col-span-2 pt-2"><span className="text-brand-400 font-bold w-24 shrink-0">所有节点慢：</span><span className="font-bold">立刻停止怪节点，先彻底排查本地网络。</span></div>
                </div>
              </div>

              <h2 id="faq">常见问题 FAQ</h2>
              
              <div className="space-y-6 mt-8">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-5 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 m-0 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-sm not-prose">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-4">排查完本地还是卡顿？</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">如果已经排除了本地宽带的问题，但现有线路仍长期不稳定，可以比较不同网络方案的覆盖、套餐和测试记录。</p>
                <Link href="/vpn" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                  查看 RunAI 网络品牌
                </Link>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 lg:block mt-12 lg:mt-0 order-last">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/ai-network" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI 网络环境与常见问题
                  </Link>
                  <Link href="/guides/cursor-build-blog" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Cursor 搭建博客实战
                  </Link>
                  <Link href="/vpn/weifeng" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    微风网络实测记录
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
