import { Box, Button, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NotFoundBoxProps } from '../model/ui/interfaces';

export const NotFoundBox: FC<NotFoundBoxProps> = ({ text }) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <StyledBox>
      <Typography variant='h4' gutterBottom>
        {capitalizedText} Not Found
      </Typography>
      <Typography variant='body1' gutterBottom>
        The {text} you're looking for doesn't exist.
      </Typography>
      <Button variant='contained' component={Link} to='/'>
        Go to Home
      </Button>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;
