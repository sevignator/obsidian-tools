import fs from 'node:fs/promises';
import path from 'node:path';

const configFilePath = path.join('./config.ts');
const configTemplate = `export const CONFIG = {
  vaultPath: null,
} as const;`;

await generateConfig();

/**
 * @description Generate a new `config.ts` file in the project's root.
 */
async function generateConfig() {
  await fs.writeFile(configFilePath, configTemplate);
}
