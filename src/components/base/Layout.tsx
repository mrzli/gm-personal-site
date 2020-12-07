import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Location } from 'history';
import { HeaderData } from '../../types/header-data';
import { Container, createStyles, StyleRules, Theme } from '@material-ui/core';
import { useStyles } from '../../utils/ui-hooks';
import { ScreenRoutes } from './ScreenRoutes';

interface LayoutProps {}

type ClassKey = 'root';

function stylesCallback(theme: Theme): StyleRules<ClassKey, LayoutProps> {
  return createStyles<ClassKey, LayoutProps>({
    root: {
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
    <Container className={classes.root}>
      {getHeaderElement(location)}
      <main>
        <ScreenRoutes />
      </main>
    </Container>
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

interface LabelUrlPair {
  readonly label: string;
  readonly url: string;
}

const LABEL_URL_PAIRS: readonly LabelUrlPair[] = [
  {
    label: 'Intro',
    url: '/intro'
  },
  {
    label: 'Work History',
    url: '/work-history'
  },
  {
    label: 'Personal Info',
    url: '/personal-info'
  },
  {
    label: 'Education',
    url: '/education'
  },
  {
    label: 'Skills Overview',
    url: '/skills-overview'
  },
  {
    label: 'Pros & Cons',
    url: '/pros-and-cons'
  },
  {
    label: 'Contact & Links',
    url: '/contact-and-links'
  }
];

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
