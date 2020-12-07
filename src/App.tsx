import React from 'react';
import { Layout } from './components/base/Layout';
import { CssBaseline } from '@material-ui/core';

export function App(): React.ReactElement {
  return (
    <>
      <CssBaseline />
      <Layout />
    </>
  );
}
