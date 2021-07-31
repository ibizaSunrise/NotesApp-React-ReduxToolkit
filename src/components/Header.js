import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { filterNotesList } from '../store/notesSlice'

export default function Header() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
   


    function handlerClick(e) {
        e.preventDefault()
        dispatch(filterNotesList(value))
    }


    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                My Notes App
                <form className="d-flex">
                    <input className="form-control me-2" type="date"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success"
                        onClick={handlerClick} type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
