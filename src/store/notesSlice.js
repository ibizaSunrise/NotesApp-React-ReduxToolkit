import { createSlice, current } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'todos',
  initialState: {
    notes: JSON.parse(localStorage.getItem('notesState')) || [],
    note: {}
  },

  reducers: {
    addNote: (state, action) => {
      console.log('before', current(state))
      state.notes.push(action.payload)
      console.log('after', current(state))
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter(el => el.id !== action.payload)
    },
  
    toggleSelectedNote(state, action){
      let toggledNote = state.notes.find(el => el.id === action.payload)
      toggledNote.selected = !toggledNote.selected
      toggledNote.selected ? state.note = toggledNote : state.note = {}
    }


  },
})


export default notesSlice.reducer
export const {
  addNote,
  deleteNote,
  toggleSelectedNote
} = notesSlice.actions;