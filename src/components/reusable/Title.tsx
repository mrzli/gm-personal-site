import React, { CSSProperties } from 'react';

export interface TitleProps {
  readonly children: string;
}

export function Title(props: TitleProps): React.ReactElement {
  const styles: CSSProperties = {
    textTransform: 'uppercase',
    color: '#424242',
    fontSize: '18px',
    marginTop: '1.2em'
  };

  return <h1 style={styles}>{props.children}</h1>;
}
