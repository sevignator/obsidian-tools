import { generateSchema } from './generateSchema.ts';
import { generateTypes } from './generateTypes.ts';

await generateSchema();
await generateTypes();
