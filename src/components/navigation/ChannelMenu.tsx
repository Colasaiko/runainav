import Link from 'next/link';
import { Compass } from 'lucide-react';

export default function ChannelMenu({ activePath }: { activePath: string }) {
  const channels = [
    { name: 'AI工具', path: '/ai' },
    { name: 'AI指南', path: '/guides' },
    { name: '网络品牌', path: '/vpn' },
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-1.5 text-gray-500 font-medium text-sm shrink-0">
          <Compass className="w-4 h-4" />
          <span>菜单游览</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-gray-200 shrink-0"></div>
        <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {channels.map((ch) => {
            const isActive = activePath === ch.path || activePath.startsWith(ch.path + '/');
            return (
              <Link
                key={ch.path}
                href={ch.path}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors border shadow-sm ${
                  isActive
                    ? 'bg-blue-50 text-brand-600 border-blue-200'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {ch.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
