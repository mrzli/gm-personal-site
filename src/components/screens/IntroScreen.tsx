import React, { CSSProperties } from 'react';
import { Title } from '../reusable/Title';
import { SimpleText } from '../reusable/SimpleText';
import profileImage from '../../assets/images/profile.jpg';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';
import { Link } from 'react-router-dom';
import { Linkedin, Github, StackOverflow } from 'mdi-material-ui';
import { SvgIcon } from '@mui/material';
import { GmLink } from '../reusable/GmLink';

export function IntroScreen(): React.ReactElement {
  const linkStyles: CSSProperties = {
    color: '#424242',
  };

  return (
    <div>
      <Title>Name &amp; Contact</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'auto',
          gridTemplateColumns: 'auto 1fr',
          columnGap: 20,
        }}
      >
        <div style={{ gridColumn: 1 }}>{getImageElement()}</div>
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            gridTemplateRows: 'repeat(4, auto)',
            gridTemplateColumns: '1fr',
            rowGap: 10,
          }}
        >
          <div style={{ gridRow: 1, fontSize: '1.2em' }}>Goran Mržljak</div>
          <div
            style={{
              gridRow: 2,
            }}
          >
            <GmLink
              href={'tel:+385 91 224 3145'}
              style={{
                color: '#E91D63',
              }}
            >
              +385 91 224 3145
            </GmLink>
          </div>
          <div
            style={{
              gridRow: 3,
            }}
          >
            <GmLink
              href={'mailto:goran.mrzljak@gmail.com'}
              style={{
                color: '#E91D63',
              }}
            >
              goran.mrzljak@gmail.com
            </GmLink>
          </div>
          <div
            style={{
              gridRow: 4,
              display: 'grid',
              columnGap: 10,
              gridTemplateColumns: 'repeat(3, auto)',
              justifyContent: 'start',
            }}
          >
            <GmLink
              href={'https://www.linkedin.com/in/goran-mrzljak'}
              style={linkStyles}
              openInNewTab={true}
            >
              <SvgIcon fontSize={'large'}>
                <Linkedin />
              </SvgIcon>
            </GmLink>
            <GmLink
              href={'https://github.com/mrzli'}
              style={linkStyles}
              openInNewTab={true}
            >
              <SvgIcon fontSize={'large'}>
                <Github />
              </SvgIcon>
            </GmLink>
            <GmLink
              href={'https://stackoverflow.com/users/520229/mrzli'}
              style={linkStyles}
              openInNewTab={true}
            >
              <SvgIcon fontSize={'large'}>
                <StackOverflow />
              </SvgIcon>
            </GmLink>
          </div>
        </div>
      </div>
      <Title>Professional Profile</Title>
      <SimpleText>
        <ul>
          <li>14+ years of professional software development experience.</li>
          <li>
            Have experience with onboarding new developers, mentoring, and
            interviewing potential candidates.
          </li>
          <li>
            Mostly web development recently, but previously had experience with
            wide range of technologies - see&nbsp;
            <GmLink href={'/work-history'} classes={'gm-link'}>
              work history
            </GmLink>
            &nbsp;for more details.
          </li>
          <li>
            Full stack development, but also worked on projects where I focus
            mostly (or completely) on either frontend or backend.
          </li>
          <li>Have experience with React, Angular on Vue (in that order).</li>
          <li>Prefer React, but would consider an Angular position.</li>
          <li>
            I have significant backend experience with Node/Express/Nest. This
            is my technology of choice for the backen.
          </li>
          <li>
            Secondary option for backend is Spring Boot with Kotlin or Java.
          </li>
        </ul>
      </SimpleText>
      <Title>Other Sections</Title>
      <ul>
        {LABEL_URL_PAIRS.slice(1).map((pair, index) => (
          <li key={index}>
            <Link to={pair.url} className={'gm-link'}>
              {pair.label}
            </Link>
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
        height: 180,
      }}
    />
  );
}
