import { createSlice, current } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'todos',
  initialState: {
    notes: JSON.parse(localStorage.getItem('notesState')) || [],
  },
 
  reducers: {
    addNote: (state, action) => {
      console.log('before', current(state))
      state.notes.push(action.payload)
      console.log('after', current(state))
    },
   deleteNote(state, action){
     state.notes = state.notes.filter(el => el.id !== action.payload) 
   }
  
  },
})


export default notesSlice.reducer
export const {
  addNote,
  deleteNote
} = notesSlice.actions;