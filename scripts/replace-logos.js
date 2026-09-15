const fs = require('fs');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  // Add import if AIToolLogo used
  if (content.includes('AIToolLogo') && !content.includes('import AIToolLogo')) {
    content = "import AIToolLogo from '@/components/ai/AIToolLogo';\n" + content;
  }
  fs.writeFileSync(filePath, content);
}

replaceInFile('src/app/ai/[filter]/page.tsx', [
  { search: /<span className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-xs">\{t.name.charAt\(0\)\}<\/span>/g, replace: '<AIToolLogo tool={t} size="sm" />' },
  { search: /<div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg.*?\}[\s\S]*?\{tool.name.charAt\(0\)\}[\s\S]*?<\/div>/, replace: '<AIToolLogo tool={tool} size="lg" />' }
]);

replaceInFile('src/app/compare/page.tsx', [
  { search: /<div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-600">[\s\S]*?\{toolA.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={toolA} size="sm" />' },
  { search: /<div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-600">[\s\S]*?\{toolB.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={toolB} size="sm" />' }
]);

replaceInFile('src/app/compare/[slug]/page.tsx', [
  { search: /<div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl.*?">[\s\S]*?\{toolA.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={toolA} size="xl" />' },
  { search: /<div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl.*?">[\s\S]*?\{toolB.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={toolB} size="xl" />' }
]);

replaceInFile('src/app/guides/[slug]/page.tsx', [
  { search: /<div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl text-blue-600 bg-blue-50">[\s\S]*?\{tool.name.charAt\(0\)\}[\s\S]*?<\/div>/, replace: '<AIToolLogo tool={tool} size="xl" />' },
  { search: /<div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold.*?">[\s\S]*?\{t.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={t} size="md" />' },
  { search: /<div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">[\s\S]*?\{t.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={t} size="sm" />' }
]);

replaceInFile('src/app/ai/AIList.tsx', [
  { search: /<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-700 flex-shrink-0">[\s\S]*?\{tool.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={tool} size="md" />' },
  { search: /<div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg.*?">[\s\S]*?\{t.name.charAt\(0\)\}[\s\S]*?<\/div>/g, replace: '<AIToolLogo tool={t} size="lg" />' }
]);

console.log('Done replacement.');
