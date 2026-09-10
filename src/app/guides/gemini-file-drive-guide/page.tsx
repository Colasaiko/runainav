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
  title: 'Gemini怎么上传文件？Drive与PDF分析指南',
  description: '想让 Gemini 读取本地文件或 Google Drive 资料？本指南整理文件上传、PDF 总结、重点提取与追问方法，并说明权限、格式和读取失败时排查方向。',
  canonical: '/guides/gemini-file-drive-guide',
});

export default function GuidePage() {
  const faqData = [
    { q: "Gemini 无法连接或读取我的 Google Drive 怎么办？", a: "确保你在 Gemini 的设置（Extensions / 扩展程序）中开启了 Google Workspace 权限。如果没有开启，Gemini 将无权访问你的云端硬盘文件。" },
    { q: "为什么 Gemini 说找不到我刚才提到的 Drive 文件？", a: "Gemini 搜索 Drive 文件时依赖文件名和部分关键词匹配。如果文件刚上传或者命名很生僻，建议在对话中直接输入精确的文件名，或者使用 @Google Drive [文件名] 的方式来强行唤起搜索。" },
    { q: "Gemini 的 1.5 Pro 模型能处理多大的 PDF？", a: "Gemini 1.5 Pro 拥有高达 100万到 200万 Tokens 的超长上下文窗口，理论上能够一次性处理极大的 PDF 文档甚至是数小时的音视频，这在所有大模型中属于顶尖水准。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Gemini怎么上传文件？Drive与PDF分析指南", "item": "https://runainav.com/guides/gemini-file-drive-guide" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gemini怎么上传文件？Drive与PDF分析指南",
    "description": "想让 Gemini 读取本地文件或 Google Drive 资料？本指南整理文件上传、PDF 总结、重点提取与追问方法，并说明权限、格式和读取失败时排查方向。",
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
    { id: "intro", title: "导语" , navLabel: "导语"  },
    { id: "upload", title: "本地上传与 Drive 联动" , navLabel: "本地上传与 Drive 联动"  },
    { id: "analyze", title: "长文档总结与提取" , navLabel: "长文档总结与提取"  },
    { id: "troubleshoot", title: "读取失败排查方向" , navLabel: "读取失败排查方向"  },
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
              Gemini怎么上传文件？Drive与PDF分析指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              想让 Gemini 读取本地文件或 Google Drive 资料？本指南整理文件上传、PDF 总结、重点提取与追问方法，并说明权限、格式和读取失败时排查方向。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">前言介绍</h2>
              <p>Google 推出的 Gemini 最大的生态优势就是与 Google Workspace（特别是 Google Drive、Docs 和 Gmail）的深度整合。除此之外，凭借 Gemini 1.5 带来的百万级超长上下文，处理堆积如山的 PDF 文件也变得轻而易举。本文将教你如何顺畅地把本地文件丢给 Gemini，或是直接让它从你的云端硬盘里抓取资料进行分析。</p>
              
              <h2 id="upload">本地上传与 Drive 联动</h2>
              <p>向 Gemini 提供文件主要有两种方式，适用不同场景：</p>
              <ul>
                <li><strong>本地直接上传：</strong> 在 Gemini 的对话框旁边，点击“+”号或文件上传图标，即可上传本地的 PDF、图片或代码文件。这是最快最直接的方法，适合一次性的临时分析。</li>
                <li><strong>连接 Google Drive：</strong> 想要真正发挥 Gemini 的生态威力，你只需在对话框输入 <code>@Google Drive</code>（或在扩展面板开启 Drive 集成），然后跟上指令：“帮我总结一下我的 Drive 中名为‘Q3 财务总结’的文档”。Gemini 会自动搜索并读取该文件。</li>
                <li><strong>混合多文件源：</strong> 你甚至可以这样组合指令：“参考我上传的这份竞品PDF，以及 Drive 里名为‘我司产品说明’的文档，对比它们的优缺点。”</li>
              </ul>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-gray-900 font-bold m-0">高效提示</h4>
                </div>
                <p className="text-sm text-gray-600 m-0">
                  在使用 Drive 联动时，如果遇到重名文件，Gemini 可能会抓错目标。建议将你需要分析的重要文件命名得具体且唯一（如：2026年9月_东亚区_销售财报_V3.pdf）。
                </p>
              </div>

              <h2 id="analyze">长文档总结与重点提取</h2>
              <p>得益于强大的上下文能力，你可以把极其冗长厚重的 PDF 文件丢给它，用以下结构化提问获取高价值输出：</p>
              <ul>
                <li><strong>全览与导航：</strong> “这是一份长达 200 页的行业报告，请先给我一个目录大纲，并指出最有价值的三个章节。”</li>
                <li><strong>快速数据抓取：</strong> “根据文档中的‘实验数据记录’章节，提取所有涉及测试温度和对应失败率的数值，生成一张简明的 Markdown 报表。”</li>
                <li><strong>多轮追问深入：</strong> 得到初步结果后，可以直接深挖：“关于你刚刚提到的第二点‘成本超支问题’，文档里有没有提到是哪个部门造成的？如果有，他们在文档哪一页提供的解释？”</li>
              </ul>

              <h2 id="troubleshoot">读取失败与权限排查方向</h2>
              <p>有时候，Gemini 可能会回复“无法读取”或给出无关的答案，遇到这种情况请从以下几个方面排查：</p>
              <ol>
                <li><strong>Drive 扩展权限未开启：</strong> 确保在 Gemini 设置界面已经激活 Google Workspace 的扩展权限。这是最常见的导致无法访问云端文件的原因。</li>
                <li><strong>文件格式不支持或加密：</strong> 检查你的 PDF 文件是否设置了打开密码，或者是不可选中的纯图片扫描版（如果没有做 OCR 处理）。虽然 Gemini 视觉能力强，但直接选中文本的 PDF 识别率依然最高。</li>
                <li><strong>企业账号的限制：</strong> 如果你使用的是公司分配的 Google Workspace 账号，管理员可能在后台禁止了 Gemini 读取内部 Drive 文件的权限。此时只能尝试下载到本地后再手动上传。</li>
              </ol>

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
                  <Link href="/guides/chatgpt-compare-files" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    ChatGPT 文件比对实战
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
