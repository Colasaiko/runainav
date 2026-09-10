import ArticleStickyBar from '@/components/navigation/ArticleStickyBar';
import FloatingBackButton from '@/components/navigation/FloatingBackButton';
import { Metadata } from 'next';
import Image from 'next/image';
import ZoomableImage from '@/components/ui/ZoomableImage';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ExternalLink, Check, Info, AlertTriangle, Monitor, Smartphone, HelpCircle, Zap, ArrowRight } from 'lucide-react';
import { networkAITests } from '@/data/networkAITests';
import { aiTests } from '@/data/aiTests';
import FloatingBuyButton from '@/components/vpn/FloatingBuyButton';
import JsonLd from '@/components/seo/JsonLd';
import { vpnBrands } from '@/data/vpnBrands';

const feimaoData = vpnBrands.find(b => b.id === 'feimao');
const AFFILIATE_URL = feimaoData?.url || "https://dfg12cd.feimaogfttt1.sbs/#/?code=UUcH5yh9";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: '飞猫云怎么样？套餐价格、线路与AI使用体验｜RunAI',
  description: '飞猫云怎么样？RunAI 整理套餐价格、流量档位、网络线路、设备支持与 AI 使用记录，并区分公开资料和实际测试结果，帮助国内用户在购买前看清方案差异。',
  canonical: '/vpn/feimao',
});

