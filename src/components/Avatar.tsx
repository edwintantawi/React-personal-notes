import React from 'react';

function Avatar() {
  const className = 'w-10 h-10 rounded-full';

  return (
    <img src="/images/avatar.png" alt="Edwin Tantawi" className={className} />
  );
}

export { Avatar };
