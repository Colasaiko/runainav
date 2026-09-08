import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Info, CheckCircle, ShieldAlert } from "lucide-react";
import ArticleStickyBar from "@/components/navigation/ArticleStickyBar";
import FloatingBackButton from "@/components/navigation/FloatingBackButton";

export const metadata = constructMetadata({
  title: "Suno会员怎么购买？价格、额度与商用指南",
  description: "Suno 会员怎么购买？整理 Free、Pro、Premier 当前方案、Credits、下载与商业使用权限，并说明月付、年付和创作者购买前要注意的事项。",
  canonical: "/guides/suno-subscribe",
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
                Suno 会员怎么购买？Pro 和 Premier 怎么选？
              </h1>
              <div className="text-gray-500 text-sm">更新时间：2026-09-08</div>
            </div>

            <div className="prose prose-gray max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-brand-600 hover:prose-a:text-brand-700">

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">30 秒速读</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li><strong>起步价格</strong>：Pro 版 $10/月（按年付折算为 $8/月）。</li>
            <li><strong>核心权益</strong>：获得新生成歌曲的商业授权（Commercial Rights），以及每月数千积分。</li>
            <li><strong>付款方式</strong>：支持主流国际信用卡。</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">官方当前方案与商业授权</h2>
          <p className="text-gray-700 mb-4">Suno 对于版权的界定非常明确（2026-09-08核对）：</p>
          <ul className="space-y-3 text-gray-700 list-decimal pl-5 mb-4">
            <li><strong>Free 免费版</strong>：每天刷新少量积分（通常 50 积分，可生成 10 首歌）。<strong>仅限非商业使用</strong>，版权归 Suno 所有。</li>
            <li><strong>Pro（月付$10/年付$96）</strong>：每月获取 2500 积分。在订阅期间生成的歌曲，<strong>你拥有商业使用权</strong>。</li>
            <li><strong>Premier（月付$30/年付$288）</strong>：每月获取 10000 积分。享受和 Pro 一样的商业授权，适合高频制作人。</li>
          </ul>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg">
            <p className="text-orange-800 font-medium">商业授权规则：你只有在付费订阅期间生成的新歌才具备商业使用权。你在免费阶段生成的旧歌，即使后来购买了会员，也<strong>不会</strong>自动获得商用授权。</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">购买步骤与官方入口</h2>
          <ol className="space-y-2 text-gray-700 list-decimal pl-5">
            <li>登录 Suno 官方平台：<a href="https://suno.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">https://suno.com/</a></li>
            <li>在左侧菜单点击 &quot;Subscribe&quot;。</li>
            <li>选择 Pro 或 Premier，并决定月付 (Monthly) 或年付 (Yearly)。</li>
            <li>在弹出的支付网关输入国际信用卡信息。</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">常见问题 (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">如果我取消订阅，我的商用版权还在吗？</h3>
              <p className="text-gray-700">在付费期间生成的歌曲，其商业使用权永久归你所有；但取消订阅退回免费版后，新生成的歌曲又将恢复为非商业用途。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">可以使用微信支付宝吗？</h3>
              <p className="text-gray-700">目前官方结账系统不支持国内常规快捷支付，需使用国际信用卡（Visa/Mastercard）。</p>
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
              <Link href="/guides/suno" className="text-sm font-medium text-brand-600 hover:underline">
                查看 Suno 完整使用指南
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