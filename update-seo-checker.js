const fs = require('fs');

const path = 'scripts/check-seo-lengths.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("if (testDetailsCount !== 5) {", "if (testDetailsCount !== 7) {");
content = content.replace("Expected 5 Test Detail metadata records", "Expected 7 Test Detail metadata records");

fs.writeFileSync(path, content, 'utf8');

console.log("Updated check-seo-lengths.js");
