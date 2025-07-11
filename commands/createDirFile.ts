import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline/promises';

import { type ContentType } from '../types.ts';
import { CONFIG } from '../config.ts';
import { CONTENT_PATHS } from '../paths.ts';
import { checkDestination } from '../utils/checkDestination.ts';
import { getTemplate } from '../utils/getTemplate.ts';

export async function createDirFile(
  contentType: ContentType,
  ...fileNames: string[]
) {
  const template = await getTemplate(contentType);
  const contentTypePath = CONTENT_PATHS[contentType];

  for (const fileName of fileNames) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const dirPath = path.join(CONFIG.vaultPath, contentTypePath, fileName);
    const filePath = path.join(dirPath, `${fileName}.md`);

    if (await checkDestination(dirPath)) {
      const answer = await rl.question(
        `A "${dirPath}" already exists. Would you like to overwrite it? [y/n] `
      );

      if (answer === 'y') {
        await fs.rm(dirPath, {
          recursive: true,
          force: true,
        });
      } else {
        rl.close();
        continue;
      }
    }

    rl.close();

    await fs.mkdir(dirPath);
    await fs.writeFile(filePath, template);
    console.log(`A new directory file has been created at "${filePath}".`);
  }
}
