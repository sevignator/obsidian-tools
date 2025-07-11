import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline/promises';

import { type ContentType } from '../types.ts';
import { CONFIG } from '../config.ts';
import { CONTENT_PATHS } from '../paths.ts';
import { fileExists } from '../utils/fileExists.ts';

export async function createFile(contentType: ContentType, fileName: string) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const contentTypePath = CONTENT_PATHS[contentType];
  const filePath = path.join(
    CONFIG.vaultPath,
    contentTypePath,
    `${fileName}.md`
  );

  if (await fileExists(filePath)) {
    const answer = await rl.question(
      `A file at "${filePath}" already exists. Would you like to overwrite it? [y/n] `
    );

    if (answer === 'y') {
      await fs.writeFile(filePath, 'NEW CONTENT');
    }
  } else {
    await fs.writeFile(filePath, 'ORIGINAL CONTENT');
    console.log(`A new file has been created at "${filePath}".`);
  }

  rl.close();
}
