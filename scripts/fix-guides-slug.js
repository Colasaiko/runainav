const fs = require('fs');
let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

const stickyBarComponent = `
      <ArticleStickyBar sections={[
         { id: 'what-is', navLabel: '简介' },
         { id: 'features', navLabel: '特色' },
         { id: 'usecases', navLabel: '使用场景' },
         { id: 'pricing', navLabel: '价格' },
         { id: 'how-to-use', navLabel: '网络要求' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />`;

// Inject ArticleStickyBar right after return ( <div ...>
c = c.replace('<div className="bg-gray-50 min-h-screen pb-20">', '<div className="bg-gray-50 min-h-screen pb-20">\n' + stickyBarComponent);

// Inject ChannelMenu before Breadcrumb
c = c.replace('{/* Breadcrumb */}', '<ChannelMenu activePath="/guides" />\n          {/* Breadcrumb */}');

// Triggers
c = c.replace('<div className="col-span-1 lg:col-span-8 space-y-8">', '<div className="col-span-1 lg:col-span-8 space-y-8">\n            <div id="article-sticky-trigger" className="h-1 w-full absolute -mt-1 opacity-0 pointer-events-none"></div>');

c = c.replace('</section>\n            </div>\n\n            {/* Sidebar */}', '  <div id="article-end-trigger" className="h-1 w-full opacity-0 pointer-events-none"></div>\n              </section>\n            </div>\n\n            {/* Sidebar */}');

fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
