import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// Banner Slice
const bannerSlice = createSlice({
    name: 'banner',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchBannerData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchBannerData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchBannerData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchBannerData = createAsyncThunk(
    'banner/fetch',
    async () => {
      const response = await api.fetchBannerData();
      return response.data;
    }
  );

  export default bannerSlice.reducer