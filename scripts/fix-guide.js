const fs = require('fs');
let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

c = c.replace("import { aiTools } from '@/data/aiTools';", "import { aiTools } from '@/data/aiTools';\nimport { aiComparisons } from '@/data/aiComparisons';");

const relatedToolsSnippet = `
  const relatedTools = aiTools
    .filter(t => t.slug !== tool.slug && (tool.alternatives.includes(t.slug) || t.category === tool.category))
    .slice(0, 3);

  const relatedComparisons = aiComparisons
    .filter(c => c.toolA === tool.slug || c.toolB === tool.slug)
    .slice(0, 3);
`;

c = c.replace(/const relatedTools = aiTools[\s\S]*?\.slice\(0, 3\);/, relatedToolsSnippet.trim());

const jsxSnippet = `{/* 相关 AI 对比 */}
          {relatedComparisons.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">相关 AI 对比</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedComparisons.map(comp => (
                  <Link
                    key={comp.slug}
                    href={\`/compare/\${comp.slug}\`}
                    className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full no-underline"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                        ⚔️
                      </div>
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors m-0">{comp.title.split('？')[0] + '？'}</h3>
                    </div>
                    <p className="text-sm text-gray-700 flex-grow line-clamp-2 m-0">{comp.quickVerdict}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Tools */}`;

c = c.replace("{/* Related Tools */}", jsxSnippet);

const jsxSnippet2 = `{/* 相关 AI 对比 */}
        {relatedComparisons.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">相关 AI 对比</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedComparisons.map(comp => (
                <Link
                  key={comp.slug}
                  href={\`/compare/\${comp.slug}\`}
                  className="bg-brand-50 p-6 rounded-2xl shadow-sm border border-brand-100 hover:shadow-md hover:border-brand-300 transition-all group flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-brand-600 font-bold shadow-sm">
                      ⚔️
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{comp.title.split('？')[0] + '？'}</h3>
                  </div>
                  <p className="text-sm text-gray-700 flex-grow line-clamp-2">{comp.quickVerdict}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 相关推荐 */}`;

c = c.replace("{/* 相关推荐 */}", jsxSnippet2);

fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
