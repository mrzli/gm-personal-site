import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SectionsScreen } from '../screens/SectionsScreen';

interface ScreenRoutesProps {}

export function ScreenRoutes(props: ScreenRoutesProps): React.ReactElement {
  return (
    <Switch>
      <Route exact={true} path={'/'}>
        <SectionsScreen />
      </Route>
      <Route path={'*'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
}
