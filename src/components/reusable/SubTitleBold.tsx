import React, { CSSProperties } from 'react';

export interface SubTitleBoldProps {
  readonly children: string;
}

export function SubTitleBold(props: SubTitleBoldProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#E91D63',
    fontFamily: 'Source Code Pro',
    fontWeight: 'bold',
    fontSize: '15px'
  };

  return <h2 style={styles}>{props.children}</h2>;
}
