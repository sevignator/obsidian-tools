import fs from 'node:fs/promises';
import readline from 'node:readline/promises';

import { checkDestination } from '../utils/checkDestination.ts';

const pathsFilePath = './paths.ts';
const pathsTemplate = `import { type ContentType } from './types.ts';

export const CONTENT_PATHS: Record<ContentType, string> = {};`;

await generatePaths();

/**
 * @description Generates a new `paths.ts` file in the project's root.
 *
 * The resulting file can be committed into Git, since its values are vault-specific.
 */
async function generatePaths() {
  const pathsFileExists = await checkDestination(pathsFilePath);

  if (pathsFileExists) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await rl.question(
      `A paths file already exists at "${pathsFilePath}". Would you like to override it? [y/n] `
    );

    if (answer === 'y') {
      await fs.writeFile(pathsFilePath, pathsTemplate);
      console.log(`The paths file at "${pathsFilePath}" was overwritten.`);
    }

    rl.close();
  } else {
    await fs.writeFile(pathsFilePath, pathsTemplate);
    console.log(`A new paths file was generated at "${pathsFilePath}".`);
  }
}
