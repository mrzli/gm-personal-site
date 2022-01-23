import React, { CSSProperties } from 'react';

export interface SimpleTextProps {
  readonly children: React.ReactNode;
}

export function SimpleText(props: SimpleTextProps): React.ReactElement {
  const styles: CSSProperties = {
    color: '#505050',
    fontSize: '15px',
  };

  return <span style={styles}>{props.children}</span>;
}
