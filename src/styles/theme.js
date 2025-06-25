// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
  },
   typography: {
    color:'#6F6F6F',
    fontFamily: `'Roboto Mono', monospace`,
  },
});

export default theme;
