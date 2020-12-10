import React, { CSSProperties } from 'react';

export interface SimpleTextProps {
  readonly children: string;
}

export function SimpleText(props: SimpleTextProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#666666',
    fontFamily: 'Source Code Pro',
    fontSize: '13px'
  };

  return <span style={styles}>{props.children}</span>;
}
