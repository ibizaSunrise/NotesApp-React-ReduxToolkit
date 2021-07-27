import { createSlice, current } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('notesState')) || [],
  reducers: {
    addNote: (state, action) => {
      console.log('before', current(state))
      state.push(action.payload)
      console.log('after', current(state))
    },
    getNoteByIde(state, action){
      
    },
  
  },
})


export default notesSlice.reducer
export const {
  addNote,
} = notesSlice.actions;