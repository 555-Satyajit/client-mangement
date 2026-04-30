import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Palette values for light mode
          primary: {
            main: '#4f46e5', // Indigo 600
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
          },
          divider: 'rgba(0, 0, 0, 0.08)',
        }
      : {
          // Palette values for dark mode
          primary: {
            main: '#6366f1', // Indigo 500
          },
          background: {
            default: '#020617', // Deep Slate 950
            paper: '#0f172a',    // Slate 900
          },
          divider: 'rgba(255, 255, 255, 0.08)',
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem', // ~56px
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.25rem', // ~36px
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.5rem', // ~24px
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove the default MUI dark mode gradient
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
