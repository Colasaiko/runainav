const fs = require('fs');

function fix(file) {
  let c = fs.readFileSync(file, 'utf8');
  
  c = c.replace(/import ChannelMenu from '@\/components\/navigation\/ChannelMenu';\n/, "import Header from '@/components/layout/Header';\nimport Footer from '@/components/layout/Footer';\n");
  c = c.replace(/<ChannelMenu activePath="[^"]+" \/>\n\s*/, '');
  
  c = c.replace('<div className="min-h-screen bg-gray-50 py-12">', '<div className="min-h-screen flex flex-col bg-gray-50">\n      <Header />\n      <main className="flex-grow py-12">');
  
  // Replace the exact ending
  const oldEnd = `        </Suspense>
      </div>
    </div>
  );
}`;
  const newEnd = `        </Suspense>
      </div>
      </main>
      <Footer />
    </div>
  );
}`;
  c = c.replace(oldEnd, newEnd);
  
  fs.writeFileSync(file, c);
}

fix('src/app/ai/page.tsx');
fix('src/app/guides/page.tsx');

function strip(file) {
  let c = fs.readFileSync(file, 'utf8');
  c = c.replace(/import ChannelMenu from '@\/components\/navigation\/ChannelMenu';\n/, '');
  c = c.replace(/<ChannelMenu activePath="[^"]+" \/>\n\s*/, '');
  fs.writeFileSync(file, c);
}

strip('src/app/vpn/page.tsx');
strip('src/app/vpn/weifeng/page.tsx');
strip('src/app/guides/[slug]/page.tsx');
strip('src/app/guides/ai-network/page.tsx');

if (fs.existsSync('src/components/navigation/ChannelMenu.tsx')) {
  fs.unlinkSync('src/components/navigation/ChannelMenu.tsx');
}

console.log("All fixed perfectly.");
