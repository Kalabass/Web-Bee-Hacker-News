import { Route, Routes } from 'react-router-dom';

import { ArticlePage } from './article-page';
import { MainPage } from './main';
import { NotFoundPage } from './not-found';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/article/:id' element={<ArticlePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
