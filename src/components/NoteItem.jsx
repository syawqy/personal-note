import React from 'react';
import {showFormattedDate} from "../utils";

function NoteItem({ note, deleteNote, toggleArchive }) {
    return (
      <div className='note-item'>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <p className="note-date">{showFormattedDate(note.createdAt)}</p>
        <button onClick={() => deleteNote(note.id)}>Hapus</button>
        <button className='archive-button' onClick={() => toggleArchive(note.id)}>
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    );
  }

export default NoteItem;
