import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, Info, Zap, ChevronRight, XCircle, Globe, Monitor, ShieldAlert, FileImage, Code2, MessageSquare, AlertCircle, Server, Activity, ArrowDown, CheckCircle, User as UserRound } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI工具打不开怎么办？网络环境与常见问题 | RunAI',
  description: '使用ChatGPT、Claude、Gemini等海外AI工具时，若遇到打不开、登录失败或加载缓慢，可从网络连接、账号地区、DNS与官方支持范围逐项排查。',
  canonical: '/guides/ai-network',
  type: 'article',
});

const faqData = [
  { q: "AI 网站打不开一定是网络问题吗？", a: "不一定。有可能是 AI 官方服务器出现故障，或者是你的浏览器缓存和 Cookie 冲突导致的加载失败。建议先查看官方的状态页面确认。" },
  { q: "为什么 ChatGPT 能用，Claude 不能用？", a: "不同的 AI 服务有各自的服务地区限制和产品政策。ChatGPT 正常运行，并不代表当前的连接状态或账号环境同样符合 Claude 的要求。" },
  { q: "AI 登录失败怎么办？", a: "首先确认账号是否有效、所在地区是否符合服务范围。其次可以尝试清除浏览器该网站的 Cookie、使用无痕模式或者更换设备来排除本地缓存干扰。" },
  { q: "换节点以后为什么还是打不开？", a: "部分 AI 服务可能受到账号状态、服务地区、浏览器缓存或产品政策等综合因素影响。此外，系统旧的 DNS 缓存也可能导致解析异常。" },
  { q: "DNS 会影响 ChatGPT 或 Claude 吗？", a: "DNS 负责把网址解析为 IP 地址，错误的 DNS 配置可能导致网站无法加载。但 DNS 不是代理，它不能改变你的实际网络所在地。" },
  { q: "AI 使用需要很高的网速吗？", a: "日常的文本对话对网速要求不高，更看重连接的稳定性（丢包率低）。但在进行大量代码同步（如 Cursor）或图片、视频素材上传下载时，带宽传输速度会明显影响体验。" },
  { q: "为什么手机能用但电脑不能用？", a: "这可能是由于电脑端浏览器缓存了旧的错误数据、安装了冲突的扩展插件，或者是电脑系统的网络/DNS 配置与手机不同所致。" },
  { q: "AI 服务突然不能用了怎么办？", a: "先不要急于修改网络设置，第一步先确认 AI 官方是否在维护。如果官方正常，再依次排查浏览器、账号状态以及网络环境是否有变动。" }
];

