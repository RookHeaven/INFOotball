import { configureStore } from '@reduxjs/toolkit'
import filters from '../slices/filterSlice.ts'
import favorites from '../slices/favoriteSlice.ts'

export const store = configureStore({
  reducer: {filters, favorites},
})
