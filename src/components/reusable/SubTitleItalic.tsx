import React, { CSSProperties } from 'react';

export interface SubTitleItalicProps {
  readonly children: string;
}

export function SubTitleItalic(props: SubTitleItalicProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#2E4440',
    fontFamily: 'Source Code Pro',
    fontStyle: 'italic',
    fontSize: '15px'
  };

  return <h2 style={styles}>{props.children}</h2>;
}
