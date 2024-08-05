import { Item } from '@/shared/model/articleInterfaces/interfaces';

export interface ArticleCommentsProps {
  data: Item[] | undefined;
  isError: boolean;
}
