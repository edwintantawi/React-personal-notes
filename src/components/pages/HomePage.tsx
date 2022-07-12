import React from 'react';
import { Card } from '../Card';
import { MasonryLayout } from '../../layouts/MasonryLayout';
import { getInitialData } from '../../utils';

function HomePage() {
  const data = getInitialData();

  return (
    <MasonryLayout>
      {data.map((note) => (
        <Card
          key={note.id}
          title={note.title}
          body={note.body}
          date={note.createdAt}
        />
      ))}
    </MasonryLayout>
  );
}

export { HomePage };
