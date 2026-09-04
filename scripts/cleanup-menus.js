const fs = require('fs');

function cleanList(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  // We want to remove the "菜单游览" heading entirely from the list components.
  // In `fix-menus-final.js`, we injected:
  /*
  {/* 菜单游览 *\/}
      <section className="mb-10">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            🧭 菜单游览
          </h2>
          <p className="text-gray-500 mt-1 text-sm">快速跳到你想看的部分，找到适合自己的 AI 工具。</p>
        </div>
        <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide sticky top-0 z-20 bg-gray-50/90 backdrop-blur pt-2">
  */
  
  // Replace the heading part
  c = c.replace(/<div className="mb-4">\s*<h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">\s*🧭 菜单游览\s*<\/h2>[\s\S]*?<\/div>/g, '');
  c = c.replace(/<div className="mb-4">\s*<h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">\s*🧭 指南游览\s*<\/h2>[\s\S]*?<\/div>/g, '');
  
  // Remove the comment just to be clean
  c = c.replace(/\{\/\* 菜单游览 \*\/\}/g, '');
  
  fs.writeFileSync(filePath, c);
}

cleanList('src/app/ai/AIList.tsx');
cleanList('src/app/guides/GuidesList.tsx');
console.log("Cleaned up old menus");
