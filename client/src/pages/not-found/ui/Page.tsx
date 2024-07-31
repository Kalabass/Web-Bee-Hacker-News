import { NavBar } from '@/widgets/nav-bar';
import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        textAlign='center'
      >
        <Typography variant='h4' gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant='body1' gutterBottom>
          The page you're looking for doesn't exist.
        </Typography>
        <Button variant='contained' onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Box>
    </>
  );
};
