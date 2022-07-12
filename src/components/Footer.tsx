import React from 'react';
import { HeartIcon } from '@heroicons/react/solid';

import { Typography } from './Typography';

function Footer() {
  return (
    <footer className="py-4">
      <Typography className="text-foreground-secondary text-center" variant="caption">
        Build with <HeartIcon className="inline w-4 h-4 text-red-500" /> by{' '}
        <a href="https://edwintantawi.vercel.app" className="underline">
          Edwin Tantawi
        </a>
      </Typography>
    </footer>
  );
}

export { Footer };
