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
              <li><Link href="/guides/chatgpt" className="hover:text-gray-900">ChatGPT</Link></li>
              <li><Link href="/guides/claude" className="hover:text-gray-900">Claude</Link></li>
              <li><Link href="/guides/gemini" className="hover:text-gray-900">Gemini</Link></li>
              <li><Link href="/ai?category=coding" className="hover:text-gray-900">AI编程</Link></li>
              <li><Link href="/ai?category=image" className="hover:text-gray-900">AI绘画</Link></li>
              <li><Link href="/ai?category=video" className="hover:text-gray-900">AI视频</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">指南</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/guides" className="hover:text-gray-900">AI教程</Link></li>
              <li><Link href="/guides/chatgpt-vs-claude-vs-gemini" className="hover:text-gray-900">AI工具比较</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Network</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/guides/ai-network" className="hover:text-gray-900">网络环境</Link></li>
              <li><Link href="/guides/vpn-slow-speed" className="hover:text-gray-900">网络速度排查</Link></li>
              <li className="pt-2"><Link href="/vpn" className="text-gray-900 font-medium hover:text-brand-600">RunAI VPN</Link></li>
              <li><Link href="/vpn/weifeng" className="hover:text-gray-900">微风网络实测</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400 text-sm">
              © 2026 RunAI
            </p>
            <div className="text-[10px] text-gray-300 flex gap-2 flex-wrap">
              <span>热门检索：</span>
              <span>AI导航网站</span>
              <span>ChatGPT教程</span>
              <span>Claude使用指南</span>
              <span>网络环境配置</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
