import fs from 'node:fs/promises';
import readline from 'node:readline';

const pathsFilePath = './paths.ts';
const pathsTemplate = `import { ContentType } from './types.ts';

export const TEMPLATES_PATH = '';

export const CONTENT_PATHS: Record<ContentType, string> = {};`;

await generatePaths();

/**
 * @description Generates a new `paths.ts` file in the project's root.
 *
 * The resulting file can be committed into Git, since its values are vault-specific.
 */
async function generatePaths() {
  try {
    await fs.access(pathsFilePath);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `A paths file already exists at "${pathsFilePath}". Would you like to override it? [y/n] `,
      async (answer) => {
        if (answer === 'y') {
          console.log(`Overwriting the paths file at "${pathsFilePath}".`);
          await fs.writeFile(pathsFilePath, pathsTemplate);
          rl.close();
          process.exit();
        } else {
          rl.close();
          process.exit();
        }
      }
    );
  } catch {
    console.log(`Generating a new paths file at "${pathsFilePath}".`);
    await fs.writeFile(pathsFilePath, pathsTemplate);
    process.exit();
  }
}
