import React from 'react';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { PersonalInfoScreen } from './PersonalInfoScreen';

describe('<PersonalInfoScreen/>', () => {
  it('renders', () => {
    testAppRender(<PersonalInfoScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/PersonalInfoScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
