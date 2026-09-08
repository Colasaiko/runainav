const fs = require('fs');
let content = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');

// 1. Change FilterType to include 'subscription'
content = content.replace(
  /type FilterType = 'all' \| 'tool' \| 'tutorial' \| 'troubleshooting' \| 'network';/,
  "type FilterType = 'all' | 'tool' | 'subscription' | 'tutorial' | 'troubleshooting' | 'network';"
);

// 2. Insert AI订阅指南 pill after AI工具指南
const aiToolButton = `<button 
            onClick={() => setActiveFilter('tool')}
            className={\`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm \${activeFilter === 'tool' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600'}\`}
          >
            AI工具指南
          </button>`;
          
const aiSubscriptionButton = `<button 
            onClick={() => setActiveFilter('subscription')}
            className={\`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm \${activeFilter === 'subscription' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}\`}
          >
            AI订阅指南
          </button>`;

content = content.replace(aiToolButton, aiToolButton + "\n          " + aiSubscriptionButton);

// 3. Balance the Latest Guides logic
const oldLatestLogic = `const latestGuides = allGuides.slice(0, 6);`;
const newLatestLogic = `// Balanced latest guides selection
const latestGuides = (() => {
  const subs = allGuides.filter(g => g.type === 'subscription').slice(0, 2);
  const toolsTuts = allGuides.filter(g => g.type === 'tool' || g.type === 'tutorial').slice(0, 2);
  const netsTrouble = allGuides.filter(g => g.type === 'network' || g.type === 'troubleshooting').slice(0, 2);
  
  return [...subs, ...toolsTuts, ...netsTrouble].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  }).slice(0, 6); // Safety slice
})();`;

content = content.replace(oldLatestLogic, newLatestLogic);

fs.writeFileSync('src/app/guides/GuidesList.tsx', content);
console.log('Updated GuidesList.tsx');
