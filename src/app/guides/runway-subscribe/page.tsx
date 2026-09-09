/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Runway会员怎么购买？价格与订阅方案指南",
  description: "Runway 会员怎么购买？整理 Free、Standard、Pro、Max 当前方案、Credits 使用方式、订阅入口与价格差异，并说明不同创作需求怎么选。",
  canonical: "/guides/runway-subscribe",
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
                Runway 会员怎么购买？Credits 和套餐怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>核心计费方式</strong>：基于 Credits（积分）。生成不同长度、不同模型的视频消耗不同积分。</li>
            <li><strong>起步价格</strong>：Standard 方案 $15/月（若按年付折算为 $12/月）。</li>
            <li><strong>主要优势</strong>：去除视频水印，获得高清输出选项，并大幅增加每月积分。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前方案与 Credits 成本</h2>
          <p className="text-gray-700 mb-4">Runway 的计费体系对视频生成质量做了严格区分（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Free 免费版</strong>：一次性赠送极少积分，无法生成 Gen-3 Alpha 高质量视频，视频带水印。</li>
            <li><strong>Standard（$15/月，按年付$12/月）</strong>：每月重置固定积分。可生成最高质量无水印视频，最高 4K 分辨率提升。</li>
            <li><strong>Pro（$35/月，按年付$28/月）</strong>：极高积分额度，并解锁更高级的资产存储空间。</li>
            <li><strong>Max（更高价位）</strong>：适合专业影视后期团队的无限流方案或超大额度方案。</li>
          </ul>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
            <p className="text-orange-800 font-medium">必须理解：一个 Credit 不等于一个视频。使用最新一代模型（如 Gen-3）生成 10 秒视频通常会消耗远超旧模型（Gen-2）的积分。购买前请仔细评估自己的视频生成频次。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>登录官方平台：<a href="https://runwayml.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://runwayml.com/</a></li>
            <li>在工作台右上角点击 &quot;Upgrade&quot; 或前往 Billing 页面。</li>
            <li>选择月付或年付（年付通常打 8 折）。</li>
            <li>提交国际信用卡支付。</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">每月的 Credits 没用完会累积吗？</h3>
              <p className="text-gray-700">通常订阅自带的月度基础积分（Base Credits）在月底不清零，但有累积上限；如果你额外购买了 Top-up 积分，则不会过期。具体以官方最新条款为准。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">可以只买一个月吗？</h3>
              <p className="text-gray-700">可以。在升级时明确选择 &quot;Billed Monthly&quot;（月付），付款成功后立即取消自动续费即可。</p>
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
              <Link href="/guides/runway" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Runway 完整使用指南
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