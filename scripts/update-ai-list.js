const fs = require('fs');

let content = fs.readFileSync('src/app/ai/AIList.tsx', 'utf8');

// Replace 新手推荐 link
content = content.replace(/href={`\/ai\/\$\{slug\}`}/g, 'href={`/guides/${slug}`}');

// Replace main AI card rendering
const newCardHTML = `              <div
                key={tool.slug} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center flex-shrink-0 text-brand-600 font-bold text-xl shadow-sm border border-brand-100/50">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 transition-colors line-clamp-1">{tool.name}</h2>
                    <p className="text-sm text-gray-500">{tool.company}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-6 flex-grow line-clamp-2 leading-relaxed">
                  {tool.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-50 text-gray-500 rounded text-xs border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3">
                  <a 
                    href={tool.officialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 text-center py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium inline-flex items-center justify-center"
                  >
                    前往官方 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <Link 
                    href={\`/guides/\${tool.slug}\`} 
                    className="flex-1 text-center py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium inline-flex items-center justify-center"
                  >
                    查看指南 <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>`;

const oldCardRegex = /<Link\s+key=\{tool\.slug\}([\s\S]*?)<\/Link>/;
content = content.replace(oldCardRegex, newCardHTML);

// Add ExternalLink to imports if missing
if(!content.includes('ExternalLink')) {
  content = content.replace(/import \{ ([^}]+) \} from 'lucide-react';/, "import { $1, ExternalLink } from 'lucide-react';");
}

fs.writeFileSync('src/app/ai/AIList.tsx', content);
console.log('Updated AIList.tsx');
