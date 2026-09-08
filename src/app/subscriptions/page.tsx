import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import JsonLd, { generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: '海外AI订阅购买指南：价格与付款怎么选｜RunAI',
  description: '汇总 ChatGPT、Claude、Gemini 等海外 AI 的订阅方案、价格与付款方式，帮助国内用户在购买会员前看清方案差异、账号要求和服务地区。',
  canonical: '/subscriptions',
});

const subscriptions = [
  {
    name: "ChatGPT",
    plan: "Plus 方案",
    price: "$20/月",
    target: "需要 GPT-4o 高级模型、语音对话与自定义 GPTs 的重度用户",
    buyHref: "/guides/chatgpt-plus-buy",
    useHref: "/guides/chatgpt",
  },
  {
    name: "Claude",
    plan: "Pro 方案",
    price: "$20/月",
    target: "需要超长上下文、擅长编程与长文写作处理的高级用户",
    buyHref: "/guides/claude-pro-subscribe",
    useHref: "/guides/claude",
  },
  {
    name: "Gemini",
    plan: "Google AI Pro",
    price: "$19.99/月",
    target: "依赖 Google 生态、需要 1.5 Pro 模型与 2TB 云端硬盘的用户",
    buyHref: "/guides/gemini-subscribe",
    useHref: "/guides/gemini",
  },
  {
    name: "Cursor",
    plan: "Pro 方案",
    price: "$20/月",
    target: "频繁使用 AI 辅助编程，需要稳定快速补全与高级请求额度的开发者",
    buyHref: "/guides/cursor-pro-buy",
    useHref: "/guides/cursor",
  },
  {
    name: "Midjourney",
    plan: "Standard 方案",
    price: "$30/月",
    target: "需要无限 Relax GPU 时长生成高质量图像的设计师与创作者",
    buyHref: "/guides/midjourney-subscribe",
    useHref: "/guides/midjourney",
  },
  {
    name: "Runway",
    plan: "Standard 方案",
    price: "$12/月",
    target: "需要去除视频水印并增加每月积分生成高质量 AI 视频的创作者",
    buyHref: "/guides/runway-subscribe",
    useHref: "/guides/runway",
  },
  {
    name: "Suno",
    plan: "Pro 方案",
    price: "$8/月",
    target: "需要每日 500 积分生成高质量音频，并获取完整商业授权的音乐创作者",
    buyHref: "/guides/suno-subscribe",
    useHref: "/guides/suno",
  },
  {
    name: "Perplexity",
    plan: "Pro 方案",
    price: "$20/月",
    target: "需要深度 AI 搜索、文件分析并自由切换顶尖模型（如 GPT-4o, Claude 3.5 Sonnet）的研究者",
    buyHref: "/guides/perplexity-pro-subscribe",
    useHref: "/guides/perplexity",
  }
];

export default function SubscriptionsHub() {
  const breadcrumbItems = [
    { name: '首页', item: 'https://runainav.com/' },
    { name: 'AI 订阅购买指南', item: 'https://runainav.com/subscriptions' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)] bg-gray-50">
      <JsonLd data={[
        generateBreadcrumbSchema(breadcrumbItems)
      ]} />
      <Header />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100 pt-16 pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
              海外 AI 订阅购买指南
            </h1>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              想升级 ChatGPT、Claude、Cursor 等海外 AI，但不知道价格、方案或怎么买？RunAI 整理当前官方订阅信息，帮助你先弄清方案差异、账号条件与付款入口。
            </p>
          </div>
        </section>

        {/* 30 Seconds Read */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-brand-900 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-brand-600" />
                购买前必看 Checklist
              </h2>
              <ul className="space-y-3 text-brand-800">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-brand-500" />
                  <span><strong>账号要求：</strong> 确保你已拥有稳定的官方账号，并且账号所属区域在官方服务支持列表内。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-brand-500" />
                  <span><strong>付款方式：</strong> 大部分服务不支持国内发行的双币信用卡，通常需要国际信用卡（如 Visa/Mastercard）或特定的第三方支付方式。实际以结账页面为准。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 text-brand-500" />
                  <span><strong>网络环境：</strong> 成功购买会员并不意味着国内可以直接直连使用。你仍需解决网络连接问题。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">热门 AI 工具订阅方案速览</h2>
            <p className="text-gray-500 mb-8 text-sm">价格核对：2026-09-08。具体税费与最终价格以官方结账页面为准。</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {subscriptions.map((sub, idx) => (
                <div key={idx} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col h-full bg-gray-50/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{sub.name}</h3>
                    <div className="text-right">
                      <div className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full inline-block mb-1">{sub.plan}</div>
                      <div className="text-gray-900 font-bold">{sub.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{sub.target}</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                    <Link href={sub.buyHref} className="flex-1 flex items-center justify-center py-2.5 px-4 bg-gray-900 text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                      查看购买指南
                    </Link>
                    <Link href={sub.useHref} className="flex-1 flex items-center justify-center py-2.5 px-4 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors">
                      查看使用指南
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network & Disclaimer CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <ShieldCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">网络连接异常？</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              成功购买 AI 订阅后，如果出现“无法加载页面”、“不支持您所在地区”或连接速度慢的问题，可以先排查网络环境。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/guides/ai-network" className="inline-flex justify-center items-center px-6 py-3 bg-white border border-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                AI 网络排查指南
              </Link>
              <Link href="/vpn" className="inline-flex justify-center items-center px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors">
                查看可用网络方案 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
