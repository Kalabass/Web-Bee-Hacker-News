import { useCommentStore } from '@/shared/store/useCommentsStore';
import { InfoTypography, UserTypography } from '@/shared/ui/Typography';
import { Box, Button, Card, Stack, Typography, styled } from '@mui/material';

import DOMPurify from 'dompurify';
import { FC } from 'react';
import { CommentCardProps } from '../model/interfaces';

export const CommentCard: FC<CommentCardProps> = ({
  user,
  content,
  comments_count,
  level,
  time_ago,
  commentTree,
  id,
}) => {
  const { toggleCommentVisibility, isCommentVisible } = useCommentStore();
  const isVisible = isCommentVisible(id);

  const handleToggleVisibility = () => {
    toggleCommentVisibility(id);
  };

  return (
    <StyledCard elevation={0} level={level}>
      <Stack direction='row' spacing={1} alignItems='center'>
        <UserTypography CustomColor='text.primary'>{user}</UserTypography>
        <InfoTypography>{time_ago}</InfoTypography>
      </Stack>

      <Box>
        <StyledTypography
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />

        {comments_count > 0 && (
          <StyledButton variant='outlined' onClick={handleToggleVisibility}>
            {isVisible ? '-' : '+'}
          </StyledButton>
        )}
        {isVisible && commentTree}
      </Box>
    </StyledCard>
  );
};

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'level',
})<{ level: number }>(({ level }) => ({
  width: level === 0 ? '100%' : '98%',
}));

const StyledTypography = styled(Typography)`
  padding: 8px 0 8px 16px;
  border-left: 2px solid ${({ theme }) => theme.palette.primary.main};
  margin-left: 9px;
  font-size: 1rem;

  ${({ theme }) => theme.breakpoints.up('xl')} {
    font-size: 2rem;
  }
  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  align-items: center;

  display: flex;
  justify-content: center;
  padding: 0;
  min-width: 0;
  border: 2px solid;
`;
