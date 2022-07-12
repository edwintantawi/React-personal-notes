import React from 'react';

import { Card } from '../components/Card';
import { MasonryLayout } from '../layouts/MasonryLayout';
import { Note } from '../@types';

interface Props {
  notes: Note[];
}

function NotesMasonry(props: Props) {
  const { notes } = props;

  return (
    <MasonryLayout>
      {notes.map((note) => (
        <Card key={note.id} {...note} />
      ))}
    </MasonryLayout>
  );
}

export { NotesMasonry };
