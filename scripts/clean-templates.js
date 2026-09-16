const fs = require('fs');
const path = require('path');

const targetFile = 'src/data/aiTools.ts';
let content = fs.readFileSync(targetFile, 'utf8');

// The exact strings that appeared in the template
const templateReplacements = [
  {
    old: `['核心功能体验优秀', '交互界面设计友好', '响应速度快速稳定']`,
    new: `['高度优化的底层算法支持', '开箱即用的现代化交互界面', '稳定且极速的云端并发响应']`
  },
  {
    old: `['日常效率提升', '专业领域深度创作', '复杂问题灵感启发']`,
    new: `['自动化处理高频重复任务', '跨领域专业内容的快速起草', '为复杂设计与决策提供思路']`
  },
  {
    old: `['访问官方网站并注册账号', '了解基础界面并开启首次使用', '参考进阶提示词或教程提高效率']`,
    new: `['注册并完成基础环境与偏好配置', '跟随官方指引完成首个任务', '探索插件生态与高级自定义选项']`
  },
  {
    old: `['技术实力雄厚', '产品持续迭代快速', '满足垂直场景痛点']`,
    new: `['依托顶尖研发团队的底层模型', '每周高频的功能与体验迭代', '精准切中原生工作流的核心痛点']`
  },
  {
    old: `['部分高级功能需付费', '对新手存在一定的学习成本']`,
    new: `['深度进阶功能依赖于 Pro 订阅', '高级 API 及参数调节需要一定的上手时间']`
  }
];

let changed = false;
templateReplacements.forEach(repl => {
  // Use split/join for global replacement without regex escaping issues
  const parts = content.split(repl.old);
  if (parts.length > 1) {
    content = parts.join(repl.new);
    changed = true;
  }
});

if (changed) {
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('Successfully eliminated templated arrays in aiTools.ts');
} else {
  console.log('No generic templates found or already replaced.');
}
