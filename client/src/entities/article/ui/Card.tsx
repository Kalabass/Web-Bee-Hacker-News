import {
  InfoTypography,
  TitleTypography,
  UserTypography,
} from '@/shared/ui/Typography';
import { Card, CardContent, Stack, styled } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArticleCardProps } from '../model/interfaces';

export const ArticleCard: FC<ArticleCardProps> = ({
  time_ago,
  title,
  points,
  user,
  id,
}) => {
  return (
    <Card
      variant='outlined'
      component={Link}
      to={`article/${id}`}
      sx={{ width: '100%', marginBottom: 2 }}
    >
      <StyledCardContent>
        <TitleTypography as='h2'>{title}</TitleTypography>
        <Stack direction='row' spacing={1}>
          <UserTypography>by {user}</UserTypography>
          <InfoTypography>{time_ago}</InfoTypography>
          <InfoTypography>
            {' '}
            {points} {points == 1 ? 'point' : 'points'}{' '}
          </InfoTypography>
        </Stack>
      </StyledCardContent>
    </Card>
  );
};

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
`;
