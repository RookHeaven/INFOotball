import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeTab: 'All clubs',
  currentOption: 'alphabeticalAsc',
  searchValue: ''
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
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    }
  },
})

export const selectFilters = state => state.filters;

export const { setActiveTab, setCurrentOption, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
