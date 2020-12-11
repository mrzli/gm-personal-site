import React, { CSSProperties } from 'react';

export interface SimpleTextProps {
  readonly children: React.ReactNode;
}

export function SimpleText(props: SimpleTextProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#666666',
    fontFamily: 'Source Code Pro',
    fontSize: '14px'
  };

  return <span style={styles}>{props.children}</span>;
}
