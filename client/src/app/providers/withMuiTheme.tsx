import { ThemeProvider } from '@emotion/react';
import MuiTheme from '../styles/muiTheme';

export const withMuiTheme = (component: () => React.ReactNode) => () => (
  <ThemeProvider theme={MuiTheme}>{component()}</ThemeProvider>
);
