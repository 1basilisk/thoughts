export default function NewNote({ newNote, setNewNote, notesData, setNotesData, setCurrentNotes }) {
    function onSave() {
        function formatDate(date) {
            // Extract the day, month, year, hours, and minutes from the Date object
            const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');

            // Format and return the string
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }

        const d = new Date();
        const newData = {
            id: notesData.length + 1,
            datetime: formatDate(d),
            text: newNote,
            likes: 0,
            dislikes: 0,
        }
        const updatedNotes = [newData, ...notesData]
        setNotesData(updatedNotes);
        setCurrentNotes(updatedNotes)
        localStorage.setItem('thoughts', JSON.stringify(updatedNotes));
        setNewNote('');
        
    }
    return (
        <>
            <div className="box">
                <h2 className="info"> Got a thought? </h2>
                <textarea className="text-area" rows="10" cols="50" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
                <br />
                <button className="save-button" onClick={onSave}> Save </button>
            </div>

            <h3 className="info"> Most thoughts are worth forgetting, but some are worth sharing... </h3>
        </>

    )
}