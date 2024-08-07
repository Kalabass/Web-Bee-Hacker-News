import { useComments } from '@/entities/comment';
import { NotFoundBox } from '@/shared/ui/NotFoundBox';
import { PageContainer } from '@/shared/ui/PageContainer';
import { RefetchButton } from '@/shared/ui/RefetchButton';
import { ArticleComments } from '@/widgets/article-comments';
import { ArticleContent } from '@/widgets/article-content';
import { NavBar } from '@/widgets/nav-bar';
import { Paper } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ArticlePage: FC = () => {
  const { id } = useParams();
  const articleId = Number(id);
  const isInvalidId = isNaN(articleId);
  const commentsQuery = useComments(articleId);

  return (
    <>
      <NavBar>
        {isInvalidId && (
          <RefetchButton entity='comments' query={commentsQuery} />
        )}
      </NavBar>
      <PageContainer>
        {commentsQuery.isError || isInvalidId ? (
          <NotFoundBox text='article' />
        ) : (
          <Paper elevation={2} sx={{ padding: 2 }}>
            <ArticleContent id={articleId} />
            <ArticleComments {...commentsQuery} />
          </Paper>
        )}
      </PageContainer>
    </>
  );
};
