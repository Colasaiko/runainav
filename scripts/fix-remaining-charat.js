const fs = require('fs');

function fixCompareSlug() {
  let c = fs.readFileSync('src/app/compare/[slug]/page.tsx', 'utf8');
  c = c.replace(/<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold text-3xl shadow-sm border border-brand-100\/50 mb-3">\s*\{toolA\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={toolA} size="xl" className="!w-20 !h-20 !text-3xl !mb-3" />');
    
  c = c.replace(/<div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 font-bold text-3xl shadow-sm border border-blue-100\/50 mb-3">\s*\{toolB\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={toolB} size="xl" className="!w-20 !h-20 !text-3xl !mb-3" />');
    
  fs.writeFileSync('src/app/compare/[slug]/page.tsx', c);
}

function fixGuideSlug() {
  let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');
  c = c.replace(/<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-brand-600 font-bold">\s*\{t\.name\.charAt\(0\)\}\s*<\/div>/g, 
    '<AIToolLogo tool={t} size="md" />');
    
  c = c.replace(/<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-4xl shadow-sm border border-brand-100\/50">\s*\{tool\.name\.charAt\(0\)\}\s*<\/div>/g,
    '<AIToolLogo tool={tool} size="xl" className="!w-24 !h-24 !text-4xl" />');
    
  fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
}

fixCompareSlug();
fixGuideSlug();
