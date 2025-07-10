import path from 'node:path';

import { getVaultPath } from './getVaultPath.ts';

/**
 * @description Gets the full path to the vault's templates directory.
 */
export function getTemplatesPath() {
  const vaultPath = getVaultPath();
  const templatesDir = process.env.TEMPLATES_DIR;

  if (!templatesDir) {
    throw new Error('Please define a `TEMPLATES_DIR` environment variable.');
  }

  return path.join(vaultPath, templatesDir);
}
