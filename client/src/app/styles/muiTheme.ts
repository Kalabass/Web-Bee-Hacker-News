import { createTheme } from '@mui/material/styles';

const miniUnit = 8;

const MuiTheme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6600',
    },
    secondary: {
      main: '#0066ff',
    },
    text: {
      primary: '#000000',
      secondary: 'gray',
    },
  },
  spacing: (factor: number) => `${factor * miniUnit}px`,
  shape: {
    borderRadius: 0,
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 600,
      md: 1240,
      lg: 1920,
      xl: 2240,
    },
  },
});

export default MuiTheme;
