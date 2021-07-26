import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                My Notes App
                <form className="d-flex">
                    <input className="form-control me-2" type="date" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
