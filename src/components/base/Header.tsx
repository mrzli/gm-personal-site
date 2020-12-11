import React, { CSSProperties } from 'react';
import { HeaderData } from '../../types/header-data';
import { Hidden, SvgIcon } from '@material-ui/core';
import { ArrowLeftBox, ArrowRightBox, Home } from 'mdi-material-ui';
import { Link } from 'react-router-dom';

interface HeaderProps {
  readonly headerData: HeaderData;
}

export function Header(props: HeaderProps): React.ReactElement {
  const previousData = props.headerData.navigatePreviousData;
  const nextData = props.headerData.navigateNextData;

  const navStyles: CSSProperties = {
    fontSize: '1.8em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const prevNextStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  };

  const linkStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <header style={{ width: '100%' }}>
      <nav style={navStyles}>
        <Link to={'/'} aria-label={'home'} style={linkStyles}>
          <SvgIcon component={Home} fontSize={'large'} />
        </Link>
        <div style={prevNextStyles}>
          {previousData && (
            <Link
              to={previousData.link}
              aria-label={'previous'}
              style={{ ...linkStyles, gridColumn: 1 }}
            >
              <SvgIcon component={ArrowLeftBox} fontSize={'large'} />
              <Hidden xsDown={true}>
                <span style={{ marginLeft: 10 }}>{previousData.text}</span>
              </Hidden>
            </Link>
          )}
          {previousData && nextData && (
            <div style={{ margin: '0 10px' }}>|</div>
          )}
          {nextData && (
            <Link to={nextData.link} aria-label={'next'} style={linkStyles}>
              <Hidden xsDown={true}>
                <span style={{ marginRight: 10 }}>{nextData.text}</span>
              </Hidden>
              <SvgIcon component={ArrowRightBox} fontSize={'large'} />
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
