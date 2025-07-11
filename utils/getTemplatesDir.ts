import fs from 'node:fs/promises';
import path from 'node:path';

import { CONFIG } from '../config.ts';
import { TEMPLATES_PATH } from '../paths.ts';

/**
 * @description Gets the list of files within the templates directory.
 */
export async function getTemplatesDir() {
  const templatesPath = path.join(CONFIG.vaultPath, TEMPLATES_PATH);
  return await fs.readdir(templatesPath);
}
