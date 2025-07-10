import fs from 'node:fs/promises';
import path from 'node:path';

const schemaFilePath = path.join('./schema.ts');

export async function generateSchema() {
  console.log('Generating schema...');

  // @todo: Make it so that running this code generates an object where each key corresponds to a
  // content type, and each value is a nested object that contains that type's Frontmatter data.
  fs.writeFile(schemaFilePath, '// Schema generated!');
}
