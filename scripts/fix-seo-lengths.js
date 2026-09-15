const fs = require('fs');

let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

c = c.replace(/seoDescription: '360推出的AI搜索与工作台助手。',/, "seoDescription: '360推出的纳米AI搜索与工作台助手，集成了智能搜索、对话、写作与阅读功能，极大提升工作与学习效率。',");
c = c.replace(/seoDescription: '金山办公推出的基于WPS的AI办公助手。',/, "seoDescription: '金山办公推出的基于WPS的全新AI办公助手，一键智能生成文档、表格与演示，全面助力现代职场高效办公。',");
c = c.replace(/seoTitle: 'JetBrains AI是什么\？功能与优势',/, "seoTitle: 'JetBrains AI是什么？功能体验',");
c = c.replace(/seoDescription: '专为JetBrains系列IDE打造的AI代码助手，帮助开发者快速编写代码。',/, "seoDescription: '专为JetBrains系列IDE打造的智能AI代码助手，深度融合开发环境，帮助开发者快速编写高质量代码并进行重构。',");
c = c.replace(/seoDescription: '专为企业营销团队设计的AI文案生成工具。',/, "seoDescription: '专为企业营销团队设计的智能AI文案生成工具，帮助快速撰写爆款博客文章与营销邮件，大幅提升内容创作的产出效率。',");
c = c.replace(/seoDescription: 'Copy\.ai帮助团队快速生成营销文案和社交媒体帖子。',/, "seoDescription: '了解Copy.ai如何帮助团队快速生成高质量社交媒体帖子、营销邮件和博客内容，以及其最新推出的销售自动化工作流。',");
c = c.replace(/seoTitle: 'Writesonic怎么用\？功能与优势',/, "seoTitle: 'Writesonic是什么？优势与场景',");
c = c.replace(/seoDescription: '支持生成SEO优化的长篇文章与营销内容的AI工具。',/, "seoDescription: 'Writesonic是专为创作者与营销团队打造的AI内容生成工具，支持一键创作深度SEO优化的长篇文章与高转化营销文案。',");

fs.writeFileSync('src/data/aiTools.ts', c);