export default function AINetworkGuidePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "AI工具打不开怎么办？", "item": "https://runainav.com/guides/ai-network" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI 工具打不开怎么办？网络环境与常见问题排查",
    "description": "使用ChatGPT、Claude、Gemini等海外AI工具时，若遇到打不开、登录失败或加载缓慢，可从网络连接、账号地区、DNS与官方支持范围逐项排查。",
    "author": {
      "@type": "Organization",
      "name": "RunAI"
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)] text-gray-900">
      <Header />
      <ArticleStickyBar sections={[
         { id: 'quick-summary', navLabel: '30秒速读' },
         { id: 'symptoms', navLabel: '常见症状' },
         { id: 'checklist', navLabel: '排查顺序' },
         { id: 'account-region', navLabel: '账号与地区' },
         { id: 'network-dns', navLabel: '网络与 DNS' },
         { id: 'speed', navLabel: '速度与稳定性' },
         { id: 'different-ai', navLabel: '不同场景' },
         { id: 'mistakes', navLabel: '常见误区' },
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
            <span className="text-gray-900 font-medium">AI 工具网络环境指南</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600 shadow-sm border border-purple-100/50">
              <Zap className="w-10 h-10" />
            </div>
            
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">AI 工具打不开怎么办？</h1>
              <p className="text-xl text-gray-600 mb-0 leading-relaxed">从网络连接、账号地区、浏览器到服务支持范围，一步步排查常见 AI 使用问题。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 max-w-5xl py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          <div className="lg:col-span-9">
            
            {/* 30秒速读 */}
            <div id="quick-summary" className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-sm mb-12 scroll-mt-32">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-blue-500" /> 先记住这三件事
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">1</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">不一定是网络问题</h3>
                  <p className="text-xs text-gray-600 m-0 leading-relaxed">很多时候是 AI 官方大面积宕机，或者是你的浏览器缓存冲突、账号权限问题。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">2</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">能打开 ≠ 都能用</h3>
                  <p className="text-xs text-gray-600 m-0 leading-relaxed">高级模型、图片生成和文件上传，对你的网络稳定性和账号权限可能有更严格的要求。</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">3</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">不要一开始就乱改设置</h3>
                  <p className="text-xs text-gray-600 m-0 leading-relaxed">按照本文顺序，一次只改变一个变量，逐步排查，避免把原本正常的配置改坏。</p>
                </div>
              </div>
            </div>

            {/* 6 Symptom Cards */}
            <div id="symptoms" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">你遇到的是哪一种？</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { title: "官网完全打不开", desc: "页面无法打开、连接失败或一直报网络错误。", check: "官方服务状态 / 基础网络 / DNS / 服务支持地区" },
                  { title: "页面能开，但一直加载", desc: "界面出现，但内容、对话或资源长时间无法完成加载。", check: "连接稳定性 / 浏览器缓存 / 扩展程序 / 服务端状态" },
                  { title: "可以打开，但登录失败", desc: "点击登录没反应，或者提示不支持、被拒绝。", check: "账号状态 / Cookie / 账号地区 / 当前服务政策" },
                  { title: "登录成功，但某些功能不能用", desc: "无法上传文件、无法生成图片或高级模型不可选。", check: "订阅方案 / 功能开放范围 / 账号要求 / 地区支持" },
                  { title: "手机可以，电脑不行", desc: "同一网络下，其他设备正常，当前设备异常。", check: "浏览器 / 扩展程序 / Cookie / DNS / 系统网络设置" },
                  { title: "ChatGPT能用，Claude/Gemini不行", desc: "只有一个特定的 AI 工具无法正常使用。", check: "不同服务支持地区 / 账号政策 / 登录机制" }
                ].map((symptom, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-brand-500" /> {symptom.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 h-10">{symptom.desc}</p>
                    <div className="bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                      <span className="text-xs font-bold text-gray-700">优先检查：</span>
                      <span className="text-xs text-gray-600">{symptom.check}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diagnostic Stack */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">问题可能出在哪一层？</h2>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 w-full space-y-2 relative">
                  <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>
                  <div className="bg-red-50 border-2 border-red-200 text-red-800 p-3 rounded-xl text-center font-bold relative z-10">AI 官方服务 (服务器是否宕机)</div>
                  <div className="bg-orange-50 border-2 border-orange-200 text-orange-800 p-3 rounded-xl text-center font-bold relative z-10 w-11/12 mx-auto">账号权限与地区 (是否被限制)</div>
                  <div className="bg-blue-50 border-2 border-blue-200 text-blue-800 p-3 rounded-xl text-center font-bold relative z-10 w-5/6 mx-auto">浏览器 / App (缓存或插件冲突)</div>
                  <div className="bg-cyan-50 border-2 border-cyan-200 text-cyan-800 p-3 rounded-xl text-center font-bold relative z-10 w-3/4 mx-auto">DNS / 系统配置 (域名解析)</div>
                  <div className="bg-gray-100 border-2 border-gray-300 text-gray-800 p-3 rounded-xl text-center font-bold relative z-10 w-2/3 mx-auto">本地网络 (物理连接与路由)</div>
                </div>
                <div className="md:w-1/3 bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <p className="text-sm text-gray-700 m-0 leading-relaxed font-medium">遇到问题时，建议由下往上，或从最容易排除的一层开始排查。不要一上来就怀疑是账号被封，很多时候只是官方崩溃或者浏览器缓存满了。</p>
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div id="checklist" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">按这个顺序排查</h2>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="space-y-6 relative">
                  <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-brand-100 hidden sm:block"></div>
                  {[
                    { title: "确认 AI 官方服务状态", desc: "去官方 Status 页面看看是不是全球都在宕机。比如 search 'OpenAI status' 或 'Anthropic status'。", next: "官方显示正常 → 走下一步" },
                    { title: "确认普通网络正常", desc: "关掉所有特殊网络设置，看看能不能打开普通网页（如百度、淘宝）。排除宽带欠费或路由器死机。", next: "普通网页正常 → 走下一步" },
                    { title: "检查账号状态", desc: "确认你的订阅是否到期，是否有收到官方的邮件通知，账号是否处于异常登录状态。", next: "账号无异常 → 走下一步" },
                    { title: "浏览器基础排查", desc: "清除该网站 Cookie，关闭所有翻译或广告拦截插件，使用无痕模式测试。", next: "无痕模式依然不行 → 走下一步" },
                    { title: "检查 DNS", desc: "尝试将电脑或路由器的 DNS 更改为可靠的公共 DNS（如 8.8.8.8 或 1.1.1.1），然后刷新 DNS 缓存。", next: "DNS 无误 → 走下一步" },
                    { title: "确认服务地区 / 网络所在地", desc: "检查你的网络连接目前识别的所在地，是否属于该 AI 工具的官方支持地区内。", next: "地区符合要求 → 走下一步" },
                    { title: "换设备测试", desc: "用手机（连接相同 Wi-Fi）测试一次，如果手机行电脑不行，说明是电脑系统问题，反之亦然。", next: "所有设备都不行 → 考虑网络方案" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 sm:gap-6 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-600 font-bold text-lg flex items-center justify-center shrink-0 border-4 border-white shadow-sm mt-1">
                        0{idx + 1}
                      </div>
                      <div className="pt-2">
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{step.desc}</p>
                        <div className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded text-xs font-medium border border-green-100">
                          {step.next}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 一分钟快速自检 */}
            <div className="mb-16">
              <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl font-bold text-brand-900 mb-6 text-center">一分钟快速自检</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6">
                  {[
                    "其他普通网站能打开吗？",
                    "AI 官方 Status 正常吗？",
                    "无痕窗口能打开吗？",
                    "另一个设备能用吗？",
                    "只有一个 AI 有问题吗？"
                  ].map((q, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-xl border border-brand-100 flex items-center justify-between shadow-sm">
                      <span className="text-sm text-gray-800 font-medium">{q}</span>
                      <div className="flex gap-2">
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">Y</span>
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded font-bold">N</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-brand-800 text-center m-0">如果以上都是 YES，通常只需要清理浏览器或者换个环境就能解决问题。</p>
              </div>
            </div>

            {/* 一次只改一个变量 */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-16 flex items-start gap-4 shadow-sm">
              <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 text-base mb-2">重要原则：一次只改变一个变量</h4>
                <p className="text-sm text-amber-800 m-0 leading-relaxed">
                  排查问题时，千万不要同时换网络、换 DNS、清 Cookie、换浏览器、换设备。如果你同时做了五件事，最后即使恢复正常，你也永远不知道真正的原因是什么，下次遇到依然会抓瞎。
                </p>
              </div>
            </div>

            {/* Account & Region Cards */}
            <div id="account-region" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">账号地区 / 服务地区 / 网络所在地</h2>
              <p className="text-gray-600 mb-8">AI 工具的可用性通常由这三个概念共同决定，不要把它们混为一谈：</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <Globe className="w-6 h-6 text-blue-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">服务地区</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">AI 官方当前正式提供产品或功能的地区范围。如果官方不支持某个国家，那么来自该国家的访问可能会受到限制。</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <Monitor className="w-6 h-6 text-green-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">网络所在地</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">服务端根据你当前的公网网络连接，识别到的大致地理位置。这是你当下的物理或网络节点呈现的位置。</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <UserRound className="w-6 h-6 text-purple-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">账号地区</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">你在注册账号时选择的国家、绑定的手机号归属地，或者你填写付款资料时的账单地址。</p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-bold text-gray-700 mb-4">
                  <span className="bg-white px-3 py-1.5 rounded shadow-sm">服务地区</span>
                  <span className="text-gray-400">+</span>
                  <span className="bg-white px-3 py-1.5 rounded shadow-sm">网络所在地</span>
                  <span className="text-gray-400">+</span>
                  <span className="bg-white px-3 py-1.5 rounded shadow-sm">账号地区</span>
                </div>
                <ArrowDown className="w-5 h-5 text-gray-400 mx-auto mb-4" />
                <div className="bg-white inline-block px-6 py-2 rounded-full border border-brand-200 text-brand-700 font-bold shadow-sm text-sm">
                  共同影响：登录 / 功能 / 产品可用性
                </div>
                <p className="text-xs text-gray-500 mt-4 max-w-lg mx-auto">
                  （注：具体规则根据各服务商政策而定。例如即使你网络没问题，如果绑定的信用卡处于非服务区，部分高级功能也可能无法使用。）
                </p>
              </div>
            </div>

            {/* DNS */}
            <div id="network-dns" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">DNS 能做什么 / 不能做什么</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white border border-green-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-green-800 text-base mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> DNS 可能影响（能解决）</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> 域名解析错误导致的打不开</li>
                    <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> 首次连接网页的寻址速度</li>
                    <li className="flex gap-2 items-start"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/> 部分页面静态资源加载失败</li>
                  </ul>
                </div>
                <div className="bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-red-800 text-base mb-4 flex items-center gap-2"><XCircle className="w-5 h-5" /> DNS 不能保证解决</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0"/> 账号限制或风控问题</li>
                    <li className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0"/> 服务地区不匹配问题</li>
                    <li className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0"/> 官方服务器宕机或故障</li>
                    <li className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0"/> 实际的数据传输速度与丢包</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Speed & Stability */}
            <div id="speed" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">速度与稳定性指标</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">响应速度</div>
                  <div className="font-bold text-gray-900">Ping</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">波动情况</div>
                  <div className="font-bold text-gray-900">稳定性</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">连接质量</div>
                  <div className="font-bold text-gray-900">丢包</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200 text-center shadow-sm">
                  <div className="text-gray-400 text-xs font-bold uppercase mb-1">传输能力</div>
                  <div className="font-bold text-gray-900">上/下行带宽</div>
                </div>
              </div>
              <div className="bg-brand-50 p-5 rounded-xl border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-brand-900 m-0">如果你的网页已经能够打开，但是回复极慢或者经常中断，建议进行网络测速排查。</p>
                <Link href="/guides/vpn-slow-speed" className="shrink-0 bg-white border border-brand-200 text-brand-700 px-4 py-2 text-sm font-medium rounded-lg hover:bg-brand-100 transition-colors">
                  查看网络测速排查指南
                </Link>
              </div>
            </div>

            {/* 3 AI Scenario Cards */}
            <div id="different-ai" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">不同 AI 对网络的要求</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <MessageSquare className="w-6 h-6 text-blue-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">AI 聊天问答</h3>
                  <p className="text-xs text-gray-500 mb-4 h-8">例如：ChatGPT、Claude、Gemini</p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs text-gray-700 leading-relaxed">
                    <strong>特点：</strong>文字请求流量通常不高。相对带宽，它们更依赖连接的持续稳定，一旦中断就需要重新刷新页面。
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <Code2 className="w-6 h-6 text-orange-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">AI 编程开发</h3>
                  <p className="text-xs text-gray-500 mb-4 h-8">例如：Cursor、GitHub Copilot、Bolt</p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs text-gray-700 leading-relaxed">
                    <strong>特点：</strong>持续发送项目上下文，进行 Agent 操作。网络中断极容易打断正在生成的大段代码工作流。
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <FileImage className="w-6 h-6 text-green-500 mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">图片 / 视频 AI</h3>
                  <p className="text-xs text-gray-500 mb-4 h-8">例如：Midjourney、Runway、Luma</p>
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 text-xs text-gray-700 leading-relaxed">
                    <strong>特点：</strong>大量素材上传、预览与结果下载。这种场景对传输带宽速度的要求最高。
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Matrix */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">快速诊断 (Diagnostic Matrix)</h2>
              <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full text-sm text-left text-gray-900">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-gray-900 w-1/3">现象</th>
                      <th className="px-6 py-4 font-bold text-gray-900">更可能先检查</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">官网打不开</td>
                      <td className="px-6 py-4 text-gray-600">官方状态 / DNS / 基础网络</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">能开不能登录</td>
                      <td className="px-6 py-4 text-gray-600">账号权限 / Cookie / 服务地区</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">登录后功能缺失</td>
                      <td className="px-6 py-4 text-gray-600">当前订阅方案 / 产品开放范围</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">手机正常电脑异常</td>
                      <td className="px-6 py-4 text-gray-600">浏览器缓存 / 扩展程序 / 系统设置</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">只有一个 AI 异常</td>
                      <td className="px-6 py-4 text-gray-600">该服务官方状态 / 特定产品政策</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">AI 经常回答一半中断</td>
                      <td className="px-6 py-4 text-gray-600">网络稳定性 / 丢包率</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 常见误区 */}
            <div id="mistakes" className="scroll-mt-32 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">排查常见误区</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { m: "一个 AI 能用，其他 AI 就一定能用", a: "不同产品的服务地区、账号、产品政策和网络架构可能不同，不能一概而论。" },
                  { m: "延迟最低一定最好", a: "日常文本交流中，只要不丢包，延迟 50ms 和 150ms 体验差异极小。" },
                  { m: "昨天能用今天一定能用", a: "官方可能随时更新地区支持政策，网络路由也可能随环境发生变化。" },
                  { m: "测速快一定不卡", a: "测速软件的测试服务器，和 AI 工具的实际服务器并不在同一个地方。" },
                  { m: "价格贵一定能用", a: "网络质量受物理距离影响，贵不代表 100% 免除故障。" }
                ].map((myth, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:border-red-200 transition-colors">
                    <div className="font-bold text-red-700 text-sm mb-2 flex items-center gap-2"><XCircle className="w-4 h-4" /> {myth.m}</div>
                    <p className="text-gray-600 text-xs m-0 leading-relaxed">{myth.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Flow */}
            <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200 mb-16 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-6">最后记住这个排查顺序</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-700">
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200">官方状态</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200">本地网络</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200">账号</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200">浏览器</span>
                <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200 hidden sm:block">DNS</span>
                <ChevronRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                <span className="bg-white px-3 py-1.5 rounded shadow-sm border border-gray-200 hidden sm:block">服务地区</span>
              </div>
            </div>

            {/* Network CTA */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 mb-16 text-center shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-3">排查后仍然频繁遇到连接问题？</h3>
              <p className="text-sm text-gray-600 mb-6">如果你已经排除了本地与浏览器因素，可能需要评估当前的网络方案是否适合访问该海外服务。</p>
              <Link href="/vpn" className="inline-block bg-gray-900 text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm shadow-sm">
                查看网络方案与品牌推荐
              </Link>
              <div className="mt-4">
                <Link href="/vpn/weifeng" className="text-xs text-brand-600 hover:underline">查看微风网络品牌实测 →</Link>
              </div>
              <p className="text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100">（本站相关评测页面包含合作推广内容，请根据自身实际网络需求选择。）</p>
            </div>

            {/* FAQ */}
            <div id="faq" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 FAQ</h2>
              <div className="space-y-4">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


