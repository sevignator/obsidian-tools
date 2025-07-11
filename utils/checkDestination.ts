import { type PathLike } from 'node:fs';
import fs from 'node:fs/promises';

/**
 * @description Checks whether a given destination exists within the file system.
 * This works with files and directories.
 */
export async function checkDestination(destinationPath: PathLike) {
  try {
    await fs.access(destinationPath);
    return true;
  } catch {
    return false;
  }
}
