import React from 'react';
import { Header } from './Header';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { testAppRender } from '../../test/utils/app-test-utils';
import { HeaderData } from '../../types/header-data';
import { RenderResult, screen } from '@testing-library/react';
import { createMatchMedia } from '../../test/utils/test-utils';
import userEvent from '@testing-library/user-event';
import { Route, Switch } from 'react-router-dom';

describe('<Header/>', () => {
  const FULL_HEADER_DATA: HeaderData = {
    navigatePreviousData: { text: 'Previous', link: '/previous' },
    navigateNextData: { text: 'Next', link: '/next' }
  };

  function renderHeaderWithPreviousNextLinks(
    headerData: HeaderData
  ): RenderResult {
    const component = (
      <Switch>
        <Route exact={true} path={'/'}>
          <div>{'Home Page'}</div>
        </Route>
        <Route exact={true} path={'/current'}>
          <Header headerData={headerData} />
        </Route>
        <Route exact={true} path={'/previous'}>
          <div>{'Previous Page'}</div>
        </Route>
        <Route exact={true} path={'/next'}>
          <div>{'Next Page'}</div>
        </Route>
      </Switch>
    );
    return testAppRender(component, createTestAppContextData(), '/current');
  }

  beforeAll(() => {
    window.matchMedia = createMatchMedia(1920);
  });

  it('render with previous/next', () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /next/i })).toBeInTheDocument();
  });

  it('render without previous/next', () => {
    renderHeaderWithPreviousNextLinks({
      navigatePreviousData: undefined,
      navigateNextData: undefined
    });

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /previous/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /next/i })
    ).not.toBeInTheDocument();
  });

  it("Click 'Home' navigates to home page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const upLink = screen.getByRole('link', {
      name: /home/i
    });
    userEvent.click(upLink);
    expect(screen.queryByText(/Home Page/)).toBeInTheDocument();
  });

  it("Click 'Previous' navigates to previous page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const previousLink = screen.getByRole('link', {
      name: /previous/i
    });
    userEvent.click(previousLink);
    expect(screen.queryByText(/Previous Page/)).toBeInTheDocument();
  });

  it("Click 'Next' navigates to next page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const nextLink = screen.getByRole('link', {
      name: /next/i
    });
    userEvent.click(nextLink);
    expect(screen.queryByText(/Next Page/)).toBeInTheDocument();
  });
});