export default function FeimaoReviewPage() {
  const plans = [
    { name: "飞猫·学生版", data: "50GB/月", price: "¥84/年 (折算约 ¥7/月)", desc: "入门年付套餐" },
    { name: "飞猫·星耀版", data: "150GB/月", price: "¥25/月", desc: "起步月付套餐，适合轻度浏览" },
    { name: "飞猫·星环版", data: "300GB/月", price: "¥45/月", desc: "中度使用与视频播放" },
    { name: "飞猫·银河版", data: "600GB/月", price: "¥85/月", desc: "重度使用与下载" },
    { name: "飞猫·宇宙版", data: "1000GB/月", price: "¥150/月", desc: "极高流量需求" },
    { name: "飞猫·不限时套餐", data: "1000GB", price: "一次性 ¥680", desc: "流量用完前不过期" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-[family-name:var(--font-sans)] selection:bg-brand-100 selection:text-brand-900">
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "飞猫云怎么样？套餐、线路与 AI 使用实测",
          "description": "从套餐价格、流量档位到 RunAI 实际 AI 使用记录，整理飞猫云当前值得购买前确认的信息。",
          "author": {
            "@type": "Organization",
            "name": "RunAI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "RunAI",
          },
          "datePublished": "2026-09-10"
        }
      ]} />
      <Header />
      <ArticleStickyBar sections={[
        { id: "overview", navLabel: "速读" },
        { id: "pricing", navLabel: "套餐价格" },
        { id: "ai-test", navLabel: "AI实测" },
        { id: "network", navLabel: "线路测速" },
        { id: "faq", navLabel: "FAQ" },
      ]} />
      <FloatingBackButton fallbackHref="/vpn" />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 pt-12 pb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent opacity-50 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-white rounded-3xl border-2 border-gray-100 shadow-md p-4 flex items-center justify-center">
                <Image src="/images/vpn/飞猫.png" alt="飞猫云 Logo" width={80} height={80} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">飞猫云怎么样？套餐、线路与 AI 使用实测</h1>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                  从套餐价格、流量档位到 RunAI 实际 AI 使用记录，整理飞猫云当前值得购买前确认的信息。
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm">
                    前往飞猫云购买页面 <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mt-12 space-y-12">
          
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm text-blue-800 leading-relaxed shadow-sm">
            <strong>说明：</strong>RunAI 与飞猫云存在商业关联，本文包含推广链接。套餐信息根据当前公开页面整理，AI 使用情况来自实际测试记录。商业关系不会改变未测试项目的状态，也不会把未验证的宣传描述成 RunAI 实测。
          </div>

          {/* 30秒速读 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="overview">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-brand-500" />
              30秒速读
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">优点</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 提供多档流量选择 (50GB ~ 1000GB)</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 包含按量不限时套餐 (1000GB)</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 存在入门低频使用的年付方案</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 当前 AI 连通性测试均正常</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">注意事项</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 学生版“¥7/月”属于年付折算价</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 真实起步月付为 ¥25</li>
                  <li className="flex items-start gap-2 text-sm text-gray-700"><AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> 尚未有 RunAI 独立速度测试数据发布</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 套餐与价格 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="pricing">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>
            <p className="text-gray-600 mb-6 text-sm">
              以下资料于 <strong className="text-gray-900">2026-09-10</strong> 根据飞猫云当前官方页面核实。定制套餐因无法完全确认未在下表列出。
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-semibold text-gray-900">套餐名称</th>
                    <th className="p-4 font-semibold text-gray-900">流量</th>
                    <th className="p-4 font-semibold text-gray-900">价格</th>
                    <th className="p-4 font-semibold text-gray-900">定位说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {plans.map((p, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">{p.name}</td>
                      <td className="p-4">{p.data}</td>
                      <td className="p-4 text-brand-600 font-medium">{p.price}</td>
                      <td className="p-4 text-gray-500">{p.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* AI 实测 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="ai-test">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">AI 连通性实测</h2>
              <Link href="/tests" className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 bg-brand-50 px-3 py-1.5 rounded-full">
                前往 AI 实测中心 <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              RunAI 记录了在飞猫云网络环境下的 AI 使用体验。请注意，结果仅代表当次观察，不构成永久可用或绝对不封号的承诺。
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-4 font-semibold text-gray-900">AI 工具</th>
                    <th className="p-4 font-semibold text-gray-900">打开网页/应用</th>
                    <th className="p-4 font-semibold text-gray-900">账号登录</th>
                    <th className="p-4 font-semibold text-gray-900">基础使用</th>
                    <th className="p-4 font-semibold text-gray-900">当次测试日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {aiTests.map(baseTool => {
                    const run = networkAITests.find(t => t.networkId === 'feimao' && t.toolSlug === baseTool.slug);
                    return (
                      <tr key={baseTool.slug}>
                        <td className="p-4 font-medium">
                          {run ? (
                            <Link href={`/tests/${baseTool.slug}`} className="text-brand-600 hover:underline">{baseTool.toolName}</Link>
                          ) : (
                            baseTool.toolName
                          )}
                        </td>
                        <td className="p-4">
                          {run && run.open === 'pass' ? '✅ 正常' : (!run ? <span className="text-gray-400">待测试</span> : '❌ 异常')}
                        </td>
                        <td className="p-4">
                          {run && run.login === 'pass' ? '✅ 正常' : (!run ? '-' : '❌ 异常')}
                        </td>
                        <td className="p-4">
                          {run && run.use === 'pass' ? '✅ 正常' : (!run ? '-' : '❌ 异常')}
                        </td>
                        <td className="p-4 text-gray-500">
                          {run ? run.testedAt : '-'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* 节点与速度 */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="network">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">线路说明与测速</h2>
            <div className="prose prose-gray max-w-none text-sm md:text-base leading-relaxed">
              <p>官方页面标称为 IPLC 专线网络。<strong>RunAI 当前尚未发布飞猫云独立速度测试数据</strong>，相关晚高峰稳定性和测速图表待后续补充。我们不对未经验证的公开测速截图进行直接引用。</p>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm scroll-mt-24" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">常见问题 (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  飞猫云最低月付多少钱？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  飞猫云真实的最低月付套餐为「星耀版」，价格为 ¥25/月，包含 150GB 流量。
                </p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  学生版 ¥7 是月付吗？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  不是。学生版需要年付 ¥84，折算下来约 ¥7/月。购买前请确认您是否需要年付。
                </p>
              </div>
              <div className="bg-gray-50 h-px w-full my-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-500" />
                  飞猫云可以用 ChatGPT / Claude 吗？
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  根据 RunAI 在 2026-09-10 的测试，飞猫云可以正常打开并使用 ChatGPT、Claude 等主流 AI 工具。详情可参考上方的测试记录表或前往 <Link href="/tests" className="text-brand-600 hover:underline">实测中心</Link> 查看。
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center bg-brand-50 rounded-2xl p-10 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">准备体验飞猫云？</h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              建议根据您的实际流量需求选择对应的套餐。
            </p>
            <a 
              href={AFFILIATE_URL} 
              target="_blank" 
              rel="noopener noreferrer sponsored" 
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-medium transition-colors shadow-sm text-lg"
            >
              前往飞猫购买页面 <ArrowRight className="w-5 h-5" />
            </a>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingBuyButton brandName="飞猫云" url={AFFILIATE_URL} />
    </div>
  );
}
