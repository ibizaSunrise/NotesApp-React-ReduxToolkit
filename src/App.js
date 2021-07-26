import React from 'react'
import Header from './components/Header'
import TextForm from './components/TextForm';
import NotesList from './components/NotesList';

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">

        <div className="row">
          <NotesList />
          <TextForm />
        </div>
      </div>
    </>
  );
}

export default App;
