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
  title: 'Clash Verge订阅怎么导入？Windows入门教程',
  description: '第一次使用 Clash Verge 不知道订阅放哪里？本文整理 Windows 基本流程，包括导入订阅、更新配置、选择节点和规则模式，并说明失败排查与官方来源。',
  canonical: '/guides/clash-verge-import-subscription',
});

export default function GuidePage() {
  const faqData = [
    { q: "提示 Core error 核心错误怎么办？", a: "这通常是因为没有正确选择内核或者内核文件损坏。在 Settings（设置）中找到 Clash Core，选择 Meta 内核并重启软件即可。如果依然报错，建议尝试在设置中点击重新安装内核文件夹。" },
    { q: "System proxy (系统代理) 无法开启或者打开后没网？", a: "如果您开启了 System proxy 但无法上网，可能是因为您的配置节点全部超时，或者之前使用了其他代理软件未正确关闭导致端口冲突。请检查 Windows 系统设置的“代理”选项，确保未被其他软件锁定，并确认所选的节点有正常延迟。" },
    { q: "为什么更新订阅时提示网络错误？", a: "请确认您的电脑当前可以直接访问订阅链接所在的服务器。如果您正处于无代理状态，且机场的订阅域名被墙，您可能需要先使用临时节点或其他工具开启全局代理后再进行更新订阅操作。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Clash Verge订阅怎么导入？Windows入门教程", "item": "https://runainav.com/guides/clash-verge-import-subscription" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Clash Verge订阅怎么导入？Windows入门教程",
    "description": "第一次使用 Clash Verge 不知道订阅放哪里？本文整理 Windows 基本流程，包括导入订阅、更新配置、选择节点和规则模式，并说明失败排查与官方来源。",
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
    { id: "intro", title: "导语", navLabel: "导语" },
    { id: "download", title: "一、下载与安装 Clash Verge Rev", navLabel: "一、下载与安装" },
    { id: "import", title: "二、如何导入订阅配置 (Profiles)", navLabel: "二、导入订阅" },
    { id: "proxy-mode", title: "三、节点选择与模式切换 (Rule vs Global)", navLabel: "三、模式与节点" },
    { id: "system-proxy", title: "四、开启 System Proxy 系统代理", navLabel: "四、系统代理" },
    { id: "core", title: "五、核心选择与常见故障排查", navLabel: "五、核心与排查" },
    { id: "references", title: "参考资料与延伸阅读", navLabel: "参考资料" },
    { id: "faq", title: "常见问题 FAQ", navLabel: "常见问题" }
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
              Clash Verge订阅怎么导入？Windows入门教程
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              第一次使用 Clash Verge 不知道订阅放哪里？本文整理 Windows 基本流程，包括导入订阅、更新配置、选择节点和规则模式，并说明失败排查与官方来源。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语</h2>
              <p>Clash Verge Rev 是目前 Windows 平台上最受欢迎、界面最美观的代理客户端之一。对于刚刚接触代理工具的新手而言，第一次打开全英文或带有大量专业术语的界面时，往往不知道从何下手。本文将手把手教你如何在 Windows 环境下使用 Clash Verge Rev：从官方 GitHub 下载、导入机场订阅链接、选择节点，一直到开启系统代理（System Proxy）和切换不同的代理模式（Rule 与 Global）。看完本篇 Windows 入门教程，你将能够轻松驾驭这款强大的网络工具。</p>
              
              <h2 id="download">一、下载与安装 Clash Verge Rev</h2>
              <p>在开始之前，我们需要获取正版、纯净的客户端。请注意，原版 Clash Verge 已经停止维护，目前社区接手维护的最新活跃版本为 Clash Verge Rev。截至本文更新的 2026年9月9日，你可以直接前往 GitHub，搜索 “Clash Verge Rev” 并进入其官方仓库的 Releases 页面下载。</p>
              
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 my-6 flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-blue-900 font-bold m-0 mb-1">关键提示</h4>
                  <p className="text-blue-800 m-0 text-sm">强烈建议只从官方 GitHub 下载，避免使用第三方来源的修改版，以防止遭受恶意软件或木马的侵扰。下载时请选择以 <code>.exe</code> 结尾的安装包（例如 <code>Clash.Verge_x.x.x_x64-setup.exe</code>）。</p>
                </div>
              </div>

              <p>下载完成后，双击运行，按照默认选项完成安装。启动软件后，如果发现是全英文界面，可以在 <code>Settings</code>（设置）菜单下的 <code>Language</code> 选项中将其更改为中文。</p>

              <h2 id="import">二、如何导入订阅配置 (Profiles)</h2>
              <p>当你从机场或服务商处购买服务后，通常会获得一串“订阅链接”（通常以 http 或 https 结尾，可能标有 Clash 订阅专用字样）。获取链接后，请按以下步骤将订阅导入到客户端中：</p>
              
              <ol>
                <li>在软件界面左侧导航栏中点击 <strong>Profiles</strong>（配置或订阅）。</li>
                <li>找到界面上方的 URL 输入框，将你复制的订阅链接粘贴进去。</li>
                <li>点击右侧的 <strong>Import</strong>（导入）按钮。软件会自动向服务器请求配置文件并将其下载到本地。</li>
                <li>导入成功后，配置列表里会出现一个新的卡片。<strong>务必用鼠标左键单击选中它</strong>（选中后卡片侧边通常会有高亮提示或颜色变化）。只有在选中状态下，软件才会加载并使用这份配置。</li>
              </ol>

              <p>此外，你可以右键点击该配置卡片，选择 <code>Update</code>（更新）来获取最新的节点信息。当服务商调整了线路或服务器时，更新订阅能确保你的节点列表是最新的。</p>

              <h2 id="proxy-mode">三、节点选择与模式切换 (Rule vs Global)</h2>
              <p>配置文件成功加载后，点击左侧的 <code>Proxies</code>（代理）选项卡，你将看到所有的节点和策略组列表。你可以点击界面上方的 Wi-Fi 测速图标或闪电图标，测试各个节点的当前延迟。挑选一个延迟较低且无超时的节点作为主用节点。</p>

              <p>在这个界面，理解不同的代理模式至关重要：</p>
              <ul>
                <li><strong>Rule (规则模式)</strong>：这是最推荐、最智能的日常使用模式。它会根据配置文件内置的规则集，自动判断你的访问请求。如果你访问国内网站（如百度、淘宝），流量将直接连接；如果你访问海外网站（如 Google、GitHub），流量则会自动通过代理节点。这既能保障海外访问畅通，又不会拖慢国内应用。</li>
                <li><strong>Global (全局模式)</strong>：在此模式下，电脑的所有网络请求都将强制通过你选择的代理节点。这种模式适合在 Rule 模式下部分小众海外网站无法打开时，进行临时故障排除和强制代理。</li>
                <li><strong>Direct (直连模式)</strong>：所有的流量均不经过代理，等同于完全关闭了翻墙功能。</li>
              </ul>

              <h2 id="system-proxy">四、开启 System Proxy 系统代理</h2>
              <p>节点选好、模式设置完毕后，最后也是最关键的一步是让系统流量真正经过 Clash Verge Rev 的接管。</p>
              
              <ol>
                <li>点击左侧导航栏的 <strong>Settings</strong>（设置）选项卡。</li>
                <li>找到 <strong>System Proxy</strong>（系统代理）选项，将其右侧的开关拨至开启状态。</li>
              </ol>

              <p>一旦开启，Windows 系统的代理设置就会被自动修改，指向 Clash Verge Rev 的本地端口。此时，你可以打开浏览器访问一些常见的国际网站来测试是否成功连通。</p>
              
              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-6 flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-yellow-900 font-bold m-0 mb-1">注意事项</h4>
                  <p className="text-yellow-800 m-0 text-sm">如果你发现某些特定的游戏或老旧软件不遵守系统代理设置，导致无法连通外网，你可以尝试在设置中开启 <code>Tun Mode</code>（虚拟网卡模式），它可以更底层地接管整个操作系统的所有流量。</p>
                </div>
              </div>

              <h2 id="core">五、核心选择与常见故障排查</h2>
              <p>Clash Verge Rev 提供了多种内核（Core）选择，主要是 Meta 内核（现更名为 Mihomo）。在 <code>Settings</code> - <code>Clash Core</code> 中，确保你选择了正确的内核并成功启动。</p>
              <p>如果你在界面顶部看到红色的 "Core error" 或类似错误提示，说明内核未能正常运行，这会导致所有的代理功能彻底失效。通常，这可能是权限不足或内核文件下载不完整导致的。你可以尝试在设置中点击重新安装内核，或者以管理员身份重启软件来解决问题。</p>

              <h2 id="references">参考资料与延伸阅读</h2>
              <ul>
                <li><a href="https://clashwiki.blog/">ClashWiki</a> —— 提供 Clash 客户端、订阅与网络配置相关教程，可作为进一步了解客户端使用方式的参考。</li>
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
                  <Link href="/guides/after-buying-airport" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    买完机场后怎么用？
                  </Link>
                  <Link href="/guides/clash-verge-import-subscription" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Clash Verge 导入教程
                  </Link>
                  <Link href="/guides/node-speed-test-guide" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    节点速度怎么测才准？
                  </Link>
                  <Link href="/guides/iplc-iepl-transit-direct" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    IPLC、IEPL线路指南
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
