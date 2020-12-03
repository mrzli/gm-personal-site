import React from 'react';
import { ScreenRoutes } from './components/base/ScreenRoutes';

export function App(): React.ReactElement {
  return (
    <div>
      <h1>{'Hello React'}</h1>
      <ScreenRoutes />
    </div>
  );
}
