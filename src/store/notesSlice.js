import { createSlice, current } from '@reduxjs/toolkit'

const notesSlice = createSlice({
  name: 'todos',
  initialState: [{ id: 1, title: 'Example todo' }],
  reducers: {
    addTodo: (state, action) => {
      console.log('before', current(state))
      state.push(action.payload)
      console.log('after', current(state))
    },
  },
})


export default notesSlice.reducer