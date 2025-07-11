import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import { CONFIG } from '../config.ts';
import { getFileContents } from '../utils/getFileContents.ts';

const typesFilePath = path.join('./types.ts');
const templatesPath = path.join(CONFIG.vaultPath, CONFIG.templatesDir);
const templatesDir = await getTemplatesDir();

generateTypes();

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

  await fs.rm(typesFilePath);

  await fs.writeFile(
    typesFilePath,
    `export type ContentType = ${contentTypes.join(' | ')};\n`
  );

  await fs.chmod(typesFilePath, 0o444);
}
