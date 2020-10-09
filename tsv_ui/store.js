import { configureStore } from '@reduxjs/toolkit'

import notesReducer from './lib/slices/notesSlice'

export default configureStore({
  reducer: {
    notes: notesReducer
  },
  devTools: true,
})
