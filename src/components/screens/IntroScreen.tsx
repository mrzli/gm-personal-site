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
      <Title>{'Professional Profile'}</Title>
      <SimpleText>
        I am a software developer with more than 12 years of professional
        software development experience. TODO
      </SimpleText>
      <Title>{'Other Sections'}</Title>
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
