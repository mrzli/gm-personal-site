import React, { CSSProperties } from 'react';
import { HeaderData } from '../../types/header-data';
import { Box, Grid, Hidden, SvgIcon } from '@material-ui/core';
import { ArrowLeftBox, ArrowRightBox, ArrowUpBox } from 'mdi-material-ui';
import { Link } from 'react-router-dom';

interface HeaderProps {
  readonly headerData: HeaderData;
}

export function Header(props: HeaderProps): React.ReactElement {
  const previousData = props.headerData.navigatePreviousData;
  const nextData = props.headerData.navigateNextData;

  const linkStyles: CSSProperties = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <header style={{ width: '100%' }}>
      <nav>
        <Box fontSize={'1.8em'} color={'text.primary'}>
          <Grid container={true}>
            <Grid item={true} xs={4}>
              {previousData && (
                <Link
                  to={previousData.link}
                  aria-label={'previous'}
                  style={linkStyles}
                >
                  <Grid
                    container={true}
                    spacing={1}
                    alignItems={'center'}
                    justify={'center'}
                  >
                    <SvgIcon component={ArrowLeftBox} fontSize={'large'} />
                    <Hidden smDown={true}>{previousData.text}</Hidden>
                  </Grid>
                </Link>
              )}
            </Grid>
            <Grid item={true} xs={4}>
              <Link to={'/'} aria-label={'up'} style={linkStyles}>
                <Grid
                  container={true}
                  spacing={1}
                  alignItems={'center'}
                  justify={'center'}
                >
                  <SvgIcon component={ArrowUpBox} fontSize={'large'} />
                  <Hidden smDown={true}>{'Sections'}</Hidden>
                </Grid>
              </Link>
            </Grid>
            <Grid item={true} xs={4}>
              {nextData && (
                <Link to={nextData.link} aria-label={'next'} style={linkStyles}>
                  <Grid
                    container={true}
                    spacing={1}
                    alignItems={'center'}
                    justify={'center'}
                  >
                    <Hidden smDown={true}>{nextData.text}</Hidden>
                    <SvgIcon component={ArrowRightBox} fontSize={'large'} />
                  </Grid>
                </Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </nav>
    </header>
  );
}
