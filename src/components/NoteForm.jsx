import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const maxTitleLength = 50;

  const handleTitleChange = (e) => {
    if (e.target.value.length <= maxTitleLength) {
      setTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    addNote(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form className='note-form' onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder="Judul" 
          value={title} 
          onChange={handleTitleChange} 
          required 
        />
      </div>
      <div>
        <textarea 
          placeholder="Isi Catatan" 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteForm;
