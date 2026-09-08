const fs = require('fs');

const path = 'src/app/guides/[slug]/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  '作为插件，可以完美融入你现有的 VS Code 或 JetBrains 环境。在代码审查、Pull Request 以及企业级组织管理（Organization Policies）上有不可替代的优势。',
  '作为插件，可以融入现有 VS Code、JetBrains 等开发工作流。在代码审查、Pull Request 以及企业级组织管理（Organization Policies）上有不可替代的优势。'
);

fs.writeFileSync(path, c);
console.log('Fixed Copilot text in page.tsx');
