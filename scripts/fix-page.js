const fs = require('fs');
let c = fs.readFileSync('src/app/ai/[filter]/page.tsx', 'utf8');

c = c.replace(/const faqSchema = \{[\s\S]*?mainEntity[\s\S]*?\};\s*const faqSchema = \{/, 'const faqSchema = {');
c = c.replace(/<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\} \/>[\s\S]*?<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\} \/>/, '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />');

fs.writeFileSync('src/app/ai/[filter]/page.tsx', c);
