import React, { CSSProperties } from 'react';

export interface SubTitleProps {
  readonly children: React.ReactNode;
}

export function SubTitle(props: SubTitleProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#E91D63',
    fontSize: '16px'
  };

  return <h2 style={styles}>{props.children}</h2>;
}
