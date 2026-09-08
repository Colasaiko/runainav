const fs = require('fs');

const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  '<li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> OpenAI/官方当前服务支持范围（如当前所在地是否开放服务）</li>',
  '<li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> {tool.company || "官方"} 当前服务状态、账号权限与相关服务政策</li>'
);

const workflowUI = `
            {tool.domesticWorkflow && tool.domesticWorkflow.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">基础工作流</h3>
                <div className="bg-white border border-gray-200 rounded-xl p-5 overflow-x-auto shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700 min-w-max">
                    {tool.domesticWorkflow.map((step, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">{step}</span>
                        {idx < tool.domesticWorkflow.length - 1 && <span className="text-gray-400">→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
`;

const target = `<p className="text-gray-700">{tool.overview}</p>`;
if (c.includes(target) && !c.includes('tool.domesticWorkflow && tool.domesticWorkflow.length > 0')) {
  c = c.replace(target, target + workflowUI);
}

fs.writeFileSync(path, c);
console.log('Fixed OpenAI text and injected workflowUI');
