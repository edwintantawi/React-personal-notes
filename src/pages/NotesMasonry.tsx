import React from 'react';

import { Card } from '../components/Card';
import { MasonryLayout } from '../layouts/MasonryLayout';
import { Note } from '../@types';
import { Empty } from '../components/Empty';

interface Props {
  notes: Note[];
  handleDeleteNote: (noteId: number) => void;
  handleArchiveNote: (noteId: number) => void;
}

function NotesMasonry(props: Props) {
  const { notes, handleDeleteNote, handleArchiveNote } = props;

  const isEmpty = !notes.length;

  if (isEmpty) return <Empty />;

  return (
    <MasonryLayout>
      {notes.map((note) => (
        <Card
          key={note.id}
          {...note}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
        />
      ))}
    </MasonryLayout>
  );
}

export { NotesMasonry };
