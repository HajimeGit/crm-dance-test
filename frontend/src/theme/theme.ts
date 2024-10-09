import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#fbfbfb',
    },
    error: {
      main: '#FF0000',
    },
  },
  typography: {
    fontFamily: ['Albert Sans', 'sans-serif'].join(','),
  },
});
