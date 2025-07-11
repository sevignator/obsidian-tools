import fs from 'node:fs/promises';
import path from 'node:path';

import { CONFIG } from '../config.ts';

export async function getFileContents(
  fileName: string,
  pathToFile: string = CONFIG.vaultPath
) {
  const filePath = path.join(pathToFile, fileName);

  return await fs.readFile(filePath, {
    encoding: 'utf-8',
  });
}
