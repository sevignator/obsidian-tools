import fs from 'node:fs/promises';

import { CONFIG } from '../config.ts';
import { checkDestination } from '../utils/checkDestination.ts';

export async function checkVault() {
  const vaultExists = await checkDestination(CONFIG.vaultPath);

  if (vaultExists) {
    console.log(
      `The vault at "${CONFIG.vaultPath}" can successfully be accessed!`
    );
  } else {
    console.log(`There's no vault at "${CONFIG.vaultPath}".`);
  }
}
