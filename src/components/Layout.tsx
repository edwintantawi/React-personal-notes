import React from 'react';

interface Props extends React.PropsWithChildren {}

function Layout(props: Props) {
  const { children } = props;

  const classNames = 'max-w-xl mx-auto px-4 bg-white min-h-screen';

  return <div className={classNames}>{children}</div>;
}

export { Layout };
