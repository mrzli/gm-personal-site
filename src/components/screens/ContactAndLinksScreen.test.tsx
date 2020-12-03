import React from 'react';
import { testAppRender } from '../../test-utils/app-test-utils';
import { createTestAppContextData } from '../../test-utils/test-data';
import { screen } from '@testing-library/react';
import { SectionsScreen } from './SectionsScreen';

describe('<SectionsScreen/>', () => {
  it('renders', () => {
    testAppRender(<SectionsScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/SectionsScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
