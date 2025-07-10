import fs from 'node:fs/promises';
import path from 'node:path';

const schemaFilePath = path.join('./schema.ts');

export async function generateSchema() {
  console.log('Generating schema...');
  fs.writeFile(schemaFilePath, '// Schema generated!');
}
