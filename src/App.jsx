import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { getInitialData, showFormattedDate } from "./utils";

const initialNotes = getInitialData();

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [search, setSearch] = useState("");

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="container">
      <h1>Aplikasi Catatan Pribadi</h1>
      <div className="search-bar">
        <input
            type="text"
            placeholder="Cari catatan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      
      <NoteForm addNote={addNote} />

      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} deleteNote={deleteNote} toggleArchive={toggleArchive} />
      <h2>Catatan Terarsip</h2>
      <NoteList notes={archivedNotes} deleteNote={deleteNote} toggleArchive={toggleArchive} />
    </div>
  );
}

export default App;
