import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundBoxProps } from '../model/ui/interfaces';

export const NotFoundBox: FC<NotFoundBoxProps> = ({ text }) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='100vh'
      textAlign='center'
    >
      <Typography variant='h4' gutterBottom>
        {capitalizedText} Not Found
      </Typography>
      <Typography variant='body1' gutterBottom>
        The {text} you're looking for doesn't exist.
      </Typography>
      <Button variant='contained' component={Link} to='/'>
        Go to Home
      </Button>
    </Box>
  );
};
