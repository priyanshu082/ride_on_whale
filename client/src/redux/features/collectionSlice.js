import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


// Collection Slice
const collectionSlice = createSlice({
    name: 'collection',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchCollection.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchCollection = createAsyncThunk(
    'collection/fetch',
    async () => {
      const response = await api.fetchCollection();
      return response.data;
    }
  );

  export default collectionSlice.reducer