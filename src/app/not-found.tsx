import Link from "next/link";
import { Hammer } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 mt-20">
      <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6">
        <Hammer className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">页面即将上线</h1>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        RunAI 正在努力建设中！您访问的功能或内容即将推出，敬请期待。
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
