const fs = require('fs');
const path = 'src/app/ai/AIList.tsx';
let c = fs.readFileSync(path, 'utf8');

// Replace navigation block
const navRegex = /<section className="mb-10">[\s\S]*?<\/section>\s*\{\/\* 30 秒速读 \*\/\}/;
c = c.replace(navRegex, "{/* 30 秒速读 */}");

// Read 'q' in useEffect
const useEffectRegex = /const cat = params\.get\('category'\);/;
c = c.replace(useEffectRegex, `const cat = params.get('category');\n      const q = params.get('q');\n      if (q) setSearchQuery(q);`);

// Replace h2 with h3 just for the tool.name
c = c.replace(/<h2 className="text-lg font-bold text-gray-900 transition-colors line-clamp-1">\{tool\.name\}<\/h2>/g, '<h3 className="text-lg font-bold text-gray-900 transition-colors line-clamp-1">{tool.name}</h3>');

fs.writeFileSync(path, c);
