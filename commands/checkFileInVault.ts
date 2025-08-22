import fs from 'node:fs/promises';
import path from 'node:path';

import { type ContentType } from '@/types';
import { CONFIG } from '@/config';
import { CONTENT_PATHS } from '@/paths';

/**
 * @description
 * Compares a given list with a vault directory's file names and prints out a report
 * indicating whether a file is already present or not.
 */
export async function checkFileInVault(
  contentType: ContentType,
  ...fileNames: string[]
) {
  const contentTypePath = CONTENT_PATHS[contentType];

  for (const fileName of fileNames) {
    try {
      const filePath = path.join(
        CONFIG.vaultPath,
        contentTypePath,
        `${fileName}`
      );

      await fs.access(filePath);

      console.log(`A directory file named "${fileName}" already exists.`);
    } catch (error) {
      console.log(`There's no directory file named "${fileName}".`);
    }
  }
}
