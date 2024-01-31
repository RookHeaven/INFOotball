import { configureStore } from '@reduxjs/toolkit'
import filters from '../slices/filterSlice.ts'

export const store = configureStore({
  reducer: {filters},
})
