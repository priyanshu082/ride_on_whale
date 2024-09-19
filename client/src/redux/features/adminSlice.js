import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file


const adminSlice = createSlice({
    name: 'admin',
    initialState: { users: [], subscribers: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(fetchSubscribers.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchSubscribers.fulfilled, (state, action) => {
          state.loading = false;
          state.subscribers = action.payload;
        })
        .addCase(fetchSubscribers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const fetchUserData = createAsyncThunk(
    'admin/fetchUsers',
    async () => {
      const response = await api.fetchUserData();
      return response.data;
    }
  );
  
  export const fetchSubscribers = createAsyncThunk(
    'admin/fetchSubscribers',
    async () => {
      const response = await api.fetchSubscribers();
      return response.data;
    }
  );

  export default adminSlice.reducer