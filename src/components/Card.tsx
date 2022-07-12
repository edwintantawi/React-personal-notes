import React from 'react';

import { Typography } from './Typography';
import { showFormattedDate } from '../utils';
import { Divider } from './Divider';
import { Note } from '../@types';

interface Props extends Note {}

function Card(props: Props) {
  const { title, body, createdAt } = props;

  const formattedDate = showFormattedDate(createdAt);

  return (
    <article className="flex flex-col gap-3 bg-primary p-4 break-inside-avoid-column">
      <header>
        <Typography component="h2" variant="sub-heading" fontWeight="bold">
          {title}
        </Typography>
      </header>

      <Typography component="p" variant="body" className="text-foreground-secondary">
        {body}
      </Typography>
      <Divider />

      <footer className="text-end">
        <Typography component="span" variant="caption">
          <time dateTime={formattedDate}>{formattedDate}</time>
        </Typography>
      </footer>
    </article>
  );
}

export { Card };
