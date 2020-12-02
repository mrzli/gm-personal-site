import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AppContextData, AppContext } from './app-context';
import { Theme } from '@material-ui/core';
import { wrapWithTheme } from './create-app-mui-theme';

export function wrapComponent(
  component: React.ReactElement,
  appContextData: AppContextData,
  theme: Theme,
  isMemoryRouter: boolean,
  initialLocationForMemoryRouter: string
): React.ReactElement {
  const routerWrappedComponent = getRouterWrappedComponent(
    component,
    isMemoryRouter,
    initialLocationForMemoryRouter
  );

  const themeWrappedComponent = wrapWithTheme(routerWrappedComponent, theme);

  return (
    <React.StrictMode>
      <AppContext.Provider value={appContextData}>
        {themeWrappedComponent}
      </AppContext.Provider>
    </React.StrictMode>
  );
}

function getRouterWrappedComponent(
  component: React.ReactElement,
  isMemoryRouter: boolean,
  initialLocationForMemoryRouter: string
): React.ReactElement {
  if (isMemoryRouter) {
    return (
      <MemoryRouter initialEntries={[initialLocationForMemoryRouter]}>
        {component}
      </MemoryRouter>
    );
  } else {
    return <BrowserRouter>{component}</BrowserRouter>;
  }
}
