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
  title: 'Claude怎么整理项目资料？长文档归纳工作流',
  description: '项目资料太多不知道从哪里开始？本文整理用 Claude 归纳文档、建立项目背景、提取待办与持续追问的方法，并说明资料更新、引用核对和敏感信息处理时要注意什么。',
  canonical: '/guides/claude-project-docs',
});

export default function GuidePage() {
  const faqData = [
    { q: "Claude 相比于 ChatGPT 在处理长文档上有什么优势？", a: "Claude 3 (如 Opus/Sonnet) 支持高达 200K 的超大上下文窗口，一次性能够吃下数百页的书籍或数万行代码，且由于更好的信息召回能力（Needle In A Haystack 表现优秀），它遗忘细节的情况显著少于竞争对手。" },
    { q: "如果项目资料包含机密数据，可以喂给 Claude 吗？", a: "如果使用的是免费的公共 API 或网页端，默认可能被用于模型训练，建议对待机密数据做脱敏处理（比如用假数据替换真实客户名）。如果是使用企业级 API（如通过 AWS Bedrock），通常不会被用于训练。" },
    { q: "新的资料更新了，需要重新让 Claude 读取吗？", a: "是的。在网页版的普通对话流中，模型不会自动更新记忆。如果只是增加了少量资料，可以直接在已有对话中发送新增文件。但若资料产生了较大变化，建议新开对话，将完整的最新资料包一次性发给它以防混淆。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Claude怎么整理项目资料？长文档归纳工作流", "item": "https://runainav.com/guides/claude-project-docs" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Claude怎么整理项目资料？长文档归纳工作流",
    "description": "项目资料太多不知道从哪里开始？本文整理用 Claude 归纳文档、建立项目背景、提取待办与持续追问的方法，并说明资料更新、引用核对和敏感信息处理时要注意什么。",
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
    { id: "workflow", title: "建立项目背景与归纳" , navLabel: "建立项目背景与归纳"  },
    { id: "todo", title: "提取待办与持续追踪" , navLabel: "提取待办与持续追踪"  },
    { id: "privacy", title: "隐私与引用核对" , navLabel: "隐私与引用核对"  },
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
              Claude怎么整理项目资料？长文档归纳工作流
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              项目资料太多不知道从哪里开始？本文整理用 Claude 归纳文档、建立项目背景、提取待办与持续追问的方法，并说明资料更新、引用核对和敏感信息处理时要注意什么。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">前言介绍</h2>
              <p>接手一个全新的大型项目时，最让人头疼的就是面对堆积如山的历史背景文档、产品说明、邮件记录和会议纪要。Claude 凭借其高达 200K Tokens 的惊人上下文容量和出色的信息理解力，成为处理这方面任务的利器。通过一套标准化的“投喂-归纳-追问”工作流，你可以将 Claude 打造成为该项目专属的 AI 知识库与小助手，极大降低你的认知负担。</p>
              
              <h2 id="workflow">建立项目背景与归纳</h2>
              <p>要让 Claude 发挥最大价值，必须让它先“读懂”整个项目的全貌：</p>
              <ul>
                <li><strong>集中打包：</strong> 尽量将分散的 PDF、Word 或文本文件整合，或在一个对话内分批上传。建议在正式对话前，发送一条指令：“接下来我会发送几份关于项目 X 的资料，请先只做确认回复，等我说完毕后再开始分析。”</li>
                <li><strong>建立概念地图：</strong> 资料上传完毕后，不要立刻要结果，而是先让它理清逻辑：“请根据我提供的资料，梳理出这个项目的关键时间线、核心干系人（Stakeholders）以及当前面临的主要挑战。”</li>
                <li><strong>利用 Claude Projects 功能：</strong> 如果你是 Claude Pro 用户，可以直接创建一个 Project，将所有资料设定为该项目的永久上下文知识库。每次在项目中提问，它都会自动参考这批核心资料。</li>
              </ul>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-6">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-gray-900 font-bold m-0">高效提问技巧</h4>
                </div>
                <p className="text-sm text-gray-600 m-0">
                  当你对某个专有名词不熟悉时，可以直接说：“请用类比的方式，基于我们这个项目的语境，给我解释一下第三份文档里提到的‘动态路由扩容’是什么意思。”
                </p>
              </div>

              <h2 id="todo">提取待办与持续追踪</h2>
              <p>了解背景后，下一步就是将资料转化为行动力：</p>
              <ul>
                <li><strong>提取 Action Items：</strong> 如果你上传了会议纪要，可以使用指令：“提取上述会议纪要中的所有待办事项，按责任人、截止日期和任务描述整理成表格形式。”</li>
                <li><strong>评估项目风险：</strong> “结合所有的背景资料，指出该项目在未来 3 个月内可能会面临的三个最大风险，并基于文档给出相应的缓解策略。”</li>
                <li><strong>撰写周报或进度更新：</strong> “我本周完成了任务A和B，解决了文档中提到的C问题。请结合项目目标，帮我撰写一份给高层的项目周报，语气需要正式且简练。”</li>
              </ul>

              <h2 id="privacy">隐私、资料更新与引用核对</h2>
              <p>在使用 AI 整理公司级项目资料时，这三个问题是必须面对的：</p>
              <p>
                <strong>隐私脱敏：</strong> 绝不要上传包含真实用户 PII（如身份证号、明文银行账号）或顶级商业机密的代码库。在使用 Claude 时，尽量提前用脚本把敏感词汇替换掉。
              </p>
              <p>
                <strong>资料更新问题：</strong> 如果有新的项目变动，要及时通知模型：“请注意，原定于 9 月底的上线时间现已推迟至 10 月 15 日，以下是更新后的补充文档，请更新你的认知并重新调整待办计划。” 如果资料变更过大，建议重新建立一个新会话。
              </p>
              <p>
                <strong>要求提供出处：</strong> 即使是准确率极高的 Claude，偶尔也会出现偏差。请养成在 Prompt 中加入这一句的好习惯：“在回答时，请务必在括号内标注该信息来自哪一份文档及大致上下文位置，以便我查证。”
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
                    ChatGPT 长文档指南
                  </Link>
                  <Link href="/guides/chatgpt-compare-files" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    ChatGPT 文件比对技巧
                  </Link>
                  <Link href="/guides/gemini-file-drive-guide" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    Gemini 文档处理方法
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
