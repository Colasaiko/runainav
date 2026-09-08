import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "ChatGPT Plus国内怎么购买？订阅与付款指南",
  description: "ChatGPT Plus 国内怎么购买？整理官方订阅入口、当前价格、Plus 与免费版差异，以及付款前需要确认的账号、服务地区和常见开通问题。",
  canonical: "/guides/chatgpt-plus-buy",
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
                ChatGPT Plus 国内怎么购买？订阅前先看这些
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>当前价格</strong>：$20 / 月（未含可能产生的地方税费）</li>
            <li><strong>主要优势</strong>：拥有更高的消息额度，可以使用更高级的模型（如 GPT-4o），支持语音对话与自定义 GPTs。</li>
            <li><strong>付款方式</strong>：官方通常只接受国际信用卡（如 Visa/Mastercard 等）或通过 Apple/Google 应用商店内购。国内双币信用卡成功率极低，具体可用付款方式以结账页面为准。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前套餐结构</h2>
          <p className="text-gray-700 mb-4">目前 OpenAI 官方提供的主要个人方案（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Free 免费版</strong>：支持有限次数的基础对话与 GPT-4o 模型。</li>
            <li><strong>Plus 版（$20/月）</strong>：适合重度用户。拥有更高消息额度、完整高级模型权限及提前体验新功能。</li>
            <li><strong>Team 版（$25/月/人起）</strong>：适合小团队共享，数据默认不用于模型训练。</li>
          </ul>
          <p className="text-sm text-gray-500 italic">注：ChatGPT Plus 订阅不等于 OpenAI API 额度（Credits），两者是独立的计费系统。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">免费版 vs Plus 版核心差异</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-200">功能</th>
                  <th className="p-3 border border-gray-200">免费版</th>
                  <th className="p-3 border border-gray-200">Plus 方案</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">模型额度</td>
                  <td className="p-3 border border-gray-200">GPT-4o/GPT-4o mini 基础额度</td>
                  <td className="p-3 border border-gray-200">至少 5 倍基础额度</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">响应速度</td>
                  <td className="p-3 border border-gray-200">高峰期可能变慢</td>
                  <td className="p-3 border border-gray-200">高优先级别</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">自定义 GPTs</td>
                  <td className="p-3 border border-gray-200">仅可使用</td>
                  <td className="p-3 border border-gray-200">可创建并发布</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">数据分析与绘图</td>
                  <td className="p-3 border border-gray-200">基础权限</td>
                  <td className="p-3 border border-gray-200">完整权限</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <p className="text-gray-700 mb-4">目前主要有两种升级 Plus 的官方途径：</p>
          
          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">方法 1：通过 Web 端升级</h3>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>访问官方入口并登录账号：<a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://chatgpt.com/</a></li>
            <li>在界面左下角或设置中点击 &quot;Upgrade Plan&quot;。</li>
            <li>选择 &quot;Plus&quot; 方案。</li>
            <li>进入 Stripe 结账页面，输入有效的国际信用卡信息进行付款。</li>
          </ol>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">方法 2：通过 iOS/Android App 升级</h3>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>在美区 App Store 或 Google Play 商店下载官方 ChatGPT App。</li>
            <li>登录账号后，在 App 设置中选择升级 Plus。</li>
            <li>通过 Apple Pay 或 Google Play 内购完成付款。</li>
          </ol>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
            <p className="text-orange-800 font-medium">请注意账号注册地区与付款地区的一致性问题。不要轻易购买来源不明的黑卡或代充服务，这可能导致账号被永久封禁。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">ChatGPT Plus 如何取消自动续费？</h3>
              <p className="text-gray-700">请在 Web 端左下角点击头像，进入 &quot;My Plan&quot;，选择 &quot;Manage my subscription&quot;，然后点击取消方案。如果在手机应用商店购买，则需要去对应的 Apple ID 或 Google Play 订阅管理中取消。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">为什么提示我的银行卡被拒绝？</h3>
              <p className="text-gray-700">通常是因为国内发行的信用卡不在 Stripe 的支持范围内，或者你的付款 IP 存在风险。建议尝试绑定 Apple Pay 购买，或使用海外发行的正规银行卡。</p>
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
              <Link href="/guides/chatgpt" className="text-sm font-medium text-brand-600 hover:underline">
                查看 ChatGPT 完整使用指南
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