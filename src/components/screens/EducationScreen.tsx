import React from 'react';
import { Title } from '../reusable/Title';
import { SubTitle } from '../reusable/SubTitle';
import { SimpleText } from '../reusable/SimpleText';

export function EducationScreen(): React.ReactElement {
  return (
    <div>
      <Title>Formal Education</Title>
      <SubTitle>
        <a href={'https://www.fer.unizg.hr/en'} className={'gm-link'}>
          Faculty of Electrical Engineering and Computing (FER), University of
          Zagreb
        </a>
        <span style={{ fontWeight: 'normal' }}>
          &nbsp;- Graduate Engineer of Computing
        </span>
      </SubTitle>
      <SimpleText>
        <p>
          This was a five-year study. All courses that I took had a total of 284
          ECTS-credits.
        </p>
        <p>
          The first part of the study is shared with Electrical Engineering, so
          I got a solid theoretical education in Mathematics, Physics,
          Electrical Engineering and Electronics. The latter part of the study
          is more focused on Programming, Computer Science and Engineering.
        </p>
        <p>
          I chose Computer Graphics for my graduate thesis, and I created a
          simple application that reads a BVH animation file, and displays the
          animation.
        </p>
        <p>
          Here are some links (the text in the links is mostly in Croatian):
        </p>
        <ul>
          <li>
            <a
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html'
              }
              className={'gm-link'}
            >
              Short summary of the thesis on the Faculty's site
            </a>
          </li>
          <li>
            <a
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc'
              }
              className={'gm-link'}
            >
              Full thesis (.doc file)
            </a>
          </li>
          <li>
            <a
              href={'https://github.com/mrzli/bvhviewer'}
              className={'gm-link'}
            >
              GitHub link to the source code for the application created for the
              thesis
            </a>
          </li>
          <li>
            <a href={'https://youtu.be/7u4C-OBQZIk'} className={'gm-link'}>
              Short video showing what the thesis app looks like
            </a>
          </li>
        </ul>
      </SimpleText>
      <Title>Additional Education</Title>
      <SimpleText>
        <p>COURSERA</p>
        <p>
          I have done several courses primarily related to machine learning and
          other computer science topics such as algorithms and data structures.
          Very interesting stuff, but not much that I usually use in my everyday
          work.
        </p>
        <p>UDEMY</p>
        <p>
          I took courses related to the following techs/subjects: Angular, Vue,
          React, NodeJS, Vim, Docker etc. So, these are things I directly use
          (or have used) in my professional work.
        </p>
      </SimpleText>
    </div>
  );
}
