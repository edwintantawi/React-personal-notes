import React from 'react';

interface Props extends React.PropsWithChildren {}

function AppLayout(props: Props) {
  const { children } = props;
  const className = 'max-w-xl mx-auto px-4 bg-white min-h-screen';
  return <div className={className}>{children}</div>;
}

export { AppLayout };
