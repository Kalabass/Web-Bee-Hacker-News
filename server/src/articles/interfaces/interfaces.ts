export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

export interface Item {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
}

export interface IndividualArticleData
  extends Pick<FeedItem, 'title' | 'url' | 'comments_count'> {
  time: string;
}

export interface ArticleData
  extends Pick<FeedItem, 'title' | 'points' | 'user' | 'time_ago' | 'id'> {}

export interface CommentData
  extends Pick<
    Item,
    'user' | 'content' | 'comments_count' | 'level' | 'time_ago' | 'id'
  > {
  comments: CommentData[];
}
