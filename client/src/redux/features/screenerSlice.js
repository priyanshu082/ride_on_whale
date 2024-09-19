import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

// Screener Slice
const screenerSlice = createSlice({
    name: 'screener',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchScreenerData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchScreenerData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchScreenerData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchScreenerData = createAsyncThunk(
    'screener/fetch',
    async () => {
      const response = await api.fetchScreenerData();
      return response.data;
    }
  );

  export default screenerSlice.reducer