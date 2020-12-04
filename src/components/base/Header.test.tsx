import React from 'react';
import { Header } from './Header';
import { createTestAppContextData } from '../../test-utils/test-data';
import { testAppRender } from '../../test-utils/app-test-utils';
import { HeaderData } from '../../types/header-data';
import { RenderResult, screen } from '@testing-library/react';
import { createMatchMedia } from '../../test-utils/test-utils';
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
      <>
        <Switch>
          <Route exact={true} path={'/'}>
            <div>Sections Page</div>
          </Route>
          <Route exact={true} path={'/current'}>
            <Header headerData={headerData} />
          </Route>
          <Route exact={true} path={'/previous'}>
            <div>Previous Page</div>
          </Route>
          <Route exact={true} path={'/next'}>
            <div>Next Page</div>
          </Route>
        </Switch>
      </>
    );
    return testAppRender(component, createTestAppContextData(), '/current');
  }

  beforeAll(() => {
    window.matchMedia = createMatchMedia(1920);
  });

  it('render with previous/next', () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    expect(
      screen.getByRole('navigation', { name: /previous/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: /next/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /up/i })).toBeInTheDocument();
  });

  it('render without previous/next', () => {
    renderHeaderWithPreviousNextLinks({
      navigatePreviousData: undefined,
      navigateNextData: undefined
    });

    expect(
      screen.queryByRole('navigation', { name: /previous/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('navigation', { name: /next/i })
    ).not.toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /up/i })).toBeInTheDocument();
  });

  it("Click 'Previous' navigates to previous page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const previousLinkElement = screen.getByRole('navigation', {
      name: /previous/i
    });
    userEvent.click(previousLinkElement);
    expect(screen.queryByText(/Previous Page/)).toBeInTheDocument();
  });

  it("Click 'Next' navigates to next page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const previousLinkElement = screen.getByRole('navigation', {
      name: /next/i
    });
    userEvent.click(previousLinkElement);
    expect(screen.queryByText(/Next Page/)).toBeInTheDocument();
  });

  it("Click 'Up' navigates to sections page", () => {
    renderHeaderWithPreviousNextLinks(FULL_HEADER_DATA);

    const previousLinkElement = screen.getByRole('navigation', {
      name: /up/i
    });
    userEvent.click(previousLinkElement);
    expect(screen.queryByText(/Sections Page/)).toBeInTheDocument();
  });
});
