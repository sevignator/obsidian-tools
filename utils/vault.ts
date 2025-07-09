import fs from 'node:fs/promises';
import path from 'node:path';

export function getVaultPath() {
  const obsidianVaultPath = process.env.OBSIDIAN_VAULT_PATH;

  if (!obsidianVaultPath) {
    throw new Error(
      'Please define a `OBSIDIAN_VAULT_PATH` environment variable.'
    );
  }

  return path.join(obsidianVaultPath);
}

export async function getVaultDir() {
  const vaultPath = getVaultPath();
  return await fs.readdir(vaultPath);
}
