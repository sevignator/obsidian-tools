import path from 'node:path';

export function getVaultPath() {
  const obsidianVaultPath = process.env.VAULT_PATH;

  if (!obsidianVaultPath) {
    throw new Error('Please define a `VAULT_PATH` environment variable.');
  }

  return path.join(obsidianVaultPath);
}
