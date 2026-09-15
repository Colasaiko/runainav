const fs = require('fs');
let c = fs.readFileSync('src/app/ai/[filter]/page.tsx', 'utf8');

c = c.replace(/export function generateMetadata\(\{ params \}: \{ params: \{ filter: string \} \}\) \{/g, "export async function generateMetadata({ params }: { params: Promise<{ filter: string }> }) { const { filter } = await params;");
c = c.replace(/params\.filter/g, "filter");

c = c.replace(/export default function AICategoryPage\(\{ params \}: \{ params: \{ filter: string \} \}\) \{/g, "export default async function AICategoryPage({ params }: { params: Promise<{ filter: string }> }) { const { filter } = await params;");

const dynamicSections = `
          {/* Dynamic Content for China */}
          {filter === 'china' && (
            <div className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">国内AI有哪些？分类大全</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">💬 国内AI聊天工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('chat')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={\`/guides/\${t.slug}\`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">💼 国内AI办公工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('productivity')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={\`/guides/\${t.slug}\`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">🎨 国内AI绘图工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('image')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={\`/guides/\${t.slug}\`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-600 mb-4 border-b border-gray-100 pb-2">🎬 国内AI视频工具</h3>
                  <div className="flex flex-col gap-3">
                    {aiTools.filter(t => t.region === 'china' && t.categories.includes('video')).slice(0, 5).map(t => (
                      <Link key={t.slug} href={\`/guides/\${t.slug}\`} className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">{t.name.charAt(0)}</span>
                        <div>
                          <p className="font-bold text-gray-900 text-sm m-0">{t.name}</p>
                          <p className="text-xs text-gray-500 m-0 truncate w-48">{t.shortDescription}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
`;

c = c.replace(/<div className="grid md:grid-cols-3 gap-8 mb-16">/, dynamicSections);

// Inject FAQ Schema
const faqSchemaStr = `
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seo.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
`;

c = c.replace(/return \(/, faqSchemaStr + '\n  return (');
c = c.replace(/<Header \/>/, '<Header />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />');

fs.writeFileSync('src/app/ai/[filter]/page.tsx', c);
