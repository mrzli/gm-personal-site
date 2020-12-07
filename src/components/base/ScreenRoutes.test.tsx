import React from 'react';
import { screen } from '@testing-library/react';
import { ScreenRoutes } from './ScreenRoutes';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { APP_SECTIONS_TEST_DATA } from '../../test/data/app-sections-test-data';

describe('<ScreenRoutes/>', () => {
  it('renders top sections screens', () => {
    testAppRender(<ScreenRoutes />, createTestAppContextData(), '/');
    expect(screen.queryByText(/SectionsScreen/)).toBeInTheDocument();
  });

  describe('renders specific section screen', () => {
    APP_SECTIONS_TEST_DATA.forEach((appSectionTestData) => {
      it(appSectionTestData.name, () => {
        testAppRender(
          <ScreenRoutes />,
          createTestAppContextData(),
          appSectionTestData.url
        );
        expect(
          screen.queryByText(appSectionTestData.title)
        ).toBeInTheDocument();
      });
    });
  });
});
