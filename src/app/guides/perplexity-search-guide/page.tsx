import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import CopyButton from '@/components/ui/CopyButton';
import TutorialImage from '@/components/ui/TutorialImage';
import { constructMetadata } from "@/lib/seo";
import { Info, Check, X, Search, FileText, CheckCircle2, ShieldAlert, ArrowRight, Library, Target, Filter, Database, MessageSquare } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = constructMetadata({
  title: 'Perplexity搜索与引用核对教程 | RunAI',
  description: '从提问、搜索、引用核对到文件上传与深入研究，本文用实际流程教你使用Perplexity查资料，并说明如何判断来源是否可靠、什么时候需要继续查证。',
  canonical: '/guides/perplexity-search-guide',
  type: 'article',
  publishedTime: '2026-09-05',
  modifiedTime: '2026-09-05',
});

const SECTIONS = [
  { id: 'workflow', navLabel: '搜索流程' },
  { id: 'prompting', navLabel: '怎么提问' },
  { id: 'citations', navLabel: '核对引用' },
  { id: 'modes', navLabel: '搜索模式' },
  { id: 'files', navLabel: '文件研究' },
  { id: 'latest', navLabel: '最新资料' },
  { id: 'mistakes', navLabel: '常见错误' },
  { id: 'faq', navLabel: 'FAQ' },
];

