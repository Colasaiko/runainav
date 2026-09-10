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
  title: 'AI怎么整理会议记录？纪要与行动项生成指南',
  description: '会议结束后还要花时间写纪要？本文整理用 AI 处理转录文本、提取决策、负责人、截止日期和行动项的方法，并给出适合周会、项目会与客户会议的纪要工作流。',
  canonical: '/guides/ai-meeting-notes',
});

export default function GuidePage() {
  const faqData = [
    { q: "AI可以直接加入我的视频会议吗？", a: "可以。市面上有许多专门的 AI 会议助手（如飞书妙记、腾讯会议AI助手、Otter.ai 等）可以直接加入 Zoom、Teams 或腾讯会议，自动录音并生成实时字幕和纪要。" },
    { q: "遇到多语言或方言混杂的会议，AI 能处理好吗？", a: "目前的顶级语音转写模型（如 Whisper）对多语言和主流方言的支持已经相当不错。但在专业术语密集的场合，转录仍可能出现错别字，需要人工在提示词中提供行业术语表，或者事后手动微调。" },
    { q: "会议录音的隐私安全如何保障？", a: "处理内部敏感会议时，切勿将未脱敏的录音直接传给未授权的第三方公共云 AI 平台。建议使用公司统一采购、符合企业合规标准的 AI 工具，或在本地部署开源模型进行转录分析。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "AI怎么整理会议记录？纪要与行动项生成指南", "item": "https://runainav.com/guides/ai-meeting-notes" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI怎么整理会议记录？纪要与行动项生成指南",
    "description": "会议结束后还要花时间写纪要？本文整理用 AI 处理转录文本、提取决策、负责人、截止日期和行动项的方法，并给出适合周会、项目会与客户会议的纪要工作流。",
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
    { id: "workflow", title: "AI 会议纪要完整工作流" , navLabel: "AI 会议纪要完整工作流"  },
    { id: "prompts", title: "提取行动项与决策的 Prompt" , navLabel: "提取行动项与决策的 Prompt"  },
    { id: "scenarios", title: "不同会议场景的定制化" , navLabel: "不同会议场景的定制化"  },
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
              <span>AI办公</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI怎么整理会议记录？纪要与行动项生成指南
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              会议结束后还要花时间写纪要？本文整理用 AI 处理转录文本、提取决策、负责人、截止日期和行动项的方法，并给出适合周会、项目会与客户会议的纪要工作流。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语</h2>
              <p>在现代职场中，开会往往占据了大量时间，而会后整理会议纪要又是一项繁琐且耗时的任务。幸运的是，随着自然语言处理技术的发展，AI 已经能够完美胜任这项工作。无论你是有一段长达一小时的会议录音，还是一份杂乱无章的速记文档，AI 都能在几秒钟内帮你提炼出核心要点和下一步行动计划。</p>
              <p>本文将手把手教你如何打造一套高效的“AI 会议纪要工作流”，从处理原始转录文本，到精准提取决策和行动项（Action Items），让你从繁杂的行政事务中解放出来，将精力聚焦于高价值的推进工作。</p>
              
              <h2 id="workflow">AI 会议纪要完整工作流</h2>
              <p>一套成熟的会议处理流程通常包含“语音转写”和“文本提炼”两个核心步骤。</p>
              
              <h3>步骤 1：获取高质量的文本转录稿</h3>
              <p>AI 大模型需要文本作为输入。你可以通过以下方式获取：</p>
              <ul>
                <li><strong>直接使用会议软件：</strong> 开启飞书、钉钉、腾讯会议自带的转录功能，会议结束后导出文本。</li>
                <li><strong>录音转文字：</strong> 如果是线下会议，可以使用手机录音，然后通过通义听悟、讯飞听见或开源的 Whisper 模型将音频转化为带时间戳的文字。</li>
              </ul>
              
              <h3>步骤 2：清洗与分发文本</h3>
              <p>导出的转录稿通常包含大量的口语化表达（如“呃”、“那个”）、废话和寒暄。不要浪费时间自己去删减，直接将全文文本扔给具备长文本处理能力的 AI（如 Kimi、Claude 3 或 ChatGPT ），让它去粗取精。</p>

              <h2 id="prompts">提取行动项与决策的 Prompt</h2>
              <p>要让 AI 生成高质量、可直接发送给团队的纪要，关键在于你使用的提示词（Prompt）。你需要明确要求 AI 输出特定的结构。</p>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-6">
                <p className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500" /> 高效会议纪要 Prompt 模板：</p>
                <p className="m-0 text-sm text-gray-700">“你是一位专业的执行助理。请阅读以下会议转录文本，并生成一份结构清晰的会议纪要。请严格按照以下格式输出：<br/>
                1. <strong>会议主旨：</strong>（用一两句话总结本次会议的核心目的和最终成果）<br/>
                2. <strong>核心决策：</strong>（列出会议中达成共识的决定）<br/>
                3. <strong>关键讨论点：</strong>（以要点形式列出各方意见，过滤废话，保留核心逻辑）<br/>
                4. <strong>行动项（Action Items）：</strong>（务必以表格形式输出，包含字段：任务描述、负责人、截止日期/时间节点）<br/><br/>
                要求：语气专业客观，对于未明确负责人的任务，请在负责人员段标注‘待定’。以下是会议记录：[粘贴转录内容]”</p>
              </div>

              <h3>追问与细化</h3>
              <p>初版纪要生成后，你可以根据需要继续追问 AI。例如：“请帮我把上述的行动项转化为可以直接粘贴进 Jira/Trello 的任务卡片描述。” 或 “针对第二项决策，张三提出了哪些具体的反对意见？”</p>

              <h2 id="scenarios">不同会议场景的定制化</h2>
              <p>不同的会议性质对纪要的要求截然不同，你可以调整 Prompt 以适应特定场景：</p>
              
              <ul>
                <li><strong>团队周会（Weekly Sync）：</strong> 侧重于进度和卡点。让 AI 提炼：“各个项目当前进展到什么阶段？遇到了哪些 Blockers（阻碍）？需要协调哪些资源？”</li>
                <li><strong>头脑风暴/项目启动会：</strong> 侧重于创意和发散。让 AI 整理：“按主题分类整理今天提出的所有创意，并列出每个创意的潜在优点和风险。”</li>
                <li><strong>客户/需求沟通会：</strong> 侧重于承诺和交付。要求 AI：“列出客户提出的所有明确需求点，以及我们团队在会议中承诺的交付物和时间表。以清晰的清单形式呈现，以便我直接发送给客户确认。”</li>
              </ul>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 my-6">
                <p className="font-bold text-blue-900 mb-2 flex items-center gap-2"><Info className="w-5 h-5 text-blue-600" /> 最佳实践提示</p>
                <p className="m-0 text-sm text-blue-800">
                  发送纪要前，<strong>一定要人工浏览一遍行动项（Action Items）</strong>。AI 可能会误解某些反讽的语气或模糊的代词。确保负责人和截止日期的准确性，是会议纪要的核心价值所在。
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

            </div>
          </div>

          <div className="lg:col-span-3 lg:block mt-12 lg:mt-0">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-base">相关推荐</h3>
                <div className="space-y-3">
                  <Link href="/guides/ai-excel-data" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI处理Excel数据指南
                  </Link>
                  <Link href="/guides/chatgpt-vs-claude-vs-gemini" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    写好 Prompt 的实用技巧
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
