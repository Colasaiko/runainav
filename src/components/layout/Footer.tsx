import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="font-bold text-xl tracking-tight text-gray-900 mb-4 block">
              Run<span className="text-brand-600">AI</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              发现 AI · 学会 AI · 连接更多可能
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">AI</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/ai" className="hover:text-gray-900">AI工具大全</Link></li>
              <li><Link href="/ai/chatgpt" className="hover:text-gray-900">ChatGPT</Link></li>
              <li><Link href="/ai/claude" className="hover:text-gray-900">Claude</Link></li>
              <li><Link href="/ai/gemini" className="hover:text-gray-900">Gemini</Link></li>
              <li><Link href="/ai?category=coding" className="hover:text-gray-900">AI编程</Link></li>
              <li><Link href="/ai?category=image" className="hover:text-gray-900">AI绘画</Link></li>
              <li><Link href="/ai?category=video" className="hover:text-gray-900">AI视频</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">指南</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/coming-soon" className="hover:text-gray-900">AI教程</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">AI新手</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">Prompt</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">AI工具比较</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">AI使用技巧</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Network</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/coming-soon" className="hover:text-gray-900">VPN是什么</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">VPN指南</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">网络环境</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">网络安全</Link></li>
              <li className="pt-2"><Link href="/vpn" className="text-gray-900 font-medium hover:text-brand-600">RunAI VPN</Link></li>
              <li><Link href="/vpn" className="hover:text-gray-900">套餐</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">使用教程</Link></li>
              <li><Link href="/coming-soon" className="hover:text-gray-900">常见问题</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 RunAI
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/about" className="hover:text-gray-900">关于 RunAI</Link>
            <Link href="/contact" className="hover:text-gray-900">联系我们</Link>
            <Link href="/privacy" className="hover:text-gray-900">隐私政策</Link>
            <Link href="/terms" className="hover:text-gray-900">服务条款</Link>
            <Link href="/disclaimer" className="hover:text-gray-900">免责声明</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
