import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Montserrat, sans-serif',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#FFAF35',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3498DB',
      contrastText: '#ffffff',
    },
  },
  spacing: 5,
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#FFAF35',
        },
      },
    },
  },
});
