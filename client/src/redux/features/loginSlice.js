import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api'; // assuming all the API functions are in an api.js file

const loginSlice = createSlice({
    name: 'auth',
    initialState: { user: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.pending, (state) => {
          state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });
  
  export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }) => {
      const response = await api.login(email, password);
      return response.data;
    }
  );

  export default loginSlice.reducer