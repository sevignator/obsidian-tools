import fs from 'node:fs/promises';

import { getTemplatesPath } from './getTemplatesPath.ts';

/**
 * @description Gets the list of files within the templates directory.
 */
export async function getTemplatesDir() {
  const templatesPath = getTemplatesPath();
  return await fs.readdir(templatesPath);
}
