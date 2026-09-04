import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import Link from 'next/link';
import { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { Check, Info, Zap, ChevronRight, AlertTriangle } from 'lucide-react';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'Cursor搭建个人博客教程：从创建到部署',
  description: '从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。',
  canonical: '/guides/cursor-build-blog',
});

export default function CursorBuildBlogPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Cursor 搭建个人博客", "item": "https://runainav.com/guides/cursor-build-blog" }
    ]
  };

  const faqData = [
    { q: "Cursor 可以完全不会代码使用吗？", a: "对于非常基础的项目，可以通过与 Cursor 对话完成。但完全不懂代码在排错和修改细节时会比较困难，建议在使用的过程中顺便了解一些基础的 HTML/CSS 和代码逻辑，这样效率会大大提升。" },
    { q: "Cursor 可以直接帮我生成整个网站吗？", a: "它可以，但非常不推荐一次性要求生成整个复杂网站。因为如果出了错，你很难知道问题在哪。建议分步骤来：先建结构，再调样式，最后加功能。" },
    { q: "做个人博客一定要用 Next.js 吗？", a: "不是必须的。你完全可以用简单的 HTML/CSS、Astro 或是 Vue 来搭建。但 Next.js 生态成熟且部署极度方便（配合 Vercel），因此常被作为新手入门推荐示例。" },
    { q: "Cursor 写完代码以后为什么打不开？", a: "很多时候是因为你的项目依赖没有安装（没有运行 npm install），或者是端口被占用，也可能是 AI 写的代码里有语法错误。请将终端（Terminal）里的报错信息直接复制给 Cursor 让它帮你排查。" },
    { q: "为什么要先在本地运行？", a: "在本地运行能让你实时看到代码的修改效果，并且不会影响已经上线的版本。只有在本地确认没问题后，再上传并部署才是安全的开发流程。" },
    { q: "Cursor 项目怎么上传 GitHub？", a: "可以在 Cursor 左侧的源码管理栏（Source Control）中操作，或者在终端依次运行 git add .、git commit -m 'update'、git push 等命令。上传前务必确保 .gitignore 已经配置好。" },
    { q: "GitHub 上传以后网站就自动上线了吗？", a: "需要你将 GitHub 仓库绑定到 Vercel 或 Cloudflare Pages 等部署平台。首次绑定配置好后，以后每次你推送到 GitHub，这些平台通常就会自动拉取新代码并重新部署上线。" },
    { q: "Cursor 使用时网络不稳定怎么办？", a: "Cursor 依赖海外模型服务，国内直接连接偶尔会出现超时或响应慢。建议配置稳定的网络环境，或者查看我们的 AI 网络排查指南进行优化。" }
  ];

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
    "headline": "Cursor搭建个人博客教程：从创建到部署",
    "description": "从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。",
    "author": { "@type": "Organization", "name": "RunAI" }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)]">
      <Header />
      <ArticleStickyBar sections={[
         { id: 'prep', navLabel: '准备工作' },
         { id: 'step1', navLabel: '创建项目' },
         { id: 'step2', navLabel: '提示词' },
         { id: 'step3', navLabel: '修改页面' },
         { id: 'step4', navLabel: '本地预览' },
         { id: 'step5', navLabel: '处理报错' },
         { id: 'step6', navLabel: 'GitHub' },
         { id: 'step7', navLabel: '部署' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />
      
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Cursor 搭建个人博客</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">如何用 Cursor 搭建个人博客？</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            从创建项目、编写提示词到上传 GitHub 和部署网站，用一个完整流程了解 Cursor 如何辅助新手完成网站制作。
          </p>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">
              实战教程
            </span>
            <span>更新于 2026-09-04</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            <div id="article-sticky-trigger" className="h-1 w-full absolute -mt-1 opacity-0 pointer-events-none"></div>

            {/* Quick Read */}
            <section className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 relative z-10">
                <Zap className="w-5 h-5 text-brand-500" />
                30 秒速读
              </h2>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Cursor 可以帮助生成和修改代码，但仍然需要你自己检查和验收结果。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>做个人博客不需要一开始掌握完整的前端知识，重点是把需求说清楚。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>不要只输入“帮我做一个网站”，要把目标拆解成多个小步骤。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>AI 写出的代码出现报错很正常，先把完整的错误信息提供给 Cursor 分析。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>本地运行成功以后，再考虑上传 GitHub 和部署上线。</span>
                </li>
              </ul>
            </section>

            {/* Workflow */}
            <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">完整工作流概览</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">写需求</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">创建项目</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">本地预览</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">分步修改</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">Build 检查</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">Push GitHub</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">自动部署</span>
              </div>
            </section>

            <div className="prose prose-brand max-w-none prose-h2:scroll-mt-32 prose-h3:scroll-mt-32">
              
              <h2 id="prep">开始前需要准备什么？</h2>
              <p>在开始让 AI 帮你写代码之前，我们需要准备好最基础的开发环境：</p>
              <ul>
                <li><strong>Cursor</strong>：前往 <a href="https://cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方网站</a> 下载并安装。</li>
                <li><strong>Node.js</strong>：现代网页项目大多依赖它。请下载官方推荐的长期稳定版（LTS）。</li>
                <li><strong>GitHub 账号</strong>：用于保存你的代码和进行后续的自动部署。</li>
                <li><strong>网络环境</strong>：Cursor 需要连接海外模型服务，请确保你的网络连接稳定。</li>
                <li><strong>Git (可选)</strong>：用于将本地代码推送到 GitHub（大部分 Mac 默认自带，Windows 可自行安装）。</li>
              </ul>

              <h2 id="step1">第一步：创建博客项目</h2>
              <p>为了让教程流程清晰，我们以 <strong>Next.js</strong> 作为示例（生态成熟、配合 Cursor 和 Vercel 体验极佳）。但这只是示例，Cursor 同样可以辅助你写 Astro、Vue 或是纯静态的 HTML 页面。</p>
              <p>打开电脑终端（Terminal），输入创建命令（具体命令可能随框架更新变化，这里是常见的创建方式）：</p>
              <pre><code>npx create-next-app@latest my-blog</code></pre>
              <p>创建完成后，使用 Cursor 打开刚刚创建的 <code>my-blog</code> 文件夹，我们就可以开始和 AI 对话了。</p>

              <h2 id="step2">第二步：先把网站需求写清楚</h2>
              <p>新手最容易犯的错误就是直接给 Cursor 抛出一句：“帮我做一个个人博客”。</p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-r-lg">
                <h4 className="text-red-800 font-bold mt-0 mb-2">❌ 不太推荐的提示词</h4>
                <p className="text-red-700 m-0 text-sm">“帮我做一个个人博客网站。”</p>
                <p className="text-red-600 m-0 mt-2 text-xs">原因：需求太模糊。Cursor 只能靠猜去决定你的设计、颜色、栏目和页面结构，最终生成的东西往往不是你想要的。</p>
              </div>

              <p>你应该提供一份清洗的新手 Prompt（提示词）示例，比如：</p>
              <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl my-6">
                <p className="text-gray-800 italic m-0">“请帮我创建一个简洁的个人博客网站，使用 Next.js 和 TypeScript。网站需要首页、文章列表、文章详情和关于我页面。整体使用白色背景、圆角卡片和简洁排版，需要适配手机。请先告诉我你准备创建哪些文件和页面，不要一次修改整个项目，等我确认后再开始第一步。”</p>
              </div>
              <p>这个提示词交代了：<strong>目标用户、视觉风格、需要哪些页面、技术栈、手机适配，以及最重要的——要求 AI 先给计划，不要擅自重构整个项目。</strong></p>

              <h2 id="step3">第三步：让 Cursor 分步骤修改网站</h2>
              <p>不要要求一次性“完整做完博客、SEO、后台、评论、数据库”。任务越大，AI 越容易出错。建议拆解为：</p>
              <ol>
                <li><strong>第一步</strong>：建立基础页面框架（Header、Footer）。</li>
                <li><strong>第二步</strong>：调整首页的排版和欢迎语。</li>
                <li><strong>第三步</strong>：增加静态的博客文章列表页。</li>
                <li><strong>第四步</strong>：检查手机端排版是否错乱。</li>
                <li><strong>第五步</strong>：部署上线。</li>
              </ol>

              <h2 id="step4">第四步：本地预览网站</h2>
              <p>在 AI 帮你修改代码的同时，你需要实时查看效果。在 Cursor 的终端面板中运行：</p>
              <pre><code>npm run dev</code></pre>
              <p>然后在浏览器打开 <code>http://localhost:3000</code>（具体端口以终端显示为准）。如果在预览中看到不喜欢的地方，回到 Cursor 用 Cmd+K 选中对应的代码区域说：“把这个标题的字体改小一点，颜色换成深灰色。”</p>

              <h2 id="step5">第五步：Cursor 改完以后报错怎么办？</h2>
              <p>写代码遇到报错再正常不过了。<strong>不要只告诉 Cursor：“不能用”、“坏了”。</strong></p>
              <p>更好的方法是，把终端或浏览器里那串红色的错误代码完整复制，然后在 Cursor 中粘贴并说：</p>
              <div className="bg-gray-100 p-4 rounded-lg my-4 text-sm text-gray-700">
                “运行 npm run build 后出现以下错误，请先解释原因，只修改与这个错误有关的文件，不要重构其他代码：[粘贴报错内容]”
              </div>

              <h2 id="step6">第六步：网站做好以后，怎么上传 GitHub？</h2>
              <p>当本地预览没问题后，我们需要把代码存到 GitHub。在 GitHub 网站上新建一个 Repository，然后在你的本地项目终端中执行：</p>
              <pre><code>git init
git add .
git commit -m &quot;first commit&quot;
git branch -M main
git remote add origin 你的仓库地址
git push -u origin main</code></pre>

              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-amber-900 font-bold mt-0 mb-2">Git 安全提示：不要泄露你的密码</h4>
                  <p className="text-amber-800 text-sm m-0">在运行 git add 之前，务必确认项目中包含 <code>.gitignore</code> 文件，并且已经忽略了 <code>.env</code> 文件。<strong>千万不要把包含 API Key、密码、Token 或数据库凭证的文件上传到公开的 GitHub 仓库中！</strong></p>
                </div>
              </div>

              <h2 id="step7">第七步：个人博客怎么部署上线？</h2>
              <p>现在我们把 GitHub 里的代码变成可以通过域名访问的真实网站。对于新手，最推荐的平台是 <strong>Vercel</strong> 或 <strong>Cloudflare Pages</strong>。</p>
              <p>以常见流程为例：</p>
              <ol>
                <li>登录平台，选择“导入 GitHub 项目 (Import Project)”。</li>
                <li>授权你的 GitHub 账号，并选中刚才上传的博客仓库。</li>
                <li>点击 <strong>Deploy (部署)</strong>。</li>
              </ol>
              <p>等待一两分钟后，平台就会为你分配一个线上网址。以后你每次在本地写完新文章 <code>git push</code> 到 GitHub 时，平台通常就会自动拉取新代码并重新部署。</p>

              <h2 id="faq">新手常见错误与 FAQ</h2>
              
              <div className="space-y-6 mt-8">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 m-0 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

            </div>
            
            <div id="article-end-trigger" className="h-1 w-full opacity-0 pointer-events-none"></div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-6">
              
              {/* Related */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/cursor" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    Cursor 使用指南
                  </Link>
                  <Link href="/guides/ai-network" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    AI 网络环境与常见问题排查
                  </Link>
                  <Link href="/guides/github-copilot" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    GitHub Copilot 指南
                  </Link>
                  <Link href="/guides/v0" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm">
                    v0 指南
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
