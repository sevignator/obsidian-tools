import fs from 'node:fs/promises';
import path from 'node:path';

import { getVaultPath } from './vault.ts';

export type ContentType = 'article' | 'book' | 'course' | 'video';

export function getContentTypePath(contentType: ContentType) {
  const vaultPath = getVaultPath();
  const contentTypeMap: Record<ContentType, string | undefined> = {
    article: process.env.OBSIDIAN_ARTICLES_DIR,
    book: process.env.OBSIDIAN_BOOKS_DIR,
    course: process.env.OBSIDIAN_COURSE_DIR,
    video: process.env.OBSIDIAN_VIDEO_DIR,
  };

  if (contentTypeMap[contentType] === undefined) {
    throw new Error(
      `"${contentType}" is not a valid content type. Please enter a valid one.`
    );
  }

  return path.join(vaultPath, contentTypeMap[contentType]);
}

export async function getContentTypeDir(contentType: ContentType) {
  const contentTypePath = getContentTypePath(contentType);

  if (contentTypePath === undefined) {
    throw new Error(
      `Please provide a valid path for the "${contentType}" content type.`
    );
  }

  return await fs.readdir(contentTypePath);
}
