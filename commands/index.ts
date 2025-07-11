import { checkVault } from './checkVault.ts';
import { create } from './create.ts';

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
  create: {
    name: 'create',
    description: 'Creates a single file.',
    callback: create,
  },
};
