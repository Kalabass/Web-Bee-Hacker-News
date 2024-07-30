import { FeedItem } from '@/shared/model/article-interfaces/interfaces';

export interface ArticleCardProps
  extends Pick<FeedItem, 'title' | 'points' | 'user' | 'time_ago' | 'id'> {}
