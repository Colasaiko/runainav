const fs = require('fs');

function updateGuidesSlug() {
  let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

  // Add imports
  c = `import ChannelMenu from '@/components/navigation/ChannelMenu';\nimport ArticleStickyBar from '@/components/navigation/ArticleStickyBar';\n` + c;

  const stickyBarComponent = `
      <ArticleStickyBar sections={[
         { id: 'what-is', navLabel: '简介' },
         { id: 'features', navLabel: '特色' },
         { id: 'usecases', navLabel: '使用场景' },
         { id: 'pricing', navLabel: '价格' },
         { id: 'how-to-use', navLabel: '网络要求' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />`;

  // Inject Sticky Bar after Header
  c = c.replace('<Header />', '<Header />' + stickyBarComponent);
  
  // Inject ChannelMenu before Breadcrumb/H1.
  c = c.replace('<div className="container mx-auto px-4 max-w-4xl pt-8 pb-12">', '<div className="container mx-auto px-4 max-w-4xl pt-4 pb-12">\n        <ChannelMenu activePath="/guides" />');

  // Inject top trigger right before the actual content sections begin
  // The content sections usually start after the sidebar or hero area.
  // There is `<div className="col-span-1 lg:col-span-8 space-y-8">`
  c = c.replace('<div className="col-span-1 lg:col-span-8 space-y-8">', '<div className="col-span-1 lg:col-span-8 space-y-8">\n            <div id="article-sticky-trigger" className="h-1 w-full absolute -mt-1 opacity-0 pointer-events-none"></div>');

  // Inject end trigger at the end of the article content, before related articles or footer
  // Look for `</div>` that closes `col-span-1 lg:col-span-8 space-y-8`
  // Actually, inserting it at the end of `<div className="col-span-1 lg:col-span-8 space-y-8">` content:
  c = c.replace('</section>\n            </div>\n            {/* Sidebar */}', '  <div id="article-end-trigger" className="h-1 w-full opacity-0 pointer-events-none"></div>\n              </section>\n            </div>\n            {/* Sidebar */}');

  fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
}

updateGuidesSlug();
console.log("Updated guides/[slug]/page.tsx");
