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
  title: '客户端已连接但AI网站打不开？常见原因与排查',
  description: '客户端显示已经连接，但 ChatGPT、Claude 等网站仍打不开？本文整理订阅、规则、DNS、浏览器、服务状态和账号权限等常见原因，并给出清晰的排查顺序。',
  canonical: '/guides/client-connected-site-unreachable',
});

export default function GuidePage() {
  const faqData = [
    { q: "为什么只能打开 Google，打不开 ChatGPT？", a: "很多时候是因为代理客户端的规则设置问题。ChatGPT 和 Claude 有严格的地区限制，如果你的规则没有将它们的域名分流到正确的节点（比如代理节点被识别为国内或不支持的地区），就会被拦截。" },
    { q: "清除了浏览器缓存还是打不开，怎么办？", a: "可以尝试使用浏览器的无痕模式。如果无痕模式可以打开，说明问题还是出在浏览器扩展、Cookie 或本地缓存；如果依然打不开，则需要检查 DNS 或代理客户端配置。" },
    { q: "什么是 DNS 解析异常？", a: "DNS 解析异常是指你的网络无法解析真实的服务器 IP，导致访问失败。在使用代理时，应确保代理客户端接管了 DNS 解析，或者使用了安全的远程 DNS。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "客户端已连接但AI网站打不开？常见原因与排查", "item": "https://runainav.com/guides/client-connected-site-unreachable" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "客户端已连接但AI网站打不开？常见原因与排查",
    "description": "客户端显示已经连接，但 ChatGPT、Claude 等网站仍打不开？本文整理订阅、规则、DNS、浏览器、服务状态和账号权限等常见原因，并给出清晰的排查顺序。",
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
    { id: "common-causes", title: "常见原因分析" , navLabel: "常见原因分析"  },
    { id: "troubleshooting", title: "排查顺序" , navLabel: "排查顺序"  },
    { id: "browser-issues", title: "浏览器与系统设置" , navLabel: "浏览器与系统设置"  },
    { id: "references", title: "参考资料" , navLabel: "参考资料"  },
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
              <span>客户端教程</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              客户端已连接但AI网站打不开？常见原因与排查
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              客户端显示已经连接，但 ChatGPT、Claude 等网站仍打不开？本文整理订阅、规则、DNS、浏览器、服务状态和账号权限等常见原因，并给出清晰的排查顺序。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语</h2>
              <p>
                很多用户在使用 AI 服务时会遇到一个令人困惑的问题：本地的网络客户端显示“已连接”，测速也正常，甚至能打开其他国外网站，但就是打不开 ChatGPT 或 Claude 等 AI 网站，或者提示“Access Denied”。这通常涉及到复杂的网络规则、DNS 解析和浏览器的缓存状态。
              </p>

              <h2 id="common-causes">常见原因分析</h2>
              <p>遇到这种情况，问题通常出在以下几个环节：</p>
              <ul>
                <li><strong>代理规则（分流）错误：</strong>客户端虽然连接了，但是对于 AI 网站的请求没有走正确的节点。</li>
                <li><strong>节点 IP 被屏蔽：</strong>AI 服务商对节点 IP 进行严格风控，如果大量用户共用一个 IP 频繁访问，该 IP 就可能被拉黑。</li>
                <li><strong>DNS 解析问题：</strong>系统 DNS 无法正确解析目标网站，或者遭遇了 DNS 解析异常。</li>
                <li><strong>浏览器缓存或扩展冲突：</strong>曾经登录失败留下的缓存、Cookie 错误，或广告拦截插件误杀了页面的重要脚本。</li>
                <li><strong>服务端本身宕机：</strong>有时候并不是你的网络问题，而是 OpenAI 或 Anthropic 的服务器宕机了。</li>
              </ul>

              <h2 id="troubleshooting">详细的排查顺序</h2>
              <p>为了快速定位问题，建议按照以下步骤进行排查：</p>

              <h3>1. 确认是否是全局网络问题</h3>
              <p>首先尝试打开 <code>google.com</code> 或 <code>github.com</code>。如果也打不开，说明是代理客户端本身没有正确工作。需要检查订阅是否过期、系统代理设置是否开启。</p>

              <h3>2. 确认节点可用性与地区</h3>
              <p>如果其他网站可以打开，唯独 AI 网站不行。尝试将代理模式切换为<strong>“全局代理 (Global)”</strong>，然后连接一个确定支持该 AI 的地区（如美国、日本节点）。如果此时能打开，说明是之前的“分流规则”有问题，需要更新规则订阅。</p>

              <h3>3. 使用无痕模式排除浏览器干扰</h3>
              <p>按下 <code>Ctrl + Shift + N</code>（Windows）或 <code>Cmd + Shift + N</code>（Mac）打开浏览器无痕窗口访问。如果在无痕模式下正常，说明是浏览器的缓存或某些插件（如去广告插件）导致了冲突。</p>
              
              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-900 m-0 mb-1">注意：清除 Cookie</h4>
                    <p className="text-yellow-800 m-0 text-sm">如果你曾经在不开启代理的情况下访问过 ChatGPT 并被拒绝，网站可能会在本地留下标记。务必清除相关网站的 Cookie 后再试。</p>
                  </div>
                </div>
              </div>

              <h2 id="browser-issues">系统级排查：DNS 与网络重置</h2>
              <p>如果上述步骤都无效，可能是系统层面的问题：</p>
              <ul>
                <li><strong>刷新 DNS：</strong>在命令行执行 <code>ipconfig /flushdns</code>（Windows）或 <code>sudo dscacheutil -flushcache</code>（Mac）。</li>
                <li><strong>检查系统代理设置：</strong>有时候客户端异常退出会导致系统代理未能恢复，手动去系统设置中检查代理是否被正确勾选或关闭。</li>
              </ul>

              <h2 id="references">参考资料与延伸阅读</h2>
              <ul>
                <li><a href="https://github.com/Dreamacro/clash" target="_blank" rel="noopener">VPN-Clash 项目</a> - 探索如何编写更精细的分流规则，确保 AI 相关的域名（如 openai.com, anthropic.com）能够被正确路由。</li>
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
                  <Link href="/guides/ai-packet-loss" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    网络丢包测试方法
                  </Link>
                  <Link href="/guides/ai-evening-slow" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    晚高峰网络排查指南
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
