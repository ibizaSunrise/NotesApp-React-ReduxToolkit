import React, {useState} from 'react'

export default function TextForm() {
  const [checked, setChecked] = useState(true)


    return (
        <div className="col-6">
            
            {/* textarea */}
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Create Note</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            {/* switch */}
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
              checked = {checked} onChange = {() => setChecked(!checked)}
               />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{checked ? 'Edit mode' : "Create mode"}</label>
            </div>

          
            {/* button */}
            <button type="button" className="btn btn-success mt-3">Add Note</button>

          </div>
    )
}
