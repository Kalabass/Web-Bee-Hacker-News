import { CommentData } from '@/shared/model/articleInterfaces/interfaces';
import { ReactNode } from 'react';

export interface CommentCardProps extends CommentData {
  commentTree: ReactNode;
}
