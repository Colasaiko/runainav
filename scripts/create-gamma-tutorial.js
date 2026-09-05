const fs = require('fs');
const path = 'src/app/guides/gamma-ppt-tutorial/page.tsx';

const content = `import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import CopyButton from '@/components/ui/CopyButton';
import TutorialImage from '@/components/ui/TutorialImage';
import { constructMetadata } from "@/lib/seo";
import { Info, Check, X, CheckSquare, Sparkles, FileText, Image as ImageIcon, LayoutTemplate, MessageSquare, Download, AlertTriangle, Presentation, ListChecks } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = constructMetadata({
  title: 'Gamma做PPT教程：从生成到导出 | RunAI',
  description: '从确定主题、起草大纲到排版优化与最终导出，本文用一个完整案例带你使用Gamma制作演示文稿，并教你如何避免AI常见排版错误，做出一份真正能用的PPT。',
  canonical: '/guides/gamma-ppt-tutorial',
  type: 'article',
  publishedTime: '2026-09-05',
  modifiedTime: '2026-09-05',
});

const SECTIONS = [
  { id: 'prepare', navLabel: '准备内容' },
  { id: 'modes', navLabel: '创建方式' },
  { id: 'outline', navLabel: '生成大纲' },
  { id: 'pages', navLabel: '制作页面' },
  { id: 'edit', navLabel: '修改排版' },
  { id: 'import', navLabel: '导入内容' },
  { id: 'export', navLabel: '导出PPT' },
  { id: 'faq', navLabel: '常见问题' },
];

export default function GammaPptTutorial() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gamma 怎么用 AI 做 PPT？",
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
        "name": "Gamma 可以直接生成 PPT 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。输入主题后，Gamma 可以自动生成大纲和完整页面，并支持导出为 PPTX 格式。"
        }
      },
      {
        "@type": "Question",
        "name": "Gamma 可以导出 PowerPoint 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。目前支持导出为 PDF、PNG 和 PowerPoint (PPTX) 格式。"
        }
      },
      {
        "@type": "Question",
        "name": "Gamma 导出的 PPT 可以继续修改吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。导出为 PPTX 后，可以在 Microsoft PowerPoint 或 Google Slides 中打开，文字和部分表格等元素依然可以编辑，但排版可能因平台差异有微小变化。"
        }
      },
      {
        "@type": "Question",
        "name": "已经有 PPT 可以导入 Gamma 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。Gamma 支持 Import 功能，但主要是导入内容并由 AI 重新排版，不保证完全保留原 PPT 的视觉布局。"
        }
      },
      {
        "@type": "Question",
        "name": "导入后原来的排版会保留吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不一定。Import 更倾向于提取文档中的文字和逻辑，然后套用 Gamma 的主题与版式。如果需要完全一样的设计，不建议使用转换功能。"
        }
      },
      {
        "@type": "Question",
        "name": "Gamma 可以导入 Word / Google Docs 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以。你可以直接粘贴文字（Paste），也可以上传文档让 Gamma 解析。"
        }
      },
      {
        "@type": "Question",
        "name": "AI 生成的数据可靠吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不可靠。办公 PPT 涉及业务数据时，绝对不能让 AI 自由发挥。建议明确规定：“如果没有提供数据，请使用占位符，不要自己编造”。"
        }
      },
      {
        "@type": "Question",
        "name": "PPT 字太多怎么办？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "可以在 Gamma 的 AI 编辑对话框中要求：“保留核心结论，把这段文字浓缩成 3 个带标题的要点”。"
        }
      },
      {
        "@type": "Question",
        "name": "Gamma 适合中文 PPT 吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "适合。Gamma 完全支持中文输入与内容生成，界面也有多语言适配。"
        }
      },
      {
        "@type": "Question",
        "name": "Gamma 和 PowerPoint 是替代关系吗？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "不是完全替代。Gamma 极大提升了“起草、排版、配图”的效率，但对于高度定制化、有严格企业视觉识别 (VI) 要求的演示，仍需在导出后使用 PowerPoint 微调。"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Script id="json-ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="json-ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      
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
            <span className="text-gray-900">Gamma 做 PPT 实战教程</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
              Gamma 怎么用 AI 做 PPT？
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              从主题、大纲到页面排版和导出，用一个完整案例带你完成第一份 AI 演示文稿。
            </p>
            <div className="flex items-start gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl text-sm border border-blue-100/50">
              <Info className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <span className="font-semibold block mb-0.5">资料核对：2026-09-05</span>
                Gamma 的 AI 功能、方案和界面会持续更新，本文以当前官方帮助资料为基础整理。
              </div>
            </div>
          </header>

          <div className="prose prose-gray max-w-none">
            
            {/* 目标展示 */}
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 mb-12 flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-brand-900 mt-0 mb-2">本次实战目标</h3>
                <p className="text-sm text-brand-800 m-0 mb-4">
                  不要全篇抽象讲“输入主题即可”。我们将贯穿一个真实教学案例：<strong>“为一家咖啡店制作新品推广 PPT”</strong>（设定为 8 页，内部营销汇报用）。最终我们将完成：
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-brand-700">
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">封面</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">新品介绍</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">目标顾客</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">核心卖点</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">推广渠道</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">活动计划</span>
                  <span className="bg-white px-3 py-1 rounded-full border border-brand-200">下一步</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center shrink-0">
                <Presentation className="w-24 h-24 text-brand-300" />
              </div>
            </div>

            {/* 30 秒速读 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm mb-16">
              <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mt-0 mb-6">
                <Sparkles className="w-5 h-5 text-brand-500" /> 30 秒速读
              </h3>
              <ul className="space-y-4 mb-0 list-none pl-0">
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>如果你已经有完整内容：</strong>优先使用 Paste (粘贴) 或 Import (导入)。如果你只有一个主题：可以先使用 Generate (生成)。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>一定先做大纲：</strong>不要一次让 AI 直接写几十页 PPT。先确认大纲，再生成页面，能有效避免内容失控。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>AI 编造问题：</strong>AI 生成的 PPT，一定要人工检查事实和文字，严禁让 AI 虚构未提供的业务数据。</span>
                </li>
                <li className="flex gap-3 text-gray-700">
                  <span className="shrink-0 text-brand-500 mt-0.5">●</span>
                  <span><strong>导出前检查：</strong>在导出 PPTX / PDF 前，务必检查字体大小、文字密度、图片相关性和数据准确性。</span>
                </li>
              </ul>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第一步：先把目标说清楚 */}
            <h2 id="prepare" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <ListChecks className="w-6 h-6 text-brand-500" /> 第一步：先不要急着生成 PPT
            </h2>
            <p>
              如果一开始只给 AI 写一句：“帮我做一个咖啡店 PPT”，AI 很容易因为信息太少而自行脑补，导致页数失控、内容重复、重点不清晰。
              在使用 Gamma 之前，请先明确以下内容：
            </p>

            <div className="bg-white border-2 border-brand-100 rounded-2xl p-6 shadow-sm mb-8">
              <ul className="space-y-3 m-0 text-gray-700 list-none pl-0">
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> <strong>给谁看？</strong>（内部讨论、客户提案还是公开演讲）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> <strong>讲什么？</strong>（核心目的是推新品、做年终总结还是拉投资）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> <strong>多少页？</strong>（控制在 8 页还是 20 页）</li>
                <li className="flex gap-2 items-start"><input type="checkbox" className="mt-1" checked readOnly /> <strong>什么风格？</strong>（严肃商务还是轻松现代）</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                <div className="text-red-600 font-bold mb-2 flex items-center gap-2"><X className="w-4 h-4"/> 太模糊</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-red-900 border border-red-100">帮我做一个漂亮的咖啡 PPT</code>
                <p className="text-sm text-red-800 m-0">完全没有约束，AI 可能会生成关于咖啡历史的百科全书。</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                <div className="text-green-600 font-bold mb-2 flex items-center gap-2"><Check className="w-4 h-4"/> 更清楚</div>
                <code className="text-sm bg-white p-2 rounded block mb-2 text-green-900 border border-green-100">我要制作一份关于“咖啡店新品推广计划”的演示文稿。目标读者：门店员工...</code>
                <p className="text-sm text-green-800 m-0">目的、受众、页数、风格全部清晰，AI 才能精准执行。</p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <h4 className="font-bold text-gray-900 m-0">Prompt 1：告诉 AI 需求，先做大纲</h4>
                <CopyButton text="我要制作一份关于“咖啡店新品推广计划”的演示文稿。 使用场景： 内部营销讨论。 目标读者： 门店负责人和员工。 希望控制在： 8 页以内。 风格： 简洁、现代、容易快速阅读。 请先不要直接生成完整 PPT。 先帮我整理一个 8 页以内的大纲，并说明每一页应该解决什么问题。" />
              </div>
              <div className="p-6 text-sm text-gray-800 font-mono whitespace-pre-wrap">我要制作一份关于“咖啡店新品推广计划”的演示文稿。
使用场景： 内部营销讨论。
目标读者： 门店负责人和员工。
希望控制在： 8 页以内。
风格： 简洁、现代、容易快速阅读。

请先不要直接生成完整 PPT。
先帮我整理一个 8 页以内的大纲，并说明每一页应该解决什么问题。</div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第二步：基础创建方式 */}
            <h2 id="modes" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <LayoutTemplate className="w-6 h-6 text-brand-500" /> 第二步：选择正确的创建方式
            </h2>
            <p>目前 Gamma 提供三种基础创建路径，请根据你手头的资料丰富度来选择：</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full hover:border-brand-300 transition-colors">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">1</div>
                <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Generate (生成)</h3>
                <p className="text-sm text-gray-600 m-0">
                  <strong>适合：只有主题。</strong><br/>
                  需要 AI 帮你起草大纲并填充全部内容的场景。
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full hover:border-brand-300 transition-colors">
                <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">2</div>
                <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Paste (粘贴)</h3>
                <p className="text-sm text-gray-600 m-0">
                  <strong>适合：已有部分文字。</strong><br/>
                  你已经写好了长文、笔记，或从 ChatGPT 获取了内容，只需 Gamma 帮你做幻灯片排版。
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full hover:border-brand-300 transition-colors">
                <div className="bg-amber-100 text-amber-600 w-10 h-10 flex items-center justify-center rounded-lg mb-4 font-bold text-xl">3</div>
                <h3 className="text-lg font-bold text-gray-900 mt-0 mb-2">Import (导入)</h3>
                <p className="text-sm text-gray-600 m-0">
                  <strong>适合：已有文档。</strong><br/>
                  已有现成的 PowerPoint、Word 或网页链接，希望 Gamma 转换成可编辑页面。
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-sm mb-12">
              <h4 className="flex items-center gap-2 font-bold text-lg mt-0 mb-3">
                <MessageSquare className="w-5 h-5 text-purple-400" /> 进阶：Create with Agent
              </h4>
              <p className="text-gray-300 text-sm mb-0">
                如果当前你的账号支持 <strong>Create with Agent</strong>，你可以通过对话界面直接与 AI 聊天，上传参考资料，并让 AI 根据聊天结果修改大纲后再生成页面。这是 Gamma 较新的工作流。本文主流程仍以基础创建方式为主进行教学。<em>（功能可用性以账号实际界面为准）</em>
              </p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第三步：确定大纲 */}
            <h2 id="outline" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <FileText className="w-6 h-6 text-brand-500" /> 第三步：确定和修改大纲
            </h2>
            <p>
              无论是直接在 Gamma 中输入 Generate，还是在 ChatGPT 里先构思，AI 可能会给出如下初步大纲：
            </p>

            <div className="bg-gray-100 p-5 rounded-xl mb-8 text-sm text-gray-700 font-mono border border-gray-200">
              1. 封面<br/>
              2. 为什么推出新品<br/>
              3. 新品介绍<br/>
              4. 目标顾客<br/>
              5. 核心卖点<br/>
              6. 推广渠道<br/>
              7. 活动计划<br/>
              8. 下一步
            </div>

            <p>
              如果大纲有偏差，不要犹豫，在进入下一步生成具体页面前，马上让 AI 调整：
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <h4 className="font-bold text-gray-900 m-0">Prompt 2：调整大纲</h4>
                <CopyButton text="这个大纲方向可以，但请继续调整： - 删除重复页面 - 每页只保留一个核心主题 - 不要超过 8 页 - 第 5 页重点突出新品卖点 - 最后一页给出具体下一步行动 先只修改大纲，不要生成完整页面。" />
              </div>
              <div className="p-6 text-sm text-gray-800 font-mono whitespace-pre-wrap">这个大纲方向可以，但请继续调整：
- 删除重复页面
- 每页只保留一个核心主题
- 不要超过 8 页
- 第 5 页重点突出新品卖点
- 最后一页给出具体下一步行动

先只修改大纲，不要生成完整页面。</div>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第四步：制作页面与禁止造假 */}
            <h2 id="pages" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Presentation className="w-6 h-6 text-brand-500" /> 第四步：把大纲交给 Gamma 生成，绝不造假
            </h2>
            <p>
              现在，我们可以把确认好的大纲输入 Gamma。此时有一项极其重要的职场要求：<strong>绝对不要让 AI 在办公 PPT 里瞎编业务数据！</strong>
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-2xl mb-8 shadow-sm">
              <h4 className="font-bold text-rose-900 mt-0 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> 提示：没有数据，就不要让 AI 自己补
              </h4>
              <p className="text-sm text-rose-800 m-0">
                AI 经常为了排版好看，擅自编造诸如“销售增长 38%”、“客户满意度 95%”、“市场占有率 40%”之类的假数字。必须在 Prompt 中严厉制止，要求使用占位符（如“此处补充真实销售数据”）。
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <h4 className="font-bold text-gray-900 m-0">Prompt 3：生成要求（含数据约束）</h4>
                <CopyButton text="请根据下面的大纲制作一份 8 页以内的演示文稿： 1. 封面 2. 为什么推出新品 3. 新品介绍 4. 目标顾客 5. 核心卖点 6. 推广渠道 7. 活动计划 8. 下一步 要求： - 每页只表达一个核心观点 - 每页正文尽量控制在 3～5 个重点 - 避免大段文字 - 使用简洁现代的商务视觉 - 不要虚构销售数据 - 如果缺少数据，请使用占位说明，而不是自己编数字" />
              </div>
              <div className="p-6 text-sm text-gray-800 font-mono whitespace-pre-wrap">请根据下面的大纲制作一份 8 页以内的演示文稿：
1. 封面
2. 为什么推出新品
3. 新品介绍
...（此处省略完整大纲）

要求：
- 每页只表达一个核心观点
- 每页正文尽量控制在 3～5 个重点
- 避免大段文字
- 使用简洁现代的商务视觉
- 不要虚构销售数据
- 如果缺少数据，请使用占位说明，而不是自己编数字</div>
            </div>
            <TutorialImage src="/images/gamma/gamma-generate.png" alt="Gamma Generate 界面" />

            {/* 页面结构科普 */}
            <h3 className="font-bold text-xl mb-6 mt-12">一页 PPT 最好解决一个问题</h3>
            <p className="mb-6">
              标题不要只写“市场分析”这种虚词，更好的是把结论直接放进标题，例如：“年轻顾客是新品第一批目标用户”。常见的优质页面结构有以下 4 种：
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <div className="text-brand-600 font-bold mb-2">封面页</div>
                <p className="text-xs text-gray-600 m-0">只突出一个大主题，干净利落。</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <div className="text-brand-600 font-bold mb-2">对比页</div>
                <p className="text-xs text-gray-600 m-0">A vs B，左右布局，清晰对比差异。</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <div className="text-brand-600 font-bold mb-2">流程页</div>
                <p className="text-xs text-gray-600 m-0">Step 1 → Step 2 → Step 3，展示行动顺序。</p>
              </div>
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <div className="text-brand-600 font-bold mb-2">总结页</div>
                <p className="text-xs text-gray-600 m-0">3 个核心结论 + 明确的下一步行动 (Call to action)。</p>
              </div>
            </div>
            
            <div className="bg-blue-50 text-blue-800 px-6 py-4 rounded-xl text-sm mb-12 flex gap-3">
              <ImageIcon className="w-5 h-5 shrink-0" />
              <p className="m-0"><strong>关于图片：</strong>图片应该服务于内容，用来解释观点。不要为了填补空白而在每页硬塞毫无关联的装饰图。（Gamma 支持替换和 AI 生成配图，具体操作请见官方指南）。</p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第五步：排版与精简 */}
            <h2 id="edit" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Sparkles className="w-6 h-6 text-brand-500" /> 第五步：一页太多字怎么办？（修改排版）
            </h2>
            <p>
              刚生成的 PPT 往往存在一个致命问题：字太多，完全没法讲。请立即使用 AI 帮你压缩文字。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                <div className="text-gray-500 font-bold mb-3 flex items-center gap-2">Before</div>
                <div className="bg-gray-100 p-4 text-xs text-gray-500 h-24 rounded">
                  新品的受众主要是年轻群体。我们发现他们在周末更倾向于去咖啡馆社交。经过调研，这部分人群占整体客流的 60%。为了吸引他们，我们需要推出结合当季水果的特调饮品...（150字冗长段落）
                </div>
              </div>
              <div className="bg-white border border-brand-200 p-5 rounded-xl shadow-sm relative overflow-hidden">
                <div className="text-brand-600 font-bold mb-3 flex items-center gap-2">After</div>
                <div className="space-y-2">
                  <div className="bg-brand-50 p-2 text-xs text-brand-800 rounded font-bold border border-brand-100">核心目标：年轻客群周末社交</div>
                  <ul className="text-xs text-gray-700 m-0 pl-4 space-y-1">
                    <li>占整体客流 60%</li>
                    <li>倾向当季水果特调</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-8">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <h4 className="font-bold text-gray-900 m-0">Prompt 4：减少整体文字密度</h4>
                <CopyButton text="请检查当前演示文稿。只优化文字密度，不改变整体结构。要求： - 每页保留一个主要结论 - 删除重复句子 - 长段落改成 3～5 个重点 - 不要加入新的事实或数据 - 不要修改已经正确的数据" />
              </div>
              <div className="p-4 text-sm text-gray-800 font-mono">请检查当前演示文稿。只优化文字密度，不改变整体结构。要求：...（删除重复句子，长段落改重点等）</div>
            </div>

            <h3 className="font-bold text-lg mb-4">修改单页与风格</h3>
            <p className="mb-6">你可以点击单张幻灯片旁边的 AI 编辑工具（如 Sparkle 图标 / Edit with AI，以实际界面为准），仅对当前不满意的一页进行重组，或统一下全局风格。</p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <strong className="text-sm">Prompt 5：只改当前页</strong>
                  <CopyButton text="只修改当前这一页。 目标： - 保留原来的核心结论 - 把文字减少约三分之一 - 将三个重点变成更容易扫读的结构 - 不修改其他页面 - 不新增未经提供的数据" />
                </div>
                <div className="p-4 text-xs font-mono text-gray-600 whitespace-pre-wrap">只修改当前这一页。
目标：
- 保留原来的核心结论
- 把文字减少约三分之一
- 将三个重点变成更容易扫读的结构...</div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                  <strong className="text-sm">Prompt 6：统一整体风格</strong>
                  <CopyButton text="请检查整份演示文稿的视觉一致性。 重点检查： - 标题层级 - 字体大小 - 页面间距 - 卡片样式 - 图片风格 - 重点色使用 不要重新生成内容。 只统一视觉风格。" />
                </div>
                <div className="p-4 text-xs font-mono text-gray-600 whitespace-pre-wrap">请检查整份演示文稿的视觉一致性。
重点检查：
- 标题层级 / 字体大小
- 卡片样式 / 图片风格
不要重新生成内容。</div>
              </div>
            </div>
            <TutorialImage src="/images/gamma/gamma-edit-slide.png" alt="Gamma AI 编辑页面" />

            <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-2xl mb-12 shadow-sm text-indigo-900">
              <h4 className="font-bold mb-3 flex items-center gap-2 mt-0">
                <Info className="w-5 h-5" /> 实用工作流：搭配大语言模型
              </h4>
              <p className="text-sm m-0">如果你已经在 <Link href="/guides/chatgpt" className="underline text-indigo-700">ChatGPT</Link> 或 <Link href="/guides/claude" className="underline text-indigo-700">Claude</Link> 中完成了高质量的商业分析或演讲稿，更高效的方法是：直接在外部 AI 整理好大纲 ➔ 复制到 Gamma (Paste) ➔ 让 Gamma 专注处理视觉和排版 ➔ 最终人工确认修改。</p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第六步：关于导入 */}
            <h2 id="import" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <FileText className="w-6 h-6 text-brand-500" /> 第六步：如何导入已有的 PPT 和文档？
            </h2>
            <p>
              如果你已经有一份完整的 Word 报告或旧版 PowerPoint，Gamma 的 <strong>Import</strong> 功能允许你直接上传（支持 PPTX / DOCX 等），或贴入网页 URL 让 AI 读取。
            </p>

            <div className="bg-amber-50 border border-amber-300 p-6 rounded-2xl mb-8">
              <strong className="text-amber-900 block mb-2">务必注意：Import 不等于“原样克隆”</strong>
              <p className="text-sm text-amber-800 m-0">
                Import 的本质是“提取你的文字内容与逻辑，重新用 Gamma 的模块排版”。<br/><br/>
                不要期望上传一份极其复杂的企业级图表 PPT 后，Gamma 会原封不动地保留每个字体和对齐位置。如果导入后排版完全错乱，建议：<strong>转换为 DOCX 提取纯文字</strong> 或 <strong>分段复制文字使用 Paste 功能</strong>。
              </p>
            </div>

            <hr className="my-16 border-gray-100" />

            {/* 第七步：检查与导出 */}
            <h2 id="export" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Download className="w-6 h-6 text-brand-500" /> 第七步：导出前的最终检查
            </h2>
            <p>Gamma 目前支持导出为 <strong>PDF、PNG 图像</strong> 和 <strong>PowerPoint (PPTX)</strong> 格式。你可以将导出的 PPTX 直接导入 <strong>Google Slides</strong> 进行线上协作。</p>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-12 mt-8">
              <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-white">
                <h4 className="font-bold text-gray-900 m-0">Prompt 7：导出前 AI 自查</h4>
                <CopyButton text="请对这份演示文稿做一次最终检查。 只检查，不要重新设计。 请确认： 1. 每页是否只有一个核心重点 2. 是否存在重复内容 3. 是否有过长段落 4. 是否出现未经提供的数据 5. 页面标题是否清楚 6. 图片是否与内容相关 7. 是否有空白占位 8. 最后一页是否有明确下一步 请先列出问题，不要直接修改。" />
              </div>
              <div className="p-6 text-sm text-gray-800 font-mono">请对这份演示文稿做一次最终检查。只检查，不要重新设计...（要求检查重复、假数据、图片关联性等，列出问题不直接修改）</div>
            </div>

            <div className="bg-white border-2 border-brand-500 p-6 md:p-8 rounded-2xl shadow-lg mb-12">
              <h3 className="font-bold text-xl text-gray-900 mb-6 mt-0">✅ 正式交付前的 Checklist</h3>
              <p className="text-sm text-gray-600 mb-6">记住：<strong>AI 说完成了，不代表你的 PPT 就能直接发给领导或客户。</strong></p>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 font-medium">
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 封面标题与作者正确</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 页数完全符合要求</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> <strong>没有编造假数字</strong></label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 每页文字不过量（无长篇大论）</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 字体层级与大小全局一致</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 图片与当页内容高度相关</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 表格数据正确，无错位</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 所有外部链接均可点击打开</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> 最后一页有清晰的总结与下一步</label>
                <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" className="w-4 h-4 text-brand-600 rounded" /> <strong>导出后在本地软件中重新打开检查</strong></label>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-yellow-900 text-sm mb-12">
              <strong className="block mb-2 text-base">排版变化警告</strong>
              由于不同平台（Gamma vs MS Office vs Google Slides）的字体渲染和布局引擎不同。导出为 PPTX 以后，表格虽可能保持可编辑状态，但依然可能存在文字溢出、换行错位等问题。<strong>正式会议前，一定要在最终放映的软件里完整过一遍！</strong>
            </div>
            <TutorialImage src="/images/gamma/gamma-export.png" alt="Gamma Export 导出功能" />

            <hr className="my-16 border-gray-100" />

            {/* Troubleshooting */}
            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <CheckSquare className="w-6 h-6 text-brand-500" /> Troubleshooting 常见排版失败
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { issue: "页面字太多像论文", fix: "使用 AI 编辑选中该页，输入指令：『将该段落压缩为 3 个重点列表』。" },
                { issue: "每页结构排版都长得一样", fix: "要求 AI『增加视觉多样性』，或手动将某些页面更改为对比模板、时间轴模板。" },
                { issue: "AI 编造了未提供的假数据", fix: "在源头 Prompt 里封杀：『严禁虚构数据，缺失处用占位符』；人工重点核对数字。" },
                { issue: "图片和内容风马牛不相及", fix: "AI 有时只抓取了表层关键词。请手动在 Gamma 中重新输入精确的图片搜索词或更换本地图片。" },
                { issue: "颜色太花，像儿童画", fix: "放弃花哨的 Theme，选择黑白、高对比或极简商业模板。内容比装饰重要得多。" },
                { issue: "导出 PPT 后排版错乱变形", fix: "避免使用过于复杂的 Gamma 嵌套卡片。导出前精简布局，导出后在 PPT 软件内手工微调排版。" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm">
                  <div className="font-bold text-red-600 mb-2 flex items-center gap-2 text-sm">
                    <X className="w-4 h-4" /> 现象：{card.issue}
                  </div>
                  <div className="text-sm text-gray-700 flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span><strong>对策：</strong>{card.fix}</span>
                  </div>
                </div>
              ))}
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

            {/* References */}
            <div className="bg-gray-50 px-6 py-4 rounded-xl text-sm text-gray-500">
              <strong className="block text-gray-700 mb-2">资料来源</strong>
              <ul className="m-0 pl-4 space-y-1">
                <li><a href="https://gamma.app" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Gamma 官方网站</a></li>
                <li><a href="https://help.gamma.app" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Gamma Help Center</a></li>
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
`;

fs.writeFileSync(path, content);
