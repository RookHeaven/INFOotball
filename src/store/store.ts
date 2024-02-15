import {configureStore} from '@reduxjs/toolkit'

import filters from '../slices/filterSlice.ts'
import favorites from '../slices/favoriteSlice.ts'
import clubs from '../slices/clubSlice.ts'

export const store = configureStore({
  reducer: {filters, favorites, clubs},
})

type FuncType = typeof store.getState;

export type RootState = ReturnType<FuncType>

export type AppDispatch = typeof store.dispatch

