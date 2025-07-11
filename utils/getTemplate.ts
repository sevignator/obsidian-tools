import path from 'node:path';

import { CONFIG } from '../config.ts';
import { type ContentType, templateFileNames } from '../types.ts';
import { getFileContents } from './getFileContents.ts';

/**
 * @description Gets the template associated with a given content type.
 */
export async function getTemplate(contentType: ContentType) {
  const templateFileName = templateFileNames[contentType];
  return await getFileContents(templateFileName, CONFIG.templatesPath);
}
