import React from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import profileImage from '../../assets/images/profile.jpg';
import { Sections } from './parts/Sections';

interface IntroScreenProps {}

export function IntroScreen(props: IntroScreenProps): React.ReactElement {
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
        <div style={{ gridColumnStart: 1 }}>{getImageElement()}</div>
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            gridTemplateRows: 'auto auto auto',
            gridTemplateColumns: '1fr',
            rowGap: 10
          }}
        >
          <div style={{ gridRowStart: 1 }}>{'Goran Mržljak'}</div>
          <div
            style={{
              gridRowStart: 2
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
              gridRowStart: 3
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
        </div>
      </div>
      <Title>{'Professional Profile'}</Title>
      <SimpleText>
        I am a software developer with more than 12 years of professional
        software development experience. TODO
      </SimpleText>
      <Sections />
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
