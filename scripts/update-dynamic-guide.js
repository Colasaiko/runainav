const fs = require('fs');

let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

const relatedGuidesSection = `        {tool.relatedGuides && tool.relatedGuides.length > 0 && (
          <div className="bg-blue-50/50 border border-blue-100 p-8 rounded-3xl shadow-sm mb-12">
            <h3 className="font-bold text-xl text-gray-900 mt-0 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-500" /> 相关教程指南
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.relatedGuides.map((guide, idx) => (
                <Link key={idx} href={guide.url} className="bg-white p-4 rounded-xl border border-blue-100 hover:border-brand-300 hover:shadow-md transition-all group flex items-center justify-between">
                  <span className="font-medium text-gray-800 group-hover:text-brand-600 transition-colors">{guide.title}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

`;

if (!c.includes('tool.relatedGuides')) {
  // First, add imports
  c = c.replace(/import \{ ExternalLink[^}]+\} from 'lucide-react';/, "import { ExternalLink, CheckCircle2, ShieldAlert, Zap, List, ThumbsUp, ThumbsDown, Lightbulb, AlertCircle, Search, HelpCircle, BookOpen, ArrowRight } from 'lucide-react';");
  
  c = c.replace('{/* Explore All AI */}', relatedGuidesSection + '        {/* Explore All AI */}');
  fs.writeFileSync('src/app/guides/[slug]/page.tsx', c);
  console.log("Updated dynamic guide page");
} else {
  console.log("Already updated dynamic guide page");
}
