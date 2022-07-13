import React from 'react';
import { SearchIcon, DotsHorizontalIcon, PlusIcon } from '@heroicons/react/solid';

import { Avatar } from './Avatar';
import { Typography } from './Typography';
import { IconButton } from './IconButton';
import { TabBar, TabBars } from './Tabs';
import { Divider } from './Divider';

function AppBar() {
  const className = 'sticky top-0 z-50 py-4 bg-white border-b';

  return (
    <header className={className}>
      <div className="flex items-center justify-between">
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
      </div>

      <TabBars>
        <TabBar to="/new">
          <PlusIcon className="w-5 h-5" />
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/" fullWidth>
          Notes
        </TabBar>
        <Divider direction="vertical" />
        <TabBar to="/archived" fullWidth>
          Archived
        </TabBar>
      </TabBars>
    </header>
  );
}

export { AppBar };
