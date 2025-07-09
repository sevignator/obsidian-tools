import fs from 'node:fs/promises';
import path from 'node:path';

import { getContentTypePath, type ContentType } from '../utils/content-type.ts';

export async function createFile(contentType: ContentType, filename: string) {
  const contentTypePath = getContentTypePath(contentType);
  const filePath = path.join(contentTypePath, filename);

  await fs.writeFile(filePath, '');

  console.log(`A new file has been created at "${filePath}".`);
}
