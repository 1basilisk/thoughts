import '../App.css';

function Notes({ note }) {
    return (
        <div className="notes" >
            <div                > {note} </div>
            <div className="buttons">
                <button> ❤️ </button>
                <button> ❌ </button>
                <button> ✒️</button>
            </div>
    </div>
    )
}

export default function NotesList({notesData}) {

    return (
        notesData.map(
            (note) => {
                return(
                <Notes note={note.text} key={note.id} />
                )
            }
        )
    )



}