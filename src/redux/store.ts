import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { postsApi } from '../api/posts/postsApi';
import { postsPersistConfig } from './persist';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: persistReducer(
      postsPersistConfig,
      postsApi.reducer,
    ),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
