import { AppRoutes } from '@/shared/const/AppRoutes';
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
    <StyledLink to={`${AppRoutes.ARTICLE.replace(':id', `${id}`)}`}>
      <StyledCard variant='outlined'>
        <StyledCardContent>
          <TitleTypography>{title}</TitleTypography>
          <StyledStack>
            <UserTypography>by {user}</UserTypography>
            <InfoTypography>{time_ago}</InfoTypography>
            <InfoTypography>
              {points} {points === 1 ? 'point' : 'points'}
            </InfoTypography>
          </StyledStack>
        </StyledCardContent>
      </StyledCard>
    </StyledLink>
  );
};

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  gap: theme.spacing(1),
  alignItems: 'center',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  marginBottom: theme.spacing(2),
}));

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 16px;
`;

const StyledCard = styled(Card)`
  width: '100%';
`;
