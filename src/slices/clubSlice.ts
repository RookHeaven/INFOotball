import {useHttp} from "../hooks/http.hook.ts";

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


const initialState = {
  clubs: [],
  filtersLoadingStatus: 'idle'
}

export const fetchClubs = createAsyncThunk(
  'clubs/fetchClubs',
  async () => {
    const _apiBase = 'https://api.npoint.io/';
    const _apiKey = 'a11d5364beb387fc9602';

    const _transformClubs = (clubs) => {
      return {
        id: clubs.idTeam,
        title: clubs.strTeam,
        formedYear: clubs.intFormedYear,
        league: clubs.strLeague,
        stadium: clubs.strStadium,
        stadiumCapacity: clubs.intStadiumCapacity,
        website: clubs.strWebsite,
        description: clubs.strDescriptionEN || 'There is no description',
        country: clubs.strCountry,
        imgSrc: `/images/clubs/${clubs.strTeamBadge}`,
      }
    }

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
        state.filtersLoadingStatus = 'loading';
      })
      .addCase(fetchClubs.fulfilled, (state, action) => {
        state.clubs = action.payload;
        state.filtersLoadingStatus = 'idle';
      })
      .addCase(fetchClubs.rejected, state => {
        state.clubs = [];
        state.filtersLoadingStatus = 'error';
      })

  }
})

export const selectClubs = state => state.clubs;

export default clubSlice.reducer
