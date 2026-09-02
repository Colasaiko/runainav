import Link from "next/link";
import { Hammer } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 mt-12 md:mt-20">
      <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
        <Hammer className="w-8 h-8" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">页面正在更新中</h1>
      <p className="text-gray-500 max-w-md mx-auto mb-10 text-lg leading-relaxed">
        这个内容还在完善，我们会陆续上线更多 AI 工具、教程与使用指南。
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          href="/"
          className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
        >
          返回首页
        </Link>
        <Link 
          href="/vpn"
          className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          查看 VPN
        </Link>
      </div>
    </div>
  );
}
