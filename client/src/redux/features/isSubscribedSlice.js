import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// Subscription Slice
const isSubscribedSlice = createSlice({
    name: 'subscription',
    initialState: { isSubscribed: false, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(checkSubscription.pending, (state) => {
          state.loading = true;
        })
        .addCase(checkSubscription.fulfilled, (state, action) => {
          state.loading = false;
          state.isSubscribed = action.payload;
        })
        .addCase(checkSubscription.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const checkSubscription = createAsyncThunk(
    'subscription/check',
    async (email) => {
      const response = await api.isSubscribed(email);
      return response.data;
    }
  );

  export default isSubscribedSlice.reducer