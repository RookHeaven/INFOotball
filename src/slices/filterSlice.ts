import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../store/store.ts';

export enum TabsTitles {
  ALL = 'All clubs',
  RUSSIA = 'Russia',
  ENGLAND = 'England',
  FRANCE = 'France',
  GERMANY = 'Germany',
  ITALY = 'Italy',
  SPAIN = 'Spain'
}

export enum Options {
  ALPHABET_ASC = 'alphabeticalAsc',
  ALPHABET_DESC = 'alphabeticalDesc',
  YEAR_ASC = 'yearAsc',
  YEAR_DESC = 'yearDesc',
  CAPACITY_ASC = 'capacityAsc',
  CAPACITY_DESC = 'capacityDesc',
}

type FilterSliceState = {
  activeTab: TabsTitles,
  currentOption: Options,
  searchValue: string
}

const initialState: FilterSliceState = {
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
