import { useState } from 'react';
import '../App.css';

function Notes({ note }) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);


    return (
        <div className="notes" >
            <div className='note-text'> {note.text} </div>
            <div className='note-footer'>
                <div className='date'>
                     {note.datetime} 
                </div>
                <div className="buttons">
                    <button onClick={() => setLikes(likes+1)}> 👍  {likes}    </button>
                    <button onClick={() => setDislikes(dislikes+1)}> 👎  {dislikes} </button>
                </div>
            </div>
    </div>
    )
}

export default function NotesList({notesData}) {

    return (
        notesData.map(
            (note) => {
                return(
                <Notes note={note} key={note.id} />
                )
            }
        )
    )



}