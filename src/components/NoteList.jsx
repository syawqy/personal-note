import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, toggleArchive }) {
  if (notes.length === 0) {
    return <p>Tidak ada catatan</p>;
  }

  return (
    <div className='note-list'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />
      ))}
    </div>
  );
}

export default NoteList;
