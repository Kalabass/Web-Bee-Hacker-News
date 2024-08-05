import { FeedItem } from '@/shared/model/articleInterfaces/interfaces';

export interface ArticleCardProps
  extends Pick<FeedItem, 'title' | 'points' | 'user' | 'time_ago' | 'id'> {}
