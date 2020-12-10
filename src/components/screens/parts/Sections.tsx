import React from 'react';
import { Link } from 'react-router-dom';
import { LABEL_URL_PAIRS } from '../../../data/label-url-pairs';
import { Title } from '../../reusable/Title';

interface SectionsProps {}

export function Sections(props: SectionsProps): React.ReactElement {
  return (
    <>
      <Title>{'Sections'}</Title>
      <ul>
        {LABEL_URL_PAIRS.map((pair, index) => (
          <li key={index}>
            <Link to={pair.url}>{pair.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
