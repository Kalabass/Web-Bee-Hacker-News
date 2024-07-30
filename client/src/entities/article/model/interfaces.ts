import { FeedItem } from '@/shared/interfaces';

export interface ArticleCardProps
  extends Pick<FeedItem, 'title' | 'points' | 'user' | 'time_ago' | 'id'> {}
