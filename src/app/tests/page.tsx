import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import JsonLd, { generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { aiTests, TestStatus } from "@/data/aiTests";
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

const getStatusText = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <span className="text-emerald-700 font-medium">正常</span>;
    case 'partial': return <span className="text-amber-700 font-medium">部分正常</span>;
    case 'fail': return <span className="text-red-700 font-medium">异常</span>;
    case 'pending': return <span className="text-gray-500">待测试</span>;
    default: return <span className="text-gray-400">未测试</span>;
  }
};

export default function AITestsHub() {
  const breadcrumbItems = [
    { name: '首页', item: 'https://runainav.com/' },
    { name: '海外AI国内使用实测', item: 'https://runainav.com/tests' }
  ];

  const testedTools = aiTests.filter(t => t.open !== 'pending' && t.open !== 'not-tested');
  const pendingTools = aiTests.filter(t => t.open === 'pending' || t.open === 'not-tested');

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-sans)] bg-gray-50">
      <JsonLd data={[
        generateBreadcrumbSchema(breadcrumbItems)
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

          {/* Hero Section */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6 border border-brand-100">
              <ShieldCheck className="w-4 h-4" />
              RunAI 实际测试
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">海外 AI 国内使用实测</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              RunAI 记录海外 AI 在实际网络环境下的打开、登录与基础使用情况，并标注测试日期和测试网络。以下结果来自已记录的真实观察，只代表对应测试日期与当次网络环境，不代表所有地区、账号和未来状态始终一致。
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              最后更新时间：2026-09-10
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-200 overflow-hidden mb-12 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500">
                  <th className="py-4 px-6 font-medium">AI 工具</th>
                  <th className="py-4 px-6 font-medium">打开网页/应用</th>
                  <th className="py-4 px-6 font-medium">账号登录</th>
                  <th className="py-4 px-6 font-medium">基础使用</th>
                  <th className="py-4 px-6 font-medium">测试日期</th>
                  <th className="py-4 px-6 font-medium">测试网络</th>
                  <th className="py-4 px-6 font-medium text-right">详细结果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {testedTools.map(tool => (
                  <tr key={tool.slug} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-semibold text-gray-900">{tool.toolName}</td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(tool.open)}
                        {getStatusText(tool.open)}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(tool.login)}
                        {getStatusText(tool.login)}
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(tool.use)}
                        {getStatusText(tool.use)}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-600">{tool.testedAt}</td>
                    <td className="py-5 px-6 text-sm">
                      {tool.networkDetailPath ? (
                        <Link href={tool.networkDetailPath} target="_blank" className="text-brand-600 hover:underline">
                          {tool.networkName}
                        </Link>
                      ) : (
                        <span className="text-gray-600">{tool.networkName}</span>
                      )}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link href={`/tests/${tool.slug}`} className="text-sm font-medium text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-4 py-2 rounded-lg transition-colors">
                        查看实测
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid gap-4 mb-12">
            {testedTools.map(tool => (
              <div key={tool.slug} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <h3 className="font-bold text-lg text-gray-900">{tool.toolName}</h3>
                  <span className="text-xs text-gray-500">{tool.testedAt}</span>
                </div>
                
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">打开网页/应用</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(tool.open)}{getStatusText(tool.open)}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">账号登录</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(tool.login)}{getStatusText(tool.login)}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">基础使用</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(tool.use)}{getStatusText(tool.use)}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">测试网络</span>
                    {tool.networkDetailPath ? (
                      <Link href={tool.networkDetailPath} target="_blank" className="text-brand-600 hover:underline">
                        {tool.networkName}
                      </Link>
                    ) : (
                      <span className="text-gray-600">{tool.networkName}</span>
                    )}
                  </div>
                </div>

                <Link href={`/tests/${tool.slug}`} className="block w-full text-center text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 py-2.5 rounded-lg transition-colors">
                  查看详细实测
                </Link>
              </div>
            ))}
          </div>

          {/* Pending Tools */}
          {pendingTools.length > 0 && (
            <div className="mb-16">
              <h2 className="text-xl font-bold text-gray-900 mb-6">即将测试 (Pending)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pendingTools.map(tool => (
                  <div key={tool.slug} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between">
                    <span className="font-medium text-gray-700">{tool.toolName}</span>
                    <div className="flex items-center gap-1.5 text-sm">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500">待测试</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to read */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-600" />
              如何看懂测试结果
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">【打开正常】</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  代表：当次测试可以正常加载官方服务网页或应用入口。<br/>
                  不代表：官方未做地区限制，或所有深层功能均能加载。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">【登录正常】</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  代表：当次测试可以顺利完成已有测试账号的登录流程。<br/>
                  不代表：任何地区都可以顺利注册新账号，或无账号风控机制。
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">【基础使用正常】</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  代表：当次实际完成了记录中的基础文本对话/辅助功能测试。<br/>
                  不代表：付费订阅、大文件解析、高级语音、API 调用等全量功能全部通过。
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-sm font-bold text-gray-900 mb-2">免责声明</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                测试结果仅代表 RunAI 在对应日期与当次网络环境中的实际观察。海外 AI 服务的可用情况可能受到官方服务地区、账号状态、产品权限、功能更新和网络连接变化影响，因此结果不应理解为永久保证。遇到连接问题，请先排查是否为官方宕机或当前线路质量波动。
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-sm font-bold text-blue-900 mb-2">商业关系与数据说明</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                说明：本批部分 AI 测试使用微风网络完成。RunAI 与微风网络存在商业关联，因此相关页面包含推广入口；测试表中的状态仅记录当次实际观察，我们不会因为商业关系把未测试项目标记为通过，或虚构未发生过的深度测试。
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
