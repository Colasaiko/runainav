/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Gemini付费版怎么购买？方案与订阅指南",
  description: "Gemini 付费版怎么购买？整理 Google AI 当前个人方案、主要功能差异、订阅入口，以及付款前需要确认的账号地区、功能权限和开通条件。",
  canonical: "/guides/gemini-subscribe",
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
                Gemini 付费版怎么购买？Google AI 方案怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>当前核心方案</strong>：Google One AI Premium（通常包含 Gemini Advanced / Google AI Pro 功能）。</li>
            <li><strong>当前价格</strong>：以美区为例，通常为 $19.99 / 月（首月可能存在官方试用活动）。</li>
            <li><strong>核心优势</strong>：可使用 Gemini 最顶级的模型（如 1.5 Pro），并在 Google Workspace (Docs, Gmail) 中深度整合 AI，同时包含 2TB 云端硬盘。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Google AI 当前个人方案结构</h2>
          <p className="text-gray-700 mb-4">Google 的订阅与其他独立 AI 工具不同，它与 Google One 深度绑定（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>免费版 Gemini</strong>：日常助手，使用基础模型。</li>
            <li><strong>Google One AI Premium（付费版）</strong>：即 Gemini Advanced 体验。包含 2TB 存储空间和更高性能模型访问权限。</li>
          </ul>
          <p className="text-sm text-gray-500 italic">注意：不同国家/地区的方案名称、价格、税费与功能（尤其是语言支持）可能不同，切勿将美国价格直接等同于全球统一价格。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">订阅步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>登录你的 Google 账号并访问：<a href="https://gemini.google.com/advanced" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://gemini.google.com/advanced</a> 或 Google One 官网。</li>
            <li>选择升级至 <strong>AI Premium</strong>。</li>
            <li>根据你 Google Play / Google Pay 绑定的国家，支付对应的当地货币（如美元、欧元、马币等）。</li>
            <li>确认付款。</li>
          </ol>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
            <p className="text-orange-800 font-medium">付款方式取决于你 Google 账号的付款资料（Payment Profile）国家。如果你是美区账号，必须绑定支持美区消费的卡片；如果你是其他区，则需绑定对应的本地卡或国际卡。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">为什么我的 Google One 里没有 AI Premium 选项？</h3>
              <p className="text-gray-700">部分国家和地区尚未开放 Gemini Advanced 的订阅；或者你的账号受到家庭组政策的限制（家庭组管理员必须先升级）。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">买了这个就可以调用 Gemini API 吗？</h3>
              <p className="text-gray-700">不可以。Google Cloud Vertex AI 和 Google AI Studio 的 API 计费是独立的，Google One 订阅仅限网页和移动端 App 使用。</p>
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
              <Link href="/guides/gemini" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Gemini 完整使用指南
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