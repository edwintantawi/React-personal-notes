import React from 'react';

type Direction = 'vertical' | 'horizontal';

type DirectionStyle = {
  [key in Direction]: string;
};

interface Props {
  direction?: Direction;
}

function Divider(props: Props) {
  const { direction = 'horizontal' } = props;

  const directionStyle: DirectionStyle = {
    vertical: 'h-8 border-r',
    horizontal: 'w-full border-0 border-b',
  };

  return <hr className={directionStyle[direction]} />;
}

export { Divider };
