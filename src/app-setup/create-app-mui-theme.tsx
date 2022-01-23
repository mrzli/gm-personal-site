import React from 'react';
import { createTheme, ThemeProvider, Theme } from '@mui/material';

export function createAppMuiTheme(): Theme {
  return createTheme();
}

export function wrapWithTheme(
  component: React.ReactElement,
  theme: Theme
): React.ReactElement {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>;
}
