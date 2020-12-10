import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Location } from 'history';
import { HeaderData } from '../../types/header-data';
import {
  AppBar,
  Container,
  createStyles,
  StyleRules,
  Theme,
  Toolbar
} from '@material-ui/core';
import { useStyles } from '../../utils/ui-hooks';
import { ScreenRoutes } from './ScreenRoutes';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';

interface LayoutProps {}

type ClassKey = 'container';

function stylesCallback(theme: Theme): StyleRules<ClassKey, LayoutProps> {
  return createStyles<ClassKey, LayoutProps>({
    container: {
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%'
      },
      [theme.breakpoints.only('md')]: {
        maxWidth: 900
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1200
      }
    }
  });
}

export function Layout(props: LayoutProps): React.ReactElement {
  const location: Location = useLocation();
  const classes = useStyles(props, stylesCallback);

  return (
    <div>
      <AppBar position={'fixed'}>
        <Container className={classes.container}>
          <Toolbar>{getHeaderElement(location)}</Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Container className={classes.container}>
        <main>
          <ScreenRoutes />
        </main>
      </Container>
    </div>
  );
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
  const labelUrlPairIndex = LABEL_URL_PAIRS.findIndex((pair) =>
    location.pathname.startsWith(pair.url)
  );

  if (labelUrlPairIndex === -1) {
    return {
      navigatePreviousData: undefined,
      navigateNextData: undefined
    };
  }

  const previousData =
    labelUrlPairIndex > 0
      ? {
          text: LABEL_URL_PAIRS[labelUrlPairIndex - 1].label,
          link: LABEL_URL_PAIRS[labelUrlPairIndex - 1].url
        }
      : undefined;
  const nextData =
    labelUrlPairIndex < LABEL_URL_PAIRS.length - 1
      ? {
          text: LABEL_URL_PAIRS[labelUrlPairIndex + 1].label,
          link: LABEL_URL_PAIRS[labelUrlPairIndex + 1].url
        }
      : undefined;

  return {
    navigatePreviousData: previousData,
    navigateNextData: nextData
  };
}
