import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import { CONFIG } from '@/config';
import { checkDestination } from '@/utils/checkDestination';
import { getTemplateFileNames } from '@/utils/getTemplateFileNames';
import { getFileContents } from '@/utils/getFileContents';

const typesFilePath = './types.ts';
const templatesPath = path.join(CONFIG.templatesPath);
const templatesDir = await getTemplateFileNames();

await generateTypes();

/**
 * @description Creates types based on the `content_type` property found in the
 * vault's templates.
 */
export async function generateTypes() {
  const typesFileExists = await checkDestination(typesFilePath);
  const contentTypes: string[] = [];
  const templateFileNames: string[] = [];

  for (const templateFileName of templatesDir) {
    const template = await getFileContents(templateFileName, templatesPath);
    const templateFrontmatter = matter(template).data;
    const contentType = templateFrontmatter['content_type'];

    if (!contentType) {
      continue;
    }

    contentTypes.push(contentType);
    templateFileNames.push(templateFileName);
  }

  // Delete existing file since it's set to read-only, and cannot be overwritten.
  if (typesFileExists) {
    await fs.rm(typesFilePath);
  }

  await fs.writeFile(
    typesFilePath,
    [
      `export type ContentType = ${contentTypes
        .map((contentType) => `'${contentType}'`)
        .join(' | ')};`,
      ``,
      `export const templateFileNames: Record<ContentType, string> = {`,
      `  ${contentTypes
        .map(
          (contentType, index) =>
            `${contentType}: '${templateFileNames[index]}'`
        )
        .join(',\n  ')}`,
      `};`,
    ].join('\n')
  );

  // Make the types file readonly.
  await fs.chmod(typesFilePath, 0o444);

  console.log('Types were generated!');
}
