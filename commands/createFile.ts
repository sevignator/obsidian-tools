import fs from 'node:fs/promises';
import path from 'node:path';

import { type ContentType } from '../types.ts';
import { CONTENT_PATHS } from '../paths.ts';

export async function createFile(contentType: ContentType, fileName: string) {
  const contentTypePath = CONTENT_PATHS[contentType];
  const filePath = path.join(contentTypePath, `${fileName}.md`);

  await fs.writeFile(filePath, '');

  console.log(`A new file has been created at "${filePath}".`);
}
