import React from 'react';
import { clsx } from 'clsx';

function Avatar() {
  const classNames = clsx('w-11', 'h-11', 'rounded-full');

  return (
    <img src="/images/avatar.png" alt="Edwin Tantawi" className={classNames} />
  );
}

export { Avatar };
