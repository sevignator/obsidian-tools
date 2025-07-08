import { createFile } from './create-file.ts';

export const commandsRegistry = {
  'create-file': {
    name: 'create-file',
    description: 'Creates a single file.',
    callback: createFile,
  },
};
