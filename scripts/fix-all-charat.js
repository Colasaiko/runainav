const fs = require('fs');

function fixCompare() {
  let c = fs.readFileSync('src/app/compare/page.tsx', 'utf8');
  if (!c.includes('import AIToolLogo')) {
    c = "import AIToolLogo from '@/components/ai/AIToolLogo';\n" + c;
  }
  
  c = c.replace(/<div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 font-bold text-xl shadow-sm border border-gray-100 mb-2">\s*\{toolA\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={toolA} size="lg" className="!w-14 !h-14 !text-xl !mb-2" />');
    
  c = c.replace(/<div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 font-bold text-xl shadow-sm border border-gray-100 mb-2">\s*\{toolB\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={toolB} size="lg" className="!w-14 !h-14 !text-xl !mb-2" />');
    
  fs.writeFileSync('src/app/compare/page.tsx', c);
}

function fixCompareSlug() {
  let c = fs.readFileSync('src/app/compare/[slug]/page.tsx', 'utf8');
  if (!c.includes('import AIToolLogo')) {
    c = "import AIToolLogo from '@/components/ai/AIToolLogo';\n" + c;
  }
  
  c = c.replace(/<div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-600 font-bold text-3xl shadow-sm border border-gray-100">\s*\{toolA\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={toolA} size="xl" className="!w-16 !h-16 !text-3xl" />');
    
  c = c.replace(/<div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-600 font-bold text-3xl shadow-sm border border-gray-100">\s*\{toolB\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={toolB} size="xl" className="!w-16 !h-16 !text-3xl" />');
    
  fs.writeFileSync('src/app/compare/[slug]/page.tsx', c);
}

function fixGuideSlug() {
  let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');
  if (!c.includes('import AIToolLogo')) {
    c = c.replace(/import \{ aiTools.*?\} from '@\/data\/aiTools';/, "import { aiTools } from '@/data/aiTools';\nimport AIToolLogo from '@/components/ai/AIToolLogo';");
  }
  
  c = c.replace(/<div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-600 font-bold text-3xl shadow-sm border border-gray-100">\s*\{tool\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={tool} size="xl" className="!w-16 !h-16 !text-3xl" />');
    
  c = c.replace(/<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-700 font-bold flex-shrink-0 border border-gray-100">\s*\{t\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={t} size="md" />');
    
  fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
}

fixCompare();
fixCompareSlug();
fixGuideSlug();
