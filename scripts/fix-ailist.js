const fs = require('fs');

function fix() {
  let c = fs.readFileSync('src/app/ai/AIList.tsx', 'utf8');
  if (!c.includes('import AIToolLogo')) {
    c = "import AIToolLogo from '@/components/ai/AIToolLogo';\n" + c;
  }
  
  c = c.replace(/<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl mb-3 shadow-sm border border-brand-100\/50">\s*\{t\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={t} size="lg" className="!w-12 !h-12 !text-xl !mb-3" />');
    
  c = c.replace(/<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl shadow-sm border border-brand-100\/50">\s*\{tool\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={tool} size="lg" className="!w-14 !h-14 !text-xl" />');
    
  fs.writeFileSync('src/app/ai/AIList.tsx', c);
}
fix();
