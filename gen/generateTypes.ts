import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import { getTemplatesDir } from '../utils/getTemplatesDir.ts';
import { getTemplatesPath } from '../utils/getTemplatesPath.ts';
import { getFileContents } from '../utils/getFileContents.ts';

const templatesPath = getTemplatesPath();
const templatesDir = await getTemplatesDir();
const typesFilePath = path.join('./types.ts');

/**
 * @description Create types based on the vault's templates
 */
export async function generateTypes() {
  console.log('Generating types...');

  const contentTypes: string[] = [];

  for (const templateFileName of templatesDir) {
    const template = await getFileContents(templateFileName, templatesPath);
    const templateFrontmatter = matter(template).data;
    const contentType = templateFrontmatter['content_type'];

    if (!contentType) {
      continue;
    }

    contentTypes.push(`'${contentType}'`);
  }

  fs.writeFile(
    typesFilePath,
    `export type ContentType = ${contentTypes.join(' | ')};\n`
  );
}
