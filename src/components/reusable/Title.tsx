import React, { CSSProperties } from 'react';

export interface TitleProps {
  readonly children: string;
}

export function Title(props: TitleProps): React.ReactElement {
  const styles: CSSProperties = {
    textTransform: 'uppercase',
    color: '#424242',
    fontFamily: 'Oswald',
    fontSize: '18px'
  };

  return <h1 style={styles}>{props.children}</h1>;
}
