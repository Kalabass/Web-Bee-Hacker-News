import { Route, Routes } from 'react-router-dom';
import { ArticlePage } from './article-page';
import { MainPage } from './main';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/article/:id' element={<ArticlePage />} />
    </Routes>
  );
};
