import { checkVault } from '@/commands/checkVault';
import { createFile } from '@/commands/createFile';
import { createDirFile } from '@/commands/createDirFile';
import { checkFileInVault } from '@/commands/checkFileInVault';

interface Command {
  name: string;
  description: string;
  callback: (...args: any[]) => Promise<void>;
}

export const commandsRegistry: Record<string, Command> = {
  'check:fileInVault': {
    name: 'check:fileInVault',
    description: 'Checks whether a given file exists within a vault.',
    callback: checkFileInVault,
  },
  'check:vault': {
    name: 'check:vault',
    description: 'Checks whether the Obsidian vault can be accessed.',
    callback: checkVault,
  },
  'create:file': {
    name: 'create:file',
    description: 'Creates a single file.',
    callback: createFile,
  },
  'create:dirfile': {
    name: 'create:dirfile',
    description: 'Creates a directory file with its parent directory.',
    callback: createDirFile,
  },
};
