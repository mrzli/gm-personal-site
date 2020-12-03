import React from 'react';
import { testAppRender } from '../../test-utils/app-test-utils';
import { createTestAppContextData } from '../../test-utils/test-data';
import { screen } from '@testing-library/react';
import { ProsAndConsScreen } from './ProsAndConsScreen';

describe('<ProsAndConsScreen/>', () => {
  it('renders', () => {
    testAppRender(<ProsAndConsScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/ProsAndConsScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
