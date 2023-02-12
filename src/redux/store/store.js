import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../slices/usersSlice';
import tokenSlice from '../slices/tokenSlice';
import positionsSlice from '../slices/positionsSlice';

const store = configureStore({
  reducer: {
    usersSlice: usersSlice.reducer,
    tokenSlice: tokenSlice.reducer,
    positionsSlice: positionsSlice.reducer,
  },
});

export default store;
