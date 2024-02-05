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

    }
  },
})

export const { addToFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
