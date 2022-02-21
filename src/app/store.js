import { configureStore } from '@reduxjs/toolkit';
import breakingBadReducer from '../features/breakingBad/breakingBadSlice';

export const store = configureStore({
  reducer: {
    breakingBad: breakingBadReducer,
  },
});
