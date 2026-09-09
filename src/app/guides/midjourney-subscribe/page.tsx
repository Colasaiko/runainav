/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Midjourney怎么付费？套餐与订阅购买指南",
  description: "Midjourney 怎么付费？整理 Basic、Standard、Pro、Mega 当前价格、月付与年付区别，以及购买前需要确认的 GPU 用量和方案差异。",
  canonical: "/guides/midjourney-subscribe",
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
                Midjourney 怎么付费？四种订阅方案怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>起步价格</strong>：Basic 方案 $10 / 月（年付折算可享约 20% 优惠）。</li>
            <li><strong>主流选择</strong>：Standard 方案 $30 / 月，因为提供无限时的 Relax GPU 模式。</li>
            <li><strong>购买入口</strong>：现已全面支持在官方 Web 页面直接订阅，无需仅依赖 Discord。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前四种套餐差异</h2>
          <p className="text-gray-700 mb-4">根据官方最新 Docs（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Basic ($10/月)</strong>：每月提供约 3.3 小时 Fast GPU 时间。用完无法继续生成。</li>
            <li><strong>Standard ($30/月)</strong>：每月 15 小时 Fast GPU，且拥有 <strong>无限的 Relax（慢速）GPU</strong> 生成权限。</li>
            <li><strong>Pro ($60/月)</strong>：每月 30 小时 Fast GPU，拥有 Stealth Mode（隐身模式，他人无法看到你的图）。</li>
            <li><strong>Mega ($120/月)</strong>：每月 60 小时 Fast GPU，适合工作室和极端高频创作者。</li>
          </ul>
          <p className="text-sm text-gray-500 italic">(注：如果你选择年付，每月折算价格会更低)</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">如何选择套餐？</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 border border-gray-200">你的需求</th>
                  <th className="p-3 border border-gray-200">推荐方案</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">仅偶尔生成几张图，尝鲜</td>
                  <td className="p-3 border border-gray-200">Basic ($10)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">重度画图，需要不断垫图微调</td>
                  <td className="p-3 border border-gray-200">Standard ($30)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">商业机密，不允许作品公开</td>
                  <td className="p-3 border border-gray-200">Pro ($60)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <p className="text-gray-700 mb-4">随着 Midjourney Web 端的开放，购买流程比以前简单：</p>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>访问官方网页：<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://www.midjourney.com/</a> 并登录账号。</li>
            <li>在侧边栏或账户设置中找到 &quot;Manage Subscriptions&quot;。</li>
            <li>选择月付 (Monthly) 或年付 (Yearly)，选择对应方案。</li>
            <li>填写国际信用卡信息完成 Stripe 支付。</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Fast 和 Relax GPU 有什么区别？</h3>
              <p className="text-gray-700">Fast 模式下出图极快，但有时间额度限制。Relax 模式下你需要排队等待，出图较慢，但对于 Standard 及以上套餐是无限免费使用的。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">怎么取消续费？</h3>
              <p className="text-gray-700">进入 &quot;Manage Subscriptions&quot; 页面，点击你的当前计划旁的取消按钮。取消后，你依然可以使用到当前计费周期结束。</p>
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
              <Link href="/guides/midjourney" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Midjourney 完整使用指南
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