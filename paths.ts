import { type ContentType } from '@/types';

export const CONTENT_PATHS: Record<ContentType, string> = {
  article: 'Bibliography/Articles',
  book: 'Bibliography/Books',
  course: 'Bibliography/Courses',
  meeting: 'Meetings',
  newsletter: 'Bibliography/Newsletter',
  podcast: 'Bibliography/Podcasts',
  video: 'Bibliography/Videos',
  weekly: 'Journal/Weekly',
};
