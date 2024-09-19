import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


const strikePriceSlice = createSlice({
    name: 'strikePrice',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchStrikepriceData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchStrikepriceData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchStrikepriceData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchStrikepriceData = createAsyncThunk(
    'strikePrice/fetch',
    async ({ symbol, expiryDate, noOfStrikes, date }) => {
      const response = await api.fetchStrikepriceData(symbol, expiryDate, noOfStrikes, date);
      return response.data;
    }
  );

  export default strikePriceSlice.reducer