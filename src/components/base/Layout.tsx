import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Location } from 'history';
import { HeaderData } from '../../types/header-data';

interface LayoutProps {}

export function Layout(props: LayoutProps): React.ReactElement {
  const location: Location = useLocation();

  return <div>{'Layout'}</div>;
}

function getHeaderElement(location: Location): React.ReactElement {
  return (
    <Switch>
      <Route exact={true} path={'/'} />
      <Route path={'*'}>
        <Header headerData={getHeaderData(location)} />
      </Route>
    </Switch>
  );
}

function getHeaderData(location: Location): HeaderData {
  if (location.pathname.startsWith('/intro')) {
    return {
      navigatePreviousData: undefined,
      navigateNextData: undefined
    };
  }

  return {
    navigatePreviousData: undefined,
    navigateNextData: undefined
  };
}
