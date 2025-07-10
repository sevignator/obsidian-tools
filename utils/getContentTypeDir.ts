import fs from 'node:fs/promises';

import { getContentTypePath } from './getContentTypePath.ts';

export async function getContentTypeDir(contentType: string) {
  const contentTypePath = getContentTypePath(contentType);

  if (contentTypePath === undefined) {
    throw new Error(
      `Please provide a valid path for the "${contentType}" content type.`
    );
  }

  return await fs.readdir(contentTypePath);
}
