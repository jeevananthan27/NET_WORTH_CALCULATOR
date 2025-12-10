import React, { useState } from 'react';

const NotePad = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [title, setTitle] = useState('');

  const addNote = () => {
    if (title.trim() && newNote.trim()) {
      setNotes([...notes, {
        id: Date.now(),
        title,
        content: newNote,
        date: new Date().toLocaleDateString(),
      }]);
      setTitle('');
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Daily Notes & Tasks</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Note</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Note Title"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write your note here..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            onClick={addNote}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700"
          >
            Save Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <div key={note.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-gray-800">{note.title}</h3>
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600 mb-2">{note.content}</p>
            <div className="text-sm text-gray-400">{note.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotePad;