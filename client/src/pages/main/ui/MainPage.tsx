import { useArticles } from '@/entities/article';
import { Loader } from '@/shared/ui/Loader';
import { PageContainer } from '@/shared/ui/PageContainer';
import { NavBar } from '@/widgets/nav-bar';
import { Box } from '@mui/material';
import { FC } from 'react';

import { ArticlesList } from '@/features/articlesList';
import { RefetchButton } from '../../../shared/ui/RefetchButton';

export const MainPage: FC = () => {
  const articlesQuery = useArticles();
  const { data, isLoading, isError } = articlesQuery;
  return (
    <>
      <NavBar
        children={<RefetchButton query={useArticles()} entity='articles' />}
      />
      <PageContainer>
        {isError && <Box>Error</Box>}
        {isLoading && <Loader />}
        {data && <ArticlesList data={data} />}
      </PageContainer>
    </>
  );
};
