export default function NewNote({newNote, setNewNote, notesData,setNotesData, setCurrentNotes}){
    function onSave(){
        const newData = {
            id: notesData.length + 1,
            datetime: new Date(),
            text: newNote,
            heart: false,
            tags: null
        }
        const updatedNotes=[...notesData, newData]
        setNotesData(updatedNotes); 
        setCurrentNotes(updatedNotes)
        setNewNote('');

    }

    return (
        <>
        <h2> New Note</h2>
        <textarea rows="10" cols="50" value={newNote} onChange={(e) => setNewNote(e.target.value) } />
        <br/>
        <button onClick={onSave}> Save </button>
        </>

    )
}