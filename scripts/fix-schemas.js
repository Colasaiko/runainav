const fs = require('fs');
let c = fs.readFileSync('src/app/ai/[filter]/page.tsx', 'utf8');

c = c.replace(/<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(faqSchema\) \}\} \/>/, `        {/* Schema Injection */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />`);

fs.writeFileSync('src/app/ai/[filter]/page.tsx', c);
