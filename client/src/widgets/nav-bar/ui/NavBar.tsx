import { AppBar, Toolbar, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PageContainer } from '@/shared/ui/PageContainer';
import { NavBarProps } from '../model/interfaces';

export const NavBar: FC<NavBarProps> = ({ children }) => {
  return (
    <AppBar sx={{ position: 'sticky' }} elevation={1}>
      <PageContainer>
        <Toolbar
          variant='dense'
          sx={{ gap: '8px', display: 'flex', justifyContent: 'space-between' }}
        >
          <StyledTypography fontWeight={800}>
            <Link to={'/'}>HackerNews</Link>
          </StyledTypography>
          {children}
        </Toolbar>
      </PageContainer>
    </AppBar>
  );
};

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '1.5rem',
  },
  fontSize: '1.5rem',
  fontWeight: 800,
}));
