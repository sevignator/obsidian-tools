import fs from 'node:fs/promises';

import { CONFIG } from '../config.ts';

export async function checkVault() {
  try {
    await fs.access(CONFIG.vaultPath);
    console.log(
      `The vault at "${CONFIG.vaultPath}" can successfully be accessed!`
    );
  } catch {
    console.log(`There's no vault at "${CONFIG.vaultPath}".`);
  }
}
