import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, toggleSelectedNote } from '../store/notesSlice'


export default function NotesList() {
    const { notes, searchArr } = useSelector(state => state.notes)
    const dispatch = useDispatch()
    
    //handlers
    function deleteNoteByClick(e, id) {
        e.stopPropagation()
        dispatch(deleteNote(id))
    }

    function selectNoteByClick(id) {
        dispatch(toggleSelectedNote(id))
    }

    //LS
    useEffect(() => {
        localStorage.setItem('notesState', JSON.stringify(notes))
    }, [notes])

    //content
    const content = (arr) => {
        return arr.length
            ?
            arr.map(note => (
                <li
                    key={note.id}
                    className={`list-group-item d-flex justify-content-between ${note.selected ? "active" : ""}`}
                    onClick={() => selectNoteByClick(note.id)}
                >
                    {note.title}
                    <span type="button"
                        className="btn-close"
                        onClick={e => deleteNoteByClick(e, note.id)}
                    />
                </li>
            )
            )
            : <p>Notes absence</p>

    }

    return (
        <div className="col-4 mt-4">
            <ul className="list-group ">
                {searchArr.length ? content(searchArr) : content(notes)   
                }
            </ul>
        </div>
    )
}
