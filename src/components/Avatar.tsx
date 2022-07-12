import React from 'react';

function Avatar() {
  const classNames = 'w-10 h-10 rounded-full';

  return (
    <img src="/images/avatar.png" alt="Edwin Tantawi" className={classNames} />
  );
}

export { Avatar };
