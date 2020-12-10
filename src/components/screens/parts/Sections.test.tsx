import React from 'react';
import { testAppRender } from '../../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { Sections } from './Sections';

describe('<Sections/>', () => {
  it('renders', () => {
    testAppRender(<Sections />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Sections/);
    expect(textElement).toBeInTheDocument();
  });
});
