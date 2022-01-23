import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Location } from 'history';
import { HeaderData } from '../../types/header-data';
import { AppBar, Container, Toolbar } from '@mui/material';
import { ScreenRoutes } from './ScreenRoutes';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';

export function Layout(): React.ReactElement {
  const location: Location = useLocation();

  return (
    <div>
      <AppBar position={'fixed'}>
        <Container sx={{ width: ['100%', '100%', 900, 1200], padding: 0 }}>
          <Toolbar>
            <Header headerData={getHeaderData(location)} />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container sx={{ width: ['100%', '100%', 900, 1200], paddingTop: 10 }}>
        <main>
          <ScreenRoutes />
        </main>
      </Container>
    </div>
  );
}

function getHeaderData(location: Location): HeaderData {
  const labelUrlPairIndex = LABEL_URL_PAIRS.findIndex(
    (pair) => location.pathname === pair.url
  );

  if (labelUrlPairIndex === -1) {
    return {
      navigatePreviousData: undefined,
      navigateNextData: undefined,
    };
  }

  const previousData =
    labelUrlPairIndex > 0
      ? {
          text: LABEL_URL_PAIRS[labelUrlPairIndex - 1].label,
          link: LABEL_URL_PAIRS[labelUrlPairIndex - 1].url,
        }
      : undefined;
  const nextData =
    labelUrlPairIndex < LABEL_URL_PAIRS.length - 1
      ? {
          text: LABEL_URL_PAIRS[labelUrlPairIndex + 1].label,
          link: LABEL_URL_PAIRS[labelUrlPairIndex + 1].url,
        }
      : undefined;

  return {
    navigatePreviousData: previousData,
    navigateNextData: nextData,
  };
}
