import React from 'react';

interface Props extends React.PropsWithChildren {}

function TabBars(props: Props) {
  const { children } = props;

  return (
    <nav>
      <ul className="flex py-4 gap-2 items-center">{children}</ul>
    </nav>
  );
}

export { TabBars };
