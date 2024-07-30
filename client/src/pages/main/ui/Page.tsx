import { useArticles } from '@/entities/article';

import { ArticlesList } from '@/features/articles-list';
import { Loader } from '@/shared/ui/Loader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { NavBar } from '@/widgets/nav-bar';
import { Box } from '@mui/material';
import { FC } from 'react';
import { RefetchButton } from '../../../shared/ui/RefetchButton';

export const MainPage: FC = () => {
  const { data, isLoading, isError, refetch } = useArticles();

  return (
    <>
      <NavBar
        children={
          <RefetchButton text='Refresh Articles' onClick={() => refetch()} />
        }
      />
      <PageContainer>
        {isError && <Box>Error</Box>}
        {isLoading && <Loader />}
        {data && <ArticlesList data={data} />}
      </PageContainer>
    </>
  );
};
