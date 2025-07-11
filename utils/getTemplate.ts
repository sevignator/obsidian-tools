import path from 'node:path';

import { CONFIG } from '@/config';
import { type ContentType, templateFileNames } from '@/types';
import { getFileContents } from '@/utils/getFileContents';

/**
 * @description Gets the template associated with a given content type.
 */
export async function getTemplate(contentType: ContentType) {
  const templateFileName = templateFileNames[contentType];
  return await getFileContents(templateFileName, CONFIG.templatesPath);
}
