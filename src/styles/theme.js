import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#6F6F6F',
      fontFamily: `'Roboto Mono', monospace`,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      tablet: 1030,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;