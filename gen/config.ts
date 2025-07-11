import fs from 'node:fs/promises';
import readline from 'node:readline/promises';

import { checkDestination } from '../utils/checkDestination.ts';

const configFilePath = './config.ts';
const configTemplate = `export const CONFIG = {
  vaultPath: null,
  templatesPath: 'Templates',
} as const;`;

await generateConfig();

/**
 * @description Generate a new `config.ts` file in the project's root.
 */
async function generateConfig() {
  const configFileExists = await checkDestination(configFilePath);

  if (configFileExists) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await rl.question(
      `A config file already exists at "${configFilePath}". Would you like to override it? [y/n] `
    );

    if (answer === 'y') {
      await fs.writeFile(configFilePath, configTemplate);
      console.log(`The config file at "${configFilePath}" was overwritten.`);
    }

    rl.close();
  } else {
    await fs.writeFile(configFilePath, configTemplate);
    console.log(`A new config file was generated at "${configFilePath}".`);
  }
}
