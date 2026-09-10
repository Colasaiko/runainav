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
  title: 'Cursor和Copilot网络超时？编辑器与终端排查指南',
  description: 'Cursor 或 GitHub Copilot 在编辑器里一直超时，但浏览器访问正常？本文整理编辑器、终端、系统网络与项目依赖的排查思路，帮助开发者定位问题。',
  canonical: '/guides/cursor-copilot-timeout',
});

export default function GuidePage() {
  const faqData = [
    { q: "为什么浏览器能上外网，VSCode 终端却不行？", a: "浏览器通常会自动使用系统的代理设置，而终端（如 CMD、Bash、Zsh）默认不会走系统代理，需要手动设置 http_proxy 环境变量。" },
    { q: "Cursor 报 connect ETIMEDOUT 是什么原因？", a: "这说明 Cursor 无法连接到其后台的 AI 服务器。通常是因为编辑器的网络请求没有经过代理，或者你的代理客户端没有开启“TUN 模式”。" },
    { q: "开启 TUN 模式对开发有影响吗？", a: "TUN 模式会接管所有软件的流量（包括命令行和编辑器），是最简单的一劳永逸的办法。但有时可能会干扰局域网环境下的本地开发测试，需要适当设置绕过局域网 IP。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Cursor和Copilot网络超时？编辑器与终端排查指南", "item": "https://runainav.com/guides/cursor-copilot-timeout" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cursor和Copilot网络超时？编辑器与终端排查指南",
    "description": "Cursor 或 GitHub Copilot 在编辑器里一直超时，但浏览器访问正常？本文整理编辑器、终端、系统网络与项目依赖的排查思路，帮助开发者定位问题。",
    "author": { "@type": "Organization", "name": "RunAI" },
    "publisher": { "@type": "Organization", "name": "RunAI" },
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
    { id: "why-timeout", title: "为什么会超时" , navLabel: "为什么会超时"  },
    { id: "solutions", title: "解决编辑器与终端网络" , navLabel: "解决编辑器与终端网络"  },
    { id: "certificate", title: "证书与 SSL 问题" , navLabel: "证书与 SSL 问题"  },
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
              <span>AI编程</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Cursor和Copilot网络超时？编辑器与终端排查指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cursor 或 GitHub Copilot 在编辑器里一直超时，但浏览器访问正常？本文整理编辑器、终端、系统网络与项目依赖的排查思路，帮助开发者定位问题。
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
                对开发者来说，AI 编程工具如 Cursor、GitHub Copilot 或通义灵码已经成为标配。然而，很多人都会遇到一个奇怪的现象：在浏览器里能正常打开各种国外网站，但在 VSCode 或 Cursor 中呼叫 AI 时，却总是提示 <code>ETIMEDOUT</code>、网络错误或一直转圈。这是因为编辑器和终端的网络环境配置与浏览器截然不同。
              </p>

              <h2 id="why-timeout">为什么浏览器正常，编辑器会超时？</h2>
              <p>要解决这个问题，首先需要理解操作系统对代理的处理机制：</p>
              <ul>
                <li><strong>浏览器：</strong>绝大多数现代浏览器会自动读取操作系统的“系统代理”设置。当你开启代理客户端时，浏览器就自动走代理了。</li>
                <li><strong>编辑器/终端：</strong>很多开发者工具（如 Git、npm、VSCode 插件进程、终端命令行）默认情况下<strong>忽略系统代理</strong>设置，试图直接连接目标服务器。这就会导致请求被墙而超时。</li>
              </ul>

              <h2 id="solutions">排查与解决方案</h2>
              <p>解决编辑器和终端超时的问题，有几种不同的层级和方案：</p>

              <h3>1. 最推荐方案：开启客户端 TUN 模式</h3>
              <p>TUN（虚拟网卡）模式是最一劳永逸的方法。开启 TUN 模式后，代理客户端会在系统底层创建一个虚拟网卡，强制接管所有软件的流量，无论它是否支持设置代理。开启 TUN 模式后，Cursor、Copilot、终端命令行都能直接顺畅连接。大部分主流代理工具都提供该功能，开启后建议重启编辑器。</p>

              <h3>2. 编辑器内部设置 HTTP 代理</h3>
              <p>如果不想开启 TUN 模式，可以在编辑器的设置中指定代理地址。以 VSCode 为例：</p>
              <ol>
                <li>打开设置，搜索 <code>Http: Proxy</code>。</li>
                <li>填入你的本地代理地址，通常为 <code>http://127.0.0.1:7890</code>（端口请参考你的代理软件设置）。</li>
                <li>重启编辑器。</li>
              </ol>

              <h3>3. 终端配置环境变量</h3>
              <p>针对终端里的命令（如 <code>git push</code>，<code>npm install</code>），你需要在命令行中临时设置环境变量：</p>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code># Windows PowerShell</code><br />
                <code>$env:HTTP_PROXY="http://127.0.0.1:7890"</code><br />
                <code>$env:HTTPS_PROXY="http://127.0.0.1:7890"</code><br />
                <br />
                <code># Mac/Linux (bash/zsh)</code><br />
                <code>export http_proxy=http://127.0.0.1:7890</code><br />
                <code>export https_proxy=http://127.0.0.1:7890</code>
              </pre>

              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-900 m-0 mb-1">注意</h4>
                    <p className="text-yellow-800 m-0 text-sm">终端配置只对当前窗口有效，关闭后失效。如需永久生效可写入 profile 文件，但推荐按需开启避免影响本地服务。</p>
                  </div>
                </div>
              </div>

              <h2 id="certificate">证书与 SSL 错误</h2>
              <p>有时开启了代理后，Cursor 会报错 <code>UNABLE_TO_VERIFY_LEAF_SIGNATURE</code> 或 SSL 证书错误。这通常是因为公司的防火墙或某些代理工具对 HTTPS 进行了中间人劫持。可以在 VSCode 设置中搜索 <code>Http: Proxy Strict SSL</code> 并将其关闭（取消勾选），但这会降低一点安全性，请自行权衡。</p>

              <h2 id="references">参考资料与延伸阅读</h2>
              <ul>
                <li><a href="https://github.com/Dreamacro/clash" target="_blank" rel="noopener">VPN-Clash 项目</a> - 了解如何在其配置中开启 TUN 模式，解决所有开发工具无法连网的痛点。</li>
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
                  <Link href="/guides/client-connected-site-unreachable" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI网站连不上排查
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
