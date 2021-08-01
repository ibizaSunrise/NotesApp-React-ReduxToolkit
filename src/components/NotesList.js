import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteNote, toggleSelectedNote } from '../store/notesSlice'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import '../animation.css'


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
                <CSSTransition key={note.id} timeout = {500} classNames = "my-animate">  
                <li
                    key={note.id}
                    className={`list-group-item d-flex justify-content-between my-animate ${note.selected ? "active" : ""}`}
                    onClick={() => selectNoteByClick(note.id)}
                >
                    {note.title}
                    <span type="button"
                        className="btn-close"
                        onClick={e => deleteNoteByClick(e, note.id)}
                    />
                </li>
                </CSSTransition>
            )
            )
            : <p>Notes absence</p>

    }

    return (
        <div className="col-4 mt-4">
            <TransitionGroup component = 'ul' className="list-group">
                    {searchArr.length ? content(searchArr) : content(notes)
                    }   
            </TransitionGroup>
        </div>
    )
}
