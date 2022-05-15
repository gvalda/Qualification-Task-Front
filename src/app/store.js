import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './services/posts';

export const createStore = (options) =>
  configureStore({
    reducer: {
      [postApi.reducerPath]: postApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware),
    ...options,
  });

export const store = createStore();

export const useAppDispatch = createStore.dispatch;
