import React from 'react';
import { ArchiveIcon, XCircleIcon, UploadIcon } from '@heroicons/react/solid';

import { Typography } from './Typography';
import { showFormattedDate } from '../utils';
import { Divider } from './Divider';
import { Note } from '../@types';
import { IconButton } from './IconButton';

interface Props extends Note {
  handleDeleteNote: (noteId: number) => void;
  handleArchiveNote: (noteId: number) => void;
}

function Card(props: Props) {
  const { id, title, body, createdAt, archived, handleDeleteNote, handleArchiveNote } = props;

  const formattedDate = showFormattedDate(createdAt);

  return (
    <article className="flex flex-col gap-3 bg-secondary p-4 border break-inside-avoid-column">
      <header>
        <Typography component="h2" variant="sub-heading" fontWeight="bold">
          {title}
        </Typography>
      </header>

      <Typography
        component="p"
        variant="body"
        className="text-foreground-secondary"
        fontWeight="normal"
      >
        {body}
      </Typography>
      <Divider />

      <footer className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-1">
          <IconButton
            label={archived ? 'unarchived' : 'archived'}
            onClick={() => handleArchiveNote(id)}
          >
            {archived ? <UploadIcon /> : <ArchiveIcon />}
          </IconButton>

          <Divider direction="vertical" />

          <IconButton label="delete" onClick={() => handleDeleteNote(id)}>
            <XCircleIcon className="text-red-500" />
          </IconButton>
        </div>
        <Typography component="span" variant="caption">
          <time dateTime={formattedDate}>{formattedDate}</time>
        </Typography>
      </footer>
    </article>
  );
}

export { Card };
