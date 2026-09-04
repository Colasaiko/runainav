import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import Link from 'next/link';
import { 
  Zap, Check, AlertTriangle, Info, Bot, Sparkles, Layers,
  FileText, Code, Search, Image as ImageIcon, Briefcase, Play, Hexagon, XCircle, CheckCircle, Smartphone
} from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: 'ChatGPT、Claude、Gemini对比：怎么选？',
  description: '对比ChatGPT、Claude与Gemini在聊天、写作、编程、文件处理、搜索和中文体验等方面的差异，并结合免费功能与使用环境，帮助你按需求选择AI工具。',
  canonical: '/guides/chatgpt-vs-claude-vs-gemini',
});

export default function CompareAIPage() {
  const faqData = [
    { q: "ChatGPT、Claude 和 Gemini 哪个更适合新手？", a: "ChatGPT 对新手最友好，它的语音模式、App 设计和生态插件都非常易用，综合功能最齐全，遇到问题时网上的教程也最多。" },
    { q: "哪个更适合写文章？", a: "Claude 在长文写作、逻辑梳理和语气自然度上表现极佳，被公认为是目前最有“人味儿”和逻辑最严密的写作助手。" },
    { q: "哪个更适合写代码？", a: "Claude 在代码理解和复杂项目重构上表现出色，同时配合 Artifacts 可以实时预览代码效果。不过如果是专业的日常开发，更推荐将这些模型配合 Cursor 这类专用的 AI 编程工具使用。" },
    { q: "哪个处理 PDF 更方便？", a: "三者均支持 PDF。但 Claude 的超大上下文（支持上传数十万字）能极好地梳理长篇论文和财报，而 Gemini 与 Google Drive 原生集成，能直接读取你云盘里的文档。" },
    { q: "哪个更适合查最新资料？", a: "ChatGPT 和 Gemini 都有强大的原生网页搜索能力，能直接获取实时信息。Gemini 更是直接背靠全球最大的 Google 搜索引擎，而 Claude 在免费版中的搜索能力相对较弱或需要特定限制。" },
    { q: "哪个更适合中文？", a: "三款均原生支持中文。目前 Claude 在中文语言表达、遣词造句的自然度上通常被评价为最高，ChatGPT 偶尔带一点“机翻感”，Gemini 在中文支持上过去偏弱但目前已大幅改进。" },
    { q: "三个都可以免费使用吗？", a: "是的，三款都有永久免费的基础版本，但都会受到每日提问次数、模型版本或高级功能的限制（例如图片生成额度）。" },
    { q: "国内使用需要注意什么？", a: "这三款产品目前均未在国内正式提供服务。由于官方服务地区与网络环境限制，你需要配合有效的网络节点以及支持的海外注册方式才能顺利使用。" },
    { q: "可以同时使用三款 AI 吗？", a: "当然可以。许多重度用户会用 ChatGPT 画图和语音聊天，用 Claude 写长文章和编程，用 Gemini 处理 Google 文档，各取所长。" },
    { q: "付费前应该先比较什么？", a: "先用免费版测试你的核心工作流（比如上传你平时的报告或代码）。谁处理你特定任务的准确率最高、UI 用得最顺手，再去订阅它的付费方案。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "AI指南", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "ChatGPT、Claude、Gemini 对比", "item": "https://runainav.com/guides/chatgpt-vs-claude-vs-gemini" }
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
    "headline": "ChatGPT、Claude、Gemini 怎么选？",
    "description": "对比ChatGPT、Claude与Gemini在聊天、写作、编程、文件处理、搜索和中文体验等方面的差异，并结合免费功能与使用环境，帮助你按需求选择AI工具。",
    "author": { "@type": "Organization", "name": "RunAI" },
    "datePublished": "2026-09-04",
    "dateModified": "2026-09-04"
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-[family-name:var(--font-sans)] text-gray-900">
      <Header />
      <ArticleStickyBar sections={[
         { id: 'quick-compare', navLabel: '快速对比' },
         { id: 'chat', navLabel: '聊天' },
         { id: 'writing', navLabel: '写作' },
         { id: 'coding', navLabel: '编程' },
         { id: 'search', navLabel: '搜索' },
         { id: 'file', navLabel: '文件' },
         { id: 'free', navLabel: '免费使用' },
         { id: 'region', navLabel: '国内使用' },
         { id: 'how-to-choose', navLabel: '怎么选' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />
      <FloatingBackButton fallbackHref="/guides" />
      
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-brand-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/guides" className="hover:text-brand-600 transition-colors">AI指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">AI 选择对比</span>
          </nav>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">ChatGPT、Claude、Gemini 怎么选？</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            从聊天、写作、编程、搜索到文件处理，用实际使用场景比较三款主流 AI，而不是单纯比参数。
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-gray-700">
              资料核对日期：2026-09-04
            </span>
            <span className="text-gray-400 italic">
              AI 功能更新极快，具体方案与额度请以官方当前页面为准。
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-5xl py-12 relative">
        <div id="article-sticky-trigger" className="absolute top-0 w-full h-1 pointer-events-none opacity-0"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
          
          <div className="lg:col-span-9">
            
            {/* Quick Read */}
            <div className="bg-gradient-to-br from-brand-50 to-white p-6 sm:p-8 rounded-2xl border border-brand-100 shadow-sm mb-10 relative overflow-hidden not-prose">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2 m-0">
                <Zap className="w-5 h-5 text-brand-500" />
                30 秒速读：核心定位
              </h2>
              <ul className="space-y-4 text-gray-700 m-0 p-0 list-none text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5"><Bot className="w-4 h-4"/></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">ChatGPT (OpenAI)</strong>
                    偏综合型，功能极为全面。适合希望一个 AI 就能搞定画图、语音聊天、搜索、分析数据等多种日常任务的“全能型”用户。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5"><Sparkles className="w-4 h-4"/></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Claude (Anthropic)</strong>
                    文字与逻辑大师。非常适合经常需要处理超长文档、深入阅读材料、进行复杂写作与编写逻辑代码的用户，中文表现极为自然。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-0.5"><Layers className="w-4 h-4"/></div>
                  <div>
                    <strong className="text-gray-900 block mb-1">Gemini (Google)</strong>
                    原生多模态与谷歌生态融合。如果你大量依赖 Gmail、Google Docs 和 Drive，可以利用它深度整合的生态，同时也是首个原生能理解视频的 AI。
                  </div>
                </li>
              </ul>
            </div>

            <div className="prose prose-brand max-w-none prose-h2:scroll-mt-32 prose-h3:scroll-mt-32 prose-h2:mt-10 prose-p:text-gray-600 prose-headings:text-gray-900 text-gray-800">
              
              <h2 id="quick-compare" className="mt-0 mb-6">三款工具是什么？</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2"><Hexagon className="w-5 h-5 text-blue-500"/> ChatGPT</h3>
                  <p className="text-xs text-gray-500 mb-4">开发方：OpenAI</p>
                  <p className="text-sm text-gray-700 flex-grow mb-6">行业标杆与先行者。综合能力最均衡，拥有语音对话、图像生成、自定义 GPTs 插件市场等极其完善的功能。</p>
                  <Link href="/guides/chatgpt" className="text-center w-full block py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors text-sm">
                    查看 ChatGPT 指南
                  </Link>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2"><Sparkles className="w-5 h-5 text-orange-500"/> Claude</h3>
                  <p className="text-xs text-gray-500 mb-4">开发方：Anthropic</p>
                  <p className="text-sm text-gray-700 flex-grow mb-6">主打安全与极致的文本逻辑。超大上下文容量，长文写作极具“人味”，创新的 Artifacts 功能让写代码所见即所得。</p>
                  <Link href="/guides/claude" className="text-center w-full block py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors text-sm">
                    查看 Claude 指南
                  </Link>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2"><Layers className="w-5 h-5 text-purple-500"/> Gemini</h3>
                  <p className="text-xs text-gray-500 mb-4">开发方：Google</p>
                  <p className="text-sm text-gray-700 flex-grow mb-6">Google 的底牌。原生多模态架构不仅能看懂文字和图片，更能直接看懂视频，并且无缝调取你云盘里的资料。</p>
                  <Link href="/guides/gemini" className="text-center w-full block py-2.5 bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors text-sm">
                    查看 Gemini 指南
                  </Link>
                </div>
              </div>

              <h3>先看最重要的区别</h3>
              <p>不要相信网上主观打出的“谁是第一名”，没有任何一款工具能在所有维度完胜。以下是根据 2026 年官方功能定位整理的核心差异：</p>

              <div className="overflow-x-auto my-6 not-prose rounded-xl border border-gray-200 shadow-sm">
                <table className="min-w-full text-sm text-left whitespace-nowrap text-gray-900">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="px-5 py-3.5 font-bold border-b border-gray-200 sticky left-0 bg-gray-100 z-10 shadow-[2px_0_4px_rgba(0,0,0,0.05)]">比较项目</th>
                      <th className="px-5 py-3.5 font-bold border-b border-gray-200">ChatGPT</th>
                      <th className="px-5 py-3.5 font-bold border-b border-gray-200">Claude</th>
                      <th className="px-5 py-3.5 font-bold border-b border-gray-200">Gemini</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">日常聊天</td>
                      <td className="px-5 py-3 text-gray-700">极其流畅，带有惊艳的高级语音功能</td>
                      <td className="px-5 py-3 text-gray-700">回答逻辑严密，不易产生废话</td>
                      <td className="px-5 py-3 text-gray-700">语速极快，直接查谷歌无缝衔接</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">长文写作</td>
                      <td className="px-5 py-3 text-gray-700">结构清晰，但偶有机翻腔</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">公认强项，文笔最自然，支持极长文本</td>
                      <td className="px-5 py-3 text-gray-700">支持一键导出到 Docs 等办公软件</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">编程辅助</td>
                      <td className="px-5 py-3 text-gray-700">代码生成极佳，带有 Data Analysis</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">Artifacts 渲染预览效果极其优秀</td>
                      <td className="px-5 py-3 text-gray-700">适合 Android / Google 云开发关联</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">文件处理</td>
                      <td className="px-5 py-3 text-gray-700">支持 PDF/表格上传解析</td>
                      <td className="px-5 py-3 text-gray-700">上下文庞大，适合几十万字财报处理</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">原生调取 Drive 云盘文件，支持极强</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">网络搜索</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">Bing 原生驱动，快速且带引用链接</td>
                      <td className="px-5 py-3 text-gray-700">支持网页抓取能力，偏重长文分析</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">Google 搜索原班人马，实时性最强</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">图片理解</td>
                      <td className="px-5 py-3 text-gray-700">精确的 OCR 与截图分析</td>
                      <td className="px-5 py-3 text-gray-700">极强的图表到代码的转换能力</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">原生多模态，连视频都能直接理解</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">图片生成</td>
                      <td className="px-5 py-3 text-gray-700 font-medium text-brand-600">原生内置 DALL-E 3</td>
                      <td className="px-5 py-3 text-gray-500 italic">不支持原生直接生成图片</td>
                      <td className="px-5 py-3 text-gray-700">支持 Imagen 模型生成图片</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">免费使用</td>
                      <td className="px-5 py-3 text-gray-700">开放几乎所有核心功能，但有额度限制</td>
                      <td className="px-5 py-3 text-gray-700">提供基础模型，限制较严</td>
                      <td className="px-5 py-3 text-gray-700">提供强大的免费版，并绑定谷歌账号</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-5 py-3 font-bold bg-white sticky left-0 shadow-[2px_0_4px_rgba(0,0,0,0.05)] text-gray-900 z-10">手机 App</td>
                      <td className="px-5 py-3 text-gray-700">体验最好的独立 App 之一</td>
                      <td className="px-5 py-3 text-gray-700">提供 App，侧重文本流</td>
                      <td className="px-5 py-3 text-gray-700">直接替代 Android 手机里的 Google Assistant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">（注：上述能力评价基于 2026 年各产品官方当前版本特性，具体功能可能随官方政策演进而变化。）</p>

              <h2 id="chat">日常聊天谁更适合？</h2>
              <p>很多人把 AI 当作搜索引擎或“智库”来提问。</p>
              <ul>
                <li>如果你喜欢<strong>拟真对话</strong>：ChatGPT 的高级语音模式目前依然是标杆，不仅能打断、能识别情绪，甚至能通过摄像头“看”到你在干嘛，非常适合练口语或无障碍交流。</li>
                <li>如果你想要<strong>严谨解答</strong>：Claude 极少说废话，不会轻易产生“过度自信”的幻觉，它像一个严肃的老教授，一步步帮你拆解复杂概念。</li>
                <li>如果你追求<strong>速度与效率</strong>：Gemini 在日常问答中响应极快，并且经常会自动带出 Google 搜索的衍生来源，让你快速求证。</li>
              </ul>

              <h2 id="writing">写文章、改文案、整理长内容怎么选？</h2>
              <p>对于新媒体编辑、学生、文案创作者，这是最核心的需求。</p>
              
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl my-8 shadow-sm not-prose">
                <h4 className="font-bold text-orange-900 mt-0 mb-3 flex items-center gap-2"><FileText className="w-5 h-5"/> 长文写作强烈推荐：Claude</h4>
                <p className="text-sm text-orange-800 leading-relaxed m-0 mb-4">
                  不要用一次主观测试就下绝对结论，但目前业界普遍共识是：<strong>Claude 的行文最自然。</strong> ChatGPT 偶尔会带有典型的“机翻感”或“AI八股文”（比如滥用“总而言之”、“首先其次”），而 Claude 能够极其精准地捕捉你要求的语气，模仿你的笔触，甚至处理数万字的整本小说也不会丢失前文脉络。
                </p>
                <p className="text-sm text-orange-800 leading-relaxed m-0">
                  此外，Claude 的 Projects 功能允许你把整个网站的参考资料喂给它，让它严格依据你的品牌调性输出文章。
                </p>
              </div>

              <h2 id="coding">写代码应该看什么？</h2>
              <p>在 AI 编程领域，三者都有出色的理解能力。但它们是通用大模型，和专用的编程工具定位不同。</p>
              <ul>
                <li><strong>轻量级代码生成：</strong>Claude 的 <strong>Artifacts</strong> 功能非常惊艳，你让它写一个网页游戏或小工具，它能直接在右侧窗口渲染运行给你看，所见即所得。</li>
                <li><strong>数据分析与图表：</strong>ChatGPT 强大的 Data Analysis 功能可以直接运行 Python，为你绘制折线图、清洗 Excel 数据。</li>
              </ul>
              
              <div className="bg-gray-100 border-l-4 border-gray-400 p-5 rounded-r-xl my-6 not-prose text-sm text-gray-700">
                <strong>开发者注意：</strong>如果你是经常改项目代码的程序员，请不要把大段代码反复复制给网页版的 ChatGPT 或 Claude。更高效的做法是使用 AI 专用代码编辑器（如 Cursor）。详细了解可以查看我们的 <Link href="/guides/cursor" className="text-brand-600 font-medium hover:underline">Cursor 使用指南</Link>。
              </div>

              <h2 id="search">查资料和找最新信息怎么选？</h2>
              <p>如果你问“2026 年某地发生的最新事件”，AI 模型本身的训练数据通常是不够的，必须依靠原生搜索功能。</p>
              <ul>
                <li><strong>Gemini：</strong>背靠无可匹敌的 Google 搜索引擎生态，不仅能立刻找新闻，甚至能直接调用 Google Flights、Google Maps 的最新实时数据。</li>
                <li><strong>ChatGPT：</strong>深度集成了微软的 Bing 搜索，能够快速抓取网页并在回答底部贴出明确的引用数字 [1][2]，方便你核实真伪。</li>
                <li><strong>Claude：</strong>其核心优势在于分析，免费版的实时外网搜索能力相较前两者较弱，更依赖你直接喂给它文本或链接来分析。</li>
              </ul>

              <h2 id="file">文件处理能力</h2>
              <p>上传几十页的 PDF 报告或公司财报让 AI 总结，是高频需求。限制会根据官方方案动态变化：</p>
              <ul>
                <li><strong>Claude：</strong>以处理长文的超高准确度著称。你上传一本几百页的书，问它第十七章的一个细节，它能精准找到，不易遗忘。</li>
                <li><strong>ChatGPT：</strong>支持多种文件格式，配合高级分析可以把你的 Excel 表格拆解得明明白白。</li>
                <li><strong>Gemini：</strong>优势在于<strong>无需下载再上传</strong>，你只要输入 <code>@Google Drive</code>，它就能直接去你云盘里把那份 50 页的会议记录调出来分析。</li>
              </ul>

              <h2 id="free">不付费，可以先用哪个？</h2>
              <p>三家目前都提供“永久免费”的基础方案，但功能有显著区别（具体以官方当下最新限额为准）：</p>
              <ul>
                <li><strong>ChatGPT 免费版：</strong>非常慷慨。官方目前甚至向免费用户开放了最新旗舰模型、图片解析、数据分析等功能，仅仅是限制了“每几小时的使用次数”。</li>
                <li><strong>Claude 免费版：</strong>提供基础体验，但额度限制相对非常严苛，一旦问得稍微长一点，极容易触发“今日额度已用完”。</li>
                <li><strong>Gemini 免费版：</strong>没有过于严苛的对话次数限制，适合重度轻量聊天的用户，且能直接使用许多谷歌插件。</li>
              </ul>
              <p><strong>建议：</strong>对于白嫖党，ChatGPT 免费版的综合体验（由于放开了众多付费功能体验权限）往往是最全面的。</p>

              <h2 id="region">国内使用时，还需要考虑什么？</h2>
              <p>产品再好，能稳定用上才是关键。对于国内网络环境的用户，这是不可忽视的现实阻力：</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mt-0 mb-3 text-sm flex items-center gap-2"><Smartphone className="w-4 h-4 text-gray-500"/> 服务地区与账号限制</h4>
                  <p className="text-xs text-gray-600 m-0 leading-relaxed">这三款产品目前均未在国内提供服务。你必须配合对应的海外网络节点才能访问。其中，Claude 的账号注册风控是公认最严格的，极易被封号；ChatGPT 相对稳定；Gemini 则绑定你的 Google 账号。</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <h4 className="font-bold text-gray-900 mt-0 mb-3 text-sm flex items-center gap-2"><Bot className="w-4 h-4 text-gray-500"/> 网络节点连通性</h4>
                  <p className="text-xs text-gray-600 m-0 leading-relaxed">不同的产品对节点的限制不同。如果你的网络环境配置不佳，可能连首页都打不开。如果你遇到类似问题，可以查阅我们的 <Link href="/guides/ai-network" className="text-brand-600 font-medium hover:underline">AI 网络环境排查指南</Link>。</p>
                </div>
              </div>

              <h2 id="how-to-choose">不想看参数？按需求直接选</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
                {[
                  { title: "我第一次用，不知道要干嘛", icon: <Info className="w-5 h-5 text-blue-500"/>, text: "闭眼选 ChatGPT。它最成熟、生态最庞大，出了问题网上能搜到无数保姆级教程，手机 App 也极度顺滑。" },
                  { title: "我经常写文章和长材料", icon: <FileText className="w-5 h-5 text-orange-500"/>, text: "坚决推荐 Claude。它的文字表达极其自然，几乎没有机器人的死板味道，适合做编辑和自媒体。" },
                  { title: "我是深度 Google 全家桶用户", icon: <Briefcase className="w-5 h-5 text-purple-500"/>, text: "首选 Gemini。它能直接读你的 Gmail 邮件、写 Google Docs 草稿，这种生态原生的联动是其他两家做不到的。" },
                  { title: "我需要生成高质量插图", icon: <ImageIcon className="w-5 h-5 text-green-500"/>, text: "选 ChatGPT。内置的 DALL-E 3 能够非常精准地听懂你的指令并在几秒内画出精美图片，对不会写 Prompt 的人极度友好。" },
                  { title: "我主要用来写代码", icon: <Code className="w-5 h-5 text-gray-700"/>, text: "推荐 Claude 网页版（使用 Artifacts 实时预览）或者直接放弃网页端，去下载专业的 Cursor 代码编辑器直接进行辅助开发。" },
                  { title: "我经常查阅最新国际资料", icon: <Search className="w-5 h-5 text-teal-500"/>, text: "Gemini 和 ChatGPT 并列。两者都具备直接原生联网搜索的能力，并能总结数百个网页的资讯。" }
                ].map((scenario, i) => (
                  <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <h5 className="font-bold text-gray-900 mt-0 mb-3 text-sm flex items-center gap-2">
                      {scenario.icon} {scenario.title}
                    </h5>
                    <p className="text-sm text-gray-600 m-0 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100 flex-grow">
                      {scenario.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50/50 border border-blue-200 p-6 rounded-2xl my-10 not-prose shadow-sm">
                <h3 className="font-bold text-blue-900 text-lg mb-6 text-center">极简选择路线图 (Decision Flow)</h3>
                <div className="flex flex-col gap-4 max-w-lg mx-auto relative">
                  
                  <div className="bg-white border-2 border-blue-200 p-4 rounded-xl shadow-sm text-center font-bold text-gray-900 z-10 relative">
                    你今天主要想让 AI 帮你做什么？
                  </div>
                  
                  <div className="absolute left-1/2 top-10 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="bg-orange-50 border border-orange-200 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium w-[40%] text-center">写文章 / 传长文档</div>
                    <div className="w-[10%] border-t-2 border-blue-200"></div>
                    <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-900 w-[40%] text-center shadow-sm">重点看 Claude</div>
                  </div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="bg-purple-50 border border-purple-200 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium w-[40%] text-center">调用谷歌文档 / 邮件</div>
                    <div className="w-[10%] border-t-2 border-blue-200"></div>
                    <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-900 w-[40%] text-center shadow-sm">重点看 Gemini</div>
                  </div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium w-[40%] text-center">写代码开发项目</div>
                    <div className="w-[10%] border-t-2 border-blue-200"></div>
                    <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-900 w-[40%] text-center shadow-sm">优先考虑 Cursor</div>
                  </div>

                  <div className="flex justify-between items-center relative z-10">
                    <div className="bg-blue-50 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium w-[40%] text-center">日常画图聊天综合</div>
                    <div className="w-[10%] border-t-2 border-blue-200"></div>
                    <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-900 w-[40%] text-center shadow-sm">重点看 ChatGPT</div>
                  </div>
                </div>
              </div>

              <h3>优点与注意事项</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                  <div className="bg-blue-500 text-white p-4 font-bold text-center">ChatGPT</div>
                  <div className="p-5">
                    <strong className="text-gray-900 text-sm block mb-2">优势：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 mb-4 pl-0">
                      <li>• 综合功能极其全面（画图、搜索）</li>
                      <li>• 语音对话体验断层领先</li>
                      <li>• 免费版开放了极多高级功能</li>
                    </ul>
                    <strong className="text-gray-900 text-sm block mb-2">需要注意：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 pl-0">
                      <li>• 中文长文偶尔容易带机翻感</li>
                      <li>• 免费版在高峰期可能会被降智</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                  <div className="bg-orange-500 text-white p-4 font-bold text-center">Claude</div>
                  <div className="p-5">
                    <strong className="text-gray-900 text-sm block mb-2">优势：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 mb-4 pl-0">
                      <li>• 中文语感和长文逻辑业界公认最强</li>
                      <li>• 极其优秀的超长文档阅读记忆</li>
                      <li>• Artifacts 所见即所得写代码</li>
                    </ul>
                    <strong className="text-gray-900 text-sm block mb-2">需要注意：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 pl-0">
                      <li>• 账号风控严格，封号率较高</li>
                      <li>• 免费版额度极易用完</li>
                    </ul>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm">
                  <div className="bg-purple-600 text-white p-4 font-bold text-center">Gemini</div>
                  <div className="p-5">
                    <strong className="text-gray-900 text-sm block mb-2">优势：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 mb-4 pl-0">
                      <li>• 直接整合谷歌全家桶服务</li>
                      <li>• 强大的底层多模态，可看视频</li>
                      <li>• 直接联动世界最强搜索引擎</li>
                    </ul>
                    <strong className="text-gray-900 text-sm block mb-2">需要注意：</strong>
                    <ul className="text-xs text-gray-600 space-y-2 pl-0">
                      <li>• 部分谷歌生态功能在国内难以施展</li>
                      <li>• 某些刁钻推理题表现不够稳定</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-5 rounded-2xl text-center my-10 not-prose shadow-sm">
                <p className="text-sm text-gray-600 m-0">
                  <strong className="text-gray-900">不要迷信跑分：</strong>各种 Benchmark 排行榜可以作为参考，但普通用户真正使用时体验是由 UI、工具整合、网络环境和具体工作流决定的，分数高不代表你用得顺手。
                </p>
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

              <div className="mt-12 p-6 border-t border-gray-200 not-prose">
                <h4 className="font-bold text-gray-900 text-sm mb-4">资料来源与参考</h4>
                <ul className="space-y-2 text-xs text-gray-500">
                  <li>• <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">OpenAI 官方 ChatGPT 产品页</a></li>
                  <li>• <a href="https://openai.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">OpenAI 官方 Pricing 与方案说明</a></li>
                  <li>• <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Anthropic 官方 Claude 产品介绍</a></li>
                  <li>• <a href="https://support.anthropic.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Anthropic 官方帮助中心</a></li>
                  <li>• <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Google Gemini 官方入口</a></li>
                  <li>• <a href="https://support.google.com/gemini/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 underline">Google Gemini 官方帮助与生态整合说明</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-3 lg:block mt-12 lg:mt-0 order-last">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base">相关详细指南</h3>
                <div className="space-y-3">
                  <Link href="/guides/chatgpt" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    ChatGPT 使用指南
                  </Link>
                  <Link href="/guides/claude" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Claude 使用指南
                  </Link>
                  <Link href="/guides/gemini" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Gemini 使用指南
                  </Link>
                  <Link href="/guides/cursor" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1 mt-4 pt-4 border-t border-gray-100">
                    Cursor 编程专栏
                  </Link>
                  <Link href="/guides/ai-network" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI 网络环境排查指南
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
