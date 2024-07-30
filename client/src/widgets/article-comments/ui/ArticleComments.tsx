import { useComments } from '@/entities/comment';
import { CommentTree } from '@/features/comment-tree';
import { Box } from '@mui/material';
import { FC } from 'react';

interface ArticleCommentsProps {
  id: number;
}

export const ArticleComments: FC<ArticleCommentsProps> = ({ id }) => {
  const { data, isError } = useComments(id);
  return (
    <>
      {isError && <Box>Error</Box>}
      {data && <CommentTree comments={data} />}
    </>
  );
};
