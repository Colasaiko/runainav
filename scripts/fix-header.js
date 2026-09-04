const fs = require('fs');

function fixIndexPage(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Remove ChannelMenu import
  c = c.replace(/import ChannelMenu from '@\/components\/navigation\/ChannelMenu';\n/, '');
  
  // Add Header and Footer imports if missing
  if (!c.includes('import Header from')) {
    c = c.replace(/(import {[^}]+} from 'react';\n)/, "$1import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';\n");
    // Just in case React import is missing or not matched
    if (!c.includes('import Header from')) {
       c = "import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';\n" + c;
    }
  }

  // Remove ChannelMenu usage
  c = c.replace(/<ChannelMenu [^>]+>\s*/, '');
  
  // Wrap with Header and Footer
  // Find <div className="min-h-screen bg-gray-50 py-12">
  // Change to <div className="min-h-screen flex flex-col bg-gray-50">\n      <Header />\n      <main className="flex-grow py-12">
  // Change <div className="min-h-screen bg-gray-50 py-12"> to above
  if (c.includes('<div className="min-h-screen bg-gray-50 py-12">')) {
     c = c.replace('<div className="min-h-screen bg-gray-50 py-12">', '<div className="min-h-screen flex flex-col bg-gray-50">\n      <Header />\n      <main className="flex-grow py-12">');
     // The last closing div before closing parenthesis of return
     //   </div>\n    </div>\n  );\n}
     c = c.replace(/<\/div>\n\s*<\/div>\n\s*\);\n}/, '</div>\n      </main>\n      <Footer />\n    </div>\n  );\n}');
  }

  fs.writeFileSync(filePath, c);
}

fixIndexPage('src/app/ai/page.tsx');
fixIndexPage('src/app/guides/page.tsx');

function cleanOtherPages(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  c = c.replace(/import ChannelMenu from '@\/components\/navigation\/ChannelMenu';\n/, '');
  c = c.replace(/<ChannelMenu [^>]+>\s*/, '');
  fs.writeFileSync(filePath, c);
}

cleanOtherPages('src/app/vpn/page.tsx');
cleanOtherPages('src/app/vpn/weifeng/page.tsx');
cleanOtherPages('src/app/guides/[slug]/page.tsx');
cleanOtherPages('src/app/guides/ai-network/page.tsx');

// Delete the ChannelMenu component
fs.unlinkSync('src/components/navigation/ChannelMenu.tsx');

console.log("Fixed Header and removed ChannelMenu");
