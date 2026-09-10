import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import JsonLd, { generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { aiTests, TestStatus } from "@/data/aiTests";
import { networkAITests } from "@/data/networkAITests";
import { CheckCircle2, AlertTriangle, XCircle, Clock, Info, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "海外AI国内使用实测：ChatGPT等工具测试｜RunAI",
  description: "RunAI 整理主流海外 AI 的国内使用实测，记录网页打开、账号登录、基础功能、测试网络与日期，并明确区分已测试、待测试及仅代表当次环境的结果。",
  canonical: "/tests",
});

const getStatusIcon = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
    case 'partial': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
    case 'fail': return <XCircle className="w-5 h-5 text-red-500" />;
    case 'pending': return <Clock className="w-5 h-5 text-gray-400" />;
    default: return <Clock className="w-5 h-5 text-gray-300" />;
  }
};

const getStatusBadge = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> 正常</span>;
    case 'partial': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700"><AlertTriangle className="w-3.5 h-3.5" /> 部分正常</span>;
    case 'fail': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700"><XCircle className="w-3.5 h-3.5" /> 异常</span>;
    case 'pending': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"><Clock className="w-3.5 h-3.5" /> 待测试</span>;
    default: return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">未测试</span>;
  }
};

export default function AITestsHub() {
  const breadcrumbItems = [
    { name: '首页', item: 'https://runainav.com/' },
    { name: '海外AI国内使用实测', item: 'https://runainav.com/tests' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)] bg-gray-50">
      <JsonLd data={[
        generateBreadcrumbSchema(breadcrumbItems),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "海外AI国内使用实测",
          "description": "RunAI 整理主流海外 AI 的国内使用实测，记录网页打开、账号登录、基础功能、测试网络与日期。",
          "url": "https://runainav.com/tests"
        }
      ]} />
      <Header />

      <main className="flex-grow pb-24 pt-32">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-gray-900 transition-colors">首页</Link>
            <span>/</span>
            <span className="text-gray-900">AI 实测中心</span>
          </div>

          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">海外 AI 国内使用实测</h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              这里汇总了 RunAI 针对主流海外 AI 工具的连通性测试记录。我们不盲目承诺“100% 完美解锁”，而是呈现基于真实网络环境下的打开、登录与基础使用状态。
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden mb-12">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="py-4 px-6 text-sm font-semibold text-gray-900">AI 工具</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-900">已测试网络数量</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-900">最新测试日期</th>
                    <th className="py-4 px-6 text-sm font-semibold text-gray-900 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {aiTests.map((tool) => {
                    const testRuns = networkAITests.filter(t => t.toolSlug === tool.slug).sort((a, b) => new Date(b.testedAt).getTime() - new Date(a.testedAt).getTime());
                    const latestRun = testRuns[0];

                    return (
                      <tr key={tool.slug} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <Link href={`/tests/${tool.slug}`} className="font-bold text-gray-900 hover:text-brand-600 transition-colors">
                            {tool.toolName}
                          </Link>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-600">
                          {testRuns.length > 0 ? `${testRuns.length} 个网络环境` : '暂无'}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 font-medium">
                          {latestRun ? latestRun.testedAt : '-'}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <Link 
                            href={`/tests/${tool.slug}`}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors"
                          >
                            查看详情
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden grid gap-4 p-4">
              {aiTests.map((tool) => {
                const testRuns = networkAITests.filter(t => t.toolSlug === tool.slug).sort((a, b) => new Date(b.testedAt).getTime() - new Date(a.testedAt).getTime());
                const latestRun = testRuns[0];
                
                return (
                  <div key={tool.slug} className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 text-lg">{tool.toolName}</h3>
                      {latestRun && (
                        <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                          最新: {latestRun.testedAt}
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      已测试记录: {testRuns.length > 0 ? `${testRuns.length} 个网络环境` : '暂无'}
                    </div>
                    <Link 
                      href={`/tests/${tool.slug}`}
                      className="block w-full text-center px-4 py-2.5 text-sm font-medium text-brand-600 bg-brand-100/50 hover:bg-brand-100 rounded-xl transition-colors"
                    >
                      查看测试详情
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                为什么要做实测？
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                很多 AI 工具在注册和使用中存在极高的环境要求（如原生 IP、无头浏览器检测等）。单纯提供工具入口已经不够，我们需要帮助国内用户在使用前，明确某个网络环境下，工具是否能真正被打开和使用，减少试错成本。
              </p>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-brand-600" />
                客观性与免责声明
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                测试结果仅代表 RunAI 在标注日期及对应网络环境下的客观观察。海外服务的地区策略可能随时调整。同时，测试网络品牌可能与 RunAI 存在商业推广关联，但这不会改变我们针对基础连通性给出的真实“通过”或“未测试”记录。
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
