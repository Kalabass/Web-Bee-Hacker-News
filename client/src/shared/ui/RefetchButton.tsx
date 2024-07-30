import { Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface RefetchButtonProps {
  onClick: () => void;
  text: string;
}

export const RefetchButton: FC<RefetchButtonProps> = ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick} variant='text' color='inherit'>
      <StyledTypography>{text}</StyledTypography>
    </StyledButton>
  );
};
const StyledButton = styled(Button)(() => ({
  padding: 0,
  color: 'white',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
  fontSize: '1rem',
}));
