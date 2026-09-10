import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import JsonLd, { generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { aiTests, TestStatus, getAITestBySlug } from "@/data/aiTests";
import { CheckCircle2, AlertTriangle, XCircle, Clock, ExternalLink, ShieldAlert, Wifi, Info } from "lucide-react";
import { aiTools } from "@/data/aiTools";

export function generateStaticParams() {
  return aiTests
    .filter(t => t.open !== 'pending' && t.open !== 'not-tested')
    .map((test) => ({
      slug: test.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const test = getAITestBySlug(params.slug);
  if (!test || test.open === 'pending') return {};

  let title = "";
  let description = "";

  if (test.slug === 'chatgpt') {
    title = "ChatGPT国内能用吗？打开登录与对话实测";
    description = "ChatGPT 国内能用吗？RunAI 记录网页打开、账号登录与基础对话的实际测试结果，并注明测试日期、网络环境和适用范围，方便国内用户判断当前使用情况。";
  } else if (test.slug === 'claude') {
    title = "Claude国内能用吗？网页登录与对话实测";
    description = "Claude 国内能用吗？RunAI 记录网页打开、账号登录和基础对话的实际测试结果，并注明测试日期、网络环境与限制说明，帮助国内用户了解当前使用情况。";
  } else if (test.slug === 'gemini') {
    title = "Gemini国内能用吗？网页登录与使用实测";
    description = "Gemini 国内能用吗？RunAI 记录网页打开、账号登录和基础使用的实际测试结果，并注明测试日期、网络环境和服务地区说明，帮助国内用户了解当前使用情况。";
  } else if (test.slug === 'perplexity') {
    title = "Perplexity国内能用吗？搜索与登录实测";
    description = "Perplexity 国内能用吗？RunAI 记录网页打开、账号登录与基础搜索的实际测试结果，并注明测试日期、网络环境和功能范围，方便国内用户了解当前使用情况。";
  } else if (test.slug === 'cursor') {
    title = "Cursor国内能用吗？编辑器登录与AI功能实测";
    description = "Cursor 国内能用吗？RunAI 记录应用打开、账号登录与基础 AI 功能的实际测试结果，并注明测试日期、网络环境和测试范围，帮助国内用户了解当前使用情况。";
  }

  return constructMetadata({
    title,
    description,
    canonical: `/tests/${test.slug}`,
    type: 'article',
  });
}

const getStatusIcon = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    case 'partial': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
    case 'fail': return <XCircle className="w-5 h-5 text-red-500" />;
    case 'pending': return <Clock className="w-5 h-5 text-gray-400" />;
    default: return <Clock className="w-5 h-5 text-gray-300" />;
  }
};

const getStatusText = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <span className="text-emerald-700 font-medium">正常</span>;
    case 'partial': return <span className="text-amber-700 font-medium">部分正常</span>;
    case 'fail': return <span className="text-red-700 font-medium">异常</span>;
    case 'pending': return <span className="text-gray-500">待测试</span>;
    default: return <span className="text-gray-400">未测试</span>;
  }
};

