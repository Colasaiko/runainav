const fs = require('fs');

function injectChannelMenu(filePath, activePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Add import
  if (!c.includes('ChannelMenu')) {
    c = c.replace(/import \{[^\}]+\} from 'react';\n/, `$&import ChannelMenu from '@/components/navigation/ChannelMenu';\n`);
    // If it doesn't have react import, just add to top
    if (!c.includes('ChannelMenu')) {
       c = `import ChannelMenu from '@/components/navigation/ChannelMenu';\n` + c;
    }
  }

  // Inject ChannelMenu before H1
  // They all have <div className="container mx-auto px-4 ...
  // followed by some div, then <h1
  // We can just inject it right after the container div
  
  const containerMatch = c.match(/<div className="container mx-auto px-4 [^>]+>/);
  if (containerMatch) {
    // only if not injected
    if (!c.includes('<ChannelMenu')) {
      const idx = c.indexOf(containerMatch[0]) + containerMatch[0].length;
      c = c.substring(0, idx) + `\n        <ChannelMenu activePath="${activePath}" />` + c.substring(idx);
    }
  }
  
  fs.writeFileSync(filePath, c);
}

injectChannelMenu('src/app/ai/page.tsx', '/ai');
injectChannelMenu('src/app/guides/page.tsx', '/guides');
injectChannelMenu('src/app/vpn/page.tsx', '/vpn');
console.log('Injected ChannelMenu to index pages');
