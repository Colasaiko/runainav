/* eslint-disable react/no-unescaped-entities */
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import CopyButton from '@/components/ui/CopyButton';
import { constructMetadata } from "@/lib/seo";
import { Info, Check, MessageSquare, FileText, Globe, Sparkles, BookOpen, Search, Briefcase, XCircle } from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';

export const metadata = constructMetadata({
  title: 'ChatGPT能做什么？常用功能、场景与实用技巧',
  description: '整理ChatGPT常见功能与实际使用场景，包括聊天问答、写作、文件分析、图片理解、搜索、学习和日常办公，并说明不同任务下应该怎么用才更方便。',
  canonical: '/guides/chatgpt-what-can-it-do',
  type: 'article',
  publishedTime: '2026-09-15',
  modifiedTime: '2026-09-15',
});

const SECTIONS = [
  { id: 'intro', navLabel: '30秒速读' },
  { id: 'daily', navLabel: '日常功能' },
  { id: 'files', navLabel: '文件处理' },
  { id: 'images', navLabel: '图片处理' },
  { id: 'code', navLabel: '编写代码' },
  { id: 'office', navLabel: '办公场景' },
  { id: 'limits', navLabel: '不能做什么' },
  { id: 'alternatives', navLabel: '其他选择' },
];

export default function ChatGPTWhatCanItDo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChatGPT能做什么？常用功能与实际使用场景",
    "description": metadata.description,
    "image": "https://runainav.com/images/og/default.webp",
    "author": { "@type": "Organization", "name": "RunAI" },
    "publisher": {
      "@type": "Organization",
      "name": "RunAI",
      "logo": { "@type": "ImageObject", "url": "https://runainav.com/logo.png" }
    },
    "datePublished": "2026-09-15",
    "dateModified": "2026-09-15"
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "ChatGPT能做什么", "item": "https://runainav.com/guides/chatgpt-what-can-it-do" }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <ArticleStickyBar sections={SECTIONS} />
      
      <main className="flex-grow container mx-auto px-4 max-w-4xl py-12 md:py-20 pt-32">
        <article className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12 border-b border-gray-100 bg-gradient-to-b from-blue-50/50 to-white">
            <div className="flex items-center gap-3 text-sm text-brand-600 font-medium mb-6">
              <Link href="/guides" className="hover:underline">教程指南</Link>
              <span>/</span>
              <span>AI聊天</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              ChatGPT能做什么？常用功能与实际使用场景
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              你可能听过ChatGPT，但它到底可以拿来干什么？本文带你全面了解从聊天问答到文件分析、写代码、甚至办公流程自动化的所有常见用法。
            </p>
          </div>

          <div className="p-8 md:p-12 prose prose-lg prose-blue max-w-none prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">
            
            <h2 id="intro" className="text-2xl font-bold mt-0 mb-6 flex items-center gap-2 scroll-mt-24">
              <Sparkles className="w-6 h-6 text-brand-500" /> 30秒速读：ChatGPT可以用于什么？
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
              <p className="mb-4 text-gray-800">快速回答，你可以把 ChatGPT 用来做这些事：</p>
              <div className="flex flex-wrap gap-3">
                {['聊天问答', '写作', '总结', '翻译', '学习', '文件分析', 'PDF', 'Excel', '图片理解', '图片生成', '搜索资料', '代码', '办公', '头脑风暴'].map((tag, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 id="daily" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <MessageSquare className="w-6 h-6 text-brand-500" /> ChatGPT日常最常用的功能有哪些？
            </h2>
            <div className="space-y-6 mb-12 text-gray-700">
              <p><strong>聊天问答：</strong> 像和真人聊天一样提问，无论是常识百科、生活建议还是专业知识，它都能快速给出结构化的回答。</p>
              <p><strong>写作与改写：</strong> 从写邮件、发推文到写文章大纲、润色简历，你可以指定语气（正式、幽默、专业）让它帮你完成草稿。</p>
              <p><strong>翻译：</strong> 它不仅能翻译多国语言，还能根据上下文保留行业术语的正确翻译，并解释生词。</p>
              <p><strong>总结文章：</strong> 扔给它一篇长文或新闻链接，让它在5秒内提炼出核心要点和结论。</p>
              <p><strong>学习解释：</strong> “用给10岁小孩听的话解释量子力学”，它可以把晦涩的专业知识拆解得通俗易懂。</p>
              <p><strong>头脑风暴：</strong> 想不出项目点子？不知道周末去哪玩？让它给你列出20个创意选项，帮你打破思维僵局。</p>
            </div>

            <h2 id="files" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <FileText className="w-6 h-6 text-brand-500" /> ChatGPT可以处理文件吗？
            </h2>
            <p className="mb-6">可以。你可以直接把文件拖拽给它，让它读取内容并回答你的问题。实际支持的能力根据你的账号方案（Free/Plus/Pro/Team/Enterprise）及当前产品功能可能会有所不同。</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>PDF与Word文档：</strong> 让它阅读长篇报告、文献或合同，提取关键数据或做全篇总结。了解详情可看 <Link href="/guides/chatgpt-pdf-guide">ChatGPT分析PDF教程</Link>。</li>
              <li><strong>文本数据比对：</strong> 上传两份不同版本的文件，让它找出差异。详见 <Link href="/guides/chatgpt-compare-files">ChatGPT比较文件教程</Link>。</li>
              <li><strong>表格文件（Excel/CSV）：</strong> 让它帮你分析销售数据、生成图表或写数据洞察总结。</li>
            </ul>

            <h2 id="images" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Sparkles className="w-6 h-6 text-brand-500" /> ChatGPT可以处理图片吗？
            </h2>
            <p className="mb-6">ChatGPT 具备强大的多模态能力，能够“看懂”和“生成”图片：</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>图片理解：</strong> 拍下不认识的植物、看不懂的外语菜单或复杂的报错截图，让它解释。</li>
              <li><strong>截图分析：</strong> 截图发给它，它可以识别截图中的表格并转换为文字或Excel格式。</li>
              <li><strong>图片生成与编辑：</strong> 描述你想要的画面，利用 DALL·E 功能直接生成对应的插画、照片或设计图，甚至支持局部修改。了解详情可看 <Link href="/guides/chatgpt-images-2-5-guide">ChatGPT图片生成指南</Link>。</li>
            </ul>

            <h2 id="code" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Briefcase className="w-6 h-6 text-brand-500" /> ChatGPT可以帮忙写代码吗？
            </h2>
            <p className="mb-4">非常适合！对于程序员和编程新手，它是一个不知疲倦的数字结对编程助手：</p>
            <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
              <li><strong>代码生成：</strong> 告诉它需求，它能直接写出 Python、JS、HTML 等各种语言的脚本。</li>
              <li><strong>解释代码：</strong> 把看不懂的开源代码发给它，它能逐行写注释并解释逻辑。</li>
              <li><strong>Debug：</strong> 报错了不知道怎么办？把错误日志发给它，它能告诉你错在哪并给出修复建议。</li>
              <li><strong>重构：</strong> 让它帮你优化冗余的代码，提高运行效率。</li>
            </ul>
            <div className="bg-amber-50 p-4 border border-amber-200 rounded-xl mb-12">
              <strong className="text-amber-800">⚠️ 注意：</strong>
              <span className="text-amber-800">AI 生成的代码并非一定正确，可能会有逻辑漏洞或安全隐患，直接用于生产环境前务必经过人工审查和测试。</span>
            </div>

            <h2 id="office" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Briefcase className="w-6 h-6 text-brand-500" /> ChatGPT适合办公吗？
            </h2>
            <p className="mb-6">在日常办公中，ChatGPT 能够极大节省你的时间：</p>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li><strong>邮件处理：</strong> 提供要点，让它生成一封得体正式的商务邮件，或者帮你委婉地拒绝别人。</li>
              <li><strong>会议纪要：</strong> 把会议录音转换成的文字稿发给它，让它一键生成结构化的 <Link href="/guides/ai-meeting-notes">会议纪要与待办事项</Link>。</li>
              <li><strong>报告与方案草稿：</strong> 输入几个核心目标和数据，让它帮你搭建策划案和周报的大纲。</li>
              <li><strong>数据整理：</strong> 结合 <Link href="/guides/ai-office-workflow">AI办公自动化</Link> 和 <Link href="/guides/ai-excel-data">Excel数据处理</Link> 技巧，让它帮你写复杂的公式和宏代码。</li>
            </ul>

            <h2 id="limits" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <XCircle className="w-6 h-6 text-red-500" /> ChatGPT不能完全替你做什么？
            </h2>
            <p className="mb-6">尽管能力强大，但在以下高风险场景，你不应完全依赖它的输出：</p>
            <ul className="list-disc pl-6 space-y-3 mb-12 text-gray-700">
              <li><strong>高风险医疗判断：</strong> 身体不适请看医生，不要依据 AI 的回答自行用药。</li>
              <li><strong>法律决定：</strong> 它可以帮你理解复杂的法律条款，但不能代替律师为你做关键的法律决定。</li>
              <li><strong>财务决定：</strong> 不要指望它能帮你做稳赚不赔的股票分析和投资决定。</li>
              <li><strong>事实核验：</strong> AI 有可能出现“幻觉”（一本正经地胡说八道），重要的事实、数据和历史引用，请自行查证。</li>
              <li><strong>最终安全审核与审批：</strong> 最终的代码安全审核与重要商业文件审批，必须由人类完成。</li>
            </ul>

            <h2 id="alternatives" className="text-2xl font-bold mt-16 mb-8 flex items-center gap-2 scroll-mt-24">
              <Info className="w-6 h-6 text-brand-500" /> 什么情况下应该用别的AI？
            </h2>
            <p className="mb-6">ChatGPT 很强大，但不是唯一的选择，在某些具体场景，别的工具可能更好用：</p>
            <ul className="list-disc pl-6 space-y-4 mb-12 text-gray-700">
              <li>想写数万字的超长文或处理极其庞大的文档库？你可以试试 <Link href="/guides/claude">Claude</Link> 的超长上下文能力。</li>
              <li>高度依赖谷歌全家桶（Docs/Drive）？你可以试试 <Link href="/guides/gemini">Gemini</Link>，它与 Google 生态集成更深。</li>
              <li>偏好中文逻辑和国内生态？你可以看看 <Link href="/guides/deepseek">DeepSeek</Link>。了解更多可查看 <Link href="/compare/deepseek-vs-chatgpt">DeepSeek 与 ChatGPT 深度对比</Link>。</li>
              <li>你想进行带有丰富信息源引用和深度学术检索的搜索？用 <Link href="/guides/perplexity">Perplexity</Link> 找资料效率更高。</li>
              <li>你是全职程序员，想在写代码时直接让 AI 接管整个工程？<Link href="/guides/cursor">Cursor</Link> 这样的专用 AI 编辑器体验更好。</li>
            </ul>

          </div>
        
      {/* 🚀 ChatGPT Topic Cluster 自动聚合区域 */}
      <section className="mt-16 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
          <span>📖</span> ChatGPT 深度精选系列
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/guides/chatgpt-what-can-it-do" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-hover:scale-110 transition-transform">✨</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">ChatGPT 能做什么？</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">零基础看懂的 7 大日常高频场景</div>
            </div>
          </Link>
          <Link href="/guides/chatgpt-pdf-guide" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg group-hover:scale-110 transition-transform">📄</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">长文档与 PDF 分析</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">如何让 AI 帮你读财报与论文</div>
            </div>
          </Link>
          <Link href="/tests/chatgpt" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg group-hover:scale-110 transition-transform">✅</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">ChatGPT 深度实测报告</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">代码、推理、视觉能力的极限在哪？</div>
            </div>
          </Link>
          <Link href="/guides/chatgpt-jichang" className="flex items-start gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors group">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg group-hover:scale-110 transition-transform">🌐</div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">网络连通性解决方案</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">解决 Access Denied 与报错问题</div>
            </div>
          </Link>
        </div>
      </section>

    </article>
      </main>
      <FloatingBackButton fallbackHref="/guides" />
      <Footer />
    </div>
  );
}
