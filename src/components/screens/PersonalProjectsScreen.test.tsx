import React from 'react';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { PersonalProjectsScreen } from './PersonalProjectsScreen';

describe('<PersonalProjectsScreen/>', () => {
  it('renders', () => {
    testAppRender(<PersonalProjectsScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Personal Projects/);
    expect(textElement).toBeInTheDocument();
  });
});
