import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NewNote from './newNote';
import NotesList from './Notes';
import '../App.css';

export default function Main() {
  // States
  const [searchText, setSearchText] = useState("");
  const [note, setNote] = useState(null);
  const [notesData, setNotesData] = useState([]);  // Initial empty array
  const [currentNotes, setCurrentNotes] = useState([]);

  // Load thoughts from localStorage when the component mounts
  useEffect(() => {
    const storedThoughts = localStorage.getItem('thoughts');
    if (storedThoughts) {
      setNotesData(JSON.parse(storedThoughts));  // Parse the data and set it to state
    }
  }, []);  // Empty dependency array ensures this runs only once on mount

  // Whenever notesData changes, update currentNotes
  useEffect(() => {
    setCurrentNotes(notesData);
  }, [notesData]);  // This will run when notesData is updated

  return (
    <div>
      <div>
        <SearchBar
          notesData={notesData}
          setCurrentNotes={setCurrentNotes}
          searchText={searchText}
          onSearchClick={setSearchText}
        />
      </div>
      <div className="notes-container">
        <div className="new-notes-container">
          <NewNote
            newNote={note}
            setNewNote={setNote}
            setCurrentNotes={setCurrentNotes}
            notesData={notesData}
            setNotesData={setNotesData}
          />
        </div>
        <div className="old-notes-container">
          <div className="notes-container-grid">
            <NotesList notesData={currentNotes} setNotesData={setNotesData} />
          </div>
        </div>
      </div>
    </div>
  );
}
