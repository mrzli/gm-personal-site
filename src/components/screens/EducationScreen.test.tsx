import React from 'react';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { EducationScreen } from './EducationScreen';

describe('<EducationScreen/>', () => {
  it('renders', () => {
    testAppRender(<EducationScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Formal Education/);
    expect(textElement).toBeInTheDocument();
  });
});
