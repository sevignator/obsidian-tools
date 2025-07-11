import fs from 'node:fs/promises';
import path from 'node:path';
import readline from 'node:readline/promises';

import { type ContentType } from '../types.ts';
import { CONFIG } from '../config.ts';
import { CONTENT_PATHS } from '../paths.ts';
import { checkDestination } from '../utils/checkDestination.ts';
import { getTemplate } from '../utils/getTemplate.ts';

export async function createFile(
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

    const filePath = path.join(
      CONFIG.vaultPath,
      contentTypePath,
      `${fileName}.md`
    );
    if (await checkDestination(filePath)) {
      const answer = await rl.question(
        `A file at "${filePath}" already exists. Would you like to overwrite it? [y/n] `
      );

      if (answer !== 'y') {
        rl.close();
        continue;
      }
    }

    rl.close();

    await fs.writeFile(filePath, template);
    console.log(`A new file has been created at "${filePath}".`);
  }
}
