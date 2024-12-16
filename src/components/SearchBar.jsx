import './SearchBar.css'

export default function SearchBar({searchText, notesData, setCurrentNotes, onSearchClick, }) {

    function searchNotes(){
        let result = []
        result  = notesData.filter(note => note.text.toLowerCase().includes(searchText.toLowerCase()));
        setCurrentNotes(result);

    }

    return (
        <>
            <input type="text" placeholder="Search" value={searchText} onChange={(e) => onSearchClick(e.target.value)}/>
            <button onClick={searchNotes}>Search</button>
        </>
    )
}                                  