export default function TestDetail({ params }: { params: { slug: string } }) {
  const test = getAITestBySlug(params.slug);
  const toolData = aiTools.find(t => t.slug === params.slug);

  if (!test || test.open === 'pending') {
    notFound();
  }

  const breadcrumbItems = [
    { name: '首页', item: 'https://runainav.com/' },
    { name: '海外AI国内使用实测', item: 'https://runainav.com/tests' },
    { name: `${test.toolName} 实测`, item: `https://runainav.com/tests/${test.slug}` }
  ];

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)] bg-gray-50">
      <JsonLd data={[
        generateBreadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${test.toolName} 国内能用吗？RunAI 实测记录`,
          "datePublished": test.publishedAt,
          "dateModified": test.updatedAt,
          "author": {
            "@type": "Organization",
            "name": "RunAI"
          }
        }
      ]} />
      <Header />

      <main className="flex-grow pb-24 pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
            <span>/</span>
            <Link href="/tests" className="hover:text-gray-900 transition-colors">AI 实测中心</Link>
            <span>/</span>
            <span className="text-gray-900">{test.toolName} 测试</span>
          </div>

          {/* Hero */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {test.toolName} 国内能用吗？RunAI 实测记录
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              本文记录了 {test.toolName} 在实际网络环境中的打开、登录与使用情况，帮助判断当前的连通性状态。
            </p>

            {/* Matrix */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="text-gray-500 text-sm font-medium mb-3">打开网页/应用</span>
                <div className="flex items-center gap-2 text-lg">
                  {getStatusIcon(test.open)}
                  {getStatusText(test.open)}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="text-gray-500 text-sm font-medium mb-3">账号登录</span>
                <div className="flex items-center gap-2 text-lg">
                  {getStatusIcon(test.login)}
                  {getStatusText(test.login)}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center">
                <span className="text-gray-500 text-sm font-medium mb-3">基础使用</span>
                <div className="flex items-center gap-2 text-lg">
                  {getStatusIcon(test.use)}
                  {getStatusText(test.use)}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 bg-gray-50 px-6 py-4 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>测试日期：<strong className="text-gray-900">{test.testedAt}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-gray-400" />
                <span>测试网络：
                  {test.networkDetailPath ? (
                    <Link href={test.networkDetailPath} target="_blank" className="text-brand-600 hover:underline font-medium">
                      {test.networkName}
                    </Link>
                  ) : (
                    <strong className="text-gray-900">{test.networkName}</strong>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              
              {/* Conclusion */}
              <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">测试结论</h2>
                <p className="text-gray-700 leading-relaxed">
                  {test.summary}
                </p>
                {toolData?.officialUrl && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a 
                      href={toolData.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      前往 {test.toolName} 官方网站 <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </section>

              {/* Untested Items */}
              {test.untestedItems.length > 0 && (
                <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-4">
                    <ShieldAlert className="w-5 h-5 text-gray-400" />
                    哪些功能没有经过测试？
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    为了避免误导，以上“正常”状态仅代表基础连通性。我们在本次记录中<strong>没有</strong>对以下深层功能进行独立测试：
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {test.untestedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Related Guides */}
              <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-4">相关指南</h2>
                <div className="space-y-4">
                  <Link href={`/guides/${test.slug}`} className="block p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                    <div className="font-medium text-gray-900 group-hover:text-brand-700 mb-1">{test.toolName} 国内怎么用？注册与使用教程</div>
                    <div className="text-sm text-gray-500">查看完整的新手入门指南。</div>
                  </Link>
                  
                  {/* Depending on the tool, we can conditionally link subscriptions */}
                  {(test.slug === 'chatgpt' || test.slug === 'claude' || test.slug === 'cursor' || test.slug === 'gemini' || test.slug === 'perplexity') && (
                    <Link href={`/guides/${test.slug}${test.slug === 'chatgpt' || test.slug === 'cursor' ? '-plus-buy' : (test.slug === 'claude' || test.slug === 'perplexity' ? '-pro-subscribe' : '-subscribe')}`} className="block p-4 rounded-xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                      <div className="font-medium text-gray-900 group-hover:text-brand-700 mb-1">{test.toolName} 付费订阅指南</div>
                      <div className="text-sm text-gray-500">了解最新价格、套餐差异与付款方式。</div>
                    </Link>
                  )}
                </div>
              </section>

              {/* Troubleshooting */}
              <section className="bg-gray-900 rounded-2xl p-8 shadow-sm text-white">
                <h2 className="text-xl font-bold mb-4">当前无法使用？</h2>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  如果你发现无法打开或频繁报错，建议先判断是官方服务器宕机、账号限制还是自身网络环境波动。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/guides/ai-outage-or-network" className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm font-medium transition-colors border border-gray-700">
                    如何排查故障原因
                  </Link>
                  <Link href="/guides/ai-network" className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-sm font-medium transition-colors">
                    AI 网络解决方案
                  </Link>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* How to read */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-brand-600" />
                  结果代表什么
                </h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">打开正常：</strong>
                    仅代表官方入口可被加载，不代表官方未做地区限制。
                  </p>
                  <p>
                    <strong className="text-gray-900">登录正常：</strong>
                    仅代表已有账号可登录，不代表当前可顺利注册新账号。
                  </p>
                  <p>
                    <strong className="text-gray-900">基础使用正常：</strong>
                    仅代表基础交互顺利，不代表所有复杂或付费功能均无障碍。
                  </p>
                </div>
              </div>

              {/* Disclaimers */}
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 mb-3">测试免责声明</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">
                  测试结果仅代表 RunAI 在对应日期与当次网络环境中的实际观察。海外 AI 服务的可用情况可能受到官方服务地区、账号状态、产品权限、功能更新和网络连接变化影响，因此结果不应理解为永久保证。
                </p>
                
                <h3 className="text-sm font-bold text-gray-900 mb-3 pt-4 border-t border-gray-200">商业关联说明</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  说明：本记录使用微风网络完成测试。RunAI 与微风网络存在商业关联，下方包含相关链接；表中的状态仅记录当次实际观察，我们不会因为商业关系把未测试项目标记为通过。
                </p>
              </div>

              {/* Network Ad */}
              {test.networkDetailPath && (
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center">
                  <h3 className="font-bold text-gray-900 mb-2">本次测试使用网络</h3>
                  <p className="text-sm text-gray-500 mb-6">{test.networkName}</p>
                  <Link href={test.networkDetailPath} target="_blank" className="inline-block w-full text-center text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 py-2.5 rounded-lg transition-colors border border-brand-100">
                    查看测试网络详情
                  </Link>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
