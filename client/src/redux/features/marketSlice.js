import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

// Market Slice
const marketSlice = createSlice({
  name: 'market',
  initialState: { isOpen: false, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkMarketOpen.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkMarketOpen.fulfilled, (state, action) => {
        state.loading = false;
        state.isOpen = action.payload;
      })
      .addCase(checkMarketOpen.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const checkMarketOpen = createAsyncThunk(
  'market/checkOpen',
  async () => {
    const response = await api.isMarketOpen();
    return response.data;
  }
);


export default marketSlice.reducer