import { useState } from 'react';
import '../App.css';

function Notes({ note, notesData, setNotesData }) {
    const [likes, setLikes] = useState(note.likes);
    const [dislikes, setDislikes] = useState(note.dislikes);
    
    // Update the likes count and save to localStorage
    const handleLike = () => {
        const updatedNotes = notesData.map(n => 
            n.id === note.id ? { ...n, likes: likes + 1 } : n
        );
        setLikes(likes + 1);
        setNotesData(updatedNotes); // Update state
        localStorage.setItem('thoughts', JSON.stringify(updatedNotes)); // Save to localStorage
    };

    // Update the dislikes count and save to localStorage
    const handleDislike = () => {
        const updatedNotes = notesData.map(n => 
            n.id === note.id ? { ...n, dislikes: dislikes + 1 } : n
        );
        setDislikes(dislikes + 1);
        setNotesData(updatedNotes); // Update state
        localStorage.setItem('thoughts', JSON.stringify(updatedNotes)); // Save to localStorage
    };

    return (
        <div className="notes">
            <div className='note-text'>{note.text}</div>
            <div className='note-footer'>
                <div className='date'>{note.datetime}</div>
                <div className="buttons">
                    <button onClick={handleLike}>👍 {likes}</button>
                    <button onClick={handleDislike}>👎 {dislikes}</button>
                </div>
            </div>
        </div>
    );
}

export default function NotesList({ notesData, setNotesData }) {
    return (
        notesData.map(note => (
            <Notes key={note.id} note={note} notesData={notesData} setNotesData={setNotesData} />
        ))
    );
}
