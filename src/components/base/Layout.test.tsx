import React from 'react';
import { screen } from '@testing-library/react';
import { Layout } from './Layout';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { testAppRender } from '../../test/utils/app-test-utils';

describe('<Layout/>', () => {
  it('renders sections', () => {
    testAppRender(<Layout />, createTestAppContextData(), '/');
    expect(
      screen.queryByRole('navigation', { name: /up/i })
    ).not.toBeInTheDocument();
    expect(screen.getByText(/SectionsScreen/)).toBeInTheDocument();
  });

  it('renders intro', () => {
    testAppRender(<Layout />, createTestAppContextData(), '/intro');
    expect(screen.getByText(/IntroScreen/)).toBeInTheDocument();
  });
});
