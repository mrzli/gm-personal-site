import React from 'react';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core';

export function createAppMuiTheme(): Theme {
  return createMuiTheme();
}

export function wrapWithTheme(
  component: React.ReactElement,
  theme: Theme
): React.ReactElement {
  return <MuiThemeProvider theme={theme}>{component}</MuiThemeProvider>;
}
