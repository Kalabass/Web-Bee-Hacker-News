import { Item } from '@/shared/model/articleInterfaces/interfaces';
import { ReactNode } from 'react';

export interface CommentProps
  extends Pick<
    Item,
    'user' | 'content' | 'comments_count' | 'level' | 'time_ago' | 'id'
  > {
  commentTree: ReactNode;
}
