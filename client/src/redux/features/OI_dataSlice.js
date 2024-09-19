import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// OI Slice (adding fetchAllExpiryDate and fetchOIData)
export const fetchAllExpiryDate = createAsyncThunk(
    'oi/fetchAllExpiryDate',
    async (symbol) => {
      const response = await api.fetchAllExpiryDate(symbol);
      return response.data;
    }
  );
  
  export const fetchOIData = createAsyncThunk(
    'oi/fetchOIData',
    async ({ symbol, noOfStrikes, timeInterval, expiryDate }) => {
      const response = await api.fetchOIData(symbol, noOfStrikes, timeInterval, expiryDate);
      return response.data;
    }
  );
  
  // Update the oiSlice to include the new actions
  const OI_dataSlice = createSlice({
    name: 'oi',
    initialState: { 
      data: [], 
      allExpiryDates: [], 
      oiData: [],
      loading: false, 
      error: null 
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(fetchAllExpiryDate.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchAllExpiryDate.fulfilled, (state, action) => {
          state.loading = false;
          state.allExpiryDates = action.payload;
        })
        .addCase(fetchAllExpiryDate.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchOIData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchOIData.fulfilled, (state, action) => {
          state.loading = false;
          state.oiData = action.payload;
        })
        .addCase(fetchOIData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default OI_dataSlice.reducer