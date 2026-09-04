const fs = require('fs');

function fix(filePath) {
  let lines = fs.readFileSync(filePath, 'utf8').split('\n');

  // Find imports
  const menuImportIdx = lines.findIndex(l => l.includes("import ChannelMenu"));
  if (menuImportIdx !== -1) {
    lines.splice(menuImportIdx, 1);
  }
  
  // Add Header and Footer imports
  const headerImportStr = "import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';";
  if (!lines.find(l => l.includes("import Header from"))) {
    const firstImportIdx = lines.findIndex(l => l.startsWith("import "));
    lines.splice(firstImportIdx, 0, headerImportStr);
  }

  // Find ChannelMenu usage and remove it
  const menuUsageIdx = lines.findIndex(l => l.includes("<ChannelMenu "));
  if (menuUsageIdx !== -1) {
    lines.splice(menuUsageIdx, 1);
  }

  // Update layout wrapper start
  const divStartIdx = lines.findIndex(l => l.includes('<div className="min-h-screen bg-gray-50 py-12">'));
  if (divStartIdx !== -1) {
    lines[divStartIdx] = '    <div className="min-h-screen flex flex-col bg-gray-50">\n      <Header />\n      <main className="flex-grow py-12">';
  }

  // Update layout wrapper end
  // In ai/page.tsx and guides/page.tsx, there are two closing divs at the end before `);`
  //   </div>
  // </div>
  // We need to change the inner `</div>` to `</div>\n      </main>\n      <Footer />`
  // Find `);` line
  const returnEndIdx = lines.findIndex(l => l.trim() === ');');
  if (returnEndIdx > 1) {
    // lines[returnEndIdx - 1] is `    </div>`
    // lines[returnEndIdx - 2] is `      </div>`
    lines[returnEndIdx - 1] = '      </main>\n      <Footer />\n    </div>';
  }

  fs.writeFileSync(filePath, lines.join('\n'));
}

fix('src/app/ai/page.tsx');
fix('src/app/guides/page.tsx');

console.log("Fixed cleanly.");
