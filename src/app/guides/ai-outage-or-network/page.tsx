/* eslint-disable react/no-unescaped-entities */
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import { 
  Check, AlertTriangle, Info, ArrowRight, XCircle, CheckCircle, Lightbulb, FileText, Settings, Shield
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'AI工具报错是宕机还是网络问题？判断方法指南',
  description: 'AI 页面突然报错时，问题可能来自官方服务，也可能来自浏览器、账号或网络连接。本文整理状态页、其他设备、不同网站和本地网络的判断顺序，帮助你先定位再处理。',
  canonical: '/guides/ai-outage-or-network',
});

export default function GuidePage() {
  const faqData = [
    { q: "看到 'Error 1020 Access Denied' 是什么情况？", a: "这通常不是AI工具本身宕机，而是Cloudflare等防火墙阻止了你的IP地址访问。说明你当前的网络环境、代理IP被官方拉黑或视为高风险，需要更换纯净的IP节点。" },
    { q: "提示 'Capacity is full' 或者 'Too many requests' 怎么办？", a: "这是官方服务器过载或你的账号请求太频繁导致的。属于服务端问题或账号限流。你可以稍等几分钟再试，或者升级为付费订阅会员（通常有优先处理权）。" },
    { q: "页面一直转圈加载不出来，没有任何报错信息，怎么查？", a: "大概率是本地网络问题或DNS污染。可以尝试按下F12打开开发者工具，在Network标签页看是否有标红的请求。尝试切换WiFi、关闭或更换网络代理工具再试。" },
    { q: "为什么手机上可以用，电脑网页版却报错？", a: "这说明账号和官方服务器都没问题。问题出在电脑端：可能是电脑的代理软件配置异常、浏览器缓存损坏，或者安装了冲突的浏览器插件（特别是广告拦截插件）。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "AI工具报错是宕机还是网络问题？判断方法指南", "item": "https://runainav.com/guides/ai-outage-or-network" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI工具报错是宕机还是网络问题？判断方法指南",
    "description": "AI 页面突然报错时，问题可能来自官方服务，也可能来自浏览器、账号或网络连接。本文整理状态页、其他设备、不同网站和本地网络的判断顺序，帮助你先定位再处理。",
    "author": { "@type": "Organization", "name": "RunAI" },
    "publisher": { "@type": "Organization", "name": "RunAI", "logo": { "@type": "ImageObject", "url": "https://runainav.com/logo.png" } },
    "datePublished": "2026-09-09T08:00:00+08:00",
    "dateModified": "2026-09-09T08:00:00+08:00"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const sections = [
    { id: "intro", title: "导语" , navLabel: "导语"  },
    { id: "step1", title: "第一步：查官方状态页" , navLabel: "第一步：查官方状态页"  },
    { id: "step2", title: "第二步：交叉验证网络" , navLabel: "第二步：交叉验证网络"  },
    { id: "step3", title: "第三步：排查本地环境" , navLabel: "第三步：排查本地环境"  },
    { id: "common-errors", title: "常见错误代码速查" , navLabel: "常见错误代码速查"  },
    { id: "faq", title: "常见问题" , navLabel: "常见问题"  }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
      <Header />
      <ArticleStickyBar sections={sections} />
      <FloatingBackButton fallbackHref="/guides" />
      
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="pt-24 pb-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-6">
              <span>网络环境</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI工具报错是宕机还是网络问题？判断方法指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              AI 页面突然报错时，问题可能来自官方服务，也可能来自浏览器、账号或网络连接。本文整理状态页、其他设备、不同网站和本地网络的判断顺序，帮助你先定位再处理。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语：别急着重装软件，先找出“病因”</h2>
              <p>正用着AI写关键报告，突然网页弹出“Something went wrong”，或者干脆一直转圈不回复。这时候很多人会下意识地狂按F5刷新，或者去疯狂折腾本地的路由器和代理软件。</p>
              <p>实际上，导致AI工具无法访问的原因有很多，盲目操作不仅浪费时间，还可能把原本没问题的配置改坏。面对报错，我们需要一套有逻辑的排查步骤：由外向内，逐步缩小问题范围。</p>

              <h2 id="step1">第一步：看天灾——查询官方状态页</h2>
              <p>这是最省事的一步。如果是官方服务器崩溃了（宕机），你做什么都没用，只能等。</p>
              
              <h3>如何查询？</h3>
              <p>几乎所有大型AI公司都公开了他们的服务状态监控页面（Status Page）。你可以直接在搜索引擎搜索：“工具名 + status”。</p>
              <ul>
                <li><strong>OpenAI (ChatGPT):</strong> 访问 <code>status.openai.com</code>。观察指标条是否为全绿，如果有红色或黄色的故障通报，说明是官方问题。</li>
                <li><strong>Anthropic (Claude):</strong> 访问 <code>status.anthropic.com</code>。</li>
                <li><strong>Midjourney:</strong> 可以去其官方Discord频道的 <code>#status</code> 频道查看公告。</li>
              </ul>
              <p>如果状态页显示一切正常（All systems operational），那么基本排除官方大面积宕机，我们需要进入下一步。</p>

              <div className="bg-brand-50 p-5 rounded-xl border border-brand-100 my-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">第三方探针</h4>
                    <p className="text-brand-800 m-0 text-sm">除了官方页面，你也可以去 <strong>Downdetector.com</strong> 搜索对应的服务。如果曲线突然飙升，说明有很多用户在同一时间报告了故障。</p>
                  </div>
                </div>
              </div>

              <h2 id="step2">第二步：查线路——交叉验证网络</h2>
              <p>既然不是官方全崩，那是不是你的网络连不到国外的服务器？（特别是国内用户使用海外AI工具时常见的网络环境问题）</p>

              <h3>1. 测其他海外网站</h3>
              <p>马上打开浏览器，尝试访问 Google.com 或 YouTube.com。</p>
              <ul>
                <li><strong>如果其他网站也打不开：</strong>说明你的整个国际网络链路断了。你需要去检查你的网络代理工具（如Clash、v2ray等），看看节点是否失效，订阅是否过期。</li>
                <li><strong>如果其他网站能打开，只有AI打不开：</strong>说明网络大体没问题，但可能该AI工具封锁了你当前节点所处的IP段（常见的如 Cloudflare 拦截）。尝试切换代理节点到其他国家或区域，然后刷新重试。</li>
              </ul>

              <h3>2. 更换设备测试</h3>
              <p>用同一网络环境下的手机尝试访问，或者让手机断开WiFi使用5G蜂窝网络（确保手机也开启了相应的网络工具）进行测试。</p>
              <ul>
                <li>如果手机能用电脑不能用：问题出在电脑本身的设置上（见第三步）。</li>
                <li>如果切换到手机5G流量就能用：问题出在你家宽带运营商的某些限制上。</li>
              </ul>

              <h2 id="step3">第三步：查内伤——排查本地环境与账号</h2>
              <p>如果前两步都排除了，那问题可能出在浏览器、缓存或账号本身。</p>

              <h3>1. 无痕模式大法</h3>
              <p>按 <code>Ctrl+Shift+N</code>（Windows）或 <code>Cmd+Shift+N</code>（Mac）打开浏览器的无痕/隐私模式，重新登录AI工具。</p>
              <ul>
                <li><strong>如果在无痕模式下正常了：</strong>说明是你的浏览器缓存出错，或者某个浏览器插件（比如自动翻译、去广告、拦截器）与AI网页代码产生了冲突。尝试清除历史记录和Cookie，或逐个禁用插件找出元凶。</li>
              </ul>

              <h3>2. 账号状态检查</h3>
              <p>看看是不是你的账号被限流或封禁了。有时即使是免费版，如果短时间内发送了大量请求，也会被临时限制。检查你的注册邮箱，看看有没有收到官方发来的警告或通知邮件。</p>

              <h2 id="common-errors">附：常见错误代码速查表</h2>
              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-left text-sm border-collapse border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-200 p-3 font-semibold text-gray-700">错误提示/现象</th>
                      <th className="border border-gray-200 p-3 font-semibold text-gray-700">可能原因</th>
                      <th className="border border-gray-200 p-3 font-semibold text-gray-700">解决方向</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">Error 1020 / Access Denied</td>
                      <td className="border border-gray-200 p-3">IP被防火墙拦截，节点不干净</td>
                      <td className="border border-gray-200 p-3">更换代理节点、使用原生IP</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">502 Bad Gateway / 503</td>
                      <td className="border border-gray-200 p-3">官方服务器崩溃或维护中</td>
                      <td className="border border-gray-200 p-3">看状态页，耐心等待</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Too many requests / 429</td>
                      <td className="border border-gray-200 p-3">账号请求过频，触发限流</td>
                      <td className="border border-gray-200 p-3">休息一会再试，或升级会员</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">网页不断刷新且登录不上</td>
                      <td className="border border-gray-200 p-3">Cookie冲突或无限重定向循环</td>
                      <td className="border border-gray-200 p-3">清除浏览器所有缓存，重新登录</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 id="references">参考资料与延伸阅读</h2>
              <ul>
                <li><a href="https://vpn-clash.com" target="_blank" rel="noopener">VPN-Clash 网络环境配置</a> - 了解如何优化和解决常见的网络代理连接问题。</li>
              </ul>

              <h2 id="faq">常见问题 FAQ</h2>
              <div className="space-y-6 mt-8">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-5 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 m-0 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="lg:col-span-3 lg:block mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/ai-response-slow" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI响应慢排查指南
                  </Link>
                  <Link href="/guides/chatgpt" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    ChatGPT 注册与使用
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