export default function PerplexitySearchGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Perplexity 怎么查资料和核对来源？",
    "description": metadata.description,
    "image": "https://runainav.com/images/og/default.webp",
    "author": {
      "@type": "Organization",
      "name": "RunAI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RunAI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://runainav.com/logo.png"
      }
    },
    "datePublished": "2026-09-05T00:00:00+08:00",
    "dateModified": "2026-09-05T00:00:00+08:00"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Perplexity 的引用一定可靠吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不一定。Perplexity 会提供来源链接，但 AI 可能会概括过度、遗漏前提条件或误读来源。因此，重要结论必须点开引用原文交叉核对。"
        }
      },
      {
        "@type": "Question",
        "name": "Perplexity 和普通搜索引擎有什么不同？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "普通搜索引擎（如传统 Google）主要返回链接列表，需要你自己逐一打开筛选；而 Perplexity 会主动阅读网页，直接整理出一个结构化的答案，并附带引用标识。"
        }
      },
      {
        "@type": "Question",
        "name": "搜最新资料应该怎么问？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "在提问时明确加上时间限制，例如“只整理 2026 年以后的资料，并标明每个来源的发布日期”。这样可以避免 AI 混入过时信息。"
        }
      },
      {
        "@type": "Question",
        "name": "为什么来源日期很重要？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI 很容易混淆“过去的事实”和“当前的事实”。很多时候一篇“最新发布”的文章引用的其实是三年前的旧数据。核对原始发布日期能避免踩入时间陷阱。"
        }
      },
      {
        "@type": "Question",
        "name": "一个来源够不够？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "对于无关紧要的闲聊问题可能够了。但对于重要的事实、产品参数或决策，至少需要交叉核对两个可靠的、互不隶属的第一方或权威第三方来源。"
        }
      },
      {
        "@type": "Question",
        "name": "Perplexity 可以上传 PDF 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。目前它支持上传 PDF、文本等多种文件格式，但使用额度和具体支持格式可能依账户方案有所不同，请以最新官网显示为准。"
        }
      },
      {
        "@type": "Question",
        "name": "长 PDF 会全部读取吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "通常不会逐字无损读取超长文件。系统可能会提取最相关的部分进行分析。所以提问时最好指明要找的核心章节或明确要求提取特定的信息。"
        }
      },
      {
        "@type": "Question",
        "name": "Pro Search 和 Research 有什么区别？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "普通搜索适合快速解答。Pro Search 会执行多步推理搜索；而更高阶的 Research 功能（或深度搜索模式）通常会抓取更多页面，适合做复杂的全盘整理。"
        }
      },
      {
        "@type": "Question",
        "name": "Perplexity 适合写论文吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "它非常适合用来发现参考文献、整理大纲和理解复杂概念。但不能直接用于生成正式论文正文，所有引用的数据必须按学术规范打开原文重新核实并引用。"
        }
      },
      {
        "@type": "Question",
        "name": "可以直接复制 Perplexity 的答案发布吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不建议。AI 总结的内容缺乏个人视角且存在“幻觉”风险。正确做法是将其作为研究助手，消化它整理的来源后，自己写出更准确的文章。"
        }
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Perplexity 搜索与引用核对教程", "item": "https://runainav.com/guides/perplexity-search-guide" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Script id="json-ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="json-ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="json-ld-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <Header />
      <ArticleStickyBar sections={SECTIONS} />
      
      <main className="flex-grow pt-8 pb-20">
        <article className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-gray-900 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Perplexity 搜索教程</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Perplexity 怎么查资料和核对来源？
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              从第一次搜索到打开引用、交叉核对和继续追问，建立一套比“直接相信 AI 答案”更可靠的搜索方法。
            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block mb-0.5">资料核对：2026-09-05</span>
                Perplexity 的搜索模式、功能和使用额度会持续调整（部分功能名称可能随产品更新变化），本文以当前官方公开资料为基础整理。
              </div>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            {/* 30 秒速读 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-16">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-0 mb-6">
                <Search className="w-5 h-5 text-brand-500" /> 30 秒速读
              </h3>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>有引用 ≠ 结论一定正确：</strong>Perplexity 虽会附上来源，但重要信息一定要亲自点开 [1] [2] 查看原文。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>优先看一手资料：</strong>优先相信官方公告、文档、原始论文，而不是只看第三方媒体的二次转载。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>警惕时间陷阱：</strong>涉及最新消息时，务必核对来源的原始发布日期（不是网页最后修改时间）。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">•</span>
                  <span><strong>交叉核对更安全：</strong>当不同来源互相冲突时，不要让 AI 替你“选一个”。重要结论至少需检查两个可靠来源。</span>
                </li>
              </ul>
            </div>

            <p className="text-lg">
              Perplexity 的核心是：<strong>搜索网络、整理答案、提供对应来源链接</strong>。与普通聊天 AI 不同，它的产品设计更强调“搜索+来源”。但如何确保你查到的东西是真实的？我们需要建立一套标准流程。
            </p>
            <p className="text-sm text-gray-500 mb-12">
              注：部分付费模式允许选择不同模型，实际可用模型以当前账号中的模型选择器为准。本文不对特定模型型号进行硬性对比。
            </p>

            {/* 核心流程图 */}
            <h2 id="workflow" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Filter className="w-6 h-6 text-brand-500" /> 用 Perplexity 查资料，我建议这样做
            </h2>
            <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-8 overflow-x-auto shadow-sm mb-12 relative">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-2 min-w-max">
                {[
                  { step: "01", title: "提问", desc: "加来源要求" },
                  { step: "02", title: "看答案", desc: "初略了解框架" },
                  { step: "03", title: "看引用", desc: "找对应 [1] [2]" },
                  { step: "04", title: "打开原文", desc: "绝不盲目相信" },
                  { step: "05", title: "检查时间", desc: "确认日期出处" },
                  { step: "06", title: "第二来源", desc: "交叉核对" },
                  { step: "07", title: "追问", desc: "探究细节冲突" },
                  { step: "08", title: "整理", desc: "得出最终结论" }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-row md:flex-col items-center md:items-start gap-3 md:gap-1 flex-1 relative">
                    <div className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold flex items-center justify-center shrink-0 z-10">
                      {item.step}
                    </div>
                    {/* Horizontal Line for desktop */}
                    {idx < 7 && <div className="hidden md:block absolute top-4 left-8 right-0 h-0.5 bg-gray-700 -z-0"></div>}
                    <div className="flex flex-col">
                      <span className="font-bold text-sm md:mt-3 md:mb-1">{item.title}</span>
                      <span className="text-xs text-gray-400">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第一步：怎么提问 */}
            <h2 id="prompting" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <MessageSquare className="w-6 h-6 text-brand-500" /> 问题怎么问，搜索结果会更好？
            </h2>
            <p>
              在普通搜索引擎，你可能只输入 <code>iPhone AI</code>。但在 Perplexity，你应该像跟研究助理下达任务一样。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                <div className="text-red-600 font-bold mb-2 flex items-center gap-2"><X className="w-4 h-4"/> 错误示范</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-red-900 border border-red-100">iPhone AI</code>
                <p className="text-sm text-red-800 m-0">毫无边界，AI 会随便抓取几篇最近的科技新闻给你一锅炖。</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                <div className="text-green-600 font-bold mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> 正确示范</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-green-900 border border-green-100">请整理 Apple 当前公开的生成式 AI 功能，优先引用 Apple 官方来源，并区分已经上线和仍未正式推出的功能。</code>
                <p className="text-sm text-green-800 m-0">增加了官方来源要求，并规定了输出的维度。</p>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-4">💡 实战 Prompt：加“来源要求”与“日期限制”</h3>
            
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 1：强制官方优先</h4>
                <CopyButton text="请回答这个问题，并优先使用官方或第一方来源。如果只能找到媒体或二次资料，请明确告诉我。每个重要结论后保留对应来源，最后列出最值得我打开核对的 3 个原始页面。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  请回答这个问题，并优先使用官方或第一方来源。如果只能找到媒体或二次资料，请明确告诉我。每个重要结论后保留对应来源，最后列出最值得我打开核对的 3 个原始页面。
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 2：圈定最新日期</h4>
                <CopyButton text="请只整理 2026 年 8 月以后发布的信息。每个来源标出发布日期。如果无法确认发布日期，请单独标记。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  请只整理 2026 年 8 月以后发布的信息。每个来源标出发布日期。如果无法确认发布日期，请单独标记。
                </p>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 核对引用 */}
            <h2 id="citations" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Target className="w-6 h-6 text-brand-500" /> 看到引用以后，下一步看什么？
            </h2>
            <p>
              不要以为文末挂着 <code>[1][2][3]</code> 就代表“事实已验证”。在点击这些 Sources (引用/来源) 时，请在脑海中过一遍这 5 个问题：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="bg-brand-100 text-brand-600 font-bold w-6 h-6 rounded flex items-center justify-center shrink-0">1</span>
                <div><strong className="block text-gray-900">来源是谁？</strong>是官方、大媒体，还是个人博客？</div>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="bg-brand-100 text-brand-600 font-bold w-6 h-6 rounded flex items-center justify-center shrink-0">2</span>
                <div><strong className="block text-gray-900">发布日期是什么？</strong>是今天刚发的，还是两年前的旧文重发？</div>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="bg-brand-100 text-brand-600 font-bold w-6 h-6 rounded flex items-center justify-center shrink-0">3</span>
                <div><strong className="block text-gray-900">支持这句话吗？</strong>引用页面真的白纸黑字写了 AI 说的这句话吗？</div>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm flex items-start gap-3">
                <span className="bg-brand-100 text-brand-600 font-bold w-6 h-6 rounded flex items-center justify-center shrink-0">4</span>
                <div><strong className="block text-gray-900">第一手还是转载？</strong>它是数据的直接发布者，还是搬运工？</div>
              </div>
              <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm flex items-start gap-3 md:col-span-2">
                <span className="bg-brand-100 text-brand-600 font-bold w-6 h-6 rounded flex items-center justify-center shrink-0">5</span>
                <div><strong className="block text-gray-900">其他可靠来源怎么说？</strong>有没有完全相反的论据被 AI 忽略了？</div>
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl mb-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-32 h-32 text-rose-900" />
              </div>
              <div className="relative z-10">
                <h4 className="text-rose-900 font-bold text-lg mt-0 mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" /> 有引用 ≠ 引用真的支持答案
                </h4>
                <p className="text-rose-800 text-sm mb-0">
                  AI 很容易犯的错是：把来源里的“计划推出”误解为“已经推出”；把“在某些条件下成立”概括为“普遍成立”。<strong>重要结论一定要点开原文自己看一遍！</strong>
                </p>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-4">来源可信度金字塔 (Source Pyramid)</h3>
            <p className="text-sm text-gray-500 mb-6">注：这不是绝对排行榜。例如调查用户 Bug 时，第四层的 Reddit 可能比第一层官方新闻稿更有价值。关键看你查的是什么。</p>
            
            <div className="flex flex-col gap-2 mb-12 max-w-3xl mx-auto">
              <div className="bg-green-100 text-green-900 px-6 py-4 rounded-xl text-center shadow-sm w-3/4 mx-auto font-medium">
                第一层：官方公告 / 文档 / 原始论文 / 机构数据
              </div>
              <div className="bg-blue-100 text-blue-900 px-6 py-4 rounded-xl text-center shadow-sm w-5/6 mx-auto font-medium">
                第二层：大型权威媒体 / 学术数据库
              </div>
              <div className="bg-amber-100 text-amber-900 px-6 py-4 rounded-xl text-center shadow-sm w-11/12 mx-auto font-medium">
                第三层：专业分析师博客 / 行业报告分析
              </div>
              <div className="bg-gray-200 text-gray-800 px-6 py-4 rounded-xl text-center shadow-sm w-full font-medium">
                第四层：公共论坛 / 社交媒体讨论 / SEO 内容农场
              </div>
            </div>

            {/* 教学案例 */}
            <h3 className="font-bold text-lg mb-4">实战演练：验证与冲突寻找</h3>
            <p>
              假设你查了一个高风险软件参数。你得到了一个包含几个 <code>[1][2]</code> 的答案。现在你可以用下面两个 Prompt 来深挖：
            </p>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-6">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 3：让 AI 重新核对自己的答案</h4>
                <CopyButton text="重新检查你刚才的回答。请逐条列出主要结论，并告诉我：1. 哪个来源直接支持这个结论 2. 来源发布日期 3. 是第一方还是第三方来源 4. 来源是否真的明确说了这件事 5. 哪些结论仍然存在不确定性。不要补充新的结论。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  重新检查你刚才的回答。请逐条列出主要结论，并告诉我：1. 哪个来源直接支持这个结论 2. 来源发布日期 3. 是第一方还是第三方来源 4. 来源是否真的明确说了这件事 5. 哪些结论仍然存在不确定性。不要补充新的结论。
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 4：主动寻找冲突</h4>
                <CopyButton text="请寻找与当前结论不同或相反的可靠来源。如果不同来源存在冲突：不要替我直接决定谁正确。请分别列出双方说法、发布日期和来源类型，并说明冲突点在哪里。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 mb-4">
                  请寻找与当前结论不同或相反的可靠来源。如果不同来源存在冲突：不要替我直接决定谁正确。请分别列出双方说法、发布日期和来源类型，并说明冲突点在哪里。
                </p>
                <p className="text-sm text-gray-500 m-0 border-t border-gray-100 pt-4">
                  💡 <strong>提示：</strong>很多时候真相藏在冲突里。不要让 AI “替你拍板”，要让它“把争论点摆到桌面上”。
                </p>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 搜索模式 */}
            <h2 id="modes" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Database className="w-6 h-6 text-brand-500" /> 普通搜索、Pro Search、Research 怎么选？
            </h2>
            <p>
              Perplexity 提供不同的搜索深度。<em>注：功能名称可能随产品更新调整，以下基于当前官方说明。</em>
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:border-gray-300 transition-colors">
                <h3 className="font-bold text-gray-900 mt-0 mb-2">普通 Search</h3>
                <p className="text-sm text-gray-600 m-0">适合查询简单事实、快速确认信息或了解基本定义，速度极快。</p>
              </div>
              <div className="bg-white border border-brand-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-xl font-bold">主流推荐</div>
                <h3 className="font-bold text-brand-900 mt-0 mb-2">Pro Search</h3>
                <p className="text-sm text-gray-600 m-0">执行多步推理，有时会反问你问题以缩小范围。适合需要查阅多个来源的日常研究。</p>
              </div>
              <div className="bg-white border border-purple-200 p-6 rounded-2xl shadow-sm hover:border-purple-300 transition-colors">
                <h3 className="font-bold text-purple-900 mt-0 mb-2">Research</h3>
                <p className="text-sm text-gray-600 m-0">深度搜索模式。通常会抓取远超普通的网页数量，撰写长篇幅、严谨的综合报告。适合极复杂的全盘整理。</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-12 bg-gray-50 p-4 rounded-xl">
              ⚠️ 不同账号类型（免费/付费）对上述高级功能的每日可用额度可能有区别，具体次数以账号当前显示为准。即使是最强的 Research 模式，依然需要你核对核心引用！同一个主题，建议在左侧边栏建立 <strong>Projects / Sessions</strong>，让 AI 记住上下文持续追问。
            </p>

            <hr className="my-16 border-gray-100" />

            {/* 文件研究 */}
            <h2 id="files" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <FileText className="w-6 h-6 text-brand-500" /> 上传 PDF 查资料的正确姿势
            </h2>
            <p>
              你可以向 Perplexity 上传 PDF、文本文档，甚至图片/代码，让它结合联网搜索与文件内容一起作答。但长文件阅读有很多坑：<strong>AI 往往不会逐字读完几百页的超长文件，而是提取关键片段进行回答。</strong>
            </p>
            
            <p>不要扔上文件只说“帮我总结”，试试下面这个框架：</p>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 5：PDF 文件精读</h4>
                <CopyButton text="请阅读这个 PDF。先不要总结全文。请先告诉我：1. 文档标题 2. 作者 / 发布机构 3. 发布日期 4. 文档主要结构 5. 与“我的问题”最相关的章节。然后再引用对应部分回答我的问题。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  请阅读这个 PDF。先不要总结全文。请先告诉我：<br/>
                  1. 文档标题<br/>
                  2. 作者 / 发布机构<br/>
                  3. 发布日期<br/>
                  4. 文档主要结构<br/>
                  5. 与“XXX”最相关的章节。<br/>
                  然后再引用对应部分回答我的问题。
                </p>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 产品比较与研究 */}
            <h2 id="latest" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Library className="w-6 h-6 text-brand-500" /> 最新动态、产品比较与数据建表
            </h2>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 6：追查最新动态</h4>
                <CopyButton text="帮我查这个主题的最新进展。要求：- 只使用最近 30 天的来源 - 优先官方公告和直接报道 - 每条信息标明发布日期 - 区分“已经发生”和“计划发生” - 如果不同来源时间冲突，请指出" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  帮我查这个主题的最新进展。要求：<br/>
                  - 只使用最近 30 天的来源<br/>
                  - 优先官方公告和直接报道<br/>
                  - 每条信息标明发布日期<br/>
                  - 区分“已经发生”和“计划发生”<br/>
                  - 如果不同来源时间冲突，请指出
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 7：客观产品比较</h4>
                <CopyButton text="请比较 A 和 B。不要先给赢家。按下面维度分别比较：- 核心功能 - 使用限制 - 平台支持 - 当前价格 - 官方支持范围。优先使用双方官方资料。最后再根据不同使用场景分别给选择建议。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  请比较 A 和 B。不要先给赢家。按下面维度分别比较：<br/>
                  - 核心功能<br/>
                  - 使用限制<br/>
                  - 平台支持<br/>
                  - 当前价格<br/>
                  - 官方支持范围<br/>
                  优先使用双方官方资料。最后再根据不同使用场景分别给选择建议。
                </p>
                <p className="text-sm text-gray-500 mt-4 pt-4 border-t border-gray-100">
                  💡 如果你只问“哪个好”，AI 很容易帮你一锤定音；但强迫它逐项横评，你会得到更真实的数据。
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <h4 className="font-bold text-gray-900 m-0">Prompt 8：建立资料核对表</h4>
                <CopyButton text="请把目前找到的资料整理成表格： | 结论 | 来源 | 来源类型 | 发布日期 | 是否直接支持 | 备注 | 不要添加没有来源的新结论。" />
              </div>
              <div className="p-6">
                <p className="font-mono text-sm text-gray-800 m-0">
                  请把目前找到的资料整理成表格： <br/>
                  | 结论 | 来源 | 来源类型 | 发布日期 | 是否直接支持 | 备注 | <br/>
                  不要添加没有来源的新结论。
                </p>
              </div>
            </div>

            {/* SEO 场景补充 */}
            <div className="bg-brand-50 border border-brand-200 p-6 rounded-2xl mb-12">
              <h4 className="font-bold text-brand-900 mt-0 mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" /> 写文章 / SEO 场景调研
              </h4>
              <p className="text-sm text-brand-800 mb-4">
                不要让 AI 直接帮你写文发布，而要让它当你的研究助理。你可以用这个 <strong>Prompt 9</strong> 来搜集大纲：
              </p>
              <div className="bg-white p-4 rounded-xl border border-brand-100 mb-3 relative group">
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text="我要写一篇关于“主题”的文章。现在先不要写正文。请帮我做资料研究：1. 找当前官方定义 2. 找最新官方资料 3. 找用户最容易混淆的问题 4. 找不同来源之间的分歧 5. 给我原始来源列表。不要替我生成最终文章。" />
                </div>
                <code className="text-sm font-mono text-gray-800 block">
                  我要写一篇关于“主题”的文章。现在先不要写正文。请帮我做资料研究：1. 找当前官方定义 2. 找最新官方资料 3. 找用户最容易混淆的问题 4. 找不同来源之间的分歧 5. 给我原始来源列表。不要替我生成最终文章。
                </code>
              </div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 常见错误与状态判断 */}
            <h2 id="mistakes" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <ShieldAlert className="w-6 h-6 text-brand-500" /> 搜完以后，怎么判断结果能不能用？
            </h2>
            
            <p>我们建立了一个极简的三色红绿灯模型（非 AI 自动打分，而是你在阅读时的判断框架）：</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="border-t-4 border-green-500 bg-white p-5 rounded-b-2xl shadow-sm">
                <h4 className="font-bold text-green-700 mt-0 mb-2">🟢 较放心采用</h4>
                <p className="text-sm text-gray-600 m-0">找到了第一手资料原出处（如官方页面），或者多个独立的高质量媒体给出了完全一致的结论。</p>
              </div>
              <div className="border-t-4 border-amber-500 bg-white p-5 rounded-b-2xl shadow-sm">
                <h4 className="font-bold text-amber-700 mt-0 mb-2">🟡 存疑保留</h4>
                <p className="text-sm text-gray-600 m-0">内容较旧，只有唯一第三方媒体报道，或者来源属于用户论坛。需要补充核实。</p>
              </div>
              <div className="border-t-4 border-red-500 bg-white p-5 rounded-b-2xl shadow-sm">
                <h4 className="font-bold text-red-700 mt-0 mb-2">🔴 继续核查</h4>
                <p className="text-sm text-gray-600 m-0">来源互相冲突、引用链接和文字根本不搭界、完全找不到第一手出处。</p>
              </div>
            </div>

            <h3 className="font-bold text-lg mb-4">新手最容易犯的 7 个错</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                "只看 AI 的总结文本，完全不点开 [1][2] 的来源。",
                "只点开第一个来源，以为后面的来源内容也都一样。",
                "不看来源页面的原始发布日期，把 5 年前的文章当新事。",
                "引用数量很多（比如 [1][2][3][4]），就觉得答案一定可靠。",
                "媒体 A 引用媒体 B，B 又引用 C，最后完全找不到最原始的出处。",
                "把 Reddit、知乎等评论论坛上的发言当成官方政策。",
                "只要搜到符合自己原本期望的答案，就立刻停止交叉验证。"
              ].map((err, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-sm text-gray-700 flex items-start gap-2 hover:bg-gray-100 transition-colors">
                  <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  {err}
                </div>
              ))}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-red-50 border border-red-200 p-4 rounded-xl text-sm text-red-900 mt-2 text-center">
                <strong>请记住：引用数量 ≠ 来源质量！</strong>一万个内容农场的洗稿，也比不上一篇原始论文的权重。
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl mb-12 shadow-sm text-center">
              <h3 className="text-xl font-bold mt-0 mb-4 text-white">什么时候绝对不要用 Perplexity 当唯一来源？</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <span className="px-4 py-2 bg-gray-800 rounded-full">医疗健康诊断</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">法律与判决</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">重要财务与投资决策</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">涉及生命安全的高风险数据</span>
                <span className="px-4 py-2 bg-gray-800 rounded-full">公司内部机密核实</span>
              </div>
              <p className="text-sm text-gray-400 mt-6 mb-0">对于高风险领域，AI 可以帮你发现术语、寻找相关机构网站，但<strong>最终决定必须咨询专业人士或完全依赖官方权威背书机构</strong>。</p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Info className="w-6 h-6 text-brand-500" /> 常见问题 FAQ
            </h2>
            <div className="space-y-6 mb-16">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">{faq.name}</h3>
                  <p className="text-gray-600 text-sm m-0 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            {/* 预留截图组件 */}
            {/* 
              未来当截图就绪时在此释放:
              <TutorialImage src="/images/perplexity/perplexity-search.png" alt="Perplexity Search Example" />
              <TutorialImage src="/images/perplexity/perplexity-citations.png" alt="Checking Citations" />
              ...
            */}
            <TutorialImage src="/images/perplexity/perplexity-search.png" alt="Perplexity Search Example" />
            <TutorialImage src="/images/perplexity/perplexity-citations.png" alt="Checking Citations" />
            <TutorialImage src="/images/perplexity/perplexity-source-open.png" alt="Opening Source Pages" />
            <TutorialImage src="/images/perplexity/perplexity-file-upload.png" alt="File Uploads" />
            <TutorialImage src="/images/perplexity/perplexity-research.png" alt="Perplexity Research Mode" />

            {/* References */}
            <div className="bg-gray-50 px-6 py-4 rounded-xl text-sm text-gray-500 mt-12">
              <strong className="block text-gray-700 mb-2">资料来源</strong>
              <ul className="m-0 pl-4 space-y-1">
                <li><a href="https://www.perplexity.ai/hub/getting-started" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Perplexity - Getting Started</a></li>
                <li><a href="https://www.perplexity.ai/hub/faq/what-is-perplexity" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">What is Perplexity</a></li>
                <li><a href="https://www.perplexity.ai/hub/faq/pro-search" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Pro Search Overview</a></li>
                <li><a href="https://www.perplexity.ai/hub/faq/file-uploads" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">File Uploads Guide</a></li>
                <li><a href="https://www.perplexity.ai/hub/faq/sessions" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Using Sessions and Projects</a></li>
              </ul>
            </div>
          </div>
        </article>
      </main>

      <FloatingBackButton fallbackHref="/guides" />
      <Footer />
    </div>
  );
}
