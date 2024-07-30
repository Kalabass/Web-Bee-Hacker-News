import { useSingleArticle } from '@/entities/article';
import {
  InfoTypography,
  TitleTypography,
  UserTypography,
} from '@/shared/ui/Typography';

import { Box, Divider, Skeleton, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ArticleContentProps {
  id: number;
}

export const ArticleContent: FC<ArticleContentProps> = ({ id }) => {
  const { data, isError, isLoading } = useSingleArticle(id);
  return (
    <>
      {isError && (
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100vh'
        >
          <Typography variant='h6' color='error'>
            Error loading article
          </Typography>
        </Box>
      )}
      {isLoading && (
        <>
          <Skeleton height='40px' width='100%' />
          <Divider sx={{ mb: 2 }} />
          <Skeleton animation='wave' component='h6' width='15%' height='25px' />
          <Skeleton animation='wave' component='h5' width='15%' height='25px' />
          <Skeleton animation='wave' component='h6' width='15%' height='25px' />
        </>
      )}
      {data && (
        <>
          <TitleTypography as='h2'>{data.title}</TitleTypography>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <UserTypography>
            <Link
              to={data.url!}
              style={{ textDecoration: 'none', color: 'primary.main' }}
            >
              {'View article ->'}
            </Link>
          </UserTypography>
          <InfoTypography>
            {new Date(data.time * 1000).toLocaleString()}
          </InfoTypography>
          <InfoTypography custom_color='primary'>
            {data.comments_count}{' '}
            {data.comments_count === 1 ? 'comment:' : 'comments:'}
          </InfoTypography>
        </>
      )}
    </>
  );
};
