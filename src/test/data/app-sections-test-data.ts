import { AppSectionTestData } from '../types/app-section-test-data';

export const APP_SECTIONS_TEST_DATA: readonly AppSectionTestData[] = [
  {
    name: 'Intro',
    label: 'Intro',
    url: '/',
    title: 'Name & Contact'
  },
  {
    name: 'WorkHistory',
    label: 'Work History',
    url: '/work-history',
    title: 'Work History'
  },
  {
    name: 'Education',
    label: 'Education',
    url: '/education',
    title: 'Formal Education'
  },
  {
    name: 'SkillsOverview',
    label: 'Skills Overview',
    url: '/skills-overview',
    title: 'Skills Overview (Techs I Worked With)'
  },
  // {
  //   name: 'ProsAndCons',
  //   label: 'Pros & Cons',
  //   url: '/pros-and-cons',
  //   title: 'ProsAndConsScreen'
  // },
  {
    name: 'PersonalInfo',
    label: 'Personal Info',
    url: '/personal-info',
    title: 'Personal Info'
  }
];
