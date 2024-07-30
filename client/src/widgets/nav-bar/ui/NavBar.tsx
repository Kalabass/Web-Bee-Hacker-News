import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavBarProps {
  children?: ReactNode;
}

export const NavBar: FC<NavBarProps> = ({ children }) => {
  return (
    <AppBar sx={{ position: 'sticky' }} elevation={1}>
      <Toolbar
        variant='dense'
        sx={{ gap: '8px', display: 'flex', justifyContent: 'space-between' }}
      >
        <StyledTypography fontWeight={800}>
          <Link to={'http://localhost:3000/'}>HackerNews</Link>
        </StyledTypography>
        {children}
      </Toolbar>
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
