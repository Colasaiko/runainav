const fs = require('fs');

let c = fs.readFileSync('src/app/guides/[slug]/page.tsx', 'utf8');

c = c.replace(/href="\/coming-soon"/g, 'href="/guides/ai-network"');
// Ensure we only replace the ones related to network.
// In `page.tsx`, it's likely a button like "查看网络指南" next to the main CTA. Let's see what the text is.
// Actually, wait, let's look at the surrounding code before blindly replacing.
