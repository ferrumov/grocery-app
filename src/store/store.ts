import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { groceriesApi } from './api/groceries';

export const store = configureStore({
  reducer: {
    [groceriesApi.reducerPath]: groceriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(groceriesApi.middleware),
});

setupListeners(store.dispatch);
