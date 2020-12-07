import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';
import { wrapComponent } from './create-app-utils';
import { createAppGlobals } from './app-globals';
import reportWebVitals from '../reportWebVitals';
import { createAppContextData } from './app-context';
import { createAppMuiTheme } from './create-app-mui-theme';

export function createApp(): React.ReactElement {
  const component = <App />;

  const globals = createAppGlobals();
  const appContextData = createAppContextData(globals);
  const theme = createAppMuiTheme();

  return wrapComponent(component, appContextData, theme, false, '');
}

export function setupApp(app: React.ReactElement): void {
  ReactDOM.render(app, document.getElementById('root'));

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals(undefined);
}
