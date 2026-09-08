const fs = require('fs');

const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

const workflowUI = `
            {/* Dynamic Workflow */}
            {tool.domesticWorkflow && tool.domesticWorkflow.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">基础工作流</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4 overflow-x-auto">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 min-w-max">
                    {tool.domesticWorkflow.map((step, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="bg-white px-3 py-1.5 rounded border border-gray-200">{step}</span>
                        {idx < tool.domesticWorkflow!.length - 1 && <span className="text-gray-400">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
`;

const target = `{/* 5. 主要功能与使用限制 */}`;
if (c.includes(target) && !c.includes('{/* Dynamic Workflow */}')) {
  c = c.replace(target, workflowUI + target);
  fs.writeFileSync(path, c);
  console.log('Added workflowUI to page.tsx');
} else {
  console.log('workflowUI already added or target missing');
}
