import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import { SubTitle } from '../reusable/SubTitle';
import { GmLink } from '../reusable/GmLink';

export function PersonalProjectsScreen(): React.ReactElement {
  return (
    <div>
      <Title>Personal Projects</Title>
      <SimpleText>Projects that I did in my free time.</SimpleText>
      <SubTitle>CV Website (this site)</SubTitle>
      <SimpleText>
        <p>
          Simple website for displaying my professional info (
          <GmLink
            href={'https://mrzli.github.io/'}
            classes={'gm-link'}
            openInNewTab={true}
          >
            Site
          </GmLink>
          ,&nbsp;
          <GmLink
            href={'https://github.com/mrzli/mrzli.github.io'}
            classes={'gm-link'}
            openInNewTab={true}
          >
            Source
          </GmLink>
          ):
        </p>
        <ul>
          <li>
            Techs used: React, Typescript, Prettier, ESLint, Jest, React Testing
            Library
          </li>
          <li>
            My role: I did all the development. The site is static and very
            simple. All of the content of the pages is simply hardcoded into the
            components. I used Heroku for development, the deployment is
            automatic (on each push to <code>master</code> branch). "Production"
            deployment to GitHub Pages is manual, but it is done by executing a
            single command.
          </li>
        </ul>
      </SimpleText>
      <SubTitle>Symbol Jump</SubTitle>
      <SimpleText>
        <p>
          A clone of a popular game called "Doodle Jump". Complete and fully
          featured (
          <GmLink
            href={'https://github.com/mrzli-other/tria'}
            classes={'gm-link'}
            openInNewTab={true}
          >
            Source
          </GmLink>
          ).
        </p>
        <ul>
          <li>
            Tech used: Java, libGDX, Android SDK, Facebook SDK for Android
            (removed in later versions), Sinatra (Ruby)/Apache/MySQL.
          </li>
          <li>
            My role: This was a personal project so I wrote all the code and
            created all the graphics (which is black and white and pretty
            simple). I also implemented a global score service on a VPS server
            that is accessed from the game by asynchronous http calls (the
            server is no longer active).
          </li>
        </ul>
      </SimpleText>
      <SubTitle>Hell Hopper</SubTitle>
      <SimpleText>
        <p>
          A more primitive predecessor of 'Symbol Jump' (
          <GmLink
            href={'https://github.com/mrzli-other/hellhopper'}
            classes={'gm-link'}
            openInNewTab={true}
          >
            Source
          </GmLink>
          ).
        </p>
        <ul>
          <li>Techs used: Java, libGDX, Android SDK.</li>
          <li>My role: I wrote all the code and created all the graphics.</li>
        </ul>
      </SimpleText>
      <SubTitle>Suchy Blocks</SubTitle>
      <SimpleText>
        <p>
          Tetris clone, available for Android and desktop (
          <GmLink
            href={'https://github.com/mrzli-other/suchyblocks'}
            classes={'gm-link'}
            openInNewTab={true}
          >
            Source
          </GmLink>
          ).
        </p>
        <ul>
          <li>Techs used: Java, libGDX, Android SDK.</li>
          <li>My role: I wrote all the code and created all the graphics.</li>
        </ul>
      </SimpleText>
    </div>
  );
}
