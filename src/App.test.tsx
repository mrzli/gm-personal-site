import React from 'react';
import { screen } from '@testing-library/react';
import { App } from './App';
import { testAppRender } from './test/utils/app-test-utils';
import { createTestAppContextData } from './test/data/app-test-data';

describe('<App/>', () => {
  it('renders hello react', () => {
    testAppRender(<App />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Hello React/i);
    expect(textElement).toBeInTheDocument();
  });
});
