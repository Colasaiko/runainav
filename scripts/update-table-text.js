const fs = require('fs');

const path = 'src/app/guides/vpn-slow-speed/page.tsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(
  '<p>测速记录模板（请填入实际数据）：</p>',
  `<h3 className="mt-8 mb-4">自己测速时，可以记录这些数据</h3>
              <p>自己测速时，可以重点记录下面这些指标：<strong>Ping</strong> 看响应速度，<strong>Download / Upload</strong> 看传输能力，<strong>丢包</strong>看连接稳定性，最后再结合实际使用体验一起判断。</p>`
);

c = c.replace(
  /<\/table>\s*<\/div>/,
  `</table>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-8 italic">建议在相同设备、相同网络和相同测速服务器下测试 2～3 次，再比较不同节点，避免只看一次结果下结论。</p>`
);

fs.writeFileSync(path, c);
console.log('done replacing');
