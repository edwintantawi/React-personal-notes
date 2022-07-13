import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../layouts/AppLayout';
import { AppBar } from '../components/AppBar';
import { Divider } from '../components/Divider';
import { getInitialData, sortNotesByDateDesc } from '../utils';
import { NotesMasonry } from '../pages/NotesMasonry';
import { Footer } from '../components/Footer';
import { NewNote } from '../pages/NewNote';

function App() {
  const [notes, setNotes] = React.useState(getInitialData());

  const sortedNotes = notes.sort(sortNotesByDateDesc);
  const archivedNotes = sortedNotes.filter((note) => note.archived);
  const unarchivedNotes = sortedNotes.filter((note) => !note.archived);

  return (
    <AppLayout>
      <AppBar />

      <main className="flex-1 mb-8">
        <Routes>
          <Route path="/" element={<NotesMasonry notes={unarchivedNotes} />} />
          <Route path="/archived" element={<NotesMasonry notes={archivedNotes} />} />
          <Route path="/new" element={<NewNote setNotes={setNotes} />} />
        </Routes>
      </main>

      <Divider />

      <Footer />
    </AppLayout>
  );
}

export { App };
