import { commandsRegistry } from './commands/index.ts';

const cliArgs = process.argv;
const commandName = cliArgs[2];
const commandArgs = cliArgs.slice(3);

runCommand(commandName, ...commandArgs);

function runCommand(commandName: string, ...args: string[]) {
  const availableCommandNames = Object.keys(commandsRegistry);

  if (!availableCommandNames.includes(commandName)) {
    console.log(`The "${commandName}" command name doesn't exist.`);
    return;
  }

  commandsRegistry[commandName].callback(...args);
}
