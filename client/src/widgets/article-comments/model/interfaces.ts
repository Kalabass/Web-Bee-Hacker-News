import { Item } from '@/shared/model/article-interfaces/interfaces';

export interface ArticleCommentsProps {
  data: Item[] | undefined;
  isError: boolean;
}
