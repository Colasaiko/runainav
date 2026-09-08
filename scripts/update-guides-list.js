const fs = require('fs');

let c = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');

c = c.replace(
  /type FilterType = 'all' \| 'tool' \| 'tutorial' \| 'troubleshooting';/,
  "type FilterType = 'all' | 'tool' | 'tutorial' | 'troubleshooting' | 'network';"
);

const newButton = `
          <button 
            onClick={() => setActiveFilter('network')}
            className={\`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm \${activeFilter === 'network' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:text-purple-600'}\`}
          >
            网络与机场指南
          </button>
        </div>`;

c = c.replace(/<\/div>\s*\{\/\* Grid \*\/\}/, newButton + '\n\n        {/* Grid */}');

fs.writeFileSync('src/app/guides/GuidesList.tsx', c);
console.log('Updated GuidesList.tsx');
