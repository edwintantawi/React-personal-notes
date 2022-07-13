import React from 'react';
import { StatusOfflineIcon } from '@heroicons/react/solid';

import { Typography } from './Typography';

function Empty() {
  return (
    <div className="bg-secondary my-4 p-4 border-2 border-dashed text-foreground-secondary text-center">
      <StatusOfflineIcon className="w-6 h-6 mx-auto mb-2" />
      <Typography>Ooops... tidak ada catatan di sini!</Typography>
    </div>
  );
}

export { Empty };
