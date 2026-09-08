import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Perplexity Pro怎么订阅？价格与付款指南",
  description: "Perplexity Pro 怎么订阅？整理 Free、Pro、Max 当前方案、价格、研究与模型使用差异、订阅入口，并说明不同搜索需求适合哪一档。",
  canonical: "/guides/perplexity-pro-subscribe",
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
                Perplexity Pro 怎么订阅？Pro 和 Max 有什么区别？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>当前价格</strong>：Pro 方案 $20 / 月。</li>
            <li><strong>核心优势</strong>：解锁无限的 Pro Search（深度搜索），每天超过 600 次的顶级模型调用（包括 GPT-4o, Claude 3.5, Sonar Large 等），以及文件上传分析能力。</li>
            <li><strong>多平台支持</strong>：购买一次后，Web 端、iOS 和 Android App 均可跨设备使用。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前个人方案</h2>
          <p className="text-gray-700 mb-4">Perplexity 的层级结构相对简单（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Free 免费版</strong>：基础搜索引擎，限制极为有限的 Pro Search 试用次数。</li>
            <li><strong>Pro 版（$20/月或$200/年）</strong>：解锁全网所有顶尖 AI 模型进行回答，适合学术研究者、程序员与高频知识获取者。</li>
          </ul>
          <p className="text-sm text-gray-500 italic">(注：如果有特定的 Max 等更高级企业或开发者方案，通常不适用于普通个人消费者，购买时选择 Pro 即可)</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Pro 版值得买吗？（适合哪类需求）</h2>
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
                  <td className="p-3 border border-gray-200">日常查百科、搜菜谱、看新闻</td>
                  <td className="p-3 border border-gray-200">免费版足够</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">需要看长篇财报、写论文文献综述</td>
                  <td className="p-3 border border-gray-200"><strong>必须 Pro 版</strong></td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">同时想用 GPT-4o 和 Claude 3.5，不想买两份会员</td>
                  <td className="p-3 border border-gray-200"><strong>强烈推荐 Pro 版</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>登录 Web 官网：<a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://www.perplexity.ai/</a></li>
            <li>在左下角点击 &quot;Perplexity Pro&quot;。</li>
            <li>选择按月还是按年付费。</li>
            <li>使用国际信用卡完成付款。</li>
          </ol>
          <p className="text-gray-700 mt-4 italic">如果你在手机 App 上购买，会通过 Apple App Store 或 Google Play 扣费，价格可能受当地税率影响略有不同。建议 Web 端统一购买。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">手机和电脑需要买两次吗？</h3>
              <p className="text-gray-700">不需要，只要登录同一个账号（比如同一个 Google 账号登录），Pro 权限是互通的。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">可以调用 API 吗？</h3>
              <p className="text-gray-700">Perplexity 提供 API，但 API 计费与 Pro 会员订阅是分开的。部分 Pro 会员可能在特殊活动期间获赠少量 API 额度，但两者本质不同。</p>
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
              <Link href="/guides/perplexity" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Perplexity 完整使用指南
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