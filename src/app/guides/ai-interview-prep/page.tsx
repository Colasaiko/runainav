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
  title: 'AI怎么准备求职面试？模拟问答与复盘方法',
  description: '准备面试时不知道该练什么？本文教你用 AI 根据职位描述和简历生成模拟问题、优化回答、进行追问与复盘，并说明如何避免让 AI 编造经历或替你夸大个人能力。',
  canonical: '/guides/ai-interview-prep',
});

export default function GuidePage() {
  const faqData = [
    { q: "可以直接用 AI 生成的答案去背诵吗？", a: "绝对不要。面试官很容易听出过度包装的“AI腔调”（如结构过于刻板、充斥大词却缺乏细节）。AI 的作用是帮你梳理逻辑框架和挖掘自身经历，最终的答案必须用你自己的真实细节和语言风格来表达。" },
    { q: "AI 模拟面试可以开启语音功能吗？", a: "可以。如果你使用 ChatGPT App，可以使用它的实时语音对话功能，让它扮演面试官用语音向你提问。这能极大地模拟真实的面试紧张感和即兴思考环境。" },
    { q: "如果 AI 建议我修改简历中的数据或经历怎么办？", a: "必须拒绝。AI 为了迎合职位描述，有时会产生“幻觉”或鼓励夸大事实。始终坚守诚信底线，只让 AI 帮你更好地包装和表达已有经历，绝不能无中生有。" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://runainav.com/" },
      { "@type": "ListItem", "position": 2, "name": "指南与教程", "item": "https://runainav.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "AI怎么准备求职面试？模拟问答与复盘方法", "item": "https://runainav.com/guides/ai-interview-prep" }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "AI怎么准备求职面试？模拟问答与复盘方法",
    "description": "准备面试时不知道该练什么？本文教你用 AI 根据职位描述和简历生成模拟问题、优化回答、进行追问与复盘，并说明如何避免让 AI 编造经历或替你夸大个人能力。",
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
    { id: "predict-questions", title: "精准预测面试问题" , navLabel: "精准预测面试问题"  },
    { id: "mock-interview", title: "实战模拟与压力测试" , navLabel: "实战模拟与压力测试"  },
    { id: "optimize-answers", title: "运用 STAR 法则优化回答" , navLabel: "运用 STAR 法则优化回答"  },
    { id: "warnings", title: "避坑指南与复盘" , navLabel: "避坑指南与复盘"  },
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
              AI怎么准备求职面试？模拟问答与复盘方法
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              准备面试时不知道该练什么？本文教你用 AI 根据职位描述和简历生成模拟问题、优化回答、进行追问与复盘，并说明如何避免让 AI 编造经历或替你夸大个人能力。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 lg:col-start-2">
            <div className="prose prose-lg prose-brand max-w-none text-gray-700">
              
              <h2 id="intro">导语</h2>
              <p>拿到心仪公司的面试通知后，你可能会感到焦虑：面试官会问什么？我的项目经历经得起深挖吗？在过去，你只能对着镜子苦练，或者找朋友帮忙。而现在，AI 已经可以扮演一位苛刻但极具建设性的高级面试官（HR 或技术主管）。</p>
              <p>通过巧妙的 Prompt，你可以让 AI 分析职位要求，为你量身定制题库，进行一对一的模拟对决，甚至帮你复盘找出答题逻辑中的漏洞。本指南将带你一步步构建全套 AI 面试准备工作流。</p>
              
              <h2 id="predict-questions">精准预测面试问题</h2>
              <p>面试不是盲目的问答，它是职位需求与候选人能力的匹配过程。你的第一步是让 AI 帮你“破译”职位描述（JD）。</p>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 my-6">
                <p className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500" /> 预测题库 Prompt：</p>
                <p className="m-0 text-sm text-gray-700">“我即将参加 [公司名称] 的 [职位名称] 面试。以下是该职位的详细 Job Description（JD）：[粘贴JD]。<br/>
                同时，这是我的个人简历：[粘贴简历文字版]。<br/>
                请你扮演该公司资深的招聘经理。基于这两份材料的对比，请为我预测 10 个最有可能在面试中被问到的问题。问题需要包含：3个基础行为面试题、4个针对我简历项目的深度挖掘题，以及3个考察特定技能/抗压能力的场景题。”</p>
              </div>
              <p>AI 生成的题目将直接命中你简历中可能存在的逻辑跳跃点，帮助你提前准备好话术。</p>

              <h2 id="mock-interview">实战模拟与压力测试</h2>
              <p>拿到了题库后，接下来就是进行互动式模拟。不要让 AI 一次性把问题都抛给你，而是要设定规则，让它一次问一个问题，并根据你的回答进行追问（Follow-up questions）。</p>

              <h3>启动模拟面试的设定词</h3>
              <p>“现在我们开始模拟面试。你扮演面试官，我扮演候选人。请你每次只问一个问题。收到我的回答后，你需要做两件事：<br/>
              1. 针对我的回答，提出一个犀利的追问（深挖细节或挑战我的逻辑）。<br/>
              2. 在提出下一个问题之前，简单点评我上一个回答的优缺点（是否清晰、是否有说服力）。<br/>
              我们开始吧，请直接提出第一个问题。”</p>

              <p>在这个过程中，你可以故意给出一些不完美的回答，看看 AI 面试官会如何抓住漏洞，这能极大地锻炼你的临场反应能力。</p>

              <h2 id="optimize-answers">运用 STAR 法则优化回答</h2>
              <p>当你在模拟面试中发现某个回答磕磕巴巴，或者缺乏说服力时，可以让 AI 帮你重新梳理逻辑。业界最推崇的表达结构是 <strong>STAR 法则（Situation 情境, Task 任务, Action 行动, Result 结果）</strong>。</p>

              <p>向 AI 寻求优化的方法：“我刚才关于‘如何处理跨部门冲突’的回答很散乱。这是我的真实经历素材：[用大白话输入你的亲身经历]。请帮我使用 STAR 法则，将这段经历改写成一段结构严谨、重点突出、时长约 2 分钟的面试口语回答。”</p>

              <h2 id="warnings">避坑指南与复盘注意事项</h2>
              <p>在使用 AI 准备面试时，有两个极为致命的误区必须避免：</p>
              
              <div className="bg-red-50 p-5 rounded-xl border border-red-200 my-6">
                <p className="font-bold text-red-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-red-600" /> 严禁让 AI “无中生有”</p>
                <p className="m-0 text-sm text-red-800">
                  AI 是一个极度想“讨好”你的工具。如果你问它“我想显得更有领导力，该怎么编一个故事”，它真的会给你虚构一个完美的经历。<strong>在背景调查和资深面试官的连环追问下，虚构的细节会立刻崩盘。</strong>你只能向 AI 提供真实的原材料，让它做“打磨工”，绝不能让它做“造假者”。
                </p>
              </div>

              <ul>
                <li><strong>拒绝官话套话：</strong> AI 生成的回答如果大量出现“协同增效”、“赋能”等空洞词汇，一定要让它重写：“请用更接地气、偏口语化的人类表达方式重新修改，去掉企业黑话。”</li>
                <li><strong>保持自己的声音：</strong> 将 AI 给出的框架转化为自己的语言，多读几遍，确保这些话从你嘴里说出来是自然且真诚的。</li>
              </ul>

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
                  <Link href="/guides/chatgpt-vs-claude-vs-gemini" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    如何写好 Prompt
                  </Link>
                  <Link href="/guides/ai-meeting-notes" className="block text-gray-600 hover:text-brand-600 transition-colors text-sm py-1">
                    AI 提高办公效率指南
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
