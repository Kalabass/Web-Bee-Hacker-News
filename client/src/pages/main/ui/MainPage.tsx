import { useArticles } from '@/entities/article';
import { Loader } from '@/shared/ui/Loader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { NavBar } from '@/widgets/nav-bar';
import { Box } from '@mui/material';
import { FC } from 'react';

import { ArticlesList } from '@/features/articlesList';

export const MainPage: FC = () => {
  const articlesQuery = useArticles();
  return (
    <>
      <NavBar entity='articles' query={articlesQuery} />
      <PageContainer>
        {articlesQuery.isError && <Box>Error</Box>}
        {articlesQuery.isLoading && <Loader />}
        {articlesQuery.data && <ArticlesList data={articlesQuery.data} />}
      </PageContainer>
    </>
  );
};
