import React from 'react';

import { Typography } from './Typography';
import { showFormattedDate } from '../utils';
import { Divider } from './Divider';

interface Props extends React.PropsWithChildren {
  title: string;
  body: string;
  date: string;
}

function Card(props: Props) {
  const { title, body, date } = props;

  const formattedDate = showFormattedDate(date);

  return (
    <article className="flex flex-col gap-3 bg-primary p-4 break-inside-avoid-column">
      <header>
        <Typography component="h2" variant="sub-heading" fontWeight="bold">
          {title}
        </Typography>
      </header>

      <Typography component="p" variant="body" className="text-gray-500">
        {body}
      </Typography>
      <Divider direction="horizontal" />

      <footer className="text-end">
        <Typography component="span" variant="caption">
          <time dateTime={formattedDate}>{formattedDate}</time>
        </Typography>
      </footer>
    </article>
  );
}

export { Card };
