import { createSlice} from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'todos',
  initialState: {
    notes: JSON.parse(localStorage.getItem('notesState')) || [],
    note: {}
  },

  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload)
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter(el => el.id !== action.payload)
      state.note = {}
    },
  
    toggleSelectedNote(state, action){
      let toggledNote = state.notes.find(el => el.id === action.payload)
      toggledNote.selected = !toggledNote.selected
      toggledNote.selected ? state.note = toggledNote : state.note = {}

      state.notes = state.notes.map(el => el.id !== action.payload ? {...el, selected :false} : el)
    
    },
    changeText(state, action){
        state.notes = state.notes.map(el => el.id === state.note.id ? {...el, text: action.payload} : el)
    }


  },
})


export default notesSlice.reducer
export const {
  addNote,
  deleteNote,
  toggleSelectedNote,
  changeText
} = notesSlice.actions;