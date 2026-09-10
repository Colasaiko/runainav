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
  title: '买完机场后怎么用？订阅链接与客户端导入指南',
  description: '购买网络服务后拿到订阅链接，却不知道下一步怎么做？本指南解释订阅、客户端、节点和配置文件的关系，并按常见设备说明基本导入流程、更新方法与注意事项。',
  canonical: '/guides/after-buying-airport',
});

export default function GuidePage() {
  const faqData = [
    { q: "订阅更新失败怎么办？", a: "首先检查您的网络是否可以正常访问订阅链接所在的服务器。如果还是不行，可能是当前网络限制，可以尝试在更新时关闭其他代理软件，或者使用浏览器直接访问订阅链接测试。如果依旧无果，请联系机场客服获取备用的订阅链接。" },
    { q: "节点和订阅有什么区别？", a: "简单来说，订阅是一个链接或地址，里面包含了很多个节点的信息。而节点则是具体的服务器。您可以通过导入一个订阅链接，一次性获取并自动更新所有可用的节点，而不需要繁琐地去手动一个个添加节点配置。" },
    { q: "为什么连接上节点了却无法上网？", a: "请首先检查客户端的代理模式是否正确。建议设置为“规则”或“PAC”模式。如果使用的是“全局”模式，部分国内网站可能会因为IP限制而无法正常访问。另外，请务必确认您的电脑系统时间是否准确，系统时间如果不同步也会导致安全连接验证失败，从而无法上网。" },
    { q: "客户端需要一直保持后台运行吗？", a: "是的，为了让您能够持续访问被限制的网站，代理客户端必须在后台保持运行状态。如果您不小心关闭了软件，系统代理可能会失效，导致无法上网甚至断网。大多数客户端都支持开机自启，建议在设置中开启该功能，这样就不用每次重启电脑后手动打开了。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "买完机场后怎么用？订阅链接与客户端导入指南", "item": "https://runainav.com/guides/after-buying-airport" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "买完机场后怎么用？订阅链接与客户端导入指南",
    "description": "购买网络服务后拿到订阅链接，却不知道下一步怎么做？本指南解释订阅、客户端、节点和配置文件的关系，并按常见设备说明基本导入流程、更新方法与注意事项。",
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
    { id: "step1", title: "第一步：复制订阅链接", navLabel: "获取订阅" },
    { id: "step2", title: "第二步：选择与下载客户端", navLabel: "下载客户端" },
    { id: "step3", title: "第三步：导入与更新订阅", navLabel: "导入订阅" },
    { id: "step4", title: "第四步：选择节点并连接", navLabel: "选择节点" },
    { id: "faq", title: "常见问题", navLabel: "常见问题" }
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
              买完机场后怎么用？订阅链接与客户端导入指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              购买网络服务后拿到订阅链接，却不知道下一步怎么做？本指南解释订阅、客户端、节点和配置文件的关系，并按常见设备说明基本导入流程、更新方法与注意事项。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语</h2>
              <p>购买了网络加速服务（通常被称为“机场”）之后，很多新手拿到一串“订阅链接”或者长长的代码，会感到一头雾水。不知道这是什么，也不知道该怎么用在自己的电脑或手机上。</p>
              <p>其实，整个过程并不复杂。简单来说，订阅链接就像是一张“服务器清单”，里面记录了所有可用的节点信息。我们需要用一个专门的软件（也就是常说的“客户端”）来读取这张清单，然后选择其中一个节点连接上去。</p>
              <p>对于刚接触这类服务的用户来说，可能会被复杂的术语所困扰。其实只要掌握了基本流程，后续的使用就会变得非常自然。在这篇文章中，我们将抛开那些深奥的技术原理解析，专注于最基础也是最核心的操作环节，让哪怕是完全没有技术背景的新手，也能够轻松上手，畅享自由的网络世界。</p>
              
              <h2 id="step1">第一步：复制订阅链接</h2>
              <p>在您购买服务的机场网站后台，通常会有一个“仪表盘”、“用户中心”或“我的订阅”页面。在这里，您可以找到您的服务使用信息和各种配置接口。</p>
              <p>寻找类似“一键订阅”、“复制订阅链接”或“Clash订阅”、“V2ray订阅”的按钮。对于不同的设备和软件，有时可能需要不同格式的链接，但很多现代机场都提供了一键通用的智能订阅链接。点击复制这个链接，我们将把它用到接下来的客户端软件配置中。</p>
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 my-6 flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-blue-900 font-bold m-0 mb-1">注意保管订阅链接</h4>
                  <p className="text-blue-800 m-0 text-sm">订阅链接包含了您的账号密码和节点信息，请千万不要将其泄露或公开分享给他人。如果怀疑泄露，请立即在机场后台点击“重置订阅链接”，旧的链接将会马上失效。</p>
                </div>
              </div>
              
              <h2 id="step2">第二步：选择与下载客户端</h2>
              <p>刚才说到，我们需要一个客户端来读取订阅链接。不同的操作系统有不同的主流客户端推荐，您可以根据自己的设备选择最合适的一款进行下载和安装：</p>
              <ul>
                <li><strong>Windows 电脑：</strong> 推荐使用 <strong>v2rayN</strong> 或 <strong>Clash Verge Rev</strong>。它们界面直观，功能强大，是目前最多人使用的选择。</li>
                <li><strong>macOS 苹果电脑：</strong> 推荐使用 <strong>ClashX</strong> 或 <strong>Clash Verge Rev</strong>。</li>
                <li><strong>Android 安卓手机：</strong> 推荐使用 <strong>v2rayNG</strong> 或 <strong>Clash for Android</strong>。</li>
                <li><strong>iOS 苹果手机：</strong> 推荐使用 <strong>Shadowrocket</strong>（俗称小火箭，通常需要非国区Apple ID才能在App Store下载）或 <strong>Quantumult X</strong>。</li>
              </ul>
              <p>在选择客户端时，大家往往会遇到版本众多的情况。不用担心，对于绝大多数日常使用场景，直接下载最新稳定版（Stable）即可。您可以从软件的官方 GitHub 发布页面下载，或者查看机场后台，通常商家也会贴心地提供下载教程和安装包镜像。</p>
              <p>如果您是首次安装这些软件，可能会遇到系统安全提示，比如 Windows 的 Defender 可能会拦截，或者 macOS 提示“无法验证开发者”。这是正常现象，这些开源客户端通常是安全的，您只需要在设置中允许运行或信任该软件即可。</p>

              <h2 id="step3">第三步：导入与更新订阅</h2>
              <p>下载并安装好客户端后，接下来的核心步骤就是把刚才复制的订阅链接导入到软件中。虽然不同的软件界面布局不一样，但基本逻辑是相同的：</p>
              <ol>
                <li><strong>找到订阅设置：</strong> 在软件的侧边栏或设置中心中，找到“订阅(Subscription)”、“配置(Profiles)”或“服务器(Servers)”等选项。</li>
                <li><strong>添加订阅：</strong> 点击新建或“+”号按钮，将您在第一步复制的链接粘贴到“URL”或“链接地址”一栏中，并给它随便起个好记的名字（比如您购买的机场的名字）。</li>
                <li><strong>更新/下载配置：</strong> 添加完成后，一定要手动点击一下“更新(Update)”或“下载(Download)”。软件会通过这个链接去拉取最新的节点列表。如果您看到屏幕上出现了一大排国家或地区的名称列表，恭喜您，导入成功了！</li>
              </ol>

              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200 my-6 flex items-start gap-3">
                <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-yellow-900 font-bold m-0 mb-1">养成定期更新的习惯</h4>
                  <p className="text-yellow-800 m-0 text-sm">由于网络环境的复杂性，机场的节点IP可能会因为各种原因发生变化。当您发现原本好用的节点突然连不上了，第一反应应该是去客户端里点一下“更新订阅”，以获取最新的服务器信息。</p>
                </div>
              </div>
              
              <h2 id="step4">第四步：选择节点并连接</h2>
              <p>最后一步，就是选择一个节点并让代理生效，从而开始科学上网。</p>
              <p>在节点列表中，您通常会看到诸如“香港”、“日本”、“美国”等各个地区的节点。对于大多数用户来说，选择地理位置距离较近的节点（如香港、台湾、日本）会有更低的延迟，日常浏览网页和刷视频的体验更好。点击您想用的节点将其选中。</p>
              <p>除了节点地区，您可能还会看到节点名字带有倍率（如 x0.5, x1.0）。这代表了消耗流量的比例，一般情况下选择 1.0 倍率的节点即可满足日常需求。值得一提的是，有些客户端还支持测速功能（Ping 或 URL Test）。如果您不知道哪个节点最快，可以点击测试按钮，软件会自动检测并为您显示延迟数据，通常延迟越低（数字越小），连接速度越快。</p>
              <p>选中节点后，您需要开启软件的代理功能才能真正生效。在 Clash 类软件中，通常是开启“System Proxy（系统代理）”或拨动主界面的开关；在 v2rayN 中，是右下角任务栏图标右键选择“自动配置系统代理”。开启后，您的设备就可以通过该节点访问网络了。</p>
              <p>另外，<strong>强烈建议</strong>将代理模式（Mode 或 Routing）设置为<strong>“规则（Rule）”</strong>或“PAC”。这样国内网站和应用会直接直连访问，只有国外被屏蔽的网站才会走节点，既能节省您的机场流量，又不会拖慢国内软件（如微信、淘宝）的使用速度。</p>

              <h2 id="references">参考资料与延伸阅读</h2>
              <ul>
                <li><a href="https://jichangmao.com/" target="_blank">机场猫</a> —— 提供机场订阅、新手配置和节点测试相关内容，可作为进一步理解订阅使用流程的优质参考。</li>
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
