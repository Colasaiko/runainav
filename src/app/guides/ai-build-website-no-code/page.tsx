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
  title: '不会代码怎么用AI做网站？从需求到上线教程',
  description: '不会代码也想用 AI 做一个网站？本指南从需求、页面结构、文案、生成代码、本地预览到部署上线逐步说明，并提醒你检查响应式、链接、SEO、版权与构建错误。',
  canonical: '/guides/ai-build-website-no-code',
});

export default function GuidePage() {
  const faqData = [
    { q: "用AI生成的网站可以商用吗？", a: "通常是可以的，生成的代码版权归你所有。但需要注意你使用的图片、字体以及AI生成的文本内容是否涉及第三方版权。建议使用开源许可的UI组件库（如Tailwind CSS）。" },
    { q: "如果我想修改AI生成的网站颜色，该怎么做？", a: "你可以直接把当前的网站代码发给AI，并提出明确需求，例如：‘请把代码中所有的蓝色主色调替换为品牌色#FF5733’，AI会重新生成修改后的代码给你替换。" },
    { q: "AI可以直接帮我把网站部署上线吗？", a: "目前大部分对话式AI只能生成代码。你需要自己将代码上传到Vercel、Netlify或GitHub Pages等平台完成部署。不过，诸如v0.dev、Bolt.new等新型工具已经支持一键部署预览。" },
    { q: "如果部署时出现报错提示怎么办？", a: "不要慌。直接复制部署平台或本地终端里的红色报错信息（Error Logs），粘贴给AI并附上你现在的代码，询问：‘我在部署时遇到了这个错误，请帮我分析原因并提供修复后的代码’。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "不会代码怎么用AI做网站？从需求到上线教程", "item": "https://runainav.com/guides/ai-build-website-no-code" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "不会代码怎么用AI做网站？从需求到上线教程",
    "description": "不会代码也想用 AI 做一个网站？本指南从需求、页面结构、文案、生成代码、本地预览到部署上线逐步说明，并提醒你检查响应式、链接、SEO、版权与构建错误。",
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
    { id: "step1", title: "第一步：明确需求与页面结构" , navLabel: "第一步：明确需求与页面结构"  },
    { id: "step2", title: "第二步：让AI生成代码" , navLabel: "第二步：让AI生成代码"  },
    { id: "step3", title: "第三步：本地预览与迭代" , navLabel: "第三步：本地预览与迭代"  },
    { id: "step4", title: "第四步：部署上线与检查" , navLabel: "第四步：部署上线与检查"  },
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
              不会代码怎么用AI做网站？从需求到上线教程
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              不会代码也想用 AI 做一个网站？本指南从需求、页面结构、文案、生成代码、本地预览到部署上线逐步说明，并提醒你检查响应式、链接、SEO、版权与构建错误。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语：人人都是产品经理与开发者的时代</h2>
              <p>以前想做一个属于自己的网站，你需要学习HTML、CSS、JavaScript，可能还要懂点后端和服务器运维。或者，你得花大价钱外包给建站公司。现在，有了AI（如Claude 3.5 Sonnet、ChatGPT、v0.dev、Bolt等工具），你只需要会用人类自然语言描述需求，AI就能替你把代码写出来，甚至直接呈现出网页。</p>
              <p>这篇教程专为零代码基础的小白设计，我们将手把手带你跑通“想做一个网站 -&gt; AI生成 -&gt; 上线发布”的完整闭环。</p>

              <div className="bg-brand-50 p-5 rounded-xl border border-brand-100 my-8">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-brand-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-brand-900 m-0 mb-1">工具推荐</h4>
                    <p className="text-brand-800 m-0 text-sm">如果你完全不想碰任何本地代码环境，推荐直接使用 <strong>v0.dev</strong>、<strong>Bolt.new</strong> 或 <strong>Lovable.dev</strong>，它们可以在网页端边对话边实时预览网站，且支持一键部署上线。如果你想稍微体验一下“写代码”的流程，可以使用 <strong>Cursor</strong> 配合本地环境。</p>
                  </div>
                </div>
              </div>

              <h2 id="step1">第一步：明确需求与页面结构</h2>
              <p>在向AI提问之前，你自己必须清楚这个网站是干嘛的。AI是执行者，你才是大脑。</p>
              
              <h3>1. 确定网站类型与受众</h3>
              <p>这是一个个人博客、公司官网介绍、作品集展示，还是一个售卖商品的落地页（Landing Page）？不同的类型对应完全不同的设计风格。</p>

              <h3>2. 梳理页面结构（线框图）</h3>
              <p>拿出一张纸，简单画一下网站长什么样。通常一个标准的单页网站包含：</p>
              <ul>
                <li><strong>导航栏（Header）：</strong>Logo、首页、关于我们、联系方式。</li>
                <li><strong>首屏（Hero Section）：</strong>大标题、副标题、行动号召按钮（如“立即试用”）。</li>
                <li><strong>特性介绍（Features）：</strong>三个卡片，展示核心卖点。</li>
                <li><strong>常见问题（FAQ）：</strong>折叠面板形式。</li>
                <li><strong>页脚（Footer）：</strong>版权信息、友情链接。</li>
              </ul>

              <h2 id="step2">第二步：让AI生成代码</h2>
              <p>现在，我们把你在第一步构思的内容，转化为给AI的提示词（Prompt）。</p>

              <h3>撰写高效的建站Prompt</h3>
              <p>一个好的Prompt应该包含：角色设定、技术栈要求、结构描述、风格要求。</p>
              <blockquote className="border-l-4 border-brand-500 pl-4 italic text-gray-600 bg-gray-50 p-4 rounded-r-lg">
                “你是一个资深的前端开发工程师。请帮我编写一个单页网站（Landing Page）。<br/>
                <strong>技术栈：</strong>使用 HTML、Tailwind CSS 和响应式设计。<br/>
                <strong>网站主题：</strong>一款名为‘猫咪日记’的AI宠物翻译APP。<br/>
                <strong>页面结构：</strong><br/>
                1. 顶部导航栏（Logo，功能，下载，联系我们）<br/>
                2. 首屏展示区域（大标题：听懂主子的每一声喵；副标题：通过AI分析猫咪叫声；一个显著的‘下载iOS版’按钮，配上渐变色背景）<br/>
                3. 功能特点介绍（三列布局：情绪分析、健康预警、云端记录）<br/>
                4. 底部页脚。<br/>
                <strong>风格要求：</strong>设计要现代、极简，主色调使用温暖的橙色系（如Tailwind的orange-500），按钮要有悬停（hover）动效。确保在手机端也能完美适配。”
              </blockquote>
              <p>把这段话发给AI，它会为你输出一大段HTML代码。</p>

              <h2 id="step3">第三步：本地预览与迭代</h2>
              <p>拿到代码后，如果你用的是v0或Bolt，你已经在右侧看到预览了。如果是传统AI对话框拿到的代码：</p>

              <h3>如何预览？</h3>
              <ol>
                <li>在电脑桌面上新建一个文件夹，命名为“my-website”。</li>
                <li>在文件夹里新建一个文本文件，命名为 <code>index.html</code>。注意后缀名一定要是.html。</li>
                <li>把AI生成的代码复制粘贴进去，保存。</li>
                <li>双击这个 <code>index.html</code> 文件，浏览器就会打开你的网站。</li>
              </ol>

              <h3>通过自然语言进行修改迭代</h3>
              <p>初版大概率不是完美的。你可以继续对AI提要求：</p>
              <ul>
                <li>“首屏大标题的字体太小了，帮我改大一点。”</li>
                <li>“功能特点的三个卡片在手机屏幕上挤在一起了，请帮我改成手机端竖排显示，电脑端横排显示。”</li>
                <li>“把导航栏改成滚动时吸顶（固定在最上方）的效果。”</li>
              </ul>
              <p>每次拿到新代码，覆盖掉原来的 <code>index.html</code> 再刷新浏览器即可。</p>

              <h2 id="step4">第四步：部署上线与最后的检查清单</h2>
              <p>网站在本地看没问题了，怎么让别人也能通过网址访问呢？</p>

              <h3>使用免费工具部署上线</h3>
              <p>最简单的方案是使用 <strong>Vercel</strong> 或 <strong>Netlify</strong> 的拖拽部署功能（Drop deploy）：</p>
              <ol>
                <li>注册并登录 <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer">Netlify Drop</a>。</li>
                <li>直接把你桌面的“my-website”文件夹拖拽进网页的上传虚线框内。</li>
                <li>等待几秒钟，Netlify 就会分配给你一个公网链接（如 `https://random-word.netlify.app`）。</li>
                <li>你的网站上线了！发给朋友们看看吧。</li>
              </ol>

              <div className="bg-red-50 p-5 rounded-xl border border-red-100 my-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-red-900 m-0 mb-1">上线前的必做检查（Checklist）</h4>
                    <ul className="text-red-800 m-0 text-sm list-disc pl-4 mt-2">
                      <li><strong>响应式测试：</strong>在电脑上缩小浏览器窗口，或者直接用手机打开链接，看看排版有没有错乱。</li>
                      <li><strong>死链检查：</strong>点击页面上的每一个按钮和导航链接，确保它们要么能跳转，要么有正确的锚点定位。</li>
                      <li><strong>默认文本替换：</strong>检查是否还有AI留下的“Lorem ipsum”等占位符乱码文本。</li>
                      <li><strong>占位图替换：</strong>如果AI用了 `https://via.placeholder.com`，记得让AI教你如何换成你真实的图片链接。</li>
                    </ul>
                  </div>
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

            </div>
          </div>

          <div className="lg:col-span-3 lg:block mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/ai-office-workflow" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI办公工作流怎么搭？
                  </Link>
                  <Link href="/guides/ai-outage-or-network" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    排查网络连接问题
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
