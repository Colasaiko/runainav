import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import { Zap, Check, ChevronRight, AlertTriangle, Info, Terminal } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";
import CopyButton from '@/components/ui/CopyButton';
import TutorialImage from '@/components/ui/TutorialImage';

export const metadata = constructMetadata({
  title: 'Cursor搭建个人博客教程：从创建到部署',
  description: '从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。',
  canonical: '/guides/cursor-build-blog',
});

export default function CursorBuildBlogPage() {
  const faqData = [
    { q: "Cursor 可以完全不会代码使用吗？", a: "对于非常基础的项目，可以通过与 Cursor 对话完成。但完全不懂代码在排错和修改细节时会比较困难，建议在使用的过程中顺便了解一些基础的 HTML/CSS 和代码逻辑，这样效率会大大提升。" },
    { q: "Cursor 可以直接帮我生成整个网站吗？", a: "它可以，但非常不推荐一次性要求生成整个复杂网站。因为如果出了错，你很难知道问题在哪。建议分步骤来：先建结构，再调样式，最后加功能。" },
    { q: "做个人博客一定要用 Next.js 吗？", a: "不是必须的。你完全可以用简单的 HTML/CSS、Astro 或是 Vue 来搭建。但 Next.js 生态成熟且部署极度方便（配合 Vercel），因此常被作为新手入门推荐示例。" },
    { q: "Cursor 写完代码以后为什么打不开？", a: "很多时候是因为你的项目依赖没有安装（没有运行 npm install），或者是端口被占用，也可能是 AI 写的代码里有语法错误。请将终端（Terminal）里的报错信息直接复制给 Cursor 让它帮你排查。" },
    { q: "为什么要先在本地运行？", a: "在本地运行能让你实时看到代码的修改效果，并且不会影响已经上线的版本。只有在本地确认没问题后，再上传并部署才是安全的开发流程。" },
    { q: "Cursor 项目怎么上传 GitHub？", a: "可以在 Cursor 左侧的源码管理栏（Source Control）中操作，或者在终端依次运行 git add .、git commit、git push 等命令。上传前务必确保 .gitignore 已经配置好。" },
    { q: "GitHub 上传以后网站就自动上线了吗？", a: "需要你将 GitHub 仓库绑定到 Vercel 或 Cloudflare Pages 等部署平台。首次绑定配置好后，以后每次你推送到 GitHub，这些平台通常就会自动拉取新代码并重新部署上线。" },
    { q: "Cursor 使用时网络不稳定怎么办？", a: "Cursor 依赖海外模型服务，国内直接连接偶尔会出现超时或响应慢。建议配置稳定的网络环境，或者查看我们的 AI 网络排查指南进行优化。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Cursor 搭建个人博客", "item": "https://runainav.com/guides/cursor-build-blog" }
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
    "headline": "Cursor搭建个人博客教程：从创建到部署",
    "description": "从安装Cursor、创建项目、编写提示词到本地预览、上传GitHub与部署网站，本文用新手能看懂的方式演示AI辅助搭建个人博客，并整理常见报错与排查方法。",
    "author": { "@type": "Organization", "name": "RunAI" }
  };

  const prompt1 = `请帮我创建一个简洁的个人博客网站。

技术要求：
- Next.js
- TypeScript
- 使用当前项目已有的样式方案
- 必须支持手机和电脑

网站需要：
1. 首页
2. 文章列表
3. 文章详情页
4. 关于我页面

设计方向：
- 白色背景
- 简洁排版
- 圆角卡片
- 不要复杂动画

开发要求：
- 先检查当前项目
- 先告诉我准备修改哪些文件
- 不要一次重写整个项目
- 每次只完成一个步骤
- 保留现有可正常工作的代码
- 完成后告诉我修改了什么

先给我执行计划，不要马上修改代码。`;

  const prompt2 = `请先检查当前首页代码。

目标：
- 保留现在整体设计
- 不修改 Header 和 Footer
- 只优化首页文章卡片
- 手机端必须正常
- 不新增第三方 UI 库

请先告诉我你准备修改哪些文件，再开始。`;

  const prompt3 = `运行 npm run build 后出现下面这个错误：
Module not found: Can't resolve '@/components/Header'

请先解释这个错误为什么出现。
只修改和这个错误直接相关的文件。
不要重构其他页面。
修复后再次运行 build，并告诉我结果。`;

  const prompt4 = `请检查这个项目是否有可能被提交到 GitHub 的敏感文件。

重点检查：
- .env
- API Key
- Token
- 密码
- 私人配置

不要删除文件。
先告诉我发现了什么，并检查 .gitignore 是否正确。`;

  const prompt5 = `请对这个项目做一次上线前检查。
只检查，不要重新设计页面。

重点检查：
1. npm run build
2. TypeScript 错误
3. 死链
4. 手机端布局
5. 图片路径
6. .env 和敏感信息
7. SEO metadata
8. 404

完成后给我问题清单。
不要在没有确认的情况下大规模修改代码。`;

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
            <span className="text-gray-900 font-medium">Cursor 搭建个人博客</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">如何用 Cursor 搭建个人博客？</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            从创建项目、编写提示词到上传 GitHub 和部署网站，用一个完整流程了解 Cursor 如何辅助新手完成网站制作。
          </p>

          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full">实战教程</span>
            <span>更新于 2026-09-04</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl py-12 relative">
        {/* Absolute trigger for Sticky Bar */}
        <div id="article-sticky-trigger" className="absolute top-0 w-full h-1 pointer-events-none opacity-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            
            {/* Quick Read */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden mb-10">
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
            </div>

            {/* Workflow */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">完整工作流概览</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 font-medium mb-4">
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">写需求</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">创建项目</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">本地预览</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">分步修改</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">Build检查</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">Push GitHub</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="bg-gray-100 px-3 py-1.5 rounded-lg">自动部署</span>
              </div>
              <p className="text-sm text-gray-500">这只是整体路线图，下面会把每一步拆开说明。</p>
            </div>

            <div className="prose prose-brand max-w-none prose-h2:scroll-mt-32 prose-h3:scroll-mt-32 prose-h2:mt-12 prose-img:rounded-xl">
              
              <h2 id="prep" className="mt-0">开始前需要准备什么？</h2>
              <p>在开始让 AI 帮你写代码之前，我们需要准备好最基础的开发环境：</p>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full text-sm text-left border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">工具</th>
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">用途</th>
                      <th className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-200">必须</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Cursor</td>
                      <td className="px-4 py-3 text-gray-600">AI 编程编辑器，核心开发工具</td>
                      <td className="px-4 py-3 text-gray-600">是</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Node.js</td>
                      <td className="px-4 py-3 text-gray-600">本地运行网页项目，建议安装官方 LTS（长期支持版）</td>
                      <td className="px-4 py-3 text-gray-600">是</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">GitHub 账号</td>
                      <td className="px-4 py-3 text-gray-600">保存项目代码及连接自动化部署</td>
                      <td className="px-4 py-3 text-gray-600">是</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">浏览器</td>
                      <td className="px-4 py-3 text-gray-600">本地预览和调试效果</td>
                      <td className="px-4 py-3 text-gray-600">是</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-gray-900">Git</td>
                      <td className="px-4 py-3 text-gray-600">将代码从本地上传到 GitHub</td>
                      <td className="px-4 py-3 text-gray-600">建议</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 p-5 rounded-xl my-6 border border-green-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mt-0 mb-1">做到这里，你应该看到：</h4>
                  <ul className="text-green-800 text-sm m-0 space-y-1 list-none p-0">
                    <li>✅ 电脑里已经安装好了 Cursor 软件。</li>
                    <li>✅ 命令行中可以正确运行 Node.js。</li>
                    <li>✅ GitHub 已经注册并登录成功。</li>
                  </ul>
                  <p className="text-green-700 text-sm mt-3 mb-0">如果这些都已就绪，就可以继续下一步。</p>
                </div>
              </div>

              <h2 id="step1">第一步：创建博客项目</h2>
              <p>为了让教程流程清晰，我们以 <strong>Next.js</strong> 作为示例。生态成熟、配合 Cursor 和 Vercel 的体验极佳。但这只是示例，Cursor 同样可以辅助你写 Astro、React 或是纯静态的 HTML 页面。</p>
              
              <div className="bg-blue-50 text-blue-800 text-sm px-4 py-3 rounded-lg mb-4 flex items-center gap-2 border border-blue-100">
                <Terminal className="w-4 h-4 flex-shrink-0" />
                <span>终端（Terminal）可以理解成向电脑输入开发命令的窗口。在 Cursor 中通常可以直接打开内置终端，不需要另外安装复杂工具。</span>
              </div>

              <p>打开终端，输入以下命令来创建 Next.js 项目并进入文件夹：</p>
              
              <div className="relative group bg-gray-900 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text="npx create-next-app@latest my-blog&#10;cd my-blog&#10;npm run dev" />
                </div>
                <pre className="p-4 text-sm text-gray-50 overflow-x-auto m-0 bg-transparent"><code className="language-bash">npx create-next-app@latest my-blog
cd my-blog
npm run dev</code></pre>
              </div>

              <TutorialImage 
                src="/images/tutorials/cursor-open-project.png"
                alt="Cursor 打开项目"
                caption="在 Cursor 中打开刚刚创建好的 my-blog 文件夹"
              />

              <TutorialImage 
                src="/images/tutorials/cursor-project-files.jpg"
                alt="项目文件结构"
                caption="你应该能在左侧看到生成的 package.json 和项目文件"
              />

              <div className="bg-green-50 p-5 rounded-xl my-6 border border-green-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mt-0 mb-1">做到这里，你应该看到：</h4>
                  <ul className="text-green-800 text-sm m-0 space-y-1 list-none p-0">
                    <li>✅ 项目文件夹已经生成</li>
                    <li>✅ Cursor 左侧能看到项目文件</li>
                    <li>✅ package.json 存在</li>
                  </ul>
                  <p className="text-green-700 text-sm mt-3 mb-0">如果这些都看到，就可以继续下一步。</p>
                </div>
              </div>

              <h2 id="step2">第二步：先把网站需求写清楚</h2>
              <p>新手最容易犯的错误就是直接给 Cursor 抛出一句非常模糊的指令。</p>
              
              <div className="bg-red-50 border border-red-200 p-5 my-6 rounded-xl flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-red-900 font-bold mt-0 mb-2">不建议这样问</h4>
                  <p className="text-red-800 text-sm m-0 bg-white p-3 rounded border border-red-100 italic">“帮我做一个漂亮的网站”</p>
                  <p className="text-red-700 text-sm mt-3 mb-0">问题在于：没有页面要求、没有风格限制、没有技术栈指定、没有手机适配要求。AI 只能靠自行猜测，大概率做出来的不是你想要的。</p>
                </div>
              </div>

              <p>一份优秀的起手 Prompt（提示词），应该包含：网站类型、技术栈、页面需求、视觉风格、执行顺序。以下是一个可以直接参考的原创完整示例：</p>

              <div className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text={prompt1} />
                </div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-medium text-sm text-gray-700">Prompt 1：创建网站计划</div>
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto m-0 bg-transparent whitespace-pre-wrap leading-relaxed">{prompt1}</pre>
              </div>

              <p>为什么这个提示词更好？因为它规定了<strong>“先给我执行计划，不要马上修改代码”</strong>。这也避免了 AI 一下子写入大量错误代码难以撤销。</p>

              <TutorialImage 
                src="/images/tutorials/cursor-prompt-example.png"
                alt="向 Cursor 输入 Prompt"
                caption="将需求清晰地输入给 Cursor 的对话框"
              />

              <h2 id="step3">第三步：让 Cursor 分步骤修改网站</h2>
              <p>不要要求一次性“完整做完博客、SEO、后台、评论、数据库”。任务越大，AI 越容易出错。</p>

              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl my-6">
                <h4 className="font-bold text-amber-900 mt-0 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-amber-500" />
                  真实开发原则：不要一次让 Cursor 做十件事
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第一步：创建基础页面</div>
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第二步：修改首页</div>
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第三步：增加文章页</div>
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第四步：手机适配</div>
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第五步：SEO</div>
                  <div className="bg-white p-3 rounded-lg border border-amber-100">第六步：部署</div>
                </div>
                <p className="text-amber-800 text-sm mt-4 mb-0">任务越小，越容易发现哪里出错，也越容易针对性修复。</p>
              </div>

              <p>如果你已经有了基础网站，现在只想针对性修改某个页面，可以使用这种限制修改范围的提示词：</p>

              <div className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text={prompt2} />
                </div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-medium text-sm text-gray-700">Prompt 2：限制修改范围</div>
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto m-0 bg-transparent whitespace-pre-wrap leading-relaxed">{prompt2}</pre>
              </div>

              <TutorialImage 
                src="/images/tutorials/cursor-code-changes.png"
                alt="Cursor 修改代码"
                caption="确认 AI 提出的修改文件，并点击 Apply 应用代码"
              />

              <h2 id="step4">第四步：怎么在本地看到自己的网站？</h2>
              <p>在 AI 帮你修改代码的同时，你需要实时在浏览器中预览。在终端运行依赖安装与启动命令：</p>
              
              <div className="relative group bg-gray-900 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text="npm install&#10;npm run dev" />
                </div>
                <pre className="p-4 text-sm text-gray-50 overflow-x-auto m-0 bg-transparent"><code className="language-bash">npm install
npm run dev</code></pre>
              </div>

              <p>运行成功后，终端通常会输出一个类似 <code>http://localhost:3000</code> 的地址（具体端口可能不同，请以终端实际输出为准）。在浏览器中打开它即可看到你的网站实时效果。</p>

              <TutorialImage 
                src="/images/tutorials/cursor-local-preview.jpg"
                alt="Cursor 项目本地预览博客页面"
                caption="在本地运行项目后，可以先通过浏览器检查页面是否正常，再继续修改。"
              />

              <h2 id="step5">第五步：Cursor 改完以后报错怎么办？</h2>
              <p>写代码遇到报错再正常不过了。<strong>不要只告诉 Cursor：“坏了，帮我修。”</strong> 而是应该把完整错误交给 Cursor。</p>

              <div className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text={prompt3} />
                </div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-medium text-sm text-gray-700">Prompt 3：修复报错</div>
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto m-0 bg-transparent whitespace-pre-wrap leading-relaxed">{prompt3}</pre>
              </div>

              <h3 className="mt-8">Build 检查（极度重要）</h3>
              <p>本地 <code>npm run dev</code> 页面能打开，不代表项目一定可以部署上线。很多隐藏的类型错误或资源路径问题只有在打包阶段才会暴露。请在终端执行打包命令检查：</p>
              
              <div className="relative group bg-gray-900 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text="npm run build" />
                </div>
                <pre className="p-4 text-sm text-gray-50 overflow-x-auto m-0 bg-transparent"><code className="language-bash">npm run build</code></pre>
              </div>

              <TutorialImage 
                src="/images/tutorials/cursor-build-success.png"
                alt="npm run build 成功"
                caption="终端显示 build 成功的日志信息"
              />

              <div className="bg-green-50 p-5 rounded-xl my-6 border border-green-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mt-0 mb-1">做到这里，你应该看到：</h4>
                  <ul className="text-green-800 text-sm m-0 space-y-1 list-none p-0">
                    <li>✅ build 命令正常退出，没有红字中断</li>
                    <li>✅ 没有 TypeScript 类型错误</li>
                    <li>✅ 没有“找不到模块(Module not found)”</li>
                    <li>✅ 页面路由列表可以正常生成</li>
                  </ul>
                  <p className="text-green-700 text-sm mt-3 mb-0">Build 成功，意味着代码层面已经安全，更接近可以上线的状态。</p>
                </div>
              </div>

              <h2 id="step6">第六步：怎么上传 GitHub？</h2>
              <p>GitHub 是全球最大的保存和托管代码平台。我们需要把本地确认无误的代码存上去。</p>
              
              <div className="bg-red-50 border border-red-200 p-5 rounded-xl my-6 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-red-900 font-bold mt-0 mb-2">⚠️ 上传前先检查 Git 安全</h4>
                  <p className="text-red-800 text-sm m-0 mb-2">千万不要上传：<code>.env</code>、<code>.env.local</code>、API Key、Token、密码、数据库连接信息、私人证书。</p>
                  <p className="text-red-800 text-sm m-0 font-medium">项目根目录必须有 <code>.gitignore</code> 文件来排除这些敏感信息。</p>
                </div>
              </div>

              <p>如果不确定，可以要求 Cursor 帮你做一次安全排查：</p>
              <div className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text={prompt4} />
                </div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-medium text-sm text-gray-700">Prompt 4：检查 GitHub 敏感文件</div>
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto m-0 bg-transparent whitespace-pre-wrap leading-relaxed">{prompt4}</pre>
              </div>

              <p>确认无误后，在 GitHub 网站上新建一个空仓库（Repository），然后在你的本地项目终端中执行上传命令：</p>
              <div className="relative group bg-gray-900 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text="git init&#10;git add .&#10;git commit -m &quot;initial blog&quot;&#10;git remote add origin YOUR_GITHUB_REPOSITORY_URL&#10;git branch -M main&#10;git push -u origin main" />
                </div>
                <pre className="p-4 text-sm text-gray-50 overflow-x-auto m-0 bg-transparent"><code className="language-bash">git init
git add .
git commit -m &quot;initial blog&quot;

# 请把下面这行的 URL 替换成你真实的 GitHub 仓库地址
git remote add origin YOUR_GITHUB_REPOSITORY_URL

git branch -M main
git push -u origin main</code></pre>
              </div>

              <TutorialImage 
                src="/images/tutorials/github-repository.png"
                alt="GitHub Repository"
                caption="代码成功推送到 GitHub 后，可以在网页上看到你的项目文件"
              />

              <h2 id="step7">第七步：个人博客怎么部署上线？</h2>
              <p>现在把 GitHub 里的代码变成可以通过真实域名访问的公开网站。对于新手，最推荐的方向是 <strong>Vercel</strong> 或 <strong>Cloudflare Pages</strong>。</p>
              <p>基本操作流程都非常一致：</p>
              <ol>
                <li>登录平台，选择“导入项目 (Import Project)” 或连接你的 GitHub 账号。</li>
                <li>选中刚刚上传的博客仓库。</li>
                <li>框架通常会自动识别为 Next.js，直接点击 <strong>Deploy (部署)</strong>。</li>
                <li>平台会自动执行 Build 并生成公开网址。</li>
              </ol>
              
              <TutorialImage 
                src="/images/tutorials/deployment-success.png"
                alt="网站部署完成"
                caption="Vercel 部署成功并分配访问域名"
              />

              <div className="bg-green-50 p-5 rounded-xl my-6 border border-green-100 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-green-900 mt-0 mb-1">做到这里，你应该看到：</h4>
                  <ul className="text-green-800 text-sm m-0 space-y-1 list-none p-0">
                    <li>✅ 获得一个公开的网址（如 my-blog.vercel.app）</li>
                    <li>✅ 拔掉电脑网线，用手机 4G/5G 也能正常打开</li>
                    <li>✅ 首页正常渲染，文章链接跳转正常</li>
                    <li>✅ 刷新子页面不会报 404 错误</li>
                    <li>✅ 以后在本地修改代码推送到 GitHub 后，平台可以自动重新部署</li>
                  </ul>
                </div>
              </div>

              <h3 className="mt-10">上线前最后检查（Checklist）</h3>
              <p>我们可以丢给 Cursor 最后一段指令，让它扮演审查员帮你排雷：</p>

              <div className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden my-6">
                <div className="absolute right-2 top-2">
                  <CopyButton text={prompt5} />
                </div>
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-medium text-sm text-gray-700">Prompt 5：部署前综合检查</div>
                <pre className="p-4 text-sm text-gray-800 overflow-x-auto m-0 bg-transparent whitespace-pre-wrap leading-relaxed">{prompt5}</pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-6 rounded-r-xl">
                <h4 className="font-bold text-blue-900 mt-0 mb-2">💡 Cursor 说“完成”不代表真的完成</h4>
                <p className="text-blue-800 text-sm m-0">AI 可以快速生成和修改大量代码，但最终仍需要你自己<strong>打开页面预览、运行 build 打包、点击每个导航链接、以及缩放窗口检查手机端排版</strong>。千万不要仅仅因为 Cursor 回复了“已完成”，就直接认为网站已经毫无瑕疵。</p>
              </div>

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
