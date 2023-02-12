import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tokenLoading: false,
  token: '',
};

export const fetchToken = createAsyncThunk('tokenSlice/fetchToken', () => {
  return axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then((response) => response.data.token);
});

const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchToken.pending, (state) => {
      state.tokenLoading = true;
    });

    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.tokenLoading = false;
      state.token = action.payload;
    });

    builder.addCase(fetchToken.rejected, (state) => {
      state.tokenLoading = false;
      state.token = '';
    });
  },
  reducers: {},
});

export default tokenSlice;
