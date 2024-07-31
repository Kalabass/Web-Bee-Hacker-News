import { CommentTree } from '@/features/comment-tree';
import { Box } from '@mui/material';
import { FC } from 'react';

import { ArticleCommentsProps } from '../model/interfaces';

export const ArticleComments: FC<ArticleCommentsProps> = ({
  isError,
  data,
}) => {
  return (
    <>
      {isError && <Box>Error</Box>}
      {data && <CommentTree comments={data} />}
    </>
  );
};
