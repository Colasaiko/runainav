const fs = require('fs');

function updateGuidesList() {
  let c = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');
  
  // Find id="beginner-recommends"
  const startIdx = c.indexOf('id="beginner-recommends"');
  if (startIdx === -1) {
    console.log("Could not find beginner-recommends");
    return;
  }
  
  // We want to insert the new card into the grid. Let's find the grid div.
  // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  const gridStartIdx = c.indexOf('grid-cols-', startIdx);
  const gridEndIdx = c.indexOf('>', gridStartIdx);
  
  const newCard = `
          <Link href="/guides/ai-network" className="group flex flex-col bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">AI 工具网络环境指南</h3>
            <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-2">AI打不开？加载慢？一步步排查网络连接、账号地区和常见错误。</p>
            <div className="flex items-center text-sm font-medium text-brand-600">
              阅读指南 <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </Link>`;
          
  c = c.substring(0, gridEndIdx + 1) + newCard + c.substring(gridEndIdx + 1);
  fs.writeFileSync('src/app/guides/GuidesList.tsx', c);
  console.log("Updated GuidesList");
}

function updateComingSoon() {
  let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');
  c = c.replace(/href="\/coming-soon"/g, 'href="/guides/ai-network"');
  fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
  console.log("Updated [slug]/page.tsx");
}

function addCheckSeo() {
  let c = fs.readFileSync('scripts/check-seo-lengths.js', 'utf8');
  const code = `
// Check /guides/ai-network
const netContent = fs.readFileSync('src/app/guides/ai-network/page.tsx', 'utf-8');
const netTitle = netContent.match(/title:\\s*['"]([^'"]+)['"]/)[1];
const netDesc = netContent.match(/description:\\s*['"]([^'"]+)['"]/)[1];
checkLength('/guides/ai-network', 'Title', netTitle, 20, 30);
checkLength('/guides/ai-network', 'Description', netDesc, 70, 80);
`;
  if (!c.includes('/guides/ai-network')) {
    c = c.replace(/if \(hasError\) \{/, code + '\nif (hasError) {');
    fs.writeFileSync('scripts/check-seo-lengths.js', c);
    console.log("Updated check-seo-lengths.js");
  }
}

updateGuidesList();
updateComingSoon();
addCheckSeo();
