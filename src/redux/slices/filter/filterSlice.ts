import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../../store.ts';
import {TFilterSlice, Options, TabsTitles} from './types.ts';

const initialState: TFilterSlice = {
  activeTab: TabsTitles.ALL,
  currentOption: Options.ALPHABET_ASC,
  searchValue: ''
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabsTitles>) => {
      state.activeTab = action.payload;
    },
    setCurrentOption: (state, action: PayloadAction<Options>) => {
      state.currentOption = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  },
})

export const selectFilters = (state: RootState) => state.persistedReducer.filter;

export const { setActiveTab, setCurrentOption, setSearchValue } = filterSlice.actions

export default filterSlice.reducer
