import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '../layouts/AppLayout';
import { AppBar } from './AppBar';
import { Divider } from '../components/Divider';
import { filterNotesByTerm, getInitialData, sortNotesByDateDesc } from '../utils';
import { NotesMasonry } from '../pages/NotesMasonry';
import { Footer } from '../components/Footer';
import { NewNote } from '../pages/NewNote';
import { Note } from '../@types';

function App() {
  const [notes, setNotes] = React.useState(getInitialData());
  const [term, setTerm] = React.useState('');

  const processedNotes = notes.sort(sortNotesByDateDesc).filter(filterNotesByTerm(term));

  const archivedNotes = processedNotes.filter((note) => note.archived);
  const unarchivedNotes = processedNotes.filter((note) => !note.archived);

  const handleSearchNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const clearSearch = () => setTerm('');

  const handleDeleteNote = (noteId: number) => {
    const filterDelete = (filterNote: Note[]) => filterNote.filter((note) => note.id !== noteId);
    setNotes((prev) => filterDelete(prev));
  };

  const handleArchiveNote = (noteId: number) => {
    const mapArchive = (filterNote: Note[]) =>
      filterNote.map((note) => {
        if (note.id === noteId) return { ...note, archived: !note.archived };
        return note;
      });

    setNotes((prev) => mapArchive(prev));
  };

  return (
    <AppLayout>
      <AppBar term={term} onSearch={handleSearchNotes} clearSearch={clearSearch} />
      <main className="flex-1 mb-8">
        <Routes>
          <Route
            path="/"
            element={
              <NotesMasonry
                notes={unarchivedNotes}
                handleDeleteNote={handleDeleteNote}
                handleArchiveNote={handleArchiveNote}
              />
            }
          />
          <Route
            path="/archived"
            element={
              <NotesMasonry
                notes={archivedNotes}
                handleDeleteNote={handleDeleteNote}
                handleArchiveNote={handleArchiveNote}
              />
            }
          />
          <Route path="/new" element={<NewNote setNotes={setNotes} />} />
        </Routes>
      </main>

      <Divider />

      <Footer />
    </AppLayout>
  );
}

export { App };
