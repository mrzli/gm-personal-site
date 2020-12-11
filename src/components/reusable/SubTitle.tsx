import React, { CSSProperties } from 'react';

export interface SubTitleProps {
  readonly children: React.ReactNode;
}

export function SubTitle(props: SubTitleProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#E91D63',
    fontFamily: 'Source Code Pro',
    fontSize: '15px'
  };

  return <h2 style={styles}>{props.children}</h2>;
}
