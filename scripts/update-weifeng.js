const fs = require('fs');

function updateWeifeng() {
  let c = fs.readFileSync('src/app/vpn/weifeng/page.tsx', 'utf8');

  // Add imports
  c = `import ChannelMenu from '@/components/navigation/ChannelMenu';\nimport ArticleStickyBar from '@/components/navigation/ArticleStickyBar';\n` + c;

  const stickyBarComponent = `
      <ArticleStickyBar sections={[
         { id: 'intro', navLabel: '简介' },
         { id: 'pricing', navLabel: '套餐' },
         { id: 'nodes', navLabel: '节点' },
         { id: 'speed-test', navLabel: '测速' },
         { id: 'privacy', navLabel: '隐私' },
         { id: 'ai-test', navLabel: 'AI实测' },
         { id: 'daily-use', navLabel: '日常体验' },
         { id: 'devices', navLabel: '设备' },
         { id: 'pros-cons', navLabel: '优缺点' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />`;

  // Inject Sticky Bar after Header
  c = c.replace('<Header />', '<Header />' + stickyBarComponent);
  
  // Inject ChannelMenu before H1. 
  // <div className="container mx-auto px-4 max-w-4xl"> is used for Breadcrumb and Hero
  // Let's replace the first occurrence
  c = c.replace('<div className="container mx-auto px-4 max-w-4xl">', '<div className="container mx-auto px-4 max-w-4xl">\n          <ChannelMenu activePath="/vpn" />');

  // Add IDs and scroll-mt-32 to H2s
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-4">微风网络是什么？</h2>', '<div id="article-sticky-trigger" className="h-1 w-full absolute -mt-1 opacity-0 pointer-events-none"></div>\n          <h2 id="intro" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-32">微风网络是什么？</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-6">套餐价格</h2>', '<h2 id="pricing" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-32">套餐价格</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-4">节点覆盖</h2>', '<h2 id="nodes" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-32">节点覆盖</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-6">实际速度测试</h2>', '<h2 id="speed-test" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-32">实际速度测试</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-4">隐私与网络检测</h2>', '<h2 id="privacy" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-32">隐私与网络检测</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-6">AI 实际测试</h2>', '<h2 id="ai-test" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-32">AI 实际测试</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-4">日常使用体验</h2>', '<h2 id="daily-use" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-32">日常使用体验</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-6">支持设备与使用流程</h2>', '<h2 id="devices" className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-32">支持设备与使用流程</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><Check className="text-green-500" /> 主要优点</h2>', '<h2 id="pros-cons" className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 scroll-mt-32"><Check className="text-green-500" /> 主要优点</h2>');
  c = c.replace('<h2 className="text-2xl font-bold text-gray-900 mb-8">常见问题 (FAQ)</h2>', '<h2 id="faq" className="text-2xl font-bold text-gray-900 mb-8 scroll-mt-32">常见问题 (FAQ)</h2>');

  // Insert end trigger before CTA
  c = c.replace('<section className="bg-brand-50 border-t border-brand-100 py-16">', '<div id="article-end-trigger" className="h-1 w-full opacity-0 pointer-events-none"></div>\n      <section className="bg-brand-50 border-t border-brand-100 py-16">');

  fs.writeFileSync('src/app/vpn/weifeng/page.tsx', c);
}

updateWeifeng();
console.log('Updated weifeng');
