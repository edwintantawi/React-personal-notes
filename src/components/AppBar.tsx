import React from 'react';
import { SearchIcon, DotsHorizontalIcon } from '@heroicons/react/solid';

import { Avatar } from './Avatar';
import { Typography } from './Typography';
import { IconButton } from './IconButton';

function AppBar() {
  const className =
    'sticky top-0 z-50 flex items-center justify-between py-5 bg-white border-b';

  return (
    <header className={className}>
      <div className="flex items-center gap-3">
        <Avatar />
        <Typography component="h1" variant="sub-heading" fontWeight="bold">
          Personal Notes
        </Typography>
      </div>

      <div className="flex items-center gap-2">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <IconButton>
          <DotsHorizontalIcon />
        </IconButton>
      </div>
    </header>
  );
}

export { AppBar };
