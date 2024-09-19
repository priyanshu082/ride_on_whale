import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file



// BuySell Slice
const buySellSlice = createSlice({
    name: 'buySell',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBuySellData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBuySellData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchBuySellData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchBuySellData = createAsyncThunk(
    'buySell/fetch',
    async ({ symbol, expiryDate, strikePrice, timeInterval, date }) => {
      const response = await api.fetchBuySellData(symbol, expiryDate, strikePrice, timeInterval, date);
      return response.data;
    }
  );

  export default buySellSlice.reducer