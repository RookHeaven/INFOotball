import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../../store.ts';

import {IClub} from '../../../@types/types.ts';
import {TFavoriteSlice} from './types.ts';

const initialState: TFavoriteSlice = {
  clubs: []
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IClub>) => {
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

export const selectFavorites = (state: RootState) => state.persistedReducer.favorite;

export const {
  addToFavorite,
  removeFromFavorite,
  clearAllFavorite
} = favoriteSlice.actions

export default favoriteSlice.reducer
