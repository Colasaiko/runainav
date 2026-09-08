import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Cursor Pro怎么购买？价格、额度与订阅指南",
  description: "Cursor Pro 怎么购买？整理当前个人付费方案、价格、Agent 使用额度、订阅入口与付款事项，并比较 Pro、Pro+、Ultra 的适合人群。",
  canonical: "/guides/cursor-pro-buy",
});

export default function Page() {
  const sections = [
    { id: "overview", navLabel: "速读" },
    { id: "plans", navLabel: "方案" },
    { id: "buy", navLabel: "购买" },
    { id: "faq", navLabel: "FAQ" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <ArticleStickyBar sections={sections} />
      <main className="flex-grow pb-24">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200 pt-32 pb-4">
          <div className="container mx-auto px-4 max-w-4xl text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/subscriptions" className="hover:text-gray-900 transition-colors">AI 订阅指南</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">当前</span>
          </div>
        </div>

        <article className="bg-white border-b border-gray-200 pb-16">
          <div className="container mx-auto px-4 max-w-3xl pt-12">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-brand-50 text-brand-600 font-medium text-xs rounded-full border border-brand-100 mb-4">AI 订阅</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                Cursor Pro 怎么购买？Pro、Pro+ 和 Ultra 怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>基础 Pro 价格</strong>：$20 / 月。</li>
            <li><strong>主要优势</strong>：每月拥有固定次数的快速优质模型请求（如 GPT-4o, Claude 3.5 Sonnet），以及更快的代码补全和 Cursor Agent 额度。</li>
            <li><strong>订阅方式</strong>：官方网站通过 Stripe 支付。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">当前个人付费方案与额度</h2>
          <p className="text-gray-700 mb-4">根据 Cursor 官方 Pricing（2026-09-08核对），主要开发者方案如下：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Hobby（免费版）</strong>：提供两周的 Pro 试用，试用结束后基础模型较慢，高级请求有严格限制。</li>
            <li><strong>Pro（$20/月）</strong>：每月 500 次 Fast 高级模型请求，无限次慢速请求，提供 Cursor Agent 基础使用额度。</li>
            <li><strong>Pro+ / Ultra（更高阶选项）</strong>：如果有非常庞大的 codebase 或极高频率的 Agent 自动化请求，可选择更高额度。（具体动态额度以官网 Dashboard 为准）。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">开发者怎么选？</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-200">方案</th>
                  <th className="p-3 border border-gray-200">适合人群</th>
                  <th className="p-3 border border-gray-200">请求特性</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200"><strong>Pro</strong></td>
                  <td className="p-3 border border-gray-200">个人全职开发者、独立创作者</td>
                  <td className="p-3 border border-gray-200">500 次/月足够应付多数日常开发</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200"><strong>Pro+ / Ultra</strong></td>
                  <td className="p-3 border border-gray-200">重度重构者、重度依赖 Agent 自动写码</td>
                  <td className="p-3 border border-gray-200">翻倍的高级请求与 Agent 额度</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">注意：Agent request 不是永久固定的次数，官方可能会根据服务器压力动态调整使用策略。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>打开官网登录：<a href="https://www.cursor.com/pricing" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://www.cursor.com/pricing</a></li>
            <li>点击 &quot;Upgrade to Pro&quot;。</li>
            <li>填写国际信用卡信息完成结账。</li>
            <li>在 Cursor 编辑器中登录该账号，即可自动同步 Pro 状态。</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">500次 Fast 用完了还能用吗？</h3>
              <p className="text-gray-700">用完后会降级为 Slow 队列。虽然你仍可以使用 GPT-4o 或 Claude 3.5，但响应速度可能会在高峰期明显变慢。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">我可以绑定自己的 API Key 吗？</h3>
              <p className="text-gray-700">可以。如果你有 OpenAI 或 Anthropic 的 API，可以在设置中开启 API Key 模式（按 Token 扣费），这样就无需购买 $20/月的 Pro 订阅。但某些专属的 Cursor Agent 功能仍可能依赖官方 Pro 会员。</p>
            </div>
          </div>
        </section>

            </div>

            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <ShieldAlert className="w-8 h-8 mx-auto text-gray-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">网络连接异常？</h3>
              <p className="text-gray-600 mb-6 text-sm">购买会员后无法正常加载？可能是网络环境问题。</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/guides/ai-network" className="inline-flex justify-center items-center px-5 py-2.5 bg-white border border-gray-200 text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors text-sm">
                  排查网络问题
                </Link>
                <Link href="/vpn" className="inline-flex justify-center items-center px-5 py-2.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors text-sm">
                  查看网络方案 <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/guides/cursor" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Cursor 完整使用指南
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FloatingBackButton fallbackHref="/subscriptions" />
      <Footer />
    </div>
  );
}