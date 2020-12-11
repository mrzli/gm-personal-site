import React, { CSSProperties } from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import profileImage from '../../assets/images/profile.jpg';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';
import { Link } from 'react-router-dom';
import { Linkedin, Github, StackOverflow } from 'mdi-material-ui';
import { SvgIcon } from '@material-ui/core';

interface IntroScreenProps {}

export function IntroScreen(props: IntroScreenProps): React.ReactElement {
  const linkStyles: CSSProperties = {
    color: '#424242'
  };

  return (
    <div>
      <Title>{'Name & Contact'}</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 20
        }}
      >
        <div style={{ gridColumn: 1 }}>{getImageElement()}</div>
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            gridTemplateRows: 'repeat(4, auto)',
            gridTemplateColumns: '1fr',
            rowGap: 10
          }}
        >
          <div style={{ gridRow: 1, fontSize: '1.2em' }}>{'Goran Mržljak'}</div>
          <div
            style={{
              gridRow: 2
            }}
          >
            <a
              href={'tel:+385 91 224 3145'}
              style={{
                color: '#E91D63'
              }}
            >
              {'+385 91 224 3145'}
            </a>
          </div>
          <div
            style={{
              gridRow: 3
            }}
          >
            <a
              href={'mailto:goran.mrzljak@gmail.com'}
              style={{
                color: '#E91D63'
              }}
            >
              {'goran.mrzljak@gmail.com'}
            </a>
          </div>
          <div
            style={{
              gridRow: 4,
              display: 'grid',
              columnGap: 10,
              gridTemplateColumns: 'repeat(3, auto)',
              justifyContent: 'start'
            }}
          >
            <a
              href={'https://www.linkedin.com/in/goran-mrzljak'}
              style={linkStyles}
            >
              <SvgIcon component={Linkedin} fontSize={'large'} />
            </a>
            <a href={'https://github.com/mrzli'} style={linkStyles}>
              <SvgIcon component={Github} fontSize={'large'} />
            </a>
            <a
              href={'https://stackoverflow.com/users/520229/mrzli'}
              style={linkStyles}
            >
              <SvgIcon component={StackOverflow} fontSize={'large'} />
            </a>
          </div>
        </div>
      </div>
      <Title>Professional Profile</Title>
      <SimpleText>
        <p>
          I am a software developer with more than 12 years of professional
          software development experience. I have a lot of experience with a
          wide range of technologies and stacks, but I am now primarily building
          web applications.
        </p>
        <p>
          You can say I am a full-stack developer, although on most projects I
          will focus mostly or completely on either frontend or backend. On
          smaller projects I will do both.
        </p>
        <p>
          Recently I have been doing mostly frontend, with the most recent
          project (as of December 2020) being done with React - which is my
          favorite. I also have significant experience with the rest of the Big
          Three (Angular and Vue), but I prefer React.
        </p>
        <p>
          Throughout my career I have also worked quite a bit on the backend
          with Spring (using both Java and Kotlin). For more details, and for
          other experience that I have, check&nbsp;
          <a href={'/work-history'}>Work History</a>.
        </p>
      </SimpleText>
      <Title>Current Professional Interests (techs, type of work)</Title>
      <SimpleText>
        <p>
          I am interested in either <b>frontend or backend web development</b>.
          I currently have no plans on doing work on other platforms (like
          desktop or mobile), but this is not set in stone.
        </p>
        <p>
          In terms of frontend development, I am interested primarily in{' '}
          <b>React</b>, and will probably not be looking for projects that are
          built using other frontend frameworks.
        </p>
        <p>
          Regarding backend, I am interested in either <b>Spring</b> (with a
          preference for <b>Kotlin</b>, but not a big deal if it is <b>Java</b>
          ), or <b>Node.js</b>. I don't have a lot of formal Node.js experience
          on the backend, but I like it from what I have seen, and I know for
          sure I can immediately get into a Node.js project (a lot of
          overlapping knowledge with frontend use of Node/NPM, Typescript,
          linting, testing, and with other backend stacks).
        </p>
      </SimpleText>
      <Title>Other Sections</Title>
      <ul>
        {LABEL_URL_PAIRS.slice(1).map((pair, index) => (
          <li key={index}>
            <Link to={pair.url}>{pair.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function getImageElement(): React.ReactElement {
  return (
    <img
      alt={'Goran Mržljak'}
      src={profileImage}
      style={{
        borderRadius: '50vh',
        border: '5px solid #F0F0F0',
        overflow: 'hidden',
        width: 180,
        height: 180
      }}
    />
  );
}
