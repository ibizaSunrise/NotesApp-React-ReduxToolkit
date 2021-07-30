import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, toggleSelectedNote } from '../store/notesSlice'


export default function NotesList() {
    const { notes} = useSelector(state => state.notes)
    const dispatch = useDispatch()

    //handlers
    function deleteNoteByClick(e, id) {
        e.stopPropagation()
        console.log('click' + id)
        dispatch(deleteNote(id))
    }

    function selectNoteByClick(id) {
       
        dispatch(toggleSelectedNote(id))
    }

    //LS
    useEffect(() => {
        localStorage.setItem('notesState', JSON.stringify(notes))
    }, [notes])

    return (
        <div className="col-4 mt-4">
            <ul className="list-group ">
                {
                    notes.length !== 0
                        ?
                        notes.map(note => (
                            <li
                                key={note.id}
                                className={note.selected ? "list-group-item d-flex justify-content-between active" : "list-group-item d-flex justify-content-between"}
                                onClick = {() =>selectNoteByClick(note.id)}
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

            </ul>
        </div>
    )
}
