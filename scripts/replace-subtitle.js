const fs = require('fs');
const path = 'src/app/guides/perplexity-search-guide/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/从第一次搜索到打开引用、交叉核对和继续追问，建立一套比“直接相信 AI 答案”更可靠的搜索方法。/, '从第一次搜索到打开引用、核对原文和继续追问，建立一套比“直接相信 AI 答案”更可靠的资料查询方法。');

fs.writeFileSync(path, c);
