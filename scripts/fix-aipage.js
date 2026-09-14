const fs = require('fs');
let c = fs.readFileSync('src/app/ai/page.tsx', 'utf8');

c = c.replace(/import AIList from '\.\/AIList';/, "import AIList from './AIList';\nimport { aiComparisons } from '@/data/aiComparisons';");

const jsx = `
        <div className="mb-10 mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900">热门 AI 对比</h2>
              <Link href="/compare" className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center">查看更多对比</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {aiComparisons.slice(0, 4).map(comp => (
                <Link
                  key={comp.slug}
                  href={\`/compare/\${comp.slug}\`}
                  className="bg-brand-50 p-5 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-brand-600 font-bold">⚔️</span>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1">{comp.title.split('？')[0] + '？'}</h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{comp.quickVerdict}</p>
                </Link>
              ))}
            </div>
          </div>
        <AIList />
`;

c = c.replace("<AIList />", jsx);

fs.writeFileSync('src/app/ai/page.tsx', c);
