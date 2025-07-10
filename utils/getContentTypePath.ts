import path from 'node:path';

import { getVaultPath } from './getVaultPath.ts';

export function getContentTypePath(contentType: string) {
  const vaultPath = getVaultPath();
  const contentTypeDirPath = process.env[`${contentType.toUpperCase()}S_DIR`];

  if (!contentTypeDirPath) {
    throw new Error(
      `Please add a "${contentTypeDirPath}" environment variable for the "${contentType}" content type.`
    );
  }

  return path.join(vaultPath, contentTypeDirPath);
}
