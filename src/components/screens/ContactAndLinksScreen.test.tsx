import React from 'react';
import { testAppRender } from '../../test-utils/app-test-utils';
import { createTestAppContextData } from '../../test-utils/test-data';
import { screen } from '@testing-library/react';
import { ContactAndLinksScreen } from './ContactAndLinksScreen';

describe('<ContactAndLinksScreen/>', () => {
  it('renders', () => {
    testAppRender(<ContactAndLinksScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/ContactAndLinksScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
