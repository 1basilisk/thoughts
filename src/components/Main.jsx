import SearchBar from './SearchBar';
import NewNote from './newNote';
import NotesList from './Notes';
import { useState } from 'react';

import '../App.css';
import './SearchBar.css'

export default function Main(){

    const [searchText, setSearchText] = useState("");
    const [note, setNote] = useState();
    const [notesData, setNotesData] = useState([
    {
        id: 1,
        datetime: "15/12/2024",
        text: "This is the first test note",
        heart: false,
        tags: null

    },
    {
        id: 2,
        datetime: "15/12/2024",
        text: "Hi, its always sunny in philly",
        heart: false,
        tags: null

    },
    {
        id: 3,
        datetime: "15/12/2024",
        text: "Earth is almost a sphere",
        heart: false,
        tags: null
        
    }
]);
const [currentNotes, setCurrentNotes] = useState(notesData)

    return (
        <div>
        <div className="searchbar">
        <SearchBar notesData={notesData} setCurrentNotes={setCurrentNotes} searchText={searchText} onSearchClick={setSearchText}
        />
      </div>
      <div className="notes-container">
        <div className="new-notes-container">
          <NewNote newNote={note} setNewNote= {setNote} setCurrentNotes={setCurrentNotes} notesData={notesData} setNotesData={setNotesData}/>
        </div>
        <div className="old-notes-container">
          <div className="notes-container-grid">
            <NotesList  notesData={currentNotes}/>
          </div>
        </div>
      </div>
      </div>
    )
}