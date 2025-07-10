import { createFile } from './createFile.ts';

interface Command {
  name: string;
  description: string;
  callback: (...args: any[]) => Promise<void>;
}

export const commandsRegistry: Record<string, Command> = {
  'create-file': {
    name: 'create-file',
    description: 'Creates a single file.',
    callback: createFile,
  },
};
