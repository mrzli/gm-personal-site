import React from 'react';
import { testAppRender } from '../../test-utils/app-test-utils';
import { createTestAppContextData } from '../../test-utils/test-data';
import { screen } from '@testing-library/react';
import { SkillsOverviewScreen } from './SkillsOverviewScreen';

describe('<SkillsOverviewScreen/>', () => {
  it('renders', () => {
    testAppRender(<SkillsOverviewScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/SkillsOverviewScreen/);
    expect(textElement).toBeInTheDocument();
  });
});
