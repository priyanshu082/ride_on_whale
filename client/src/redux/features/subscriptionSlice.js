import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


 // Subscription Slice (adding subscribe function)
 export const subscribe = createAsyncThunk(
    'subscription/subscribe',
    async ({ email, tenure }) => {
      const response = await api.subscribe(email, tenure);
      return response.data;
    }
  );
  
  // Update the subscriptionSlice to include the new subscribe action
  const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: { isSubscribed: false, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // ... (previous cases remain the same)
        .addCase(subscribe.pending, (state) => {
          state.loading = true;
        })
        .addCase(subscribe.fulfilled, (state) => {
          state.loading = false;
          state.isSubscribed = true;
        })
        .addCase(subscribe.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default subscriptionSlice.reducer