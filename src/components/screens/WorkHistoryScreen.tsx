import React from 'react';
import { Title } from '../reusable/Title';
import { SubTitle } from '../reusable/SubTitle';
import { SimpleText } from '../reusable/SimpleText';
import { Sim } from 'mdi-material-ui';

interface WorkHistoryScreenProps {}

export function WorkHistoryScreen(
  props: WorkHistoryScreenProps
): React.ReactElement {
  return (
    <div>
      <Title>Work History</Title>
      <SubTitle>
        <span>Freelance software developer/Self employed, Remote</span>
        <span style={{ fontWeight: 'normal' }}>
          &nbsp;- Full Stack Web Developer
        </span>
      </SubTitle>
      <SimpleText>
        <p>JANUARY 2016 - PRESENT</p>
      </SimpleText>
      <SubTitle>
        <a href={'https://apis-it.hr'} className={'gm-link'}>
          APIS IT
        </a>
        <span>, Zagreb (Croatia)</span>
        <span style={{ fontWeight: 'normal' }}>&nbsp;- C# Developer</span>
      </SubTitle>
      <SimpleText>
        <p>NOVEMBER 2013 - MAY 2016</p>
      </SimpleText>
      <SubTitle>
        <a href={'https://www.gemboxsoftware.com/'} className={'gm-link'}>
          Gemmeus d.o.o.
        </a>
        <span>, Remote</span>
        <span style={{ fontWeight: 'normal' }}>&nbsp;- C# Developer</span>
      </SubTitle>
      <SimpleText>
        <p>OCTOBER 2012 - JANUARY 2013</p>
      </SimpleText>
      <SubTitle>
        <a href={'https://www.inetec.hr/en'} className={'gm-link'}>
          INETEC – Institute for Nuclear Technology d.o.o.
        </a>
        <span>, Zagreb (Croatia)</span>
        <span style={{ fontWeight: 'normal' }}>
          &nbsp;- C# Windows Desktop (WPF) Developer
        </span>
      </SubTitle>
      <SimpleText>
        <p>NOVEMBER 2009 - OCTOBER 2012</p>
      </SimpleText>
      <SubTitle>
        <span>Ultra d.o.o., Karlovac (Croatia)</span>
        <span style={{ fontWeight: 'normal' }}>
          &nbsp;- C# Windows Desktop and Web Developer
        </span>
      </SubTitle>
      <SimpleText>
        <p>OCTOBER 2008 - NOVEMBER 2009</p>
      </SimpleText>
      <SubTitle>
        <a href={'https://ekobit.com/'} className={'gm-link'}>
          Ekobit d.o.o.
        </a>
        <span>, Zagreb (Croatia)</span>
        <span style={{ fontWeight: 'normal' }}>&nbsp;- C# Web Developer</span>
      </SubTitle>
      <SimpleText>
        <p>FEBRUARY 2008 - OCTOBER 2008</p>
        <p>
          I worked on a few application for various financial institutions
          (banks, funds, stack exchanges):
        </p>
        <ul>
          <li>Tech used: C#, ASP.NET Web Forms, Microsoft SQL Server.</li>
          <li>
            My role: I did relatively small tasks and bug fixes on the
            application and database.
          </li>
        </ul>
      </SimpleText>
      <SubTitle>
        <span>Student project, Zagreb (Croatia)</span>
        <span style={{ fontWeight: 'normal' }}>&nbsp;- C++ Developer</span>
      </SubTitle>
      <SimpleText>
        <p>JANUARY 2007 - AUGUST 2007</p>
        <p>
          Body animation exporter, part of a larger system being made for a
          company called&nbsp;
          <a href={'https://visagetechnologies.com/'} className={'gm-link'}>
            Visage Technologies
          </a>
          :
        </p>
        <ul>
          <li>Tech used: C++, 3ds Max SDK.</li>
          <li>
            My role: I implemented the entire body animation exporter which
            converted 3ds Max Biped format to a format called MPEG-4 FBA.
          </li>
        </ul>
      </SimpleText>
    </div>
  );
}
