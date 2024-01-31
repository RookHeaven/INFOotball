import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'All clubs',
  currentOption: 'alphabeticalAsc'
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setCurrentOption: (state, action) => {
      state.currentOption = action.payload;
    },
  },
})

export const { setActiveTab, setCurrentOption } = filterSlice.actions

export default filterSlice.reducer
