import {combineReducers, configureStore} from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

import filters from './slices/filter/filterSlice.ts';
import favorites from './slices/favorite/favoriteSlice.ts';
import clubs from './slices/club/clubSlice.ts';

const rootReducer = combineReducers({
  filter: filters,
  favorite: favorites,
  club: clubs
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['club']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {persistedReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
})

export const persistor = persistStore(store);

type FuncType = typeof store.getState;

export type RootState = ReturnType<FuncType>

export type AppDispatch = typeof store.dispatch

