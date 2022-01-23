import React, { CSSProperties } from 'react';

export interface GmLinkProps {
  readonly href: string;
  readonly openInNewTab?: boolean;
  readonly style?: CSSProperties;
  readonly classes?: string;
  readonly children: React.ReactNode;
}

export function GmLink({
  href,
  openInNewTab,
  style,
  classes,
  children,
}: GmLinkProps): React.ReactElement {
  const target = openInNewTab ? '_blank' : undefined;
  const rel = openInNewTab ? 'noopener noreferrer' : undefined;
  return (
    <a href={href} style={style} className={classes} target={target} rel={rel}>
      {children}
    </a>
  );
}
