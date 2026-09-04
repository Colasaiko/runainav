const fs = require('fs');
let c = fs.readFileSync('src/app/guides/GuidesList.tsx', 'utf8');

const extraTutorials = `
const EXTRA_TUTORIALS = [
  {
    slug: 'cursor-build-blog',
    name: 'Cursor实战：搭建个人博客',
    description: '从安装、创建项目到本地预览与部署，用新手能看懂的方式演示 AI 辅助建站完整工作流。',
    categories: ['coding', 'all'],
    isNew: true
  },
  {
    slug: 'ai-network',
    name: 'AI工具打不开怎么办？',
    description: '排查网络环境与常见问题，解决海外 AI 工具加载缓慢或登录失败的情况。',
    categories: ['all'],
    isNew: false
  }
];
`;

if (!c.includes('EXTRA_TUTORIALS')) {
  c = c.replace('const CATEGORIES =', extraTutorials + '\nconst CATEGORIES =');
}

// In filteredTools
const combineLogic = `
  const allGuides = [...EXTRA_TUTORIALS, ...aiTools];
  const filteredTools = allGuides.filter((tool) => {
`;
if (c.includes('const filteredTools = aiTools.filter')) {
  c = c.replace('const filteredTools = aiTools.filter((tool) => {', combineLogic);
}

fs.writeFileSync('src/app/guides/GuidesList.tsx', c);
