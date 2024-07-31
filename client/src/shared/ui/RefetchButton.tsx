import { Button, Typography, styled } from '@mui/material';
import { UseQueryResult } from '@tanstack/react-query';
import { FC } from 'react';
import { toast } from 'react-toastify';

interface RefetchButtonProps {
  entity: string;
  query: UseQueryResult;
}

export const RefetchButton: FC<RefetchButtonProps> = ({ entity, query }) => {
  const { refetch, isSuccess, isError, isFetching } = query;
  const onCLickHandler = () => {
    refetch();
    if (isSuccess) toast.success(`${entity} refreshed`);
    if (isError) toast.error('Something went wrong');
  };

  return (
    <StyledButton
      disabled={isFetching}
      onClick={onCLickHandler}
      variant='text'
      color='inherit'
    >
      <StyledTypography>refresh {entity}</StyledTypography>
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
