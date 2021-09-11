import { configureStore } from '@reduxjs/toolkit'
import storeReducer from 'redux/slice'

export const store = configureStore({
  reducer: {
    store: storeReducer
  },
})