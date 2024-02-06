import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clubs: []
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.clubs.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.clubs = state.clubs.filter(club => club.id !== action.payload);
    },
    clearAllFavorite: (state) => {
      state.clubs = [];
    }
  },
})

export const {
  addToFavorite,
  removeFromFavorite,
  clearAllFavorite
} = favoriteSlice.actions

export default favoriteSlice.reducer
