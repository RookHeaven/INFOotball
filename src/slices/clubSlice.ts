import {useHttp} from '../hooks/http.hook.ts';

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '../store/store.ts';

import {Club} from '../@types/types.ts';

import {_apiBase, _apiKey} from '../constants/apiConstants.ts';
import {_transformClubs} from '../utils/formatUtils.ts';

export enum Status {
  LOADING = 'loading',
  IDLE = 'idle',
  ERROR = 'error'
}

type ClubSliceState = {
  clubs: Club[];
  filtersLoadingStatus: Status;
}

const initialState: ClubSliceState = {
  clubs: [],
  filtersLoadingStatus: Status.IDLE
}

export const fetchClubs = createAsyncThunk<Club[]>(
  'clubs/fetchClubs',
  async () => {
    const {request} = useHttp();
    const res =  await request(`${_apiBase}${_apiKey}`);
    return res.map(_transformClubs);
  }
);

export const clubSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
  },
  extraReducers: (builder)  => {
    builder
      .addCase(fetchClubs.pending, state => {
        state.clubs = [];
        state.filtersLoadingStatus = Status.LOADING;
      })
      .addCase(fetchClubs.fulfilled, (state, action: PayloadAction<Club[]>) => {
        state.clubs = action.payload;
        state.filtersLoadingStatus = Status.IDLE;
      })
      .addCase(fetchClubs.rejected, state => {
        state.clubs = [];
        state.filtersLoadingStatus = Status.ERROR;
      })

  }
})

export const selectClubs = (state: RootState) => state.persistedReducer.club;

export default clubSlice.reducer
