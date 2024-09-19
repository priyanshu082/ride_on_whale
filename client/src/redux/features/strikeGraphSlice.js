import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

// StrikeGraph Slice
const strikeGraphSlice = createSlice({
    name: 'strikeGraph',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchStrikeGraphData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchStrikeGraphData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchStrikeGraphData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchStrikeGraphData = createAsyncThunk(
    'strikeGraph/fetch',
    async ({ symbol, expiryDate, strikePrice, timeInterval, noOfStrikes, date }) => {
      const response = await api.fetchStrikeGraphData(symbol, expiryDate, strikePrice, timeInterval, noOfStrikes, date);
      return response.data;
    }
  );

  export default strikeGraphSlice.reducer