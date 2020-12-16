import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import { SubTitle } from '../reusable/SubTitle';

interface PersonalProjectsScreenProps {}

export function PersonalProjectsScreen(
  props: PersonalProjectsScreenProps
): React.ReactElement {
  return (
    <div>
      <Title>Personal Projects</Title>
      <SimpleText>
        These are just a few simple games I created a long time ago as hobby
        projects.
      </SimpleText>
      <SubTitle>Symbol Jump</SubTitle>
      <SimpleText>
        <p>
          A clone of a popular game called "Doodle Jump". Complete and fully
          featured (
          <a href={'https://github.com/mrzli/tria'} className={'gm-link'}>
            Source
          </a>
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
        A more primitive predecessor of 'Symbol Jump' (
        <a href={'https://github.com/mrzli/hellhopper'} className={'gm-link'}>
          Source
        </a>
        ).
      </SimpleText>
      <ul>
        <li>Techs used: Java, libGDX, Android SDK.</li>
        <li>My role: I wrote all the code and created all the graphics.</li>
      </ul>
      <SubTitle>Suchy Blocks</SubTitle>
      <SimpleText>
        Tetris clone, available for Android and desktop (
        <a href={'https://github.com/mrzli/suchyblocks'} className={'gm-link'}>
          Source
        </a>
        ).
      </SimpleText>
      <ul>
        <li>Techs used: Java, libGDX, Android SDK.</li>
        <li>My role: I wrote all the code and created all the graphics.</li>
      </ul>
    </div>
  );
}
