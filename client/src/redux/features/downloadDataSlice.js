import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

 // Data Slice (adding downloadData)
 export const downloadData = createAsyncThunk(
    'data/downloadData',
    async ({ symbol, expiryDate, noOfStrikes, date }) => {
      const response = await api.downloadData(symbol, expiryDate, noOfStrikes, date);
      return response.data;
    }
  );
  
  // Update the dataSlice to include the new downloadData action
  const downloadDataSlice = createSlice({
    name: 'data',
    initialState: { allData: [], pcrData: [], downloadedData: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(downloadData.pending, (state) => {
          state.loading = true;
        })
        .addCase(downloadData.fulfilled, (state, action) => {
          state.loading = false;
          state.downloadedData = action.payload;
        })
        .addCase(downloadData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default downloadDataSlice.reducer