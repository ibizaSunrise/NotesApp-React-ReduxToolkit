import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function NotesList() {
    const notes = useSelector(state => state.notes)
    return (
        <div className="col-4 mt-4">
            <ul className="list-group ">
                {
                    notes.map(note => (
                        <li 
                        key = {note.id}className="list-group-item d-flex justify-content-between">{note.title}<span type="button" className="btn-close"/></li>
                    )

                    )
                }

            </ul>
        </div>
    )
}
