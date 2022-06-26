import {configureStore} from '@reduxjs/toolkit';
import calcuSlice from './calcuSlice';
import balanceSlice from './balanceSlice';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    expCalcu: calcuSlice,
    balanceCalcu: balanceSlice,
    authFlow: authSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
