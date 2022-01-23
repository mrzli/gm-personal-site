import React from 'react';
import { Title } from '../reusable/Title';
import { SubTitle } from '../reusable/SubTitle';
import { SimpleText } from '../reusable/SimpleText';
import { GmLink } from '../reusable/GmLink';

export function EducationScreen(): React.ReactElement {
  return (
    <div>
      <Title>Formal Education</Title>
      <SubTitle>
        <GmLink
          href={'https://www.fer.unizg.hr/en'}
          classes={'gm-link'}
          openInNewTab={true}
        >
          Faculty of Electrical Engineering and Computing (FER), University of
          Zagreb
        </GmLink>
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
            <GmLink
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/index.html'
              }
              classes={'gm-link'}
              openInNewTab={true}
            >
              Short summary of the thesis on the Faculty's site
            </GmLink>
          </li>
          <li>
            <GmLink
              href={
                'http://www.zemris.fer.hr/predmeti/rg/diplomski/08Mrzljak/bvhviewer_pages/html/files/Diplomski.doc'
              }
              classes={'gm-link'}
              openInNewTab={true}
            >
              Full thesis (.doc file)
            </GmLink>
          </li>
          <li>
            <GmLink
              href={'https://github.com/mrzli/bvhviewer'}
              classes={'gm-link'}
              openInNewTab={true}
            >
              GitHub link to the source code for the application created for the
              thesis
            </GmLink>
          </li>
          <li>
            <GmLink
              href={'https://youtu.be/7u4C-OBQZIk'}
              classes={'gm-link'}
              openInNewTab={true}
            >
              Short video showing what the thesis app looks like
            </GmLink>
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
