import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../store/store.ts';

import {Club} from '../@types/types.ts';


type FavoriteSliceState = {
  clubs: Club[];
}

const initialState: FavoriteSliceState = {
  clubs: []
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<Club>) => {
      state.clubs.push(action.payload);
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      state.clubs = state.clubs.filter(club => club.id !== action.payload);
    },
    clearAllFavorite: (state) => {
      state.clubs = [];
    }
  },
})

export const selectFavorites = (state: RootState) => state.favorites;

export const {
  addToFavorite,
  removeFromFavorite,
  clearAllFavorite
} = favoriteSlice.actions

export default favoriteSlice.reducer
