import fs from 'node:fs/promises';
import path from 'node:path';

const pathsFilePath = path.join('./paths.ts');
const pathsTemplate = `import { ContentType } from './types.ts';

export const TEMPLATES_PATH = '';

export const CONTENT_PATHS: Record<ContentType, string> = {};`;

await generatePaths();

/**
 * @description Generate a new `paths.ts` file in the project's root.
 *
 * This file can be committed into Git, since its values are vault-specific.
 */
async function generatePaths() {
  await fs.writeFile(pathsFilePath, pathsTemplate);
}
