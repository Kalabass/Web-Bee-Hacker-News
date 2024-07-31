import { CommentCard } from '@/entities/comment';
import { List, styled } from '@mui/material';
import { FC } from 'react';

import { CommentTreeProps } from '../model/interfaces';

export const CommentTree: FC<CommentTreeProps> = ({ comments }) => {
  return (
    <List disablePadding>
      {comments.map((comment) => (
        <StyledList key={comment.id}>
          <CommentCard
            {...comment}
            commentTree={<CommentTree comments={comment.comments} />}
          />
        </StyledList>
      ))}
    </List>
  );
};

const StyledList = styled(List)`
  padding: 0;

  display: flex;
  justify-content: flex-end;
`;
