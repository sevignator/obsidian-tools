import fs from 'node:fs/promises';
import path from 'node:path';

import { getVaultPath } from './getVaultPath.ts';

const vaultPath = getVaultPath();

export async function getFileContents(
  fileName: string,
  location: string = vaultPath
) {
  const filePath = path.join(location, fileName);

  return await fs.readFile(filePath, {
    encoding: 'utf-8',
  });
}
