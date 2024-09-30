import { Box } from '@mui/material';
import { FC } from 'react';

import { CommentTree } from '@/features/commentTree';
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
