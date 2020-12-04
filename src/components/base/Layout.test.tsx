import React from 'react';
import { screen } from '@testing-library/react';
import { Layout } from './Layout';
import { createTestAppContextData } from '../../test-utils/test-data';
import { testAppRender } from '../../test-utils/app-test-utils';

describe('<Layout/>', () => {
  it('renders', () => {
    testAppRender(<Layout />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Layout/);
    expect(textElement).toBeInTheDocument();
  });
});
