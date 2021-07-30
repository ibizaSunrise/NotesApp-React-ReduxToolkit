import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../store/notesSlice'

export default function TextForm() {
  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const {notes} = useSelector(state => state.notes)

  //helper functions
  function createTitle() {
    let date = new Date()
    return `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()}  ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
  }

  function addZero(n) {
    if (n > 0 && n < 10) return ('0' + n)
    else return n;
  }


  //handler
  function handleClick() {
    // !checked ? 
    dispatch(addNote({
      id: Date.now().toString(),
      title: createTitle(),
      text: value
    }))
    setValue('')
  }

  //LS
  useEffect(() => {
    localStorage.setItem('notesState', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="col-6">

      {/* textarea */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Create Note</label>
        <textarea className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      {/* switch */}
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
          checked={checked} onChange={() => setChecked(!checked)}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{checked ? 'Edit mode' : "Create mode"}</label>
      </div>


      {/* button */}
      <button type="button" onClick={handleClick} className="btn btn-success mt-3">Add Note</button>

    </div>
  )
}
