import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  positionsList: {},
  positionsLoading: false,
};

export const fetchPositions = createAsyncThunk('positionsSlice/fetchPositions', () => {
  return axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then((response) => response.data);
});

const positionsSlice = createSlice({
  name: 'positionsSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPositions.pending, (state) => {
      state.positionsLoading = true;
    });

    builder.addCase(fetchPositions.fulfilled, (state, action) => {
      state.positionsLoading = false;
      state.positionsList = action.payload;
    });

    builder.addCase(fetchPositions.rejected, (state) => {
      state.positionsLoading = false;
      state.positionsList = {};
    });
  },
  reducers: {},
});

export default positionsSlice;
