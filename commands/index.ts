import { checkVault } from './checkVault.ts';
import { createFile } from './createFile.ts';

interface Command {
  name: string;
  description: string;
  callback: (...args: any[]) => Promise<void>;
}

export const commandsRegistry: Record<string, Command> = {
  'check-vault': {
    name: 'check-vault',
    description: 'Checks whether the Obsidian vault can be accessed.',
    callback: checkVault,
  },
  'create-file': {
    name: 'create-file',
    description: 'Creates a single file.',
    callback: createFile,
  },
};
