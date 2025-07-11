import fs from 'node:fs/promises';
import path from 'node:path';

import { CONFIG } from '@/config';

/**
 * @description Gets the list of files within the templates directory.
 */
export async function getTemplateFileNames() {
  const templatesPath = path.join(CONFIG.templatesPath);
  return await fs.readdir(templatesPath);
}
