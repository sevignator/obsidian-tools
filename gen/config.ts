import fs from 'node:fs/promises';
import readline from 'node:readline';

const configFilePath = './config.ts';
const configTemplate = `export const CONFIG = {
  vaultPath: null,
} as const;`;

await generateConfig();

/**
 * @description Generate a new `config.ts` file in the project's root.
 */
async function generateConfig() {
  try {
    await fs.access(configFilePath);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      `A config file already exists at "${configFilePath}". Would you like to override it? [y/n] `,
      async (answer) => {
        if (answer === 'y') {
          console.log(`Overwriting the config file at "${configFilePath}".`);
          await fs.writeFile(configFilePath, configTemplate);
          rl.close();
          process.exit();
        } else {
          rl.close();
          process.exit();
        }
      }
    );
  } catch {
    console.log(`Generating a new config file at "${configFilePath}".`);
    await fs.writeFile(configFilePath, configTemplate);
    process.exit();
  }
}
