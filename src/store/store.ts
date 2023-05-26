import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import KittyboardSlice from './slices/cats-slice';

export const store = configureStore({
  reducer: {
    breeds: KittyboardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;
