import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// ExpiryDates Slice
const expiryDatesSlice = createSlice({
    name: 'expiryDates',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchExpiryDates.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchExpiryDates.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchExpiryDates.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchExpiryDates = createAsyncThunk(
    'expiryDates/fetch',
    async ({ symbol, date }) => {
      const response = await api.fetchExpiryDates(symbol, date);
      return response.data;
    }
  );

  export default expiryDatesSlice.reducer