const fs = require('fs');

function updateAiNetwork() {
  let c = fs.readFileSync('src/app/guides/ai-network/page.tsx', 'utf8');
  
  c = `import ChannelMenu from '@/components/navigation/ChannelMenu';\nimport ArticleStickyBar from '@/components/navigation/ArticleStickyBar';\n` + c;
  
  // Inject components
  const stickyBarComponent = `
      <ArticleStickyBar sections={[
         { id: 'symptoms', navLabel: '常见症状' },
         { id: 'checklist', navLabel: '排查顺序' },
         { id: 'account-region', navLabel: '账号与地区' },
         { id: 'network-dns', navLabel: '网络与 DNS' },
         { id: 'speed', navLabel: '速度与稳定性' },
         { id: 'different-ai', navLabel: '不同 AI 表现' },
         { id: 'mistakes', navLabel: '常见误区' },
         { id: 'faq', navLabel: 'FAQ' }
      ]} />`;
      
  c = c.replace('<Header />', '<Header />' + stickyBarComponent);
  c = c.replace('<div className="container mx-auto px-4 max-w-4xl">', '<div className="container mx-auto px-4 max-w-4xl">\n          <ChannelMenu activePath="/guides" />');
  
  // Triggers
  c = c.replace('<h2 id="symptoms"', '<div id="article-sticky-trigger" className="h-1 w-full absolute -mt-1 opacity-0 pointer-events-none"></div>\n          <h2 id="symptoms"');
  c = c.replace('</section>\n      \n      <Footer />', '  <div id="article-end-trigger" className="h-1 w-full opacity-0 pointer-events-none"></div>\n      </section>\n      \n      <Footer />');
  
  // Remove the old menu
  c = c.replace(/\{\/\* 菜单游览 \*\/\}[\s\S]*?\{\/\* Content Structure \*\/\}/, '{/* Content Structure */}');

  fs.writeFileSync('src/app/guides/ai-network/page.tsx', c);
}

updateAiNetwork();
console.log("Updated AI Network Guide");
