import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SectionsScreen } from '../screens/SectionsScreen';
import { IntroScreen } from '../screens/IntroScreen';
import { WorkHistoryScreen } from '../screens/WorkHistoryScreen';
import { PersonalInfoScreen } from '../screens/PersonalInfoScreen';
import { EducationScreen } from '../screens/EducationScreen';
import { SkillsOverviewScreen } from '../screens/SkillsOverviewScreen';
import { ProsAndConsScreen } from '../screens/ProsAndConsScreen';
import { ContactAndLinksScreen } from '../screens/ContactAndLinksScreen';

interface ScreenRoutesProps {}

export function ScreenRoutes(props: ScreenRoutesProps): React.ReactElement {
  return (
    <Switch>
      <Route exact={true} path={'/'}>
        <SectionsScreen />
      </Route>
      <Route path={'/intro'}>
        <IntroScreen />
      </Route>
      <Route path={'/work-history'}>
        <WorkHistoryScreen />
      </Route>
      <Route path={'/personal-info'}>
        <PersonalInfoScreen />
      </Route>
      <Route path={'/education'}>
        <EducationScreen />
      </Route>
      <Route path={'/skills-overview'}>
        <SkillsOverviewScreen />
      </Route>
      <Route path={'/pros-and-cons'}>
        <ProsAndConsScreen />
      </Route>
      <Route path={'/contact-and-links'}>
        <ContactAndLinksScreen />
      </Route>
      <Route path={'*'}>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  );
}
