import { Container, styled } from '@mui/material';

export const PageContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '1240px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '1920px',
  },
}));
