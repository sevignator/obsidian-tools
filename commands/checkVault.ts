import { CONFIG } from '@/config';
import { checkDestination } from '@/utils/checkDestination';

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
