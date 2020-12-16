import React from 'react';
import { Title } from '../reusable/Title';
import { SubTitle } from '../reusable/SubTitle';
import { SimpleText } from '../reusable/SimpleText';

interface SkillsOverviewScreenProps {}

export function SkillsOverviewScreen(
  props: SkillsOverviewScreenProps
): React.ReactElement {
  return (
    <div>
      <Title>Skills Overview (Techs I Worked With)</Title>
      <SubTitle>Recent and Substantial Experience</SubTitle>
      <SimpleText>
        <p>Programming Languages:</p>
        <ul>
          <li>
            Web Frontend Languages (JavaScript/HTML/CSS) and variations (SCSS
            etc.)
          </li>
          <li>TypeScript</li>
          <li>Kotlin</li>
          <li>Java</li>
        </ul>
        <p>Libraries, Frameworks, Platforms, Tools:</p>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>RxJS</li>
          <li>Jest</li>
          <li>React Testing Library</li>
          <li>Webpack</li>
          <li>Storybook</li>
          <li>Redux, redux-observable</li>
          <li>Material-UI (UI component library for React)</li>
          <li>NPM</li>
          <li>Spring Boot</li>
          <li>JPA/Hibernate</li>
          <li>Liquibase</li>
          <li>Maven</li>
          <li>...</li>
        </ul>
        <p>Databases:</p>
        <ul>
          <li>PostreSQL</li>
          <li>H2</li>
        </ul>
        <p>Source Control:</p>
        <ul>
          <li>Git</li>
        </ul>
        <p>IDEs:</p>
        <ul>
          <li>Webstorm</li>
          <li>Intellij IDEA</li>
        </ul>
      </SimpleText>
      <SubTitle>Non-recent Experience</SubTitle>
      <SimpleText>
        <p>Programming Languages:</p>
        <ul>
          <li>C#</li>
          <li>C++</li>
        </ul>
        <p>Libraries, Frameworks, Platforms, Tools:</p>
        <ul>
          <li>Vue</li>
          <li>Vuetify (UI component library for Vue)</li>
          <li>AngularJS</li>
          <li>JUnit</li>
          <li>ASP.NET Web Forms</li>
          <li>ASP.NET MVC</li>
          <li>WPF</li>
          <li>Windows Forms</li>
        </ul>
        <p>Databases:</p>
        <ul>
          <li>SQLite</li>
          <li>Microsoft SQL Server</li>
        </ul>
        <p>Source Control:</p>
        <ul>
          <li>TFS</li>
          <li>SVN</li>
          <li>Jazz (IBM)</li>
        </ul>
        <p>IDEs:</p>
        <ul>
          <li>Visual Studio</li>
          <li>Eclipse</li>
        </ul>
      </SimpleText>
      <SubTitle>Limited Experience</SubTitle>
      <SimpleText>
        <p>Programming Languages:</p>
        <ul>
          <li>Python</li>
          <li>Ruby</li>
          <li>F#</li>
          <li>R</li>
          <li>Octave</li>
        </ul>
        <p>Libraries, Frameworks, Platforms, Tools:</p>
        <ul>
          <li>Cypress</li>
          <li>Express</li>
          <li>Android SDK</li>
          <li>
            some Android and other game development (non-professionally, as a
            hobby)
          </li>
          <li>Docker</li>
          <li>Docker Swarm</li>
        </ul>
        <p>Databases:</p>
        <ul>
          <li>MySql</li>
          <li>IBM Db2</li>
          <li>Oracle</li>
        </ul>
        <p>IDEs:</p>
        <ul>
          <li>Visual Studio Code</li>
        </ul>
      </SimpleText>
    </div>
  );
}
