import { Route, Routes } from 'react-router-dom';

import { ArticlePage } from './article';
import { MainPage } from './main';
import { NotFoundPage } from './notFound';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/article/:id' element={<ArticlePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
