import React from 'react';
import { testAppRender } from '../../test-utils/app-test-utils';
import { createTestAppContextData } from '../../test-utils/test-data';
import { screen } from '@testing-library/react';
import { IntroScreen } from './IntroScreen';

describe('<IntroScreen/>', () => {
  it('renders', () => {
    testAppRender(<IntroScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/IntroScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
