import { Box, CircularProgress, styled } from '@mui/material';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <StyledLoaderBox>
      <CircularProgress size={200} />
    </StyledLoaderBox>
  );
};

const StyledLoaderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
