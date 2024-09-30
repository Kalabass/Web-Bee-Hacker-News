import { AppRoutes } from '@/shared/const/AppRoutes';
import { createBrowserRouter } from 'react-router-dom';
import { ArticlePage } from './article';
import { MainPage } from './main';
import { NotFoundPage } from './notFound';

export const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: AppRoutes.ARTICLE,
    element: <ArticlePage />,
  },
]);
