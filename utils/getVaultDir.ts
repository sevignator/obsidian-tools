import fs from 'node:fs/promises';

import { CONFIG } from '../config.ts';

export async function getVaultDir() {
  return await fs.readdir(CONFIG.vaultPath);
}
