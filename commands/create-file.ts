import fs from 'node:fs/promises';
import path from 'node:path';
import { type ContentType } from '../utils/types.ts';

export async function createFile(
  location: string,
  contentType: ContentType,
  title: string
) {
  const obsidianVaultPath = process.env.OBSIDIAN_VAULT_PATH;

  if (!obsidianVaultPath) {
    throw new Error(
      'You must define a `OBSIDIAN_VAULT_PATH` environment variable.'
    );
  }

  console.log('Creating a new file!');

  const vaultPath = path.join(obsidianVaultPath);
  const vaultDir = await fs.readdir(vaultPath);

  console.log(vaultDir);
}
