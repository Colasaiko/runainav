const fs = require('fs');

function cleanFile(file) {
  let c = fs.readFileSync(file, 'utf8');
  
  // Remove ChannelMenu imports
  c = c.replace(/import ChannelMenu from '@\/components\/navigation\/ChannelMenu';\n/, '');
  // Ensure Header/Footer imports exist
  if (!c.includes('import Header from')) {
    c = c.replace(/(import {[^}]+} from 'react';\n)/, "$1import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';\n");
    if (!c.includes('import Header from')) {
       c = "import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';\n" + c;
    }
  }

  // Remove ChannelMenu element
  c = c.replace(/<ChannelMenu [^>]+>\s*/g, '');
  
  // Convert wrapping structure
  // Start:
  if (c.includes('<div className="min-h-screen bg-gray-50 py-12">')) {
     c = c.replace('<div className="min-h-screen bg-gray-50 py-12">', '<div className="min-h-screen flex flex-col bg-gray-50">\n      <Header />\n      <main className="flex-grow py-12">');
  }

  // End:
  // Instead of complex regex, let's just use lastIndexOf to replace the last two closing divs
  if (c.includes('</Suspense>\n      </div>\n    </div>\n  );\n}')) {
     c = c.replace('</Suspense>\n      </div>\n    </div>\n  );\n}', '</Suspense>\n      </div>\n      </main>\n      <Footer />\n    </div>\n  );\n}');
  }
  
  fs.writeFileSync(file, c);
}

cleanFile('src/app/ai/page.tsx');
cleanFile('src/app/guides/page.tsx');

console.log("Done");
