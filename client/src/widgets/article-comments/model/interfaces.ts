import { CommentData } from '@/shared/model/articleInterfaces/interfaces';

export interface ArticleCommentsProps {
  data: CommentData[] | undefined;
  isError: boolean;
}
