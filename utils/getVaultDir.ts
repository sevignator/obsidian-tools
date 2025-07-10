import fs from 'node:fs/promises';

import { getVaultPath } from './getVaultPath.ts';

export async function getVaultDir() {
  const vaultPath = getVaultPath();
  return await fs.readdir(vaultPath);
}
