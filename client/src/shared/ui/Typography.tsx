import { styled, Typography } from '@mui/material';

export const TitleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '1.5rem',
  },
  fontSize: '1.5rem',
  fontWeight: '500',
}));

export const UserTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})<{ customColor?: string }>(({ theme, customColor }) => ({
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '0.9rem',
  },
  fontSize: '1.5rem',
  fontWeight: 500,
  color: customColor ? customColor : theme.palette.primary.main,
}));

export const InfoTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'custom_color',
})<{ custom_color?: string }>(({ theme, custom_color }) => ({
  fontSize: '1.25rem',
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.between('xs', 'sm')]: {
    fontSize: '0.8rem',
  },
  color: custom_color ? custom_color : theme.palette.text.secondary,
  variant: 'body2',
}));
