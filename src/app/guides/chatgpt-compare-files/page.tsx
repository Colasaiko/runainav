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
  title: 'ChatGPT怎么比较两个文件？差异提取实战指南',
  description: '同时拿到两份合同、报告或代码文件，怎么让 ChatGPT 快速找出差异？本文整理文件上传、比较指令、差异表格与人工复核方法，适合文档、表格和文本版本对比。',
  canonical: '/guides/chatgpt-compare-files',
});

export default function GuidePage() {
  const faqData = [
    { q: "能否一次上传超过两个文件进行对比？", a: "可以。只要在 ChatGPT 的单次对话或提示框中同时提供这些文件，并给出清晰指令。但文件越多越容易出现遗漏，建议两两对比以保证准确率。" },
    { q: "代码文件和普通的Word文档都可以对比吗？", a: "是的。对于文本、代码文件（如 .py, .js）或是基于文本的文档（如 Word、纯文本 PDF）都能很好地支持。如果是复杂的 Excel 数据透视表，可能需要让它先提取数据后再分析。" },
    { q: "为什么有些细微差异无法被找出？", a: "AI 可能会因为注意力机制在长上下文中忽略一些微小的标点符号或词缀变动。如果是严格的法律合同或代码对比，建议将 AI 作为第一道过滤，最后再用专业的文本差异对比工具（如 Beyond Compare）进行核实。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "ChatGPT怎么比较两个文件？差异提取实战指南", "item": "https://runainav.com/guides/chatgpt-compare-files" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ChatGPT怎么比较两个文件？差异提取实战指南",
    "description": "同时拿到两份合同、报告或代码文件，怎么让 ChatGPT 快速找出差异？本文整理文件上传、比较指令、差异表格与人工复核方法，适合文档、表格和文本版本对比。",
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
    { id: "upload", title: "文件上传与准备" , navLabel: "文件上传与准备"  },
    { id: "commands", title: "精准比较指令" , navLabel: "精准比较指令"  },
    { id: "review", title: "差异表格与人工复核" , navLabel: "差异表格与人工复核"  },
    { id: "faq", title: "常见问题 FAQ" , navLabel: "常见问题 FAQ"  }
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
              <span>AI办公</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ChatGPT怎么比较两个文件？差异提取实战指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              同时拿到两份合同、报告或代码文件，怎么让 ChatGPT 快速找出差异？本文整理文件上传、比较指令、差异表格与人工复核方法，适合文档、表格和文本版本对比。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">前言介绍</h2>
              <p>在日常工作流中，校对新老版本的文档往往耗时且极易出错。无论是法务在审核两版合同中的细微修改，程序员在排查两份代码文件的差异，还是市场人员在对比前后的营销策划案，肉眼排查不仅痛苦而且容易遗漏。借助 ChatGPT 强大的语义理解能力，我们能够瞬间对两份文件进行智能比对。不仅能找到“字面差异”，更能指出深层的“意义差异”，从而大幅提升办公效率。</p>
              
              <h2 id="upload">文件上传与准备</h2>
              <p>为了让 ChatGPT 能够准确地分析对比两个文件，正确的文件输入方式至关重要：</p>
              <ul>
                <li><strong>同时上传：</strong> 将需要对比的两个文件（例如 version_A.docx 和 version_B.docx）在同一次提问中一起上传。</li>
                <li><strong>规范命名：</strong> 在上传前，请给文件取一个容易区分的名字，例如“原版合同_01”和“修改版合同_02”，这样在指令中更容易指示。</li>
                <li><strong>纯文本复制法：</strong> 如果文件不大，或者出于某些原因上传失败，你可以直接在对话框中分别粘贴两段内容：<br/>
                <code>内容A：[粘贴文本]</code><br/>
                <code>内容B：[粘贴文本]</code><br/>
                然后附加对比指令。</li>
              </ul>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-gray-900 font-bold m-0">高效提示</h4>
                </div>
                <p className="text-sm text-gray-600 m-0">
                  确保文件格式清晰。如果是包含复杂图片的 PDF，建议先将其转为 Word 或 TXT，去除不必要的排版干扰，从而让 AI 更加集中在文本的比对上。
                </p>
              </div>

              <h2 id="commands">精准比较指令</h2>
              <p>正确的 Prompt 能够决定 ChatGPT 输出差异对比的质量。以下是几个经过验证的指令模板：</p>
              <ul>
                <li><strong>通用文档对比：</strong> “我上传了文件 A 和文件 B。请仔细阅读并比较这两份文件的内容，找出所有的关键差异。不要遗漏任何数字、条款或约束条件的改变。”</li>
                <li><strong>合同/法务专项：</strong> “请对比‘原版合同’和‘修改版合同’，特别注意其中涉及赔偿金、违约责任、时间期限等法律层面的改动，并解释这些改动可能对我方产生的不利影响。”</li>
                <li><strong>代码差异对比：</strong> “对比这两人份代码文件，指出逻辑上被修改了哪些地方。除了列出差异外，简要说明文件 B 相比于文件 A 做了哪些性能或功能上的优化。”</li>
              </ul>

              <h2 id="review">差异表格与人工复核</h2>
              <p>长篇的文字描述可能不利于快速扫视，你可以要求 ChatGPT 将结果结构化输出：</p>
              <p>
                <strong>输出为表格：</strong> “请将对比结果整理成一个 Markdown 表格。包含以下列：模块/章节名称、文件 A 的原始表述、文件 B 的新表述、改动性质（新增/删除/修改）以及你的分析。”
              </p>
              <p>
                尽管 AI 十分强大，但由于上下文长度的限制，极个别字词级别的修改仍然有可能被忽略。因此，在使用 AI 初筛并了解大概变动范围后，对于极其关键的文档（如金额巨大的合同），务必再通过传统对比工具（如 Word 的“比较文档”功能或 Git 的 diff 功能）进行二次人工复核，确保万无一失。
              </p>

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
                  <Link href="/guides/chatgpt-pdf-guide" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    ChatGPT 分析长 PDF
                  </Link>
                  <Link href="/guides/claude-project-docs" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Claude 项目文档工作流
                  </Link>
                  <Link href="/guides/gemini-file-drive-guide" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Gemini 文件处理指南
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
