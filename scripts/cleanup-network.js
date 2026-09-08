const fs = require('fs');
let c = fs.readFileSync('src/data/aiTools.ts', 'utf8');

c = c.replace(
  /网络代理以及 GitHub Copilot 服务状态/,
  "网络连接以及 GitHub Copilot 服务状态"
);
c = c.replace(
  /'网络代理与连通性'/,
  "'网络连通性'"
);
c = c.replace(
  /请检查代理节点是否对静态资源域名进行了拦截或延迟过高。/,
  "请检查官方服务状态、浏览器缓存和当前网络连接。"
);
c = c.replace(
  /检查浏览器是否使用了不稳定的代理节点。/,
  "检查当前网络连接状态。"
);
c = c.replace(
  /请排查网络代理策略，并确认当前账号是否存在区域网络锁定。/,
  "请检查官方支持范围与当前网络连接。"
);

fs.writeFileSync('src/data/aiTools.ts', c);
console.log('Cleaned up banned network keywords');
