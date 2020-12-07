import React from 'react';
import { screen } from '@testing-library/react';
import { Layout } from './Layout';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { testAppRender } from '../../test/utils/app-test-utils';
import { APP_SECTIONS_TEST_DATA } from '../../test/data/app-sections-test-data';
import userEvent from '@testing-library/user-event';

describe('<Layout/>', () => {
  it('renders sections', () => {
    testAppRender(<Layout />, createTestAppContextData(), '/');
    expect(
      screen.queryByRole('navigation', { name: /up/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText('SectionsScreen')).toBeInTheDocument();
  });

  describe('section navigation', () => {
    APP_SECTIONS_TEST_DATA.forEach((appSectionTestData, index) => {
      describe(appSectionTestData.name, () => {
        if (index === 0) {
          it('previous link does not exist', () => {
            testAppRender(
              <Layout />,
              createTestAppContextData(),
              appSectionTestData.url
            );

            expect(
              screen.queryByRole('navigation', { name: /previous/i })
            ).not.toBeInTheDocument();
          });
        } else {
          const previousData = APP_SECTIONS_TEST_DATA[index - 1];

          it(`previous link leads to '${previousData.name}'`, () => {
            testAppRender(
              <Layout />,
              createTestAppContextData(),
              appSectionTestData.url
            );

            const previousLink = screen.getByRole('navigation', {
              name: /previous/i
            });
            userEvent.click(previousLink);
            expect(screen.queryByText(previousData.title)).toBeInTheDocument();
          });
        }

        if (index < APP_SECTIONS_TEST_DATA.length - 1) {
          const nextData = APP_SECTIONS_TEST_DATA[index + 1];

          it(`next link leads to '${nextData.name}'`, () => {
            testAppRender(
              <Layout />,
              createTestAppContextData(),
              appSectionTestData.url
            );

            const nextLink = screen.getByRole('navigation', {
              name: /next/i
            });
            userEvent.click(nextLink);
            expect(screen.queryByText(nextData.title)).toBeInTheDocument();
          });
        } else {
          it('next link does not exist', () => {
            testAppRender(
              <Layout />,
              createTestAppContextData(),
              appSectionTestData.url
            );

            expect(
              screen.queryByRole('navigation', { name: /next/i })
            ).not.toBeInTheDocument();
          });
        }

        it('up link navigates to sections', () => {
          const upLink = screen.getByRole('navigation', {
            name: /up/i
          });
          const links = screen.queryByRole('navigation');
          userEvent.click(upLink);
          expect(screen.queryByText('SectionsScreen')).toBeInTheDocument();
        });

        it('has section content', () => {
          testAppRender(
            <Layout />,
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
});
