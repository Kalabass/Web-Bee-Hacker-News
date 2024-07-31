import { NotFoundBox } from '@/shared/ui/NotFoundBox';
import { NavBar } from '@/widgets/nav-bar';
import { FC } from 'react';

export const NotFoundPage: FC = () => {
  return (
    <>
      <NavBar />
      <NotFoundBox text='page' />
    </>
  );
};
