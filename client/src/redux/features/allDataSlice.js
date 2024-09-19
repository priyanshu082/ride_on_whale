import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// Data Slice
const alldataSlice = createSlice({
    name: 'data',
    initialState: { allData: [], pcrData: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAllData.fulfilled, (state, action) => {
          state.loading = false;
          state.allData = action.payload;
        })
        .addCase(fetchAllData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchPcrData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchPcrData.fulfilled, (state, action) => {
          state.loading = false;
          state.pcrData = action.payload;
        })
        .addCase(fetchPcrData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchAllData = createAsyncThunk(
    'data/fetchAll',
    async ({ symbol, expiryDate, noOfStrikes, timeRange, date }) => {
      const response = await api.fetchAllData(symbol, expiryDate, noOfStrikes, timeRange, date);
      return response.data;
    }
  );

  export const fetchPcrData = createAsyncThunk(
    'data/fetchPcr',
    async ({ symbol, expiryDate, noOfStrikes, date }) => {
      const response = await api.fetchPcrData(symbol, expiryDate, noOfStrikes, date);
      return response.data;
    }
  );
  
  export default alldataSlice.reducer
  