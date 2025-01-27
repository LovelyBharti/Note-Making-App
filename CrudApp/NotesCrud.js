import React, { useState } from 'react';
import { addNote, removeNote, updateNote, searchNotes } from './Action';
import { useSelector, useDispatch } from 'react-redux';
import './NotesCrud.css';

const NotesCrud = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const notes = useSelector((state) => state.notes);
  const searchQuery = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      dispatch(addNote({ id: Date.now(), title, content, tag }));
      setTitle('');
      setContent('');
      setTag('');
    }
  };

  const handleDeleteNote = (id) => {
    dispatch(removeNote(id));
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setTag(note.tag);
    setEditing(true);
    setEditId(note.id);
  };

  const handleUpdateNote = () => {
    if (title.trim() && content.trim()) {
      dispatch(updateNote({ id: editId, title, content, tag }));
      setTitle('');
      setContent('');
      setTag('');
      setEditing(false);
      setEditId(null);
    }
  };

  const handleSearch = (event) => {
    dispatch(searchNotes(event.target.value));
  };

  const handleShareNote = (note) => {
    const noteContent = `Title: ${note.title}\nContent: ${note.content}\nTag: ${note.tag || 'No Tag'}`;
    navigator.clipboard.writeText(noteContent)
      .then(() => alert('Note content copied to clipboard!'))
      .catch((error) => console.error('Failed to copy note:', error));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const tagColors = {
    Work: 'blue',
    Personal: 'green',
    Urgent: 'red',
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const highlightText = (text, search) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, 'gi');
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === search.toLowerCase()
        ? <span key={index} className="highlight">{part}</span>
        : part
    );
  };

  return (
    <div className={darkMode ? 'app-container dark' : 'app-container'}>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <h1>Notes Tracking App</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
      />
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="">Select Tag</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
      </select>
      <button onClick={editing ? handleUpdateNote : handleAddNote}>
        {editing ? 'Update Note' : 'Add Note'}
      </button>

      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search Notes"
      />

      {/* Display a message if there are no notes or no matching search results */}
      {filteredNotes.length === 0 && searchQuery !== '' ? (
        <p>No matching notes found.</p>
      ) : (
        <ul>
          {filteredNotes.length === 0 && notes.length === 0 ? (
            <p>No notes available. Please add some notes!</p>
          ) : (
            filteredNotes.map((note) => (
              <li key={note.id}>
                <h3>{highlightText(note.title, searchQuery)}</h3>
                <p>{highlightText(note.content, searchQuery)}</p>
                <span
                  className={note.tag ? note.tag : 'NoTag'}
                  style={{
                    backgroundColor: tagColors[note.tag] || 'gray',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {note.tag || 'No Tag'}
                </span>
                <br />
                <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                <button onClick={() => handleEditNote(note)}>Edit</button>
                <button onClick={() => handleShareNote(note)}>Share</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default NotesCrud;


