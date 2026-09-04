import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import { Zap, Check, ChevronRight, AlertTriangle, Info, Terminal, Activity, ZapOff, Wifi } from 'lucide-react';
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
        <div className="container mx-auto px-4 max-w-4xl">
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
      <section className="container mx-auto px-4 max-w-4xl py-12 relative">
        <div id="article-sticky-trigger" className="absolute top-0 w-full h-1 pointer-events-none opacity-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            
            {/* Quick Read */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm mb-10 relative overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-500" />
                30 秒速读
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>连接 VPN 后速度下降一定程度上很常见，因为数据需要经过额外的网络路径加密和转发。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>速度下降不只取决于 VPN 本身，还受到本地宽带、Wi-Fi 信号、运营商线路、节点物理距离和服务器当前负载影响。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>“下载速度快”绝对不等于“延迟低”。这是两个完全不同的指标。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>AI 聊天对话通常不需要极高的带宽，更重要的是连接稳定（不丢包）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>在线视频依赖持续的下载速度；而竞技游戏则最看重 Ping、Jitter 和 0 丢包。</span>
                </li>
              </ul>
            </div>

            <div className="prose prose-brand max-w-none prose-h2:scroll-mt-32 prose-h3:scroll-mt-32 prose-h2:mt-12">
              
              <h2 id="concept" className="mt-0">为什么连接以后网络会多走一段路？</h2>
              <p>为了理解为什么网速会变化，我们需要用非常简单的比喻来看看数据到底去了哪。</p>
              <p><strong>正常上网时：</strong><br/>
              你的设备 → 网站服务器</p>
              <p><strong>连接网络节点（VPN）以后：</strong><br/>
              你的设备 → <strong>【网络节点】</strong> → 网站服务器</p>
              <p>在这个过程中，你的数据不仅多走了一站路，而且为了安全和穿越限制，数据在你的设备上会被<strong>加密</strong>，到达节点后再<strong>解密转发</strong>。理论上，只要增加了中间商和处理环节，延迟和资源消耗通常都会不可避免地增加。</p>
              <p>但请注意，这并不意味着“连接后一定卡得没法用”。不同品牌、不同线路、不同协议之间表现差异极大，有些优质专线甚至能帮你绕过拥堵的公共网络。</p>

              <h2 id="metrics">速度到底看什么？</h2>
              <p>很多新手只看测速软件跑出的大数字，其实评估网络体验需要看四个核心指标：</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500" /> 下载速度</div>
                  <p className="text-sm text-gray-600 m-0 mb-2">单位：Mbps 或 MB/s</p>
                  <p className="text-sm text-gray-500 m-0">决定你能多快下完大文件，或者看 4K 视频会不会缓冲。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-green-500" /> 延迟 (Ping)</div>
                  <p className="text-sm text-gray-600 m-0 mb-2">单位：ms (毫秒)</p>
                  <p className="text-sm text-gray-500 m-0">数值越低越好。决定了你点下按钮后，网页、游戏和 AI 响应有多快。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Activity className="w-4 h-4 text-purple-500" /> 抖动 (Jitter)</div>
                  <p className="text-sm text-gray-600 m-0 mb-2">单位：ms</p>
                  <p className="text-sm text-gray-500 m-0">反映延迟是否稳定。一直稳在 60ms 远好于在 30ms 到 240ms 之间疯狂横跳。</p>
                </div>
                <div className="border border-gray-200 p-4 rounded-xl bg-white shadow-sm">
                  <div className="font-bold text-gray-900 mb-2 flex items-center gap-2"><ZapOff className="w-4 h-4 text-red-500" /> 丢包 (Packet Loss)</div>
                  <p className="text-sm text-gray-600 m-0 mb-2">单位：%</p>
                  <p className="text-sm text-gray-500 m-0">数据有没有在路上丢失。高丢包是造成视频卡顿、游戏瞬移、AI请求超时的元凶。</p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl my-6 flex items-start gap-3">
                <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800 mt-0 mb-1">新手提示：Mbps 和 MB/s 不是一回事</h4>
                  <p className="text-gray-600 text-sm m-0">
                    测速软件通常显示 <code>100 Mbps</code>，这里的 b 是小写的 bit（比特）。而我们平时下载文件看到的 <code>MB/s</code> 的 B 是大写的 Byte（字节）。<br/>
                    简单来说：8 bit ≈ 1 Byte。理论上 <code>100 Mbps ≈ 12.5 MB/s</code>。实际还会受到网络损耗影响打折，不要以为 100Mbps 就能一秒下 100 兆。
                  </p>
                </div>
              </div>

              <h2 id="reason1">原因 1：节点距离为什么会影响速度？</h2>
              <p>光纤传输数据是物理过程。例如你人在亚洲，却选择连接位于美国或欧洲的节点，数据需要在海底光缆里跑大半个地球。这通常直接导致：<strong>延迟 (Ping) 飙升</strong>。</p>
              <p>但请注意，<strong>最近的节点不一定绝对最快</strong>。因为即使节点在隔壁，如果它当前负载过高、或者你家宽带连接它的路由绕路，实际体验依然会很差。建议：先从相对近的地区开始测试，再根据实际结果选择。</p>

              <h2 id="reason2">原因 2：节点拥堵</h2>
              <p>VPN 服务器就像高速公路。如果很多用户同时挤在同一个节点上，服务器的总带宽和出口资源就会变得紧张。</p>
              <p><strong>常见表现：</strong>白天丝滑，晚高峰（如晚上 8 点 - 11 点）变得奇慢无比，测速忽高忽低，视频疯狂缓冲。切换到另一个同地区节点后突然恢复。</p>
              <p>对于用户来说，<strong>晚高峰的测速表现才是判断一条线路真实质量的最重要指标</strong>。</p>

              <h2 id="reason3">原因 3：本地网络本身已经有问题</h2>
              <p>这是最容易被忽略的盲区。很多时候大家一卡就觉得是节点坏了，但如果你：</p>
              <ul>
                <li>连接着只有一格信号的 Wi-Fi</li>
                <li>路由器隔了三堵墙</li>
                <li>连接在极易受干扰的 2.4GHz 频段上</li>
                <li>室友正在疯狂下载</li>
              </ul>
              <p>那么即使你购买了全世界最贵的专线，最终体验依然会差。<strong>排查建议：</strong>先断开连接，用本地基础网络测一次速，看看是不是你家 Wi-Fi 已经卡死了。</p>

              <h2 id="reason4">原因 4：运营商与国际路由</h2>
              <p>不同的网络宽带运营商（电信、联通、移动、长城宽带等）前往海外服务器的“出海路线”是完全不同的。</p>
              <p>这意味着：连接完全相同的同一个节点，用户 A 可能非常快，而用户 B 可能非常慢。这不代表节点造假，而是你们的基础线路和国际出口不同导致的路由差异。</p>

              <h2 id="reason5">原因 5：协议和加密开销及节点负载</h2>
              <p>网络代理客户端在后台需要对数据进行高强度的加密、封装和转发。现代手机和电脑通常可以毫无压力地处理，但如果你的设备是一台非常老旧的路由器，CPU 扛不住复杂的加密协议计算，也会导致网速上限被锁死卡住。</p>
              <p>同时，看到节点“绿灯在线”，不等于节点“完全没有负载”。服务器本身的 CPU、内存占满都会导致你的请求响应变慢。</p>
              <p><em>延伸阅读：<Link href="/guides/ai-network">AI 网络环境与常见问题排查指南</Link></em></p>

              <h2 id="how-to-test">怎么判断到底哪里变慢？（测速方法）</h2>
              <p>遇到问题不要盲目切换，请按以下实用步骤排查：</p>

              <ol>
                <li><strong>Step 1：</strong>彻底断开 VPN / 代理客户端，在纯本地网络下跑一次 Speedtest，记录 <code>Ping</code>、<code>Download</code>、<code>Upload</code>。</li>
                <li><strong>Step 2：</strong>连接节点，使用<strong>完全相同的测速服务器</strong>再次测试。</li>
                <li><strong>Step 3：</strong>每次测速至少重复 3 次，避免单次偶然误差。</li>
                <li><strong>Step 4：</strong>测试不同地区的节点（如香港、日本、新加坡、美国），观察数据差异。</li>
                <li><strong>Step 5：</strong>在你的实际使用场景（YouTube、ChatGPT、Cursor 等）中真实体验一下，不要只相信测速数字。</li>
              </ol>

              <p>你可以自己创建一个简单的小表格记录（以下为空模板示例，请填入自己的真实数据）：</p>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 border-b">节点状态</th>
                      <th className="px-4 py-3 border-b">Ping</th>
                      <th className="px-4 py-3 border-b">Download</th>
                      <th className="px-4 py-3 border-b">Upload</th>
                      <th className="px-4 py-3 border-b">丢包</th>
                      <th className="px-4 py-3 border-b">实际体验</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr><td className="px-4 py-3">未连接</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td></tr>
                    <tr><td className="px-4 py-3">香港 01</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td></tr>
                    <tr><td className="px-4 py-3">日本 02</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td></tr>
                    <tr><td className="px-4 py-3">美国 01</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td><td className="px-4 py-3">—</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-xl">
                <h4 className="font-bold text-blue-900 mt-0 mb-2">为什么 Speedtest 很快，但网页还是慢？</h4>
                <p className="text-blue-800 text-sm m-0">Speedtest 的测速原理是找到离节点最近的最佳服务器塞满测速数据包。但你实际访问的网站可能遇到目标服务器响应慢、CDN 解析绕路、DNS 污染、或者建连协议过时等问题。测速软件只代表链路理论上限，不是所有网站真实体验的绝对标准。</p>
              </div>

              <h2 id="ai-and-video">使用 ChatGPT、Claude、Cursor 时该看什么？</h2>
              <p><strong>文字类 AI (ChatGPT / Claude)：</strong>流量消耗通常非常小。对于它们而言，<strong>稳定连接和零丢包</strong>远比下载能跑几百兆更重要。</p>
              <p><strong>编程类 AI (Cursor / Copilot)：</strong>这类 Agent 编辑器需要极为频繁、持续地在后台与模型保持通信。<Link href="/guides/cursor-build-blog">在 Cursor 开发项目时</Link>，如果你频繁遇到响应失败或请求超时，绝大概率是当前节点断流、丢包严重或是你的网络 IP 被拦截。</p>

              <h3 className="mt-8">视频用户看什么？</h3>
              <p>在线看 4K 高清视频，主要依赖于<strong>持续稳定的下载速度 (Download)</strong> 和优秀的缓存机制，Ping 的高低反而不是首要问题（视频缓冲不差那 100 毫秒）。</p>

              <h3 className="mt-8">游戏为什么又不一样？</h3>
              <p>游戏与视频截然相反！竞技类游戏几乎不需要极高的下载带宽（绝大多数网络游戏每秒传输数据仅在几十 KB），但游戏对延迟、Jitter 和丢包极其敏感。举个极端的例子：<br/>
              <code>500Mbps 下载 + 180ms 延迟</code> 的节点，玩 FPS 游戏会让你痛不欲生；<br/>
              <code>100Mbps 下载 + 稳定 40ms 且 0 丢包</code> 的节点，体验会如丝般顺滑。</p>

              <h2 id="solution">连接后变慢，可以先做什么？</h2>
              <p>排除法永远是网络排错的真理，请按以下顺序尝试：</p>
              <ol>
                <li>先断开连接，测试原始网络是否正常。</li>
                <li>Wi-Fi 用户尝试靠近路由器，或测试连接稳定得多得 5GHz 频段 / 网线直连。</li>
                <li>关闭后台正在大量下载 / 上传 / 测速的程序。</li>
                <li>尝试切换同地区的其他空闲节点，避开明显拥堵的时段。</li>
                <li>尝试物理距离相对更近的节点（例如身在亚洲优先测香港、日本、新加坡）。</li>
                <li>彻底关闭客户端，重新启动再次连接。</li>
              </ol>

              <div className="bg-amber-50 p-5 rounded-xl my-6 border border-amber-100 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 mt-0 mb-2">排错大忌：疯狂乱换</h4>
                  <p className="text-amber-800 text-sm m-0">排查问题时，请务必<strong>一次只改变一个变量</strong>（比如只换节点，先不动别的）。如果你同时换了节点、换了 DNS、换了浏览器、还顺手重启了路由器，你永远无法得知到底是谁解决了问题。</p>
                </div>
              </div>

              <h3 className="mt-8">新手常见的错误判断</h3>
              <ul className="space-y-4 list-none p-0">
                <li>❌ <strong>节点 Ping 低就一定最快</strong><br/>
                解答：低 Ping 只代表握手快，如果节点带宽已被挤爆，实际下载速度可能只有几十 KB/s。</li>
                <li>❌ <strong>Speedtest 下载高就一定最稳定</strong><br/>
                解答：瞬时的测速高峰掩盖不了可能存在的断流和高丢包问题。</li>
                <li>❌ <strong>美国节点一定最适合海外 AI</strong><br/>
                解答：多数 AI 已经全球部署 CDN，日本、新加坡等节点往往对亚洲用户响应更快。</li>
                <li>❌ <strong>贵的套餐一定 Ping 更低</strong><br/>
                解答：物理距离的上限无法被金钱突破，哪怕再贵的专线跨太平洋也要几十毫秒。</li>
                <li>❌ <strong>所有人连接同一个节点速度应该一样</strong><br/>
                解答：不同地区、不同运营商（电信/联通/移动）的本地路由千差万别，体验自然不同。</li>
              </ul>

              <p className="mt-8 text-gray-500 text-sm italic">如果想看一份包含不同地区节点延迟和下载速度的实际测试案例，可以参考 RunAI 的<Link href="/vpn/weifeng">微风网络测速记录</Link>。</p>

              <h2 id="faq">常见问题 FAQ</h2>
              
              <div className="space-y-6 mt-8">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 m-0 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-4">排查完本地还是卡顿？</h3>
                <p className="text-gray-600 mb-6">如果已经排除了本地 Wi-Fi 和宽带的问题，但现有线路仍长期表现不稳定、断流，可以比较不同网络方案的节点覆盖、套餐和测试记录，寻找更适合你运营商路由的服务商。</p>
                <Link href="/vpn" className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-900 font-medium rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                  查看 RunAI 网络品牌对比
                </Link>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/ai-network" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    AI 网络环境与常见登录问题排查
                  </Link>
                  <Link href="/guides/cursor-build-blog" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    Cursor 搭建个人博客教程
                  </Link>
                  <Link href="/vpn/weifeng" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    微风网络测速实录
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
