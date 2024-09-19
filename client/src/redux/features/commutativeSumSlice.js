import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// OI Slice
const commutativeSumSlice = createSlice({
    name: 'oi',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCommutativeSum.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchCommutativeSum.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchCommutativeSum.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchCommutativeSum = createAsyncThunk(
    'oi/fetchCommutativeSum',
    async ({ symbol, expiryDate, noOfStrikes, timeInterval, date }) => {
      const response = await api.fetchCommutativeSum(symbol, expiryDate, noOfStrikes, timeInterval, date);
      return response.data;
    }
  );

  export default commutativeSumSlice.reducer