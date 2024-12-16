import '../App.css';

function Notes({ note }) {
    return (
        <div className="notes" >
            <div className='note-text'> {note.text} </div>
            <div className='note-footer'>
                <div className='date'>
                     {note.datetime} 
                </div>
                <div className="buttons">
                    <button> 👍  {note.likes}    </button>
                    <button> 👎  {note.dislikes} </button>
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