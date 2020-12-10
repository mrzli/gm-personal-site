import React from 'react';
import { Link } from 'react-router-dom';
import { LABEL_URL_PAIRS } from '../../data/label-url-pairs';

interface SectionsScreenProps {}

export function SectionsScreen(props: SectionsScreenProps): React.ReactElement {
  return (
    <div>
      <div>{'SectionsScreen'}</div>
      <ul>
        {
          LABEL_URL_PAIRS.map((pair) => (
            <li>
              <Link to={pair.url}>{pair.label}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
