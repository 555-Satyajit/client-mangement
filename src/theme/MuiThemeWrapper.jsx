import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useApp } from '../context/AppContext';
import { createAppTheme } from './muiTheme';

export const MuiThemeWrapper = ({ children }) => {
  const { theme } = useApp();

  // Memoize the theme to avoid unnecessary re-renders
  const muiTheme = useMemo(() => createAppTheme(theme), [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      {/* CssBaseline kickstarts an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
