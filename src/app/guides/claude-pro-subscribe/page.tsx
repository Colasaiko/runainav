import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Claude Pro国内怎么订阅？价格与付款指南",
  description: "Claude Pro 国内怎么订阅？整理官方方案、当前价格、Pro 与免费版差异，以及付款前需要确认的账号、服务地区、功能权限和常见开通问题。",
  canonical: "/guides/claude-pro-subscribe",
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
                Claude Pro 国内怎么订阅？Pro 和 Max 怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>当前价格</strong>：Pro 版通常为 $20 / 月（实际价格可能因地区和税率有所浮动）</li>
            <li><strong>主要优势</strong>：高额度的消息请求，优先使用最新模型（如 Claude 3.5 Sonnet），体验新功能（如 Artifacts 优先权限）。</li>
            <li><strong>地区限制</strong>：Anthropic 对服务地区的管控较严，账号所处的国家/地区会影响你能否成功绑定信用卡。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前个人方案</h2>
          <p className="text-gray-700 mb-4">根据 Anthropic 官方页面（2026-09-08核对），主要面向个人的方案包括：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Free 免费版</strong>：基础模型使用权限，高峰期额度极低。</li>
            <li><strong>Pro 版（$20/月）</strong>：至少5倍免费版额度，高峰期优先访问。</li>
          </ul>
          <p className="text-sm text-gray-500 italic">(注：如果官方推出了更高阶的 Max 方案，以官方结账页面显示的最终定级为准；Team 方案最低要求多用户起步，不适合单人。)</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Pro vs Max 怎么选？（决策参考）</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-200">对比维度</th>
                  <th className="p-3 border border-gray-200">Pro 版</th>
                  <th className="p-3 border border-gray-200">Max 方案 (若存在)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">目标人群</td>
                  <td className="p-3 border border-gray-200">重度编程、长文写作者</td>
                  <td className="p-3 border border-gray-200">极限开发者、API重度测试者</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">上下文长度</td>
                  <td className="p-3 border border-gray-200">完整的长文本额度</td>
                  <td className="p-3 border border-gray-200">更高频的长文本对话</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">模型访问</td>
                  <td className="p-3 border border-gray-200">Claude 3.5 家族等</td>
                  <td className="p-3 border border-gray-200">实验性或更高阶模型</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">建议普通单人用户直接选择 Pro 版本即可满足99%的日常工作需求。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>访问 Anthropic 官方对话入口：<a href="https://claude.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://claude.ai/</a></li>
            <li>点击头像或侧边栏，选择 &quot;Upgrade to Pro&quot;。</li>
            <li>确认你的国家/地区。</li>
            <li>填写国际信用卡完成付款。</li>
          </ol>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
            <p className="text-orange-800 font-medium">如果官方说明不同地区税费/币种不同，你的最终扣款金额可能会超过 $20。请确保存款充足。不支持国内发行的双币卡，以官方页面实际可用付款方式为准。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">为什么充值后很快就被封号？</h3>
              <p className="text-gray-700">Claude 的风控非常严格。如果你使用了公用的代理节点、频繁更换 IP 或者使用了风险较高的虚拟卡，很容易触发封号机制。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">怎么取消续费？</h3>
              <p className="text-gray-700">在 Claude.ai 页面点击 Account Settings -&gt; Billing，进行 Manage 即可取消。</p>
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
              <Link href="/guides/claude" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Claude 完整使用指南
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