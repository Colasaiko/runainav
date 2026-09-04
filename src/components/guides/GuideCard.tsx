import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GuideType } from '@/data/guideArticles';

interface GuideCardProps {
  title: string;
  description: string;
  href: string;
  type: GuideType;
  category: string;
  date: string;
}

export default function GuideCard({ title, description, href, type, category, date }: GuideCardProps) {
  const getBadgeStyles = (t: GuideType) => {
    switch (t) {
      case 'tool':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'tutorial':
        return 'bg-green-50 text-green-600 border-green-100';
      case 'troubleshooting':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getBadgeLabel = (t: GuideType) => {
    switch (t) {
      case 'tool':
        return 'AI工具指南';
      case 'tutorial':
        return '实战教程';
      case 'troubleshooting':
        return '问题指南';
      default:
        return '指南';
    }
  };

  return (
    <Link 
      href={href}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
    >
      <div className="mb-4 flex items-center">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getBadgeStyles(type)}`}>
          {getBadgeLabel(type)} · {category}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-grow">
        {description}
      </p>
      <div className="flex items-center justify-between text-xs font-medium mt-auto pt-4 border-t border-gray-50">
        <span className="text-gray-400">{date}</span>
        <span className="text-brand-600 flex items-center group-hover:translate-x-1 transition-transform">
          阅读指南 <ArrowRight className="w-3 h-3 ml-1" />
        </span>
      </div>
    </Link>
  );
}
