import Link from 'next/link';
import { CheckCircle2, AlertTriangle, XCircle, Clock } from 'lucide-react';
import { aiTests } from '@/data/aiTests';
import { networkAITests } from '@/data/networkAITests';
import { TestStatus } from '@/data/aiTests';

const getStatusIcon = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    case 'partial': return <AlertTriangle className="w-4 h-4 text-amber-500" />;
    case 'fail': return <XCircle className="w-4 h-4 text-red-500" />;
    case 'pending': return <Clock className="w-4 h-4 text-gray-400" />;
    default: return <Clock className="w-4 h-4 text-gray-300" />;
  }
};

const getStatusText = (status: TestStatus) => {
  switch (status) {
    case 'pass': return <span className="text-emerald-700">正常</span>;
    case 'partial': return <span className="text-amber-700">部分正常</span>;
    case 'fail': return <span className="text-red-700">异常</span>;
    case 'pending': return <span className="text-gray-500">待测</span>;
    default: return <span className="text-gray-400">未测</span>;
  }
};

export default function AITestsSection() {
  const testedTools = aiTests.slice(0, 5); // first 5

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">海外 AI 国内使用实测</h2>
            <p className="text-gray-600 text-lg">RunAI 持续记录常用海外 AI 的打开、登录与实际使用状态。</p>
          </div>
          <Link href="/tests" className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors bg-brand-50 hover:bg-brand-100 px-5 py-2.5 rounded-full text-sm self-start md:self-auto border border-brand-100">
            查看全部 AI 实测 →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {testedTools.map(tool => {
            const run = networkAITests.find(t => t.toolSlug === tool.slug);
            const open = run ? run.open : 'not-tested';
            const login = run ? run.login : 'not-tested';
            const use = run ? run.use : 'not-tested';
            const date = run ? run.testedAt : '-';
            
            return (
              <Link key={tool.slug} href={`/tests/${tool.slug}`} className="block bg-gray-50 hover:bg-white rounded-2xl border border-gray-200 hover:border-brand-200 hover:shadow-md transition-all p-5 group">
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 mb-4 transition-colors">{tool.toolName}</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">打开</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(open)}{getStatusText(open)}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">登录</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(login)}{getStatusText(login)}</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">使用</span>
                    <div className="flex items-center gap-1.5">{getStatusIcon(use)}{getStatusText(use)}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{date}</span>
                  <span className="text-xs font-medium text-brand-600 group-hover:text-brand-700">查看详情</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
