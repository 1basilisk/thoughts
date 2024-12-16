
export default function SearchBar({searchText, notesData, setCurrentNotes, onSearchClick, }) {

    function searchNotes(text){
        onSearchClick(text)
        let result = []
        result  = notesData.filter(note => note.text.toLowerCase().includes(text.toLowerCase()));
        setCurrentNotes(result);
    }
    
    return (
        <>
            <input type="text" className='search-bar' placeholder="Search" value={searchText} onChange={(e) => searchNotes(e.target.value)}/>
            
        </>
    )
}                                